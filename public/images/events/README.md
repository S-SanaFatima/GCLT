# Event images

Upload photos for each event using these paths (relative to `public/`):

```
images/events/{event-slug}/cover.jpg
images/events/{event-slug}/gallery-1.jpg
images/events/{event-slug}/gallery-2.jpg
...
```

After uploading, set `coverImage` and `galleryImages` in `lib/data/events.ts` for that event,
or the site will show placeholders until images are added.

Example:
- `public/images/events/gshsl-2024/cover.jpg`
- `public/images/events/gshsl-2024/gallery-1.jpg`
