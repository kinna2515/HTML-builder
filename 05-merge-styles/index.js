const fs = require('node:fs/promises');
const path = require('path');

async function main() {
  const stylesDir = path.join(__dirname, 'styles');
  const bundleFile = await fs.open(
    path.join(__dirname, '/project-dist/bundle.css'),
    'w+',
  );

  const cssFiles = await fs.readdir(stylesDir);
  cssFiles.forEach(async (file) => {
    const ext = path.extname(file);
    if (ext === '.css') {
      const bufer = await fs.readFile(path.join(__dirname, 'styles', file));
      await fs.writeFile(bundleFile, bufer);
      await fs.writeFile(bundleFile, '\r\n');

      console.log(file)
    }
  });


}
main();
