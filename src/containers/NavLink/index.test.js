import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import { MemoryRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavLink from './';

describe(NavLink, () => {
  const component = mount(
    <MemoryRouter location="someLocation" context={{}}>
      <NavLink to="someLocation" />
    </MemoryRouter>
  );

  it('renders and matches our snapshot', () => {
    const component = renderer.create(
      <MemoryRouter location="someLocation" context={{}}>
        <NavLink to="someLocation" />
      </MemoryRouter>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('contains a `li` subcomponent with a class `navigation-link`', () => {
    expect(component.find('li')).toHaveLength(1);
    expect(component.find('li').hasClass('navigation-link')).toEqual(true);
  });

  it('contains an `Link` subcomponent', () => {
    expect(component.find(Link)).toHaveLength(1);
  });

  it('contains an `a` subcomponent', () => {
    expect(component.find('a')).toHaveLength(1);
  });
});
