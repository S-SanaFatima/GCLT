import { copyFileSync, existsSync, mkdirSync, readdirSync, rmSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const outDir = join(root, 'out');
const distDir = join(root, 'hostinger-deploy');

if (!existsSync(outDir)) {
  console.error('Error: out/ folder not found. Run npm run build:hostinger first.');
  process.exit(1);
}

function copyRecursive(src, dest) {
  mkdirSync(dest, { recursive: true });
  for (const entry of readdirSync(src)) {
    const srcPath = join(src, entry);
    const destPath = join(dest, entry);
    if (statSync(srcPath).isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

if (existsSync(distDir)) {
  rmSync(distDir, { recursive: true, force: true });
}

copyRecursive(outDir, distDir);
copyFileSync(join(root, 'hostinger', '.htaccess'), join(distDir, '.htaccess'));

console.log('');
console.log('Hostinger deploy package ready:');
console.log(`  ${distDir}/`);
console.log('');
console.log('Upload ALL files inside hostinger-deploy/ to public_html in hPanel File Manager.');
console.log('');
