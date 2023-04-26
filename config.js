
const BASEDIR = process.cwd();
const { FOLDERS } = require(`${BASEDIR}/constants/folders.js`);
const { MODE } = require(`${FOLDERS.constantsDir}/blend_mode.js`);
const { NETWORK } = require(`${FOLDERS.constantsDir}/network.js`);

const network = NETWORK.sol;

const solanaMetadata = {
  symbol: "THGZ",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "Thuggiez.io", // Add your website URL here. Ex. https://thepeanutgalleryandco.co.za/
  creators: [
    {
      address: "YOUR_WALLET_ADDRESS_HERE", // Add your owner wallet address here. Ex. 0x5cE5D823f4bD8Ec610868fBa65832B479152C7E1
      share: 100,
    },
  ],
};

const shadesList = [
  // L
  "Eyes/Rainbow shades 2 (SR)", 
  "Eyes/Shades Black (R)", 
  "Eyes/Shades Black 2 (SR)", 
  "Eyes/Shades Rainbow (R)", 
  "Eyes/Shades Retro Black (R)", 
  "Eyes/Shades Retro Rainbow (R)", 
  "Eyes/Shades Retro White (R)", 
  "Eyes/Ski Goggles Norm (R)", 
  "Eyes/Ski Goggles Rainbow (R)", 
  "Eyes/Ski Goggles Reflection (R)", 
  // D
  "Eyes/Rainbow shades 2   Style 2 (SR)", 
  "Eyes/Shades Black   Style 2 (R)", 
  "Eyes/Shades Black 2   Style 2 (SR)", 
  "Eyes/Shades Rainbow   Style 2 (R)", 
  "Eyes/Shades Retro  Rainbow   Style 2 (R)", 
  "Eyes/Shades Retro Black   Style 2 (R)", 
  "Eyes/Shades Retro White   Style 2 (R)", 
  "Eyes/Skiiing Goggles Black     Style 2 (R)", 
  "Eyes/Skiing Goggles Rainbow   Style 2 (R)", 
  "Eyes/Skiing Goggles Reflection     Style 2 (R)", 
]

const nerdGlassesList = [
  "Eyes/Nerd Glasses (SR)",
  "Eyes/Nerd Glasses   Style 2 (SR)",
]

const bigCap10List = [
  "Head Gear/Big Black Cap  10 (C)",  
  "Head Gear/Big White Cap 10 (C)"  
]

const hatsList = [
  "Head Gear/Big Black Cap  10 (C)",
  "Head Gear/Big Black Cap (C)",
  "Head Gear/Big Black cap 2 (R)",
  "Head Gear/Big White Cap (R)",
  "Head Gear/Big White Cap 10 (C)",
  "Head Gear/Black Backwards Cap 2 (C)",
  "Head Gear/Black Beanie (R)",
  "Head Gear/Black Beanie 2 (R)",
  "Head Gear/Black Cap 2 (C)",
  "Head Gear/Black White Cap (R)",
  "Head Gear/Multi color Cap (C)",
  "Head Gear/Multi Color Cap 2 (R)",
  "Head Gear/White Cap 2 (R)",
]

const bandanaMouthList = [
  // D 
  "Mouths/Bandana Black   Style 2 (R)",
  "Mouths/Bandana Red   Black   Style 2 (R)",
  "Mouths/Bandana White   Black   Style 2 (R)",
  "Mouths/Bandana White   Style 2 (R)",
  // L
  "Mouths/Bandana Black (SR)",
  "Mouths/Bandana Red   Black (SR)",
  "Mouths/Bandana White   Black (SR)",
  "Mouths/Bandana White (SR)",
]

const winterHatList = [
  "Big Hats/Winter Hat Black",
  "Big Hats/Winter hat White"
]

const bodiesStyle3List = [
  "Clothing/Black Hoodie 2",
  "Clothing/Black Hoodie",
  "Clothing/Black Purple Hoodie",
  "Clothing/Black White Hoodie",
  "Clothing/Fur Collar Black Jacket",
  "Clothing/Fur Collar White Jacket",
  "Clothing/Hood Up Bandana",
  "Clothing/Hood up black 2",
  "Clothing/Hood Up Black Cap",
  "Clothing/Hood Up Black Ninja",
  "Clothing/Hood up Black",
  "Clothing/Hood up Red",
  "Clothing/Hood Up White Cap",
  "Clothing/Hood Up White Sweat Band",
  "Clothing/Hood up White",
]

const hoodUpList = [
  "Clothing/Hood Up Bandana",
  "Clothing/Hood up black 2",
  "Clothing/Hood Up Black Cap",
  "Clothing/Hood Up Black Ninja",
  "Clothing/Hood up Black",
  "Clothing/Hood up Red",
  "Clothing/Hood Up White Cap",
  "Clothing/Hood Up White Sweat Band",
  "Clothing/Hood up White",
]

const headphonesList = [
  //
  "Head Gear/Headphones (R)"
]

const purpleFollowing = [
  "Background/Purple Pink (C)",
  "Background/Purple Pink Pattern (SR)",
  "Background/Purple Pink Texture (R)",
  "Background/Black White Stripe (SR)",
  "Background/Black X (R)",
  "Background/Black White X (R)",
  "Background/Thuggiezville Black (C)",
  "Background/Thuggiezville White (C)",

]

const pinkFollowing = [
  "Background/Pink Orange (C)",
  "Background/Pink Orange Pattern 1 (SR)",
  "Background/Pink Orange Texture (R)",
  "Background/Black White Stripe (SR)",
  "Background/Black X (R)",
  "Background/Black White X (R)",
  "Background/Thuggiezville Black (C)",
  "Background/Thuggiezville White (C)",

]

const blueFollowing = [
  "Background/Blue (C)",
  "Background/Blue Pattern (SR)",
  "Background/Blue Texture (R)",
  "Background/Black White Stripe (SR)",
  "Background/Black X (R)",
  "Background/Black White X (R)",
  "Background/Thuggiezville Black (C)",
  "Background/Thuggiezville White (C)",

]

const redYellowFollowing = [
  "Background/Red Orange (C)",
  "Background/Red Orange Pattern (SR)",
  "Background/Red Orange Texture (R)",
  "Background/Black White Stripe (SR)",
  "Background/Black X (R)",
  "Background/Black White X (R)",
  "Background/Thuggiezville Black (C)",
  "Background/Thuggiezville White (C)",
]

const redFollowing = [
  "Background/Red (C)",
  "Background/Red Black Stripe (SR)",
  "Background/Red Orange (C)",
  "Background/Red Orange Pattern (SR)",
  "Background/Red Orange Texture (R)",
  "Background/Black White Stripe (SR)",
  "Background/Black X (R)",
  "Background/Black White X (R)",
  "Background/Thuggiezville Black (C)",
  "Background/Thuggiezville White (C)",
]

const greenFollowing = [
  "Background/Green (C)",
  "Background/Green Pattern (SR)",
  "Background/Green Texture (R)",
  "Background/Black White Stripe (SR)",
  "Background/Black X (R)",
  "Background/Black White X (R)",
  "Background/Thuggiezville Black (C)",
  "Background/Thuggiezville White (C)",

]

const rastaFollowing = [
  "Background/Red (C)",
  "Background/Red Black Stripe (SR)",
  "Background/Green (C)",
  "Background/Green Pattern (SR)",
  "Background/Green Texture (R)",
  "Background/Red Orange (C)",
  "Background/Red Orange Pattern (SR)",
  "Background/Red Orange Texture (R)",
  "Background/Black White Stripe (SR)",
  "Background/Black X (R)",
  "Background/Black White X (R)",
  "Background/Thuggiezville Black (C)",
  "Background/Thuggiezville White (C)",
]

const rainbowFollowing = [
  "Background/Rainbow (SR)",
  "Background/Black White Stripe (SR)",
  "Background/Black X (R)",
  "Background/Black White X (R)",
  "Background/Thuggiezville Black (C)",
  "Background/Thuggiezville White (C)",

]

const babyBlueFollowing = [
  "Background/Baby Blue (C)",
  "Background/Baby Blue Pattern (SR)",
  "Background/Black White Stripe (SR)",
  "Background/Black X (R)",
  "Background/Black White X (R)",
  "Background/Thuggiezville Black (C)",
  "Background/Thuggiezville White (C)",
]

// Big Hats Incompatible
const bigHatsIn = {
  //
}
// Big Hats Depend
const bigHatsDepend = {
  // Not with Head Gear
  "Big Hats/Black Backwards Cap": [
    "Head Gear/None"
  ],
  "Big Hats/Black Cap": [
    "Head Gear/None"
  ],
  "Big Hats/Cowboy Hat": [
    "Head Gear/None"
  ],
  "Big Hats/Red Backwards Cap": [
    "Head Gear/None"
  ],
  "Big Hats/Red Cap": [
    "Head Gear/None"
  ],
  "Big Hats/White Backwards Cap": [
    "Head Gear/None"
  ],
  "Big Hats/White Cap": [
    "Head Gear/None"
  ],
  "Big Hats/Winter Hat Black": [
    "Head Gear/None"
  ],
  "Big Hats/Winter hat White": [
    "Head Gear/None"
  ],
  // Not with Balaclava accessory
  "Big Hats/Black Backwards Cap": [
    "Balaclava accessory/None"
  ],
  "Big Hats/Black Cap": [
    "Balaclava accessory/None"
  ],
  "Big Hats/Cowboy Hat": [
    "Balaclava accessory/None"
  ],
  "Big Hats/Red Backwards Cap": [
    "Balaclava accessory/None"
  ],
  "Big Hats/Red Cap": [
    "Balaclava accessory/None"
  ],
  "Big Hats/White Backwards Cap": [
    "Balaclava accessory/None"
  ],
  "Big Hats/White Cap": [
    "Balaclava accessory/None"
  ],
  "Big Hats/Winter Hat Black": [
    "Balaclava accessory/None"
  ],
  "Big Hats/Winter hat White": [
    "Balaclava accessory/None"
  ],
  // Not with Head Bandana
  "Big Hats/Black Backwards Cap": [
    "Head Bandana/None"
  ],
  "Big Hats/Black Cap": [
    "Head Bandana/None"
  ],
  "Big Hats/Cowboy Hat": [
    "Head Bandana/None"
  ],
  "Big Hats/Red Backwards Cap": [
    "Head Bandana/None"
  ],
  "Big Hats/Red Cap": [
    "Head Bandana/None"
  ],
  "Big Hats/White Backwards Cap": [
    "Head Bandana/None"
  ],
  "Big Hats/White Cap": [
    "Head Bandana/None"
  ],
  "Big Hats/Winter Hat Black": [
    "Head Bandana/None"
  ],
  "Big Hats/Winter hat White": [
    "Head Bandana/None"
  ],
}

// Individual Traits
// Patterns
const patternMexicanIn = {
  // "Eye color/Cyan": [
  //    "Eyeball/White",
  //  ],
}

// Mouths
//   grin Rainbow Rose
const grinRainbowRoseIn = {
  "Mouths/Grin Rainbow Rose (SR)": [
    "Big Hats/Winter Hat Black",
    "Big Hats/Winter hat White",
    // X bodies style 3 cloths
    "Clothing/Black Hoodie 2",
    "Clothing/Black Hoodie",
    "Clothing/Black Purple Hoodie",
    "Clothing/Black White Hoodie",
    "Clothing/Fur Collar Black Jacket",
    "Clothing/Fur Collar White Jacket",
    "Clothing/Hood Up Bandana",
    "Clothing/Hood up black 2",
    "Clothing/Hood Up Black Cap",
    "Clothing/Hood Up Black Ninja",
    "Clothing/Hood up Black",
    "Clothing/Hood up Red",
    "Clothing/Hood Up White Cap",
    "Clothing/Hood Up White Sweat Band",
    "Clothing/Hood up White",
  ],
  
}
// grin Rainbow Rose depend
const grinRainbowRoseDepend = {
  //Can only go with L - Arms Crossed Bodies
  "Mouths/Grin Rainbow Rose (SR)": [
    "Clothing/Arm Crossed Body",
    "Clothing/Arm Crossed Full body tattoo 2",
    "Clothing/Arm Crossed Full body tattoo 3",
    "Clothing/Arm Crossed Full body tattoo 4",
    "Clothing/Arm Crossed Full body tattoo",
    "Clothing/Arm Crossed Full body White tattoo 5",
  ],
 
}

// grin Rainbow Rose style 2
const grinRainbowRose2In = {
  "Mouths/Grin Rainbow Rose   Style 2 (R)": [
    "Big Hats/Winter Hat Black",
    "Big Hats/Winter hat White",
    // X bodies style 3 cloths
    "Clothing/Black Hoodie 2",
    "Clothing/Black Hoodie",
    "Clothing/Black Purple Hoodie",
    "Clothing/Black White Hoodie",
    "Clothing/Fur Collar Black Jacket",
    "Clothing/Fur Collar White Jacket",
    "Clothing/Hood Up Bandana",
    "Clothing/Hood up black 2",
    "Clothing/Hood Up Black Cap",
    "Clothing/Hood Up Black Ninja",
    "Clothing/Hood up Black",
    "Clothing/Hood up Red",
    "Clothing/Hood Up White Cap",
    "Clothing/Hood Up White Sweat Band",
    "Clothing/Hood up White",
  ],
  
}
// grin Rainbow Rose depend
const grinRainbowRose2Depend = {
  //Can only go with D - Arms Crossed Bodies
  "Mouths/Grin Rainbow Rose   Style 2 (R)": [
    "Clothing/Arms Crossed    Style 2",
    "Clothing/Arms Crossed Full Body 1   Style 2",
    "Clothing/Arms Crossed Full Body 2   Style 2",
    "Clothing/Arms Crossed Full Body 3   Style 2",
    "Clothing/Arms Crossed Full Body 4   Style 2",
    "Clothing/Arms Crossed Full Body 5   Style 2",
  ],
 
}

// grin Rainbow Reefa (L)
const grinRainbowReefaIn = {
  // Can not go with any "eye shades"
  "Mouths/Grin Rainbow Reefa (SR)": [
    "Eyes/Rainbow shades 2 (SR)", 
    "Eyes/Shades Black (R)", 
    "Eyes/Shades Black 2 (SR)", 
    "Eyes/Shades Rainbow (R)", 
    "Eyes/Shades Retro Black (R)", 
    "Eyes/Shades Retro Rainbow (R)", 
    "Eyes/Shades Retro White (R)", 
    "Eyes/Ski Goggles Norm (R)", 
    "Eyes/Ski Goggles Rainbow (R)", 
    "Eyes/Ski Goggles Reflection (R)", 
    // X bodies style 3 Hood Up 
    "Clothing/Hood Up Bandana", 
    "Clothing/Hood up black 2", 
    "Clothing/Hood Up Black Cap", 
    "Clothing/Hood Up Black Ninja", 
    "Clothing/Hood up Black", 
    "Clothing/Hood up Red", 
    "Clothing/Hood Up White Cap", 
    "Clothing/Hood Up White Sweat Band", 
    "Clothing/Hood up White", 

    // cannot go with "Big Hats"
    // use depend to None instead

    // can not go with "rainbow pigtails, rainbow pigtails 2, 
    // rainbow ponytails (could find!), Nerd Glasses, Nerd Glasses - Style 2
    "Head Gear/Rainbow Pigtail (R)",
    "Head Gear/Rainbow Ponytail 2 (R)",
    "Eyes/Nerd Glasses (SR)",
    "Eyes/Nerd Glasses   Style 2 (SR)",
  ],
  
}
// grin Rainbow Rose depend
const grinRainbowReefaDepend = {
  //Can only go with L - Arms Crossed Bodies
  "Mouths/Grin Rainbow Reefa (SR)": [
    "Big Hats/None",
  ],
 
}

// grin Rainbow Reefa Syle 2 (D)
const grinRainbowReefa2In = {
  "Mouths/Grin Rainbow Reefa   Style 2 (R)": [
    // cannot go with any eyes shade
    "Eyes/Rainbow shades 2   Style 2 (SR)", 
    "Eyes/Shades Black   Style 2 (R)", 
    "Eyes/Shades Black 2   Style 2 (SR)", 
    "Eyes/Shades Rainbow   Style 2 (R)", 
    "Eyes/Shades Retro  Rainbow   Style 2 (R)", 
    "Eyes/Shades Retro Black   Style 2 (R)", 
    "Eyes/Shades Retro White   Style 2 (R)", 
    "Eyes/Skiiing Goggles Black     Style 2 (R)", 
    "Eyes/Skiing Goggles Rainbow   Style 2 (R)", 
    "Eyes/Skiing Goggles Reflection     Style 2 (R)", 
    // X bodies style 3 Hood Up 
    "Clothing/Hood Up Bandana", 
    "Clothing/Hood up black 2", 
    "Clothing/Hood Up Black Cap", 
    "Clothing/Hood Up Black Ninja", 
    "Clothing/Hood up Black", 
    "Clothing/Hood up Red", 
    "Clothing/Hood Up White Cap", 
    "Clothing/Hood Up White Sweat Band", 
    "Clothing/Hood up White", 
    // cannot go with "Big Hats"
    // use depend to None instead

    // can not go with "rainbow pigtails, rainbow pigtails 2, 
    // rainbow ponytails (could find!), Nerd Glasses, Nerd Glasses - Style 2
    "Head Gear/Rainbow Pigtail (R)",
    "Head Gear/Rainbow Ponytail 2 (R)",
    "Eyes/Nerd Glasses (SR)",
    "Eyes/Nerd Glasses   Style 2 (SR)",


  ],
}
// grin Rainbow Reefa style 2 Depend
const grinRainbowReefa2Depend = {
  "Mouths/Grin Rainbow Reefa   Style 2 (R)": [
    "Big Hats/None",
  ],
}

// Shades
const shadesIn = {
  "Eyes/Rainbow shades 2   Style 2 (SR)": [
    // can not go with  "Hood up hoodies"
    "Clothing/Hood Up Bandana", 
    "Clothing/Hood up black 2", 
    "Clothing/Hood Up Black Cap", 
    "Clothing/Hood Up Black Ninja", 
    "Clothing/Hood up Black", 
    "Clothing/Hood up Red", 
    "Clothing/Hood Up White Cap", 
    "Clothing/Hood Up White Sweat Band", 
    "Clothing/Hood up White", 
    // Can not go with "Winter Hat"
    "Big Hats/Winter Hat Black",
    "Big Hats/Winter hat White",
    // can not go with "rainbow ponytail, Rainbow pigtail 2, Rainbow pigtail
    "Head Gear/Rainbow Pigtail (R)",
    "Head Gear/Rainbow Ponytail 2 (R)",
  ],
  "Eyes/Shades Black   Style 2 (R)": [
    // can not go with  "Hood up hoodies"
    "Clothing/Hood Up Bandana", 
    "Clothing/Hood up black 2", 
    "Clothing/Hood Up Black Cap", 
    "Clothing/Hood Up Black Ninja", 
    "Clothing/Hood up Black", 
    "Clothing/Hood up Red", 
    "Clothing/Hood Up White Cap", 
    "Clothing/Hood Up White Sweat Band", 
    "Clothing/Hood up White", 
    // Can not go with "Winter Hat"
    "Big Hats/Winter Hat Black",
    "Big Hats/Winter hat White",
    // can not go with "rainbow ponytail, Rainbow pigtail 2, Rainbow pigtail
    "Head Gear/Rainbow Pigtail (R)",
    "Head Gear/Rainbow Ponytail 2 (R)",
  ],
  "Eyes/Shades Black 2   Style 2 (SR)": [
    // can not go with  "Hood up hoodies"
    "Clothing/Hood Up Bandana", 
    "Clothing/Hood up black 2", 
    "Clothing/Hood Up Black Cap", 
    "Clothing/Hood Up Black Ninja", 
    "Clothing/Hood up Black", 
    "Clothing/Hood up Red", 
    "Clothing/Hood Up White Cap", 
    "Clothing/Hood Up White Sweat Band", 
    "Clothing/Hood up White", 
    // Can not go with "Winter Hat"
    "Big Hats/Winter Hat Black",
    "Big Hats/Winter hat White",
    // can not go with "rainbow ponytail, Rainbow pigtail 2, Rainbow pigtail
    "Head Gear/Rainbow Pigtail (R)",
    "Head Gear/Rainbow Ponytail 2 (R)",
  ],
  "Eyes/Shades Rainbow   Style 2 (R)": [
    // can not go with  "Hood up hoodies"
    "Clothing/Hood Up Bandana", 
    "Clothing/Hood up black 2", 
    "Clothing/Hood Up Black Cap", 
    "Clothing/Hood Up Black Ninja", 
    "Clothing/Hood up Black", 
    "Clothing/Hood up Red", 
    "Clothing/Hood Up White Cap", 
    "Clothing/Hood Up White Sweat Band", 
    "Clothing/Hood up White", 
    // Can not go with "Winter Hat"
    "Big Hats/Winter Hat Black",
    "Big Hats/Winter hat White",
    // can not go with "rainbow ponytail, Rainbow pigtail 2, Rainbow pigtail
    "Head Gear/Rainbow Pigtail (R)",
    "Head Gear/Rainbow Ponytail 2 (R)",
  ],
  "Eyes/Shades Retro  Rainbow   Style 2 (R)": [
    // can not go with  "Hood up hoodies"
    "Clothing/Hood Up Bandana", 
    "Clothing/Hood up black 2", 
    "Clothing/Hood Up Black Cap", 
    "Clothing/Hood Up Black Ninja", 
    "Clothing/Hood up Black", 
    "Clothing/Hood up Red", 
    "Clothing/Hood Up White Cap", 
    "Clothing/Hood Up White Sweat Band", 
    "Clothing/Hood up White", 
    // Can not go with "Winter Hat"
    "Big Hats/Winter Hat Black",
    "Big Hats/Winter hat White",
    // can not go with "rainbow ponytail, Rainbow pigtail 2, Rainbow pigtail
    "Head Gear/Rainbow Pigtail (R)",
    "Head Gear/Rainbow Ponytail 2 (R)",
  ],
  "Eyes/Shades Retro Black   Style 2 (R)": [
    // can not go with  "Hood up hoodies"
    "Clothing/Hood Up Bandana", 
    "Clothing/Hood up black 2", 
    "Clothing/Hood Up Black Cap", 
    "Clothing/Hood Up Black Ninja", 
    "Clothing/Hood up Black", 
    "Clothing/Hood up Red", 
    "Clothing/Hood Up White Cap", 
    "Clothing/Hood Up White Sweat Band", 
    "Clothing/Hood up White", 
    // Can not go with "Winter Hat"
    "Big Hats/Winter Hat Black",
    "Big Hats/Winter hat White",
    // can not go with "rainbow ponytail, Rainbow pigtail 2, Rainbow pigtail
    "Head Gear/Rainbow Pigtail (R)",
    "Head Gear/Rainbow Ponytail 2 (R)",
  ],
  "Eyes/Shades Retro White   Style 2 (R)": [
    // can not go with  "Hood up hoodies"
    "Clothing/Hood Up Bandana", 
    "Clothing/Hood up black 2", 
    "Clothing/Hood Up Black Cap", 
    "Clothing/Hood Up Black Ninja", 
    "Clothing/Hood up Black", 
    "Clothing/Hood up Red", 
    "Clothing/Hood Up White Cap", 
    "Clothing/Hood Up White Sweat Band", 
    "Clothing/Hood up White", 
    // Can not go with "Winter Hat"
    "Big Hats/Winter Hat Black",
    "Big Hats/Winter hat White",
    // can not go with "rainbow ponytail, Rainbow pigtail 2, Rainbow pigtail
    "Head Gear/Rainbow Pigtail (R)",
    "Head Gear/Rainbow Ponytail 2 (R)",
  ],
  // Skii Goggles
  "Eyes/Skiiing Goggles Black     Style 2 (R)": [
    // can not go with  "Hood up hoodies"
    "Clothing/Hood Up Bandana", 
    "Clothing/Hood up black 2", 
    "Clothing/Hood Up Black Cap", 
    "Clothing/Hood Up Black Ninja", 
    "Clothing/Hood up Black", 
    "Clothing/Hood up Red", 
    "Clothing/Hood Up White Cap", 
    "Clothing/Hood Up White Sweat Band", 
    "Clothing/Hood up White", 
    // Can not go with "Winter Hat"
    "Big Hats/Winter Hat Black",
    "Big Hats/Winter hat White",
    // can not go with "rainbow ponytail, Rainbow pigtail 2, Rainbow pigtail
    "Head Gear/Rainbow Pigtail (R)",
    "Head Gear/Rainbow Ponytail 2 (R)",
  ],
  "Eyes/Skiing Goggles Rainbow   Style 2 (R)": [
    // can not go with  "Hood up hoodies"
    "Clothing/Hood Up Bandana", 
    "Clothing/Hood up black 2", 
    "Clothing/Hood Up Black Cap", 
    "Clothing/Hood Up Black Ninja", 
    "Clothing/Hood up Black", 
    "Clothing/Hood up Red", 
    "Clothing/Hood Up White Cap", 
    "Clothing/Hood Up White Sweat Band", 
    "Clothing/Hood up White", 
    // Can not go with "Winter Hat"
    "Big Hats/Winter Hat Black",
    "Big Hats/Winter hat White",
    // can not go with "rainbow ponytail, Rainbow pigtail 2, Rainbow pigtail
    "Head Gear/Rainbow Pigtail (R)",
    "Head Gear/Rainbow Ponytail 2 (R)",
  ],
  "Eyes/Skiing Goggles Reflection     Style 2 (R)": [
    // can not go with  "Hood up hoodies"
    "Clothing/Hood Up Bandana", 
    "Clothing/Hood up black 2", 
    "Clothing/Hood Up Black Cap", 
    "Clothing/Hood Up Black Ninja", 
    "Clothing/Hood up Black", 
    "Clothing/Hood up Red", 
    "Clothing/Hood Up White Cap", 
    "Clothing/Hood Up White Sweat Band", 
    "Clothing/Hood up White", 
    // Can not go with "Winter Hat"
    "Big Hats/Winter Hat Black",
    "Big Hats/Winter hat White",
    // can not go with "rainbow ponytail, Rainbow pigtail 2, Rainbow pigtail
    "Head Gear/Rainbow Pigtail (R)",
    "Head Gear/Rainbow Ponytail 2 (R)",
  ],
  // L Eyes Shades
  "Eyes/Rainbow shades 2 (SR)": [
    // can not go with  "Hood up hoodies"
    "Clothing/Hood Up Bandana", 
    "Clothing/Hood up black 2", 
    "Clothing/Hood Up Black Cap", 
    "Clothing/Hood Up Black Ninja", 
    "Clothing/Hood up Black", 
    "Clothing/Hood up Red", 
    "Clothing/Hood Up White Cap", 
    "Clothing/Hood Up White Sweat Band", 
    "Clothing/Hood up White", 
    // Can not go with "Winter Hat"
    "Big Hats/Winter Hat Black",
    "Big Hats/Winter hat White",
    // can not go with "rainbow ponytail, Rainbow pigtail 2, Rainbow pigtail
    "Head Gear/Rainbow Pigtail (R)",
    "Head Gear/Rainbow Ponytail 2 (R)",
  ],
  "Eyes/Shades Black (R)": [
    // can not go with  "Hood up hoodies"
    "Clothing/Hood Up Bandana", 
    "Clothing/Hood up black 2", 
    "Clothing/Hood Up Black Cap", 
    "Clothing/Hood Up Black Ninja", 
    "Clothing/Hood up Black", 
    "Clothing/Hood up Red", 
    "Clothing/Hood Up White Cap", 
    "Clothing/Hood Up White Sweat Band", 
    "Clothing/Hood up White", 
    // Can not go with "Winter Hat"
    "Big Hats/Winter Hat Black",
    "Big Hats/Winter hat White",
    // can not go with "rainbow ponytail, Rainbow pigtail 2, Rainbow pigtail
    "Head Gear/Rainbow Pigtail (R)",
    "Head Gear/Rainbow Ponytail 2 (R)",
  ],
  "Eyes/Shades Black 2 (SR)": [
    // can not go with  "Hood up hoodies"
    "Clothing/Hood Up Bandana", 
    "Clothing/Hood up black 2", 
    "Clothing/Hood Up Black Cap", 
    "Clothing/Hood Up Black Ninja", 
    "Clothing/Hood up Black", 
    "Clothing/Hood up Red", 
    "Clothing/Hood Up White Cap", 
    "Clothing/Hood Up White Sweat Band", 
    "Clothing/Hood up White", 
    // Can not go with "Winter Hat"
    "Big Hats/Winter Hat Black",
    "Big Hats/Winter hat White",
    // can not go with "rainbow ponytail, Rainbow pigtail 2, Rainbow pigtail
    "Head Gear/Rainbow Pigtail (R)",
    "Head Gear/Rainbow Ponytail 2 (R)",
  ],
  "Eyes/Shades Rainbow (R)": [
    // can not go with  "Hood up hoodies"
    "Clothing/Hood Up Bandana", 
    "Clothing/Hood up black 2", 
    "Clothing/Hood Up Black Cap", 
    "Clothing/Hood Up Black Ninja", 
    "Clothing/Hood up Black", 
    "Clothing/Hood up Red", 
    "Clothing/Hood Up White Cap", 
    "Clothing/Hood Up White Sweat Band", 
    "Clothing/Hood up White", 
    // Can not go with "Winter Hat"
    "Big Hats/Winter Hat Black",
    "Big Hats/Winter hat White",
    // can not go with "rainbow ponytail, Rainbow pigtail 2, Rainbow pigtail
    "Head Gear/Rainbow Pigtail (R)",
    "Head Gear/Rainbow Ponytail 2 (R)",
  ],
  "Eyes/Shades Retro Black (R)": [
    // can not go with  "Hood up hoodies"
    "Clothing/Hood Up Bandana", 
    "Clothing/Hood up black 2", 
    "Clothing/Hood Up Black Cap", 
    "Clothing/Hood Up Black Ninja", 
    "Clothing/Hood up Black", 
    "Clothing/Hood up Red", 
    "Clothing/Hood Up White Cap", 
    "Clothing/Hood Up White Sweat Band", 
    "Clothing/Hood up White", 
    // Can not go with "Winter Hat"
    "Big Hats/Winter Hat Black",
    "Big Hats/Winter hat White",
    // can not go with "rainbow ponytail, Rainbow pigtail 2, Rainbow pigtail
    "Head Gear/Rainbow Pigtail (R)",
    "Head Gear/Rainbow Ponytail 2 (R)",
  ],
  "Eyes/Shades Retro Rainbow (R)": [
    // can not go with  "Hood up hoodies"
    "Clothing/Hood Up Bandana", 
    "Clothing/Hood up black 2", 
    "Clothing/Hood Up Black Cap", 
    "Clothing/Hood Up Black Ninja", 
    "Clothing/Hood up Black", 
    "Clothing/Hood up Red", 
    "Clothing/Hood Up White Cap", 
    "Clothing/Hood Up White Sweat Band", 
    "Clothing/Hood up White", 
    // Can not go with "Winter Hat"
    "Big Hats/Winter Hat Black",
    "Big Hats/Winter hat White",
    // can not go with "rainbow ponytail, Rainbow pigtail 2, Rainbow pigtail
    "Head Gear/Rainbow Pigtail (R)",
    "Head Gear/Rainbow Ponytail 2 (R)",
  ],
  "Eyes/Shades Retro White (R)": [
    // can not go with  "Hood up hoodies"
    "Clothing/Hood Up Bandana", 
    "Clothing/Hood up black 2", 
    "Clothing/Hood Up Black Cap", 
    "Clothing/Hood Up Black Ninja", 
    "Clothing/Hood up Black", 
    "Clothing/Hood up Red", 
    "Clothing/Hood Up White Cap", 
    "Clothing/Hood Up White Sweat Band", 
    "Clothing/Hood up White", 
    // Can not go with "Winter Hat"
    "Big Hats/Winter Hat Black",
    "Big Hats/Winter hat White",
    // can not go with "rainbow ponytail, Rainbow pigtail 2, Rainbow pigtail
    "Head Gear/Rainbow Pigtail (R)",
    "Head Gear/Rainbow Ponytail 2 (R)",
  ],
  // Ski Googles (L Eyes)
  "Eyes/Ski Goggles Norm (R)": [
    // can not go with  "Hood up hoodies"
    "Clothing/Hood Up Bandana", 
    "Clothing/Hood up black 2", 
    "Clothing/Hood Up Black Cap", 
    "Clothing/Hood Up Black Ninja", 
    "Clothing/Hood up Black", 
    "Clothing/Hood up Red", 
    "Clothing/Hood Up White Cap", 
    "Clothing/Hood Up White Sweat Band", 
    "Clothing/Hood up White", 
    // Can not go with "Winter Hat"
    "Big Hats/Winter Hat Black",
    "Big Hats/Winter hat White",
    // can not go with "rainbow ponytail, Rainbow pigtail 2, Rainbow pigtail
    "Head Gear/Rainbow Pigtail (R)",
    "Head Gear/Rainbow Ponytail 2 (R)",
  ],
  "Eyes/Ski Goggles Rainbow (R)": [
    // can not go with  "Hood up hoodies"
    "Clothing/Hood Up Bandana", 
    "Clothing/Hood up black 2", 
    "Clothing/Hood Up Black Cap", 
    "Clothing/Hood Up Black Ninja", 
    "Clothing/Hood up Black", 
    "Clothing/Hood up Red", 
    "Clothing/Hood Up White Cap", 
    "Clothing/Hood Up White Sweat Band", 
    "Clothing/Hood up White", 
    // Can not go with "Winter Hat"
    "Big Hats/Winter Hat Black",
    "Big Hats/Winter hat White",
    // can not go with "rainbow ponytail, Rainbow pigtail 2, Rainbow pigtail
    "Head Gear/Rainbow Pigtail (R)",
    "Head Gear/Rainbow Ponytail 2 (R)",
  ],
  "Eyes/Ski Goggles Reflection (R)": [
    // can not go with  "Hood up hoodies"
    "Clothing/Hood Up Bandana", 
    "Clothing/Hood up black 2", 
    "Clothing/Hood Up Black Cap", 
    "Clothing/Hood Up Black Ninja", 
    "Clothing/Hood up Black", 
    "Clothing/Hood up Red", 
    "Clothing/Hood Up White Cap", 
    "Clothing/Hood Up White Sweat Band", 
    "Clothing/Hood up White", 
    // Can not go with "Winter Hat"
    "Big Hats/Winter Hat Black",
    "Big Hats/Winter hat White",
    // can not go with "rainbow ponytail, Rainbow pigtail 2, Rainbow pigtail
    "Head Gear/Rainbow Pigtail (R)",
    "Head Gear/Rainbow Ponytail 2 (R)",
  ],
}

// Hood up hoodies
// "hood up hoodies" can not go with " head bandanas (None), hats, big hats (None), balaclava accessory (None), neck chain (Not found), shades, all bandana mouths, Nerd Glasses, Ski Goggles Reflection, Ski Goggles Norm, Ski Goggles Rainbow (Skii goggles included in ShadesList)
const hoodUpIn = {
  "Clothing/Hood Up Bandana": [
    ...shadesList,       
    ...nerdGlassesList,
    ...hatsList,
    ...bandanaMouthList,



  ],
  "Clothing/Hood up black 2": [
    //
    ...shadesList,       
    ...nerdGlassesList,
    ...hatsList,
    ...bandanaMouthList,
  ],
  "Clothing/Hood Up Black Cap": [
    //
    ...shadesList,       
    ...nerdGlassesList,
    ...hatsList,
    ...bandanaMouthList,
  ],
  "Clothing/Hood Up Black Ninja": [
    //
    ...shadesList,       
    ...nerdGlassesList,
    ...hatsList,
    ...bandanaMouthList,
  ],
  "Clothing/Hood up Black": [
    //
    ...shadesList,       
    ...nerdGlassesList,
    ...hatsList,
    ...bandanaMouthList,
  ],
  "Clothing/Hood up Red": [
    //
    ...shadesList,       
    ...nerdGlassesList,
    ...hatsList,
    ...bandanaMouthList,
  ],
  "Clothing/Hood Up White Cap": [
    //
    ...shadesList,       
    ...nerdGlassesList,
    ...hatsList,
    ...bandanaMouthList,
  ],
  "Clothing/Hood Up White Sweat Band": [
    //
    ...shadesList,       
    ...nerdGlassesList,
    ...hatsList,
    ...bandanaMouthList,
  ],
  "Clothing/Hood up White": [
    //
    ...shadesList,       
    ...nerdGlassesList,
    ...hatsList,
    ...bandanaMouthList,
  ],
}

const hoodUpDepend = {
  "Clothing/Hood Up Bandana": [
    "Head Bandana/None",
    "Big Hats/None",
    "Balaclava accessory/None",
    



  ],
  "Clothing/Hood up black 2": [
    //
  ],
  "Clothing/Hood Up Black Cap": [
    //
  ],
  "Clothing/Hood Up Black Ninja": [
    //
  ],
  "Clothing/Hood up Black": [
    //
  ],
  "Clothing/Hood up Red": [
    //
  ],
  "Clothing/Hood Up White Cap": [
    //
  ],
  "Clothing/Hood Up White Sweat Band": [
    //
  ],
  "Clothing/Hood up White": [
    //
  ],
}

// Bandanas
// Mouths - "Bandanas" - When chosen cannot go with "bodies style 3 clothes, winter hat"
const bandanasIn = {
  // D 
  "Mouths/Bandana Black   Style 2 (R)": [
    //
    ...winterHatList,
    ...bodiesStyle3List,
  ],
  "Mouths/Bandana Red   Black   Style 2 (R)": [
    //
    ...winterHatList,
    ...bodiesStyle3List,
  ],
  "Mouths/Bandana White   Black   Style 2 (R)": [
    //
    ...winterHatList,
    ...bodiesStyle3List,
  ],
  "Mouths/Bandana White   Style 2 (R)": [
    //
    ...winterHatList,
    ...bodiesStyle3List,
  ],
  // L
  "Mouths/Bandana Black (SR)": [
    //
    ...winterHatList,
    ...bodiesStyle3List,
  ],
  "Mouths/Bandana Red   Black (SR)": [
    //
    ...winterHatList,
    ...bodiesStyle3List,
  ],
  "Mouths/Bandana White   Black (SR)": [
    //
    ...winterHatList,
    ...bodiesStyle3List,
  ],
  "Mouths/Bandana White (SR)": [
    //
    ...winterHatList,
    ...bodiesStyle3List,
  ],
}

// Rainbow pigtails & Rainbow pigtails Cannot go with Balaclava Accessporys (None)
const rainbowPigtailsDepend = {
  "Head Gear/Rainbow Pigtail (R)": [
    "Balaclava accessory/None",
  ]
}

// White ponytail (Couldn't find) & rainbow ponytail 2 cannot go with Bandana accessorys (None)
const whiteRainbowPonytailDepend = {
  // "Head Gear/Rainbow Pigtail (R)": [
  //   "Balaclava accessory/None",
  // ],
  "Head Gear/Rainbow Ponytail 2 (R)": [
    "Balaclava accessory/None",
  ]
}

// New rules
// Balaclava = "purple" depend (purple, purple texture, purple pattern, white stripe, black stripe, black pattern, black x, white x, white pattern, Thuggiezville White, Thuggiezville Black, Thuggiezville White Nitro, Thuggiezville White Nitro 2, Thuggiezville Black Nitro, Thuggiezville Black Nitro 2 )
const purpleDepend = {
  "Balaclava/Purple": [
    //
    ...purpleFollowing,
  ] 
}

// Balaclava - "pink yellow" If chosen can only go with the following backgrounds ( pink, pink texture, pink pattern, white stripe, black stripe, black pattern, black x, white x, white pattern, Thuggiezville White, Thuggiezville Black, Thuggiezville White Nitro, Thuggiezville White Nitro 2, Thuggiezville Black Nitro, Thuggiezville Black Nitro 2 )
const pinkDepend = {
 "Balaclava/Pink yellow": [
    //
    ...pinkFollowing,
  ]  
}

// Balaclava - "blue" if chosen can only go with the following backgrounds (Blue, blue texture, blue pattern, white stripe, black stripe, black pattern, black x, white x, white pattern, Thuggiezville White, Thuggiezville Black, Thuggiezville White Nitro, Thuggiezville White Nitro 2, Thuggiezville Black Nitro, Thuggiezville Black Nitro 2 )
const blueDepend = {
 "Balaclava/Blue": [
    //
    ...blueFollowing,
  ]   
}

// Balaclava - "Red"
const redDepend = {
 "Balaclava/Red": [
    //
    ...redFollowing,
  ]   
}

// Balaclava - "Red Yellow"
const redYellowDepend = {
 "Balaclava/Red Yellow": [
    //
    ...redYellowFollowing,
  ]   
}

// Balaclava - "Green"
const greenDepend = {
 "Balaclava/Army Green": [
    //
    ...greenFollowing,
  ]   
}

// Balaclava - "rasta"
const rastaDepend = {
 "Balaclava/Rasta": [
    //
    ...rastaFollowing,
  ]   
}

// Balaclava - "Rainbow"
const rainbowDepend = {
 "Balaclava/Rainbow": [
    //
    ...rainbowFollowing,
  ]   
}

// Balaclava - "Baby Blue"
const babyBlueDepend = {
  "Balaclava/Baby Blue": [
    //
    ...babyBlueFollowing,
  ]
}

// Balaclava - "black & white" can go with any color

// NEW RULES & TRAITS
// NERD GLASSES
// can not go with Big White Cap 1.0, Big Black Cap  1.0, Head Bandana (None), Grin Rainbow Reefa - Style 2 (Repeat), Grin Rainbow Reefa (Repeat), grin Rainbow Reefa - style 2 (Repeat), all hood up hoodies, headphones, "big hats" except White Backwards Cap, red Backwards Cap, black Backwards Cap
const nerdGlassesIn = {
  "Eyes/Nerd Glasses (SR)": [
    ...bigCap10List, 
    ...hoodUpList,
    ...headphonesList,

  ],
  "Eyes/Nerd Glasses   Style 2 (SR)": [
    ...bigCap10List, 
    ...hoodUpList,
    ...headphonesList,
  ], 
}

const nerdGlassesDepend = {
  "Eyes/Nerd Glasses (SR)": [
    // can't go with Head Bandana
    "Head Bandana/None",
  ],
  "Eyes/Nerd Glasses   Style 2 (SR)": [
    // can't go with Head Bandana
    "Head Bandana/None",
  ], 
}


//

// Refactoring using "..." operator to combine extracted objects
// const eyeColorCyan = {
//   "Eye color/Cyan": [
//     "Eyeball/White",
//   ],
// };

// const backgroundBlue = {
//   "Background/Blue": [
//     "Eyeball/Red",
//     "Top lid/low"
//   ],
// };

// const dependentTraits = {
//   ...eyeColorCyan,
//   ...backgroundBlue,
// };


const bodies_structure = 
  {
    growEditionSizeTo: 10,
    //maxRepeatedTraits: 1,
    layersOrder: [
      { name: "1 Background",
        options: {
          displayName: "Background"
        }
       },
      { name: "2 Balaclava",
        options: {
          displayName: "Balaclava"
        } 
       },
      { name: "3 D Mouths", // D Mouths then L Mouths
        options: {
          displayName: "Mouths"
        }
       },
      { name: "4 D Eyes", // D Eyes then L Eyes
        options: {
          displayName: "Eyes"
        }
       },
      { name: "5 D Bodies 34_", // 3 types(Bodies, Fulltattoo, Armcross)
        options: {
          displayName: "Bodies"
        }
       }, 
      { name: "6 Tattoos 50_", // Fulltattoos and Armcross use None Tattoos
        options: {
          displayName: "Tattoos"
        }
       },
      { name: "7 Bodies Clothing 50_", // Fulltattoos no cloths, Armcross+body3
        options: {
          displayName: "Clothing"
        }
       },
      { name: "8 Big Hats 15_",
        options: {
          displayName: "Big Hats"
        }
       }, 
      { name: "9 Head Gear 60_",
        options: {
          displayName: "Head Gear"
        }
       },
      { name: "10 Balaclava accessory 70_",
        options: {
          displayName: "Balaclava accessory"
        }
       },
      { name: "11 Head Bandana 35_",
        options: {
          displayName: "Head Bandana"
        }
       },
    ],
    layerItemsMaxRepeatedTraits: [
      // { name: "Background/Black", layerItemMaxRepeatedTrait: 4 },
      // { name: "Eyeball/Red", layerItemMaxRepeatedTrait: 5 }
    ],
    incompatibleTraits: {
      ...grinRainbowRoseIn,
      ...grinRainbowRose2In, 
      ...grinRainbowReefaIn,
      ...grinRainbowReefa2In,
      ...shadesIn,
      ...hoodUpIn,
      ...bandanasIn,
      ...nerdGlassesIn,

    },
    dependentTraits: {
      ...bigHatsDepend,
      ...grinRainbowRoseDepend,
      ...grinRainbowRose2Depend,
      ...grinRainbowReefaDepend,
      ...grinRainbowReefa2Depend,
      ...hoodUpDepend,
      ...rainbowPigtailsDepend,
      ...whiteRainbowPonytailDepend,
      ...purpleDepend,
      ...pinkDepend,
      ...blueDepend,
      ...redDepend,
      ...redYellowDepend,
      ...greenDepend,
      ...rastaDepend,
      ...rainbowDepend,
      ...babyBlueDepend,
      ...nerdGlassesDepend,

    }
  }

const fullbody_structure = 
  {
    growEditionSizeTo: 40,
    //maxRepeatedTraits: 1,
    layersOrder: [
      { name: "1 Background",
        options: {
          displayName: "Background"
        }
       },
      { name: "2 Balaclava",
        options: {
          displayName: "Balaclava"
        } 
       },
      { name: "3 D Mouths", // D Mouths then L Mouths
        options: {
          displayName: "Mouths"
        }
       },
      { name: "4 D Eyes", // D Eyes then L Eyes
        options: {
          displayName: "Eyes"
        }
       },
      { name: "5 2 D Item Fullbody tattoo 33_", // 3 types(Bodies, Fulltattoo, Armcross)
        options: {
          displayName: "Bodies"
        }
       }, 
      // { name: "6 Tattoos 50_", // Fulltattoos and Armcross use None Tattoos
      //   options: {
      //     displayName: "Tattoos"
      //   }
      //  },
      // { name: "7 Bodies Clothing 50_", // Fulltattoos no cloths, Armcross+body3
      //   options: {
      //     displayName: "Clothing"
      //   }
      //  },
      { name: "8 Big Hats 15_",
        options: {
          displayName: "Big Hats"
        }
       }, 
      { name: "9 Head Gear 60_",
        options: {
          displayName: "Head Gear"
        }
       },
      { name: "10 Balaclava accessory 70_",
        options: {
          displayName: "Balaclava accessory"
        }
       },
      { name: "11 Head Bandana 35_",
        options: {
          displayName: "Head Bandana"
        }
       },
    ],
    layerItemsMaxRepeatedTraits: [
      // { name: "Background/Black", layerItemMaxRepeatedTrait: 4 },
      // { name: "Eyeball/Red", layerItemMaxRepeatedTrait: 5 }
    ],
    incompatibleTraits: {
      ...grinRainbowRoseIn,
      ...grinRainbowRose2In, 
    },
    dependentTraits: {
      ...bigHatsDepend,
      ...grinRainbowRoseDepend,
      ...grinRainbowRose2Depend
    }
  }

const armcross_structure = 
  {
    growEditionSizeTo: 50,
    //maxRepeatedTraits: 1,
    layersOrder: [
      { name: "1 Background",
        options: {
          displayName: "Background"
        }
       },
      { name: "2 Balaclava",
        options: {
          displayName: "Balaclava"
        } 
       },
      { name: "3 D Mouths", // D Mouths then L Mouths
        options: {
          displayName: "Mouths"
        }
       },
      { name: "4 D Eyes", // D Eyes then L Eyes
        options: {
          displayName: "Eyes"
        }
       },
      { name: "5 3 D Arms Crossed Bodies  33_", // 3 types(Bodies, Fulltattoo, Armcross)
        options: {
          displayName: "Bodies"
        }
       }, 
      // { name: "6 Tattoos 50_", // Fulltattoos and Armcross use None Tattoos
      //   options: {
      //     displayName: "Tattoos"
      //   }
      //  },
      { name: "7 Bodies Styles 3 Clothing 35_", // Fulltattoos no cloths, Armcross+body3
        options: {
          displayName: "Clothing"
        }
       },
      { name: "8 Big Hats 15_",
        options: {
          displayName: "Big Hats"
        }
       }, 
      { name: "9 Head Gear 60_",
        options: {
          displayName: "Head Gear"
        }
       },
      { name: "10 Balaclava accessory 70_",
        options: {
          displayName: "Balaclava accessory"
        }
       },
      { name: "11 Head Bandana 35_",
        options: {
          displayName: "Head Bandana"
        }
       },
    ],
    layerItemsMaxRepeatedTraits: [
      // { name: "Background/Black", layerItemMaxRepeatedTrait: 4 },
      // { name: "Eyeball/Red", layerItemMaxRepeatedTrait: 5 }
    ],
    incompatibleTraits: {
      ...grinRainbowRoseIn,
      ...grinRainbowRose2In, 
    },
    dependentTraits: {
      ...bigHatsDepend,
      ...grinRainbowRoseDepend,
      ...grinRainbowRose2Depend
    }
  }

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  // body 1 + cloth no neck chain
  // body 1 No cloth + neck chain

  // body 2

  // body 3
  body_2, // 2030 - 80 = 1950 ***2925
  body_3, // 1950 + 650 = 2600  **** 1000 + 2925 = 3925
  body_3_hood_up, // 2650 *** 4000
  body_1_cloth, // 2600  + 1560 = 4160 , 5500 *** 5900
  body_1_chain, // 4160 + 2340 = 6500 , now can generate to 6275 (left 225)

  // decreased 267 from above to leave space for switch set
  // more too add 6767 - 6500 = 267


  //body_2_switch , 80 , 6500 + 80 = 6580
  body_2_switch,
  //body_3_switch , 27 , 6580 + 27 = 6607
  body_3_switch,
  //body_1_cloth_switch , 64 , 6607 + 64 = 6671
  body_1_cloth_switch,
  //body_1_chaih_swtich , 96 , 6671 + 96 = 6767
  body_1_chain_switch,

];

/* Example of configuration settings
const layerConfigurations = [
  {
    growEditionSizeTo: 2,
    maxRepeatedTraits: 1,
    layersOrder: [
      { name: "Background" },
      { name: "Eyeball" },
      { name: "Eye color", maxRepeatedTrait: 2 },
      { name: "Iris" },
      { name: "Shine", layerItemsMaxRepeatedTrait: 4 },
      { name: "Bottom lid", maxRepeatedTrait: 3 },
      { name: "Top lid" },
    ],
    layerItemsMaxRepeatedTraits: [
      { name: "Background/Black", layerItemMaxRepeatedTrait: 4 },
      { name: "Eyeball/Red", layerItemMaxRepeatedTrait: 5 }
    ],
    incompatibleTraits: {
      "Eye color/Cyan": [
        "Eyeball/Red",
      ],
      "Iris/Large": [
        "Bottom lid/High",
        "Top lid/High"
      ],
    },
    dependentTraits: {
      "Eye color/Cyan": [
        "Eyeball/White",
      ],
      "Background/Blue": [
        "Eyeball/Red",
        "Top lid/low"
      ],
    }
  },
];
*/

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 3000,
  height: 3000,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

// These are additional items that will be added to each NFT. You can remove them or add new ones as well if needed.
// Uncomment the lines if you would like to use these and update the details.
const extraMetadata = {
  //creator: "NFT_CREATOR_HERE", // Add the creator of the NFT collection here. Ex. The Peanut Gallery And Co
  //external_url: "YOUR_WEBSITE_URL_HERE"  // Add your website URL here. This will be added to each of your NFTs. Ex. https://thepeanutgalleryandco.co.za/
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 1000000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
