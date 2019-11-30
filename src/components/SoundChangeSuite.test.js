import React from 'react';
import ReactDOM from 'react-dom';
import SoundChangeSuite from './SoundChangeSuite';
import renderer from 'react-test-renderer';
import { exportAllDeclaration } from '@babel/types';
import {render, fireEvent} from '@testing-library/react';
import extendExpect from '@testing-library/jest-dom/extend-expect'

it('renders SoundChangeSuite without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SoundChangeSuite />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('SoundChangeSuite', () => {
  it('renders the correct subtitle', () => {
    const { getByTestId } = render(<SoundChangeSuite epoch={{name:'Epoch Name', changes:['sound change rule']}}/>);
    expect(getByTestId('Epoch Name_SoundChangeSuite')).toHaveTextContent('Epoch Name');
  });

  it('renders a suite of soundchanges', () => {
    const { getByTestId } = render(<SoundChangeSuite epoch={{name:'Epoch Name', changes:['sound>change/environment']}}/>);
    expect(getByTestId('Epoch Name_SoundChangeSuite_changes')).toHaveFormValues({changes: 'sound>change/environment'})
  })
});