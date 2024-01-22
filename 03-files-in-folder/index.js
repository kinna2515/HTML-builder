const fs = require('node:fs/promises');
const path = require('path');

commonDir(path.join(__dirname, '/secret-folder/'));

async function commonDir(dirPath) {
  let listFiles = await fs.readdir(dirPath);
  listFiles.forEach(async (file) => {
    const fileName = path.basename(file);
    const fileExt = path.extname(file);
    var stats = await fs.stat(dirPath + fileName);
    if (stats.isFile()) {
      console.log(
        `${fileName.replace(fileExt, '')} - ${fileExt.replace('.', '')} - ${
          Number(stats.size / 1024).toFixed(2) + ' kB'
        }`,
      );
    }
  });
}
