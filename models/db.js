const MongoClient = require('mongodb').MongoClient;
const dbConfig = require('../config/db.config.js');

const url = `mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`;

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.log('-----Cannot connect to the database!-----', err);
    process.exit();
  }

  console.log('>>>>>>Connected to the database!<<<<<<');

  const db = client.db(dbConfig.DB);

  client.close();
});
