# MsDrawBoard

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

