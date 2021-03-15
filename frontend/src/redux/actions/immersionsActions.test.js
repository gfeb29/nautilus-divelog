import axios from 'axios';
import actionTypes from './actionTypes';
import loadImmersions from './immersionActions';
import configureStore from '../store/configureStore';

jest.mock('axios');

describe('Given a loadImmersions function', () => {
  describe('When is called', () => {
    let store;
    beforeEach(() => {
      store = configureStore;
    });

    test('Then axios is called', () => {
      axios.get = jest.fn();

      loadImmersions()();

      expect(axios.get).toHaveBeenCalled();
    });

    test('And dispatch is called with the data from axios', async () => {
      axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({
        data: [{ name: 'fulanito' }]
      }));

      store.dispatch = jest.fn();

      const dispatchFunction = loadImmersions();

      await dispatchFunction(store.dispatch);

      expect(store.dispatch).toHaveBeenCalledWith({
        type: actionTypes.LOAD_IMMERSIONS,
        immersions: [{ name: 'fulanito' }]
      });
    });
  });
});
