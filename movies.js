// ratings based on imdb
const movies = [
    {
        id: 1,
        name: 'Fury',
        rating: 7.5,
        img: 'https://m.media-amazon.com/images/M/MV5BMjA4MDU0NTUyN15BMl5BanBnXkFtZTgwMzQxMzY4MjE@._V1_.jpg'
    },
    {
        id: 2,
        name: 'The Equalizer',
        rating: 7.2,
        img: 'https://m.media-amazon.com/images/M/MV5BMTQ2MzE2NTk0NF5BMl5BanBnXkFtZTgwOTM3NTk1MjE@._V1_.jpg'
    },
    {
        id: 3,
        name: '5 Centimeters Per Second',
        rating: 7.5,
        img: 'https://m.media-amazon.com/images/M/MV5BODJhZDU1MDYtMDQ0NS00N2JmLWI2ZDAtMGNmN2RmNWJhNzQ5L2ltYWdlXkEyXkFqcGdeQXVyNjY1OTY4MTk@._V1_.jpg'
    },
    {
        id: 4,
        name: 'A Silent Voice',
        rating: 8.1,
        img: 'https://m.media-amazon.com/images/M/MV5BZGRkOGMxYTUtZTBhYS00NzI3LWEzMDQtOWRhMmNjNjJjMzM4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
    },
    {
        id: 5,
        name: 'Smile',
        rating: 6.7,
        img: 'https://m.media-amazon.com/images/M/MV5BZjE2ZWIwMWEtNGFlMy00ZjYzLWEzOWEtYzQ0MDAwZDRhYzNjXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg'
    },
    {
        id: 6,
        name: 'Happy Gilmore',
        rating: 7,
        img: 'https://m.media-amazon.com/images/M/MV5BZWI2NjliOTYtZjE1OS00YzAyLWJjYTQtYWNmZTQzMTQzNzVjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'
    },
    {
        id: 7,
        name: 'White Chicks',
        rating: 5.7,
        img: 'https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/chameleon/title-movie/232398_WhiteChicks_2004_1400x2100_US.jpg?itok=9Yj9Nt9o'
    },
    {
        id: 8,
        name: 'Submarine',
        rating: 7.3,
        img: 'https://m.media-amazon.com/images/M/MV5BMTQ5ODMxNTIyNV5BMl5BanBnXkFtZTcwNjQ1ODgyNQ@@._V1_.jpg'
    },
    {
        id: 9,
        name: 'Pineapple Express',
        rating: 6.9,
        img: 'https://m.media-amazon.com/images/M/MV5BMTY1MTE4NzAwM15BMl5BanBnXkFtZTcwNzg3Mjg2MQ@@._V1_.jpg'
    },
    {
        id: 10,
        name: 'Horrible Bosses',
        rating: 6.9,
        img: 'https://m.media-amazon.com/images/M/MV5BNzYxNDI5Njc5NF5BMl5BanBnXkFtZTcwMDUxODE1NQ@@._V1_FMjpg_UX1000_.jpg'
    },
    {
        id: 11,
        name: 'The Notebook',
        rating: 7.8,
        img: 'https://m.media-amazon.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_.jpg'
    },
    {
        id: 12,
        name: 'Spirited Away',
        rating: 8.6,
        img: 'https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
    },
    {
        id: 13,
        name: 'Rocky',
        rating: 8.1,
        img: 'https://m.media-amazon.com/images/M/MV5BNTBkMjg2MjYtYTZjOS00ODQ0LTg0MDEtM2FiNmJmOGU1NGEwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg'
    },
    {
        id: 14,
        name: 'A Quiet Place',
        rating: 7.5,
        img: 'https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_.jpg'
    },
    {
        id: 15,
        name: 'Guardians of the Galaxy',
        rating: 8,
        img: 'https://m.media-amazon.com/images/M/MV5BZTkwZjU3MTctMGExMi00YjU5LTgwMDMtOWNkZDRlZjQ4NmZhXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg'
    },
    {
        id: 16,
        name: 'The Incredibles',
        rating: 8,
        img: 'https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_.jpg'
    },
    {
        id: 17,
        name: 'Night at the Museum',
        rating: 6.4,
        img: 'https://m.media-amazon.com/images/M/MV5BMTQyOTM4MDMxN15BMl5BanBnXkFtZTcwODg5NTQzMw@@._V1_.jpg'
    },
    {
        id: 18,
        name: 'Spider-Man',
        rating: 7.4,
        img: 'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg'
    },
    {
        id: 19,
        name: 'The Wizard of Oz',
        rating: 8.1,
        img: 'https://m.media-amazon.com/images/M/MV5BNjUyMTc4MDExMV5BMl5BanBnXkFtZTgwNDg0NDIwMjE@._V1_FMjpg_UX1000_.jpg'
    },
    {
        id: 20,
        name: 'Scott Pilgrim vs. the World',
        rating: 7.5,
        img: 'https://m.media-amazon.com/images/M/MV5BYWQ2OGIyZTgtZmY5MC00NzY3LTg5NDYtMjdkZjgxZmFhZTMzXkEyXkFqcGdeQXVyOTA3ODI3NDA@._V1_FMjpg_UX1000_.jpg'
    },
]

export { movies }