"use strict";

const fs = require("fs");

// let file1Raw = fs.readFileSync("_metadata.json");
// let file1 = JSON.parse(file1Raw);

// console.log(file1);

// file1.forEach((element) => {
//   //console.log(element.attributes);
  
// });
const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numberTaken = [];

// iterate through file number in this case the custom 1 of 1 is 6667-6689
for (let i = 6667; i < 6690; i++) {
  let file1Raw = fs.readFileSync(`./new/${i}.json`);
  let file1 = JSON.parse(file1Raw);

  let renamed = false;

  // let num = randomNum(1,6666)

  while(!renamed) {
    let num = randomNum(1,6666)
    if (!numberTaken.includes(num)) {
    numberTaken.push(num)
    // fs.rename(`./new/${i}.json`, `./new/${num}.json`, function(err) {
    // if ( err ) console.log('ERROR: ' + err);
    // })
    file1.name = "Mr Peace #" + num;
    file1.image = `/${num}.png`;
    file1.edition = num;
    let writeData = JSON.stringify(file1, null, 2);

    fs.writeFile(`./new2/${num}.json`, writeData, (err) => {
      if (err) throw err;
      console.log(`File was written...`);
    });

    // rename png image files on their folder
    fs.rename(`./Special/${i}.png`, `./Special/${num}.png`, function(err) {
    if ( err ) console.log('ERROR: ' + err);
    })
    renamed = true;
  } else {
    console.log(`Number already taken at ${num} please check at file ${i}.json again`)
  }
  }

  


}

// let writeData = JSON.stringify(file1, null, 2);

// fs.writeFile("LastMetadata-2.json", writeData, (err) => {
//   if (err) throw err;
//   console.log(`File was written...`);
// });
