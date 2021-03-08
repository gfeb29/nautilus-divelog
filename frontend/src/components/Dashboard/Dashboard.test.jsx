import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Dashboard from './Dashboard';

describe('Given a Dashboard function', () => {
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

  describe('When is invoked', () => {
    test('Then will dislay a button', () => {
      act(() => {
        render(<Dashboard />, container);
      });

      const cont = container.querySelectorAll('button');

      expect(cont.length).toBe(1);
    });
  });
});
