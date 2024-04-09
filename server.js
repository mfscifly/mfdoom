const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api/:title', (req, res) => {
    const albumTitle = req.params.title.toLowerCase();
    if (doom[albumTitle]){
        res.json(doom[albumTitle])
    } else {
        res.json(doom['unknown']);
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on ${PORT}, betta go catch it!`);
});

//data

let doom = {
    'operation: doomsday': {
        title: 'Operation: Doomsday',
        artist: 'MF DOOM',
        releaseYear: 1999,
        trackList: [
            "The Time We Faced DOOM (Skit)",
            "Doomsday (featuring Pebbles the Invisible Girl)",
            "Rhymes Like Dimes (featuring DJ Cucumber Slice)",
            "The Finest (featuring Tommy Gunn)",
            "Back in the Days (Skit)",
            "Go with the Flow",
            "Tick, Tick… (featuring MF Grimm)",
            "Red and Gold (featuring King Ghidra)",
            "The Hands of DOOM (Skit)",
            "Who You Think I Am? (featuring X-Ray, Rodan, Megalon, K.D., King Ghidra, and Kong[a])",
            "DOOM, Are You Awake? (Skit)",
            "Hey!",
            "Operation: Greenbacks (featuring Megalon)",
            "The Mic",
            "The Mystery of DOOM (Skit)",
            "Dead Bent",
            "Gas Drawls",
            "?(featuring Kurious)",
            "Hero vs. Villain (Epilogue) (featuring E.Mason)"
        ]
    },
    'take me to your leader': {
        title: 'Take Me To Your Leader',
        artist: 'King Geedorah',
        releaseYear: 2003,
        trackList: [
            "Fazers",
            "Fastlane (featuring Biolante)",
            "Krazy World (featuring Gigan)",
            "The Final Hour (featuring MF DOOM)",
            "Monster Zero",
            "Next Levels (featuring Lil' Sci, ID 4 Winds, Empress Stahhr and Stacy Epps)",
            "No Snakes Alive (featuring Jet-Jaguar and Rodan)",
            "Anti-Matter (featuring MF DOOM and Mr. Fantastik)",
            "Take Me to Your Leader",
            "Lockjaw (featuring Trunks)",
            "I Wonder (featuring Hassan Chop)",
            "One Smart N*****",
            "The Fine Print"
        ]
    },
    'mm..food': {
        title: 'MM..FOOD',
        artist: 'MF DOOM',
        releaseYear: 2004,
        trackList: [
            "Beef Rapp",
            "Hoe Cakes",
            "Potholderz (featuring Count Bass D)",
            "One Beer",
            "Deep Fried Frenz",
            "Poo-Putt Platter",
            "Fillet-O-Rapper",
            "Gumbo",
            "Fig Leaf Bi-Carbonate",
            "Kon Karne",
            "Guinnessez (featuring Angelika and 4ize)",
            "Kon Queso",
            "Rapp Snitch Knishes(featuring Mr. Fantastik)" ,
            "Vomitspit",
            "Kookies"
        ]
    },
    'vaudeville villain': {
        title: 'Vaudeville Villain',
        artist: 'Viktor Vaughn',
        releaseYear: 2003,
        trackList: [
            "Overture",
            "Vaudeville Villain",
            "Lickupon",
            "The Drop",
            "Lactose and Lecithin",
            "A Dead Mouse",
            "Open Mic Nite, Pt. 1 (featuring Lord Sear, Brother Sambuca, Rodan as Dr. Moreau and Louis Logic)",
            "RaeDawn",
            "Let Me Watch (featuring Apani B as Nikki)",
            "Saliva",
            "Modern Day Mugging",
            "Open Mic Nite, Pt. 2 (featuring Lord Sear, AJ Ready Wright and Creature)",
            "Never Dead (featuring M. Sayyid as Curis Strifer)",
            "PopSnot",
            "Mr. Clean",
        	"G.M.C.",
            "Change the Beat (Hidden Track) (performed by MF DOOM)"
        ]
    },
    'vv:2 venemous villain': {
        title: 'VV:2 Venemous Villain',
        artist: 'Viktor Vaughn',
        releaseYear: 2004,
        trackList: [
            "Viktormizer (Intro)",
            "Back End",
            "Fall Back/Titty Fat",
            "DOOM on Vik",
            "R.A.P. G.A.M.E. (featuring Manchild, Iz-Real & DOOM)",
            "Dope Skill (featuring Carl Kavorkian)",
            "Doper Skiller (featuring Kool Keith)",
            "Haberdashery (Interlude)",
            "Ode to Road Rage",
            "Bloody Chain (featuring Poison Pen)",
            "Strange New Day (Interlude)",
            "Pop Quiz (Bonus Extra Credit Remix)"    
        ]
    },
    'madvillainy': {
        title: 'Madvillainy',
        artist: 'Madvillain',
        releaseYear: 2004,
        trackList: [
            "The Illest Villains",
            "Accordion",
            "Meat Grinder",
            "Bistro",
            "Raid (featuring M.E.D. aka Medaphoar)",
            "America's Most Blunted (featuring Quasimoto)",
            "Sickfit",
            "Rainbows",
            "Curls",
            "Do Not Fire!",
            "Money Folder",
            "Shadows of Tomorrow (featuring Quas)",
            "Operation Lifesaver AKA Mint Test",
            "Figaro",
            "Hardcore Hustle (featuring Wildchild)",
            "Strange Ways",
            "Fancy Clown (featuring Viktor Vaughn)",
            "Eye (featuring Stacy Epps)",
            "Supervillain Theme",
            "All Caps",
            "Great Day",
            "Rhinestone Cowboy"
        ]
    },
    'born like this': {
        title: 'BORN LIKE THIS',
        artist: 'DOOM',
        releaseYear: 2009,
        trackList: [
            "Supervillain Intro",
            "Gazzillion Ear",
            "Ballskin",
            "Yessir! (featuring Raekwon)",
            "Absolutely",
            "Rap Ambush",
            "Lightworks",
            "Batty Boyz",
            "Angelz (featuring Tony Starks)",
            "Cellz",
            "Still Dope (featuring Empress Stahhr tha Femcee)",
            "Microwave Mayo",
            "More Rhymin'",
            "That's That",
            "Supervillainz (featuring Kurious, Mobonix, Posdnous, Prince Paul & Slug)",
            "Bumpy's Message (featuring Bumpy Knuckles)",
            "Thank Yah"
        ]
    },
    'the mouse and the mask': {
        title: 'The Mouse and the Mask',
        artist: 'Danger Doom',
        releaseYear: 2005,
        trackList: [
            "El Chupa Nibre",
            "Sofa King",
            "The Mask",
            "Perfect Hair",
            "Benzie Box",
            "Old School",
            "ATHF",
            "Basket Case",
            "No Names",
            "Crosshairs",
            "Mince Meat",
            "Vats of Urine",
            "Space Ho's",
            "Bada Bing"
        ]
    },
    'unknown': {
        title: 'UNKNOWN',
        artist: 'UNKOWN',
        releaseYear: 0,
        trackList: [
            'none'
        ]
    }
};

