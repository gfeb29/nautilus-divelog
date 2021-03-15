import actionTypes from '../actions/actionTypes';
import immersionReducer from './immersionReducer';

describe('Given a immersionReducer function', () => {
  describe('When it\'s called with a LOAD_IMMERSIONS action', () => {
    test('Then an array should be returned with all immersions data', () => {
      const action = {
        type: actionTypes.LOAD_IMMERSIONS,
        immersion: {}
      };

      const response = immersionReducer([], action);

      expect(response).toEqual({});
    });
  });
});
