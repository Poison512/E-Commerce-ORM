require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      //pool:{max:15, min:5, idle:20000, evict:15000, acquire:30000 },
      dialectOptions: {

        decimalNumbers: true,
      },
    });

module.exports = sequelize;
