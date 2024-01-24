const fs = require('fs');
const path = require('path');
const { mkdir } = require('node:fs/promises');
const copyFile = fs.promises.copyFile;

async function createCopyFolder() {
  const copyFolder = path.join(__dirname, 'files-copy');
  await fs.promises.rm(path.join(__dirname, 'files-copy'), { recursive: true, force: true });
  const copyFolderCreation = await mkdir(copyFolder, { recursive: true });
  

  let folderItem = await fs.promises.readdir(path.join(__dirname, 'files'));
  folderItem.forEach(async (file) => {
    const filePath = path.join(__dirname, 'files', file);
    await copyFile(filePath, path.join(__dirname, 'files-copy', file));
    console.log(file);
  });
  return copyFolderCreation;
}

createCopyFolder();
