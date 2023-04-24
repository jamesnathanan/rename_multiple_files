const { readdirSync, rename } = require('fs');
const { resolve, parse } = require('path');

const numChar = 12; //strip first 12 characters from the target string


const pathName = "/target"; // target folder

// Get path to image directory
const imageDirPath = resolve(__dirname, pathName);

// Get an array of the files inside the folder
const files = readdirSync(imageDirPath);

// Loop through each file that was retrieved
files.forEach(file => {
  let newFilename = file.slice(numChar);
  const { ext } = parse(file);
  console.log(newFilename)
  console.log(newFilename.slice(-4))
  newFilename = newFilename.slice(0, -4)
  console.log(newFilename)
  console.log(ext)
  // newFilename += ext;
  newFilename = newFilename.replaceAll('_', ' '); // Replace all dashes with spaces
  newFilename = newFilename.replaceAll('-', ' ').trim() + ext; // Replace all dashes with spaces

  rename(
    resolve(imageDirPath, file),
    resolve(imageDirPath, newFilename),
    err => console.log(err)
  );
});
