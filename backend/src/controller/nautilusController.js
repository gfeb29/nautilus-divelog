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

function createImmersion(req, res) {
  const newImmersion = new Immersion(req.body);

  newImmersion.save();

  res.json(newImmersion);
}

async function updateImmersion(req, res) {
  // eslint-disable-next-line no-underscore-dangle
  const id = req.params.immersionParam || req.body._id;
  try {
    const updateImmersionType = await Immersion.findByIdAndUpdate(id, req.body.type, { new: true });
    res.json(updateImmersionType);
  } catch (error) {
    res.status(500);
    res.send('There was an error updating');
  }
}

async function deleteImmersion(req, res) {
  const id = req.params.immersionParam;
  const deleted = await Immersion.findByIdAndDelete(id);
  res.send(deleted);
}

module.exports = {
  getAllData,
  createImmersion,
  updateImmersion,
  deleteImmersion
};
