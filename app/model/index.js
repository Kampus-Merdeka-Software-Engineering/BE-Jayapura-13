const sequelize = require('sequelize')
const mysql = require('mysql2')

// const connection = new sequelize.Sequelize('nama database', 'root', 'password', {
//     host: 'localhost',
//     dialect: 'mysql',
//     logging: false
// })

const connection = new sequelize.Sequelize('krisna_test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

module.exports = connection