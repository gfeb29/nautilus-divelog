const immersionModel = require('../model/immersionModel');
const { getAllData, createImmersion, updateImmersion } = require('./nautilusController');

const Immersion = require('../model/immersionModel');

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

describe('Given a createImmersion function', () => {
  test('Then should call json', () => {
    const req = {
      body: null
    };

    const res = {
      json: jest.fn()
    };

    createImmersion(req, res);

    expect(res.json).toHaveBeenCalled();
  });
});

describe('Given a updateImmersion function', () => {
  let res;
  let req;

  beforeEach(() => {
    res = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn()
    };
  });

  test('Then should call res.json with param', async () => {
    req = {
      params: {
        immersionParam: '60531536b4fd0238108b6f42'
      }
    };

    Immersion.findByIdAndUpdate.mockReturnValueOnce({ exec: jest.fn() });

    await updateImmersion(req, res);

    expect(res.json).toHaveBeenCalled();
  });
});
