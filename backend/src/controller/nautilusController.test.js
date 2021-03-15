const immersionModel = require('../model/immersionModel');
const { getAllData } = require('./nautilusController');

jest.mock('../model/immersionModel');

describe('Given a getAllData', () => {
  let res;
  let req;

  beforeEach(() => {
    res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn()
    };

    req = {
      body: null
    };
  });

  test('Then should call res.send', () => {
    immersionModel.find.mockImplementationOnce((query, callback) => callback(true));

    getAllData(req, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('Then should call res.json', () => {
    immersionModel.find.mockImplementationOnce((query, callback) => callback(false, [1, 2, 3]));

    getAllData(req, res);

    expect(res.json).toHaveBeenCalledWith([1, 2, 3]);
    expect(res.json).toHaveBeenCalled();
  });
});
