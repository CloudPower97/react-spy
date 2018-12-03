import React from 'react'
import { shallow, mount } from 'enzyme'
import Scrollspy from '../src/Scrollspy'

describe('Scollspy', () => {
  const scrollspy = (
    <Scrollspy items={['first-section', 'second-section']}>
      <ul>
        <li>
          <a href="#first-section">First Section</a>
        </li>
        <li>
          <a href="#second-section">Second Section</a>
        </li>
      </ul>
    </Scrollspy>
  )

  it('should render', () => {
    expect(shallow(scrollspy)).toMatchSnapshot()
  })

  describe('should initializes', () => {
    it('with an empty state', () => {
      expect(shallow(scrollspy).state()).toEqual({})
    })

    it('with default IntersectionObserver options if none are provided', () => {
      expect(mount(scrollspy).prop('options')).toEqual({
        rootMargin: '0px 0px 0px 0px',
        threshold: 0,
      })
    })

    it('with a default `activeClass` if none is provided', () => {
      expect(mount(scrollspy).prop('activeClass')).toEqual('active')
    })
  })
})
