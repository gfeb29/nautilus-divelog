import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import NavigationMenu from './NavigationMenu';

describe('Gicen a NavigationMenu function', () => {
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
    test('Then will display two ancord', () => {
      act(() => {
        render(<BrowserRouter><NavigationMenu /></BrowserRouter>, container);
      });

      const cont = container.querySelectorAll('a');

      expect(cont.length).toEqual(2);
    });
  });
});
