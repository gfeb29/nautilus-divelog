import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

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

  describe('When is invoked', () => {
    test('Then will display a logo', () => {
      act(() => {
        render(<BrowserRouter><Header /></BrowserRouter>, container);
      });

      const cont = container.querySelectorAll('h5');

      expect(cont.length).toBe(1);
    });
  });
});
