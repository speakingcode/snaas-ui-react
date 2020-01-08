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

describe('App', ()=> {

  it('renders without crashing', ()=> {
    mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <App/>
      </MemoryRouter>
    )
  })

  it('displays the menu', ()=> {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <App/>
      </MemoryRouter>
    )
    expect(wrapper.find(Menu)).toHaveLength(1)
  })

  describe('routes', ()=> {

    it('shows Home when path is /', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={[ '/' ]}>
          <App/>
        </MemoryRouter>
      )
      expect(wrapper.find(Home)).toHaveLength(1)
    })

    it('shows Discography when path is /discography', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={[ '/discography' ]}>
          <App/>
        </MemoryRouter>
      )
      expect(wrapper.find(Discography)).toHaveLength(1)
    })

    it('shows Nicknames when path is /nicknames', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={[ '/nicknames' ]}>
          <App/>
        </MemoryRouter>
      )
      expect(wrapper.find(Nicknames)).toHaveLength(1)
    })

    it('shows DoggPound when path is /doggpound', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={[ '/doggpound' ]}>
          <App/>
        </MemoryRouter>
      )
      expect(wrapper.find(DoggPound)).toHaveLength(1)
    })

    it('shows ApiDocs when path is /api-docs', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={[ '/api-docs' ]}>
          <App/>
        </MemoryRouter>
      )
      expect(wrapper.find(ApiDocs)).toHaveLength(1)
    })

    it('shows Apps when path is /apps', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={[ '/apps' ]}>
          <Apps/>
        </MemoryRouter>
      )
      expect(wrapper.find(Apps)).toHaveLength(1)
    })

    it('shows PageNotFound when path is unknown', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={[ '/unknown' ]}>
          <App/>
        </MemoryRouter>
      )
      expect(wrapper.find(PageNotFound)).toHaveLength(1)
    })
  })
})
