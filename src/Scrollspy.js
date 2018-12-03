import { Component } from 'react'
import PropTypes from 'prop-types'

export default class Scrollspy extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    activeClass: PropTypes.string.isRequired,
    intersectionRatio: PropTypes.number.isRequired,
    options: PropTypes.shape({
      root: PropTypes.node,
      rootMargin: PropTypes.string.isRequired,
      threshold: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
    }).isRequired,
  }

  static defaultProps = {
    activeClass: 'active',
    intersectionRatio: 0.5,
    options: {
      rootMargin: '0px 0px 0px 0px',
      threshold: 0,
    },
  }

  state = {}

  componentDidMount() {
    this.createMutationObserver()
  }

  componentDidUpdate() {
    this.removeActiveClass()
    this.createMutationObserver()
  }

  getElements = () => {
    const { items } = this.props

    this.setState(
      {
        elementsToSpy: items.map(item => document.getElementById(item)).filter(item => item),
        navItems: items
          .map(
            item =>
              document.querySelector(`[href="#${item}"]`) ||
              document.querySelector(`[href="/#${item}"]`)
          )
          .filter(item => item),
      },
      () => {
        this.createIntersectionObserver()
      }
    )
  }

  createMutationObserver = () => {
    new MutationObserver((mutations, observer) => {
      this.getElements()

      observer.disconnect()
    }).observe(document.body, {
      childList: true,
      subtree: true,
    })
  }

  createIntersectionObserver = () => {
    const { elementsToSpy, navItems } = this.state
    const { options, intersectionRatio: ratio } = this.props

    const observer = new IntersectionObserver(entries => {
      entries.forEach(({ isIntersecting, intersectionRatio, target }) => {
        if (isIntersecting && intersectionRatio > ratio) {
          this.removeActiveClass()
          this.addActiveClass(navItems.find(navItem => navItem.href.includes(target.id)))
        }
      })
    }, options)

    elementsToSpy.forEach(elem => {
      observer.observe(elem)
    })
  }

  addActiveClass = el => {
    const { activeClass } = this.props

    el && el.classList.add(activeClass)
  }

  removeActiveClass = () => {
    const { navItems } = this.state
    const { activeClass } = this.props

    const active = navItems.find(navItem => navItem.classList.contains(activeClass))
    active && active.classList.remove(activeClass)
  }

  render() {
    return this.props.children
  }
}
