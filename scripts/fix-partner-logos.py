from PIL import Image
import urllib.request
import os
from collections import deque

out = r'e:\GCLT\public\images\partners'
ua = {'User-Agent': 'Mozilla/5.0'}


def download(url, path):
    req = urllib.request.Request(url, headers=ua)
    with urllib.request.urlopen(req, timeout=30) as r, open(path, 'wb') as f:
        f.write(r.read())
    im = Image.open(path).convert('RGBA')
    print(f'DL {os.path.basename(path)} {im.size}')
    return im


def clear_near_black(im, thr=30):
    px = im.load()
    w, h = im.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if r <= thr and g <= thr and b <= thr:
                px[x, y] = (0, 0, 0, 0)
    return im


def white_to_navy(im, lum_thr=210):
    px = im.load()
    w, h = im.size
    navy = (26, 62, 140, 255)
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if a == 0:
                continue
            lum = 0.299 * r + 0.587 * g + 0.114 * b
            if lum >= lum_thr and abs(r - g) < 25 and abs(g - b) < 25:
                px[x, y] = navy
    return im


def crop_circle_keep_interior(im):
    im = im.convert('RGBA')
    w, h = im.size
    cx, cy = w / 2, h / 2
    rad = min(cx, cy) - 1
    px = im.load()
    for y in range(h):
        for x in range(w):
            if (x - cx) ** 2 + (y - cy) ** 2 > rad * rad:
                px[x, y] = (0, 0, 0, 0)
    return im


def flood_clear_black(im, thr=25):
    im = im.convert('RGBA')
    w, h = im.size
    px = im.load()
    visited = [[False] * w for _ in range(h)]
    q = deque()

    def dark(x, y):
        r, g, b, a = px[x, y]
        return a > 0 and r <= thr and g <= thr and b <= thr

    def push(x, y):
        if 0 <= x < w and 0 <= y < h and not visited[y][x] and dark(x, y):
            visited[y][x] = True
            q.append((x, y))

    for x in range(w):
        push(x, 0)
        push(x, h - 1)
    for y in range(h):
        push(0, y)
        push(w - 1, y)
    while q:
        x, y = q.popleft()
        px[x, y] = (0, 0, 0, 0)
        push(x + 1, y)
        push(x - 1, y)
        push(x, y + 1)
        push(x, y - 1)
    return im


# GCWUS crest only
gcwus = download(
    'https://gcwus.edu.pk/wp-content/themes/gcwus/images/logo.png',
    os.path.join(out, '_gcwus.png'),
)
side = gcwus.height
crest = gcwus.crop((0, 0, side, side))
crest = clear_near_black(crest, 40)
crest = crop_circle_keep_interior(crest)
crest.save(os.path.join(out, 'gcwus.png'))
print('GCWUS', crest.size, crest.getpixel((side // 2, side // 2)))

# CII circular
cii = download(
    'https://cii.gov.pk/wp-content/uploads/2026/06/CII-logo.png',
    os.path.join(out, '_cii.png'),
)
print('CII raw mid', cii.getpixel((cii.width // 2, cii.height // 2)))
px = cii.load()
w, h = cii.size
fixed = 0
for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        if a == 0 and (r or g or b):
            px[x, y] = (r, g, b, 255)
            fixed += 1
print('fixed alpha', fixed)
cii = crop_circle_keep_interior(cii)
cii.save(os.path.join(out, 'cii.png'))
print('CII mid', cii.getpixel((cii.width // 2, cii.height // 2)))

# UM
um = download('https://www.um.edu.my/images/img-logo.png', os.path.join(out, '_um.png'))
um = clear_near_black(um, 28)
um = white_to_navy(um)
um.save(os.path.join(out, 'um.png'))
print('UM done')

# IIUM
iium = download(
    'https://www.iium.edu.my/v2/wp-content/uploads/2024/02/Official_Logo_IIUM_Tawhidic_Kanan_FullCMYK.png',
    os.path.join(out, '_iium.png'),
)
iium = flood_clear_black(iium, 22)
iium = white_to_navy(iium, 230)
iium.save(os.path.join(out, 'iium-malaysia.png'))
print('IIUM mid', iium.getpixel((iium.width // 2, iium.height // 2)))

for f in ['_gcwus.png', '_cii.png', '_um.png', '_iium.png']:
    p = os.path.join(out, f)
    if os.path.exists(p):
        os.remove(p)
print('done')
