import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import PlayerCard from './components/playerCard';


afterEach(rtl.cleanup);

it('renders without crashing', () => {
  rtl.render(<App />);
});

it("Players are defined", () => {
  const players = <PlayerCard />;
  expect(players).toBeDefined();
  expect(players).not.toBeUndefined();
  expect(players).not.toBeFalsy();
});

it("Renders Womens World Cup h1", () => {
  const wrapper = rtl.render(<App />);
  expect(wrapper.getByText(/women's world cup/i));
});

test("useLightMode is defined", () => {
  const lightmode = <useLightMode />;
  expect(lightmode).toBeDefined();
  expect(lightmode).not.toBeUndefined();
  expect(lightmode).not.toBeFalsy();
});	

