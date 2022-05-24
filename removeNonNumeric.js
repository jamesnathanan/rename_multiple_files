const { readdirSync, rename } = require('fs');
const { resolve } = require('path');

// Get path to image directory
const imageDirPath = resolve(__dirname, 'images');

// Get an array of the files inside the folder
const files = readdirSync(imageDirPath);

// Loop through each file that was retrieved
files.forEach(file => {
  let onlyNumber = file.replace(/[^\d.]/g, '')
  //console.log(onlyNumber) /// '123.'
  rename(
  imageDirPath + `/${file}`,
  imageDirPath + `/${onlyNumber}jpg`,
  err => console.log(err)
  )
});

