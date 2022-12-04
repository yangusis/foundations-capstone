require('dotenv').config()
const {CONNECTION_STRING} = process.env
const { SequelizeScopeError } = require('sequelize')
const Sequelize = require("sequelize")

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

// unfortunately deploying on heroku ended up having issues, and wasn't sure how to utilize SQL without it

module.exports = {
    seed: (req, res) => {
        sequelize.query(`
            drop table if exists scores;

            create table movieScores (
                id integer primary key,
                score integer
            );

            create table gameScores (
                id integer primary key,
                score integer
            );

            create table cardScores (
                id integer primary key,
                score integer
            );

            insert into movieScores (score) values
            (0);
        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    },
    addMovieScore: (req, res) => {
        let { highScore } = req.highScore
        sequelize.query(`
        insert into movieScores (score) values
        (${highScore});
        `).then((dbRes) => {
            res.status(200).send(dbRes[0])
        }).catch(err => console.log('error adding score,', err))
    },
    movieMaxScore: (req, res) => {
        sequelize.query(`
        select max(score)
        from movieScores;
        `).then((dbRes) => {
            res.status(200).send(dbRes[0])
        }).catch(err => console.log('error fetching score,', err))
    }
}