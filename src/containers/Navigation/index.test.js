import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import { MemoryRouter } from 'react-router-dom';
import Navigation from './';
import NavLink from '../NavLink';

describe(Navigation, () => {
  const component = mount(
    <MemoryRouter location="someLocation" context={{}}>
      <Navigation>
        <NavLink to="/home" label="Home" />
        <NavLink to="/about" label="About" />
      </Navigation>
    </MemoryRouter>
  )

  it('renders and matches our snapshot', () => {
    const component = renderer.create(
      <MemoryRouter location="someLocation" context={{}}>
        <Navigation>
          <NavLink to="/home" label="Home" />
          <NavLink to="/about" label="About" />
        </Navigation>
      </MemoryRouter>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('contains a `ul` subcomponent with a class `navigation`', () => {
    expect(component.find('ul')).toHaveLength(1);
    expect(component.find('ul').hasClass('navigation')).toEqual(true);
  });

  it('renders children', () => {
    expect(component.find('li')).toHaveLength(2);
  });
});
