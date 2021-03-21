import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { HistoryComponent, mapDispatchToProps, mapStatetoProps } from './History';

describe('Given a Header function', () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  const actions = { loadImmersions: jest.fn() };
  const immersionHistory = [{}];

  describe('When is invoked', () => {
    test('Then will display a card', () => {
      act(() => {
        render(
          <BrowserRouter>
            <HistoryComponent actions={actions} immersionHistory={immersionHistory} />
          </BrowserRouter>, container
        );
      });

      const cont = container.querySelectorAll('h5');

      expect(cont.length).toBe(1);
    });
  });
});

describe('Given a mapDispatchtoProps function', () => {
  describe('When is invoked', () => {
    test('Then should return an object', () => {
      expect(mapDispatchToProps()).toBe({
        actions: {}
      });
    });
  });
});

describe('Given a mapStateToPorps function', () => {
  describe('When is invoked', () => {
    test('Then should return an object', () => {
      expect(mapStatetoProps()).toEqual({});
    });
  });
});
