// ratings based on gamefaqs user rating
const games = [
    {
        id: 1,
        name: 'Super Mario Bros. 3',
        rating: 4.54,
        img: 'https://www.mobygames.com/images/covers/l/16093-super-mario-bros-3-nes-front-cover.jpg'
    },
    {
        id: 2,
        name: 'Grand Theft Auto V (PC)',
        rating: 4.3,
        img: 'https://assets-prd.ignimgs.com/2021/12/17/gta-5-button-2021-1639777058682.jpg'
    },
    {
        id: 3,
        name: 'GoldenEye 007',
        rating: 4.32,
        img: 'https://www.mobygames.com/images/covers/l/6129-goldeneye-007-nintendo-64-front-cover.jpg'
    },
    {
        id: 4,
        name: 'The Legend of Zelda: Ocarina of Time',
        rating: 4.59,
        img: 'https://www.mobygames.com/images/covers/l/56747-the-legend-of-zelda-ocarina-of-time-nintendo-64-front-cover.jpg'
    },
    {
        id: 5,
        name: 'Red Dead Redemption 2 (PS4)',
        rating: 4.31,
        img: 'https://www.mobygames.com/images/covers/l/517698-red-dead-redemption-ii-playstation-4-front-cover.png'
    },
    {
        id: 6,
        name: 'The Elder Scrolls V: Skyrim (PC)',
        rating: 4.3,
        img: 'https://www.mobygames.com/images/covers/l/473949-the-elder-scrolls-v-skyrim-special-edition-playstation-4-manual.jpg'
    },
    {
        id: 7,
        name: 'Minecraft (PC)',
        rating: 4.3,
        img: 'https://www.mobygames.com/images/covers/l/497174-minecraft-nintendo-switch-front-cover.jpg'
    },
    {
        id: 8,
        name: 'Elden Ring (PS5)',
        rating: 4.36,
        img: 'https://www.mobygames.com/images/covers/l/775869-elden-ring-xbox-one-front-cover.jpg'
    },
    {
        id: 9,
        name: 'Final Fantasy VII',
        rating: 4.49,
        img: 'https://www.mobygames.com/images/covers/l/659588-final-fantasy-vii-android-front-cover.png'
    },
    {
        id: 10,
        name: 'Pong',
        rating: 3.63,
        img: 'https://www.mobygames.com/images/shots/l/916070-pong-apple-ii-screenshot-pong-mode.png'
    },
    {
        id: 11,
        name: 'Pokemon Yellow Version',
        rating: 4.22,
        img: 'https://www.mobygames.com/images/covers/l/72185-pokemon-yellow-version-special-pikachu-edition-game-boy-front-cover.jpg'
    },
    {
        id: 12,
        name: 'Stardew Valley',
        rating: 4.34,
        img: 'https://www.researchgate.net/publication/342704239/figure/fig1/AS:960471637192707@1606005691630/Stardew-Valley-promotional-image-Sourcewwwstardewvalleynet-Image-copyright-Eric-Barone.jpg'
    },
    {
        id: 13,
        name: 'Cave Story',
        rating: 4.41,
        img: 'https://cdn2.unrealengine.com/egs-cavestory-nicalisincstudiopixel-s1-2560x1440-633664379.jpg'
    },
    {
        id: 14,
        name: 'Resident Evil 4',
        rating: 4.55,
        img: 'https://m.media-amazon.com/images/M/MV5BOGVkNjEyN2EtMjRiYi00ZWY1LThkOWItZTNkNjA0MTE4YmRhXkEyXkFqcGdeQXVyNjUxNDQwMzA@._V1_.jpg'
    },
    {
        id: 15,
        name: 'Wii Sports',
        rating: 3.62,
        img: 'https://m.media-amazon.com/images/M/MV5BODI5NGUyZjYtZGI5NS00OTNlLWJmZjUtMzc1MDlkMTUyMzFjXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg'
    },
    {
        id: 16,
        name: 'The Sims 4',
        rating: 3.54,
        img: 'https://www.mobygames.com/images/covers/l/684312-the-sims-4-macintosh-front-cover.png'
    },
    {
        id: 17,
        name: 'Halo 2',
        rating: 4.14,
        img: 'https://m.media-amazon.com/images/M/MV5BOWNiMDM1N2UtMjZkZi00NjhlLTllNzMtZjEzNDk3NDBiZGVhXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg'
    },
    {
        id: 18,
        name: 'Animal Crossing: New Horizons',
        rating: 4.28,
        img: 'https://www.mobygames.com/images/covers/l/669578-animal-crossing-new-horizons-nintendo-switch-front-cover.jpg'
    },
    {
        id: 19,
        name: 'Diablo II',
        rating: 4.28,
        img: 'https://www.mobygames.com/images/covers/l/270285-diablo-ii-macintosh-front-cover.jpg'
    },
    {
        id: 20,
        name: 'Yu-Gi-Oh! The Falsebound Kingdom',
        rating: 3.22,
        img: 'https://www.mobygames.com/images/covers/l/142730-yu-gi-oh-the-falsebound-kingdom-gamecube-front-cover.jpg'
    },
]

export { games }