# MsDrawBoard

[![npm](https://img.shields.io/npm/l/msdrawboard.svg)](https://www.npmjs.com/package/msdrawboard) ![TypeScript](https://img.shields.io/badge/TypeScript->=2.8.3-blue.svg?style=flat)

> vue.js draw-board component base on raphael

## usage

1. 安装依赖

```bash
yarn add msdrawboard
# or
npm install msdrawboard
```

2. 引入

```js
// 全局引入
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

[live demo](https://jsfiddle.net/JxJayden/4jcp9gvp/2/?utm_source=website&utm_medium=embed&utm_campaign=4jcp9gvp)

[API](./API.md)
