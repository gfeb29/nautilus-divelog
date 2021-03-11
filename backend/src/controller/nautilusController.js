const dataDB = require('../model/immersionModel');

function getAllData(req, res) {
  const query = {};

  dataDB.find(query, (finddataDBError, dataDBArray) => {
    if (finddataDBError) {
      res.status(404);
      res.send('There was an error finding data');
    } else {
      res.json(dataDBArray);
    }
  });
}

module.exports = {
  getAllData
};
