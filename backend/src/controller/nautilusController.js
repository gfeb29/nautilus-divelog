const Immersion = require('../model/immersionModel');

function getAllData(req, res) {
  const query = {};

  Immersion.find(query, (finddataDBError, dataDBArray) => {
    if (finddataDBError) {
      res.status(404);
      res.send('There was an error finding data');
    } else {
      res.json(dataDBArray);
    }
  });
}

async function getOneImmersion(req, res) {
  const { locationId } = req.params;

  try {
    const diveByLocation = await Immersion.findOne({ location: locationId }).exec();
    res.json(diveByLocation);
  } catch (error) {
    res.status(500);
    res.send(`No immersion with that ${locationId}${error}`);
  }
}

function createImmersion(req, res) {
  const newImmersion = new Immersion(req.body);

  newImmersion.save();

  res.json(newImmersion);
}

async function updateImmersion(req, res) {
  const id = req.params.immersionParam || req.body.id;
  try {
    const updateImmersionType = await Immersion.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updateImmersionType);
  } catch (error) {
    res.status(500);
    res.send('There was an error updating');
  }
}

async function deleteImmersion(req, res) {
  const id = req.params.immersionParam;
  try {
    const deleted = await Immersion.findByIdAndDelete(id);
    res.json(deleted);
  } catch (error) {
    res.status(500);
    res.send(`Error deleting Immersion ${error}`);
  }
}

module.exports = {
  getAllData,
  getOneImmersion,
  createImmersion,
  updateImmersion,
  deleteImmersion
};
