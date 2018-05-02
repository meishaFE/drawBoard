# MsDrawBoard

[![npm](https://img.shields.io/npm/l/msdrawboard.svg)](https://www.npmjs.com/package/msdrawboard) ![TypeScript](https://img.shields.io/badge/TypeScript->=2.8.3-blue.svg?style=flat)

## Introduction

vue.js draw-board component base on raphael

## Installation

### CDN

```html
<script src="https://unpkg.com/msdrawboard@1.0.0/dist/msDrawBoard.umd.min.js"></script>
```

### NPM
```bash
# latest stable
# use yarn
yarn add msdrawboard
# or use npm
npm install msdrawboard
```

## Getting Started
```js
import Vue from 'vue'
import msDrawBoard from 'msdrawboard'

new Vue({
  components: {
    msDrawBoard
  }
}).$mount('#app')
```

```html
<!-- in <template></template> -->
<msDrawBoard></msDrawBoard>
```

## Documentation

[live example](https://jsfiddle.net/JxJayden/4jcp9gvp/6/?utm_source=website&utm_medium=embed&utm_campaign=4jcp9gvp)

[English](./docs/API.md) | [中文](./docs/API-zh.md)

## License

[MIT](http://opensource.org/licenses/MIT)
