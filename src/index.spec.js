import React from 'react';
import {shallow} from 'enzyme';

describe('testing with jest and enzyme', () => {

  test('it works', () => {
    const div = shallow(<div>it works</div>);

    expect(div.text()).toEqual('it works');
  })
})
