# React Spy

[![GitHub contributors](https://img.shields.io/github/contributors/CloudPower97/react-spy.svg)](https://GitHub.com/CloudPower97/react-spy/graphs/contributors/)
[![made-for-react](https://img.shields.io/badge/Made%20for-React-1f425f.svg)](https://reactjs.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

1. [Overview](#Overview)
2. [Usage](#Usage)
3. [Contributing](#Contributing)
   - [Linters](#Linters)
   - [Testing](#Testing)
   - [Commit Guidelines](#Commit-Guidelines)

---

## Overview

<img src="https://pngimg.com/uploads/spy/spy_PNG3.png" alt="React Spy" width="256">

_React Spy_ is a modern and efficient Scrollspy component for all of your needs!

_React Spy_ is highly inspired by [`react-scrollspy`](https://github.com/makotot/react-scrollspy).

The difference here is that _React Spy_ does make internally uses of the [`Mutation Observer`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) to detect changes to the _DOM_ and the [`Intersection Observer`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) API to know exactly when an element enters or leaves the viewport.

> You also want to add the
> [intersection-observer](https://www.npmjs.com/package/intersection-observer)
> polyfill for full browser support. Check out adding the [polyfill](#polyfill)
> for details about how you can include it.

---

## Usage

```javascript
import Scrollspy from 'react-spy'

<header>
  <Scrollspy items={['section-1', 'section-2', 'section-3']}
    activeClass='current'
    options={{
      rootMargin: '56px 0px 0px 0px',
      threshold: 0.5,
    }}
    intersectionRatio={0.375}>
    <ul>
      <li>
        <a href="#section-1">section 1</a>
      </li>
      <li>
        <a href="#section-2">section 2</a>
      </li>
      <li>
        <a href="#section-3">section 3</a>
      </li>
    </ul>
  </Scrollspy>
</header>

...

<main>
    <section id="section-1">section 1</section>
    <section id="section-2">section 2</section>
    <section id="section-3">section 3</section>
</main>

...
```

### Props

| property          | propType | required | default                                         | description                                                                                                                               |
| ----------------- | -------- | -------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| items             | array    | true     | []                                              | Id list of target contents.                                                                                                               |
| activeClass       | string   | true     | 'active'                                        | Class name to toggle when one of the items enters the viewport.                                                                           |
| intersectionRatio | number   | true     | 0.5                                             | A number between 0.0 and 1.0 which indicates how much of the target element is actually visible within the root's intersection rectangle. |
| options           | object   | true     | { rootMargin: '0px 0px 0px 0px', threshold: 0 } | Intersection observer options                                                                                                             |

---

## Contributing

> Yes please!

Pull requests and [reporting an issue](https://github.com/CloudPower97/react-spy/issues) are always welcome :D

### Linters

<div>
<img src="https://prettier.io/icon.png" alt="Prettier" width="128">
<img src="https://avatars-04.gitter.im/group/iv/3/57542cecc43b8c6019777d76" alt="ESLint" width="128">
</div>

To enforce a consistent style across the entire project we are using [`Prettier`](https://prettier.io/).

We are also using [`ESLint`](https://eslint.org/) to catch bugs and syntax errors during development and [`stylelint`](https://stylelint.io/) for CSS linting.

We run `Prettier` and `ESLint` before each commit thanks to [`Husky`](https://github.com/typicode/husky), so that you can focus on what matter the most : writing code.

Please, note that you will not be able to commit/push any changes you made if your code doesn't pass any of the linting stage described above.

In that case check your `git-log` and fix any problem reported there.

Also note that by default `ESLint` will try to fix any problems it can fix by itself.

It will bother you only for changes it can't fix.

All of the above assure us that our code base is always consistent with the rules we are using and bug free as much as possible.

### Testing

<img src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/940/square_256/jestlogo.png" alt="Jest" width="128"/>

We are using [`Jest`](https://github.com/facebook/jest) and [`Enzyme`](https://github.com/airbnb/enzyme) to test our components.

### Commit Guidelines

We follow the [Angular Commit Guidelines](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits).

Refer to their documentation for more information.

Note: If you DON'T follow the [Angular Commit Guidelines](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits) you will not be able to commit your changes.

## Intersection Observer

[Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
is the _API_ used to determine if an element is inside the viewport or not.

> [Can i use intersectionobserver?](https://caniuse.com/#feat=intersectionobserver)

### Polyfill

You can import the
[polyfill](https://www.npmjs.com/package/intersection-observer) directly or use
a service like [polyfill.io](https://polyfill.io/v2/docs/) to add it when
needed.

```sh
yarn add intersection-observer
```

Then import it in your app:

```js
import 'intersection-observer'
```
