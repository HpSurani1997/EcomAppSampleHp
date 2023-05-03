/**
 * @format
 */

import 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {fireEvent, render, screen} from '@testing-library/react-native';

//Components
import Trending from '../src/components/Trending';
import Categories from '../src/components/Categories';

const navigationRender = (component: JSX.Element) => {
  render(<NavigationContainer>{component}</NavigationContainer>);
};

describe('Navigation component render', () => {
  it('Trending Screen Navigate', () => {
    navigationRender(<Trending />);
    const navText = screen.getByTestId('trending-nav');

    // test fire event of text
    fireEvent(navText, 'press');

    // test trending list
    const trendingItem = screen.getByTestId('trendingItem0');
    expect(trendingItem).toBeTruthy();

    // test fire event of trendingItem
    fireEvent(trendingItem, 'press');

      // test component when pass props
      navigationRender(<Trending onScreen={true}/>);
  });

  it('Categories Screen Navigate', () => {
    navigationRender(<Categories />);
    const navText = screen.getByTestId('categories-nav');
    expect(navText).toBeTruthy();

    // test fire event of text
    fireEvent(navText, 'press');

    // test component when pass props
    navigationRender(<Categories onScreen={true}/>);
  });
});
