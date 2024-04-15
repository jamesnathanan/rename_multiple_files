"use strict";

const fs = require("fs");

// let file1Raw = fs.readFileSync("_metadata.json");
// let file1 = JSON.parse(file1Raw);

// console.log(file1);


// Batch 2 number 1 to 833 , Batch 3 number 1 to 500, batch 4 num 1 to 300, batch 5 n 1-33
// mapping to 1668 to 2500 , Batch 3 map 2501 to 3000, B4 map 3001-3300, B5 map 3301-3333

// set counter 1668, 2501, 3001, 3301
let j = 3301;

for (let i = 1; i <= 33; i++) {
  
  // rename image
  fs.copyFile(`./BananaBatch5/build/images/${i}.png`, `./3301-3333/${j}.png`, function(err) {
    if ( err ) console.log('ERROR: ' + err);
  }) 
  // read json
  let file1Raw = fs.readFileSync(`./BananaBatch5/build/json/${i}.json`);
  let file1 = JSON.parse(file1Raw);
  // fix the metadata
  file1.name = "Nana #" + j;
  file1.image = `REPLACE/${j}.png`;
  file1.edition = j;
  // write json
  let writeData = JSON.stringify(file1, null, 2);
  fs.writeFile(`./3301-3333-json/${j}.json`, writeData, (err) => {
    if (err) throw err;
      console.log(`File was written...`);
  }); 
  // increment the counter
  j++;

 

}



// file1.forEach((element) => {
//   //console.log(element.attributes);
//   element.image = element.edition + ".png";
//   element.properties.files[0].uri = element.edition + ".png";
//   element.description = `You may have stumbled upon this through a seemingly random chain of events. Beyond here is something like a utopia - Solana Rats roaming the Metaverse. Many future rewards will be provided to diamond hands for ratting around the NFT community. This is the number ${
//     element.edition + 1
//   }/999.`;
//   element.collection =
//     "You may have stumbled upon this through a seemingly random chain of events. Beyond here is something like a utopia - Solana Rats roaming the Metaverse. Many future rewards will be provided to diamond hands for ratting around the NFT community.";
// });

// let writeData = JSON.stringify(file1, null, 2);

// fs.writeFile("LastMetadata-2.json", writeData, (err) => {
//   if (err) throw err;
//   console.log(`File was written...`);
// });
