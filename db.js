const Sequelize = require('sequelize')

const connection = new Sequelize('sequelize_node', 'nodejs', 'password', {
    host: 'localhost',
    dialect: 'postgres'
    // dialect: 'sqlite',
    // storage: 'db.sqlite'
})

async function init() {
    try {
        await connection.sync({
            // force: true,
            logging: console.log
        });
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
init()

module.exports = connection