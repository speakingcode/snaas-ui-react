import React                from 'react';

import { MemoryRouter }     from 'react-router-dom'

import { shallow, mount }   from 'enzyme';

import App                  from './App'

import { Home }             from './Home'
import { Discography }      from './Discography'
import { Nicknames }        from './Nicknames'
import { DoggPound }        from './DoggPound'
import { ApiDocs }          from './ApiDocs'
import { Apps }             from './Apps'
import { Menu }             from './Menu'
import { PageNotFound }     from './PageNotFound'

describe('Menu', ()=> {

  it('renders without crashing', ()=> {
    mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <Menu/>
      </MemoryRouter>
    )
  })
})
