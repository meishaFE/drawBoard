# API

| 参数         | 说明               | 类型   | 可选值 | 默认值    |
| ------------ | ------------------ | ------ | ------ | --------- |
|background|画板的背景色|string|-|'#fff'|
|restoreDisablePath|初始化的时候需要恢复的不可操作的路径|Array<{ color: string; path: string }>|-|[]|
|restorePath|初始化的时候需要恢复的可操作的路径|Array<{ color: string; path: string }>|-|[]|
|defaultColor|默认的画笔颜色|string|-|#21242C|
|readonly|是否只读|boolean|-|false|
|ifRunClear|是否清除全部|boolean|-|false|
|isBtnLoading|保存按钮loading状态，使用 .sync 修饰符|boolean|-|false|
|isBtnDisabled|保存按钮是否禁用|boolean|-|false|
|penColors|画笔的可选颜色|Array<string>|-|['#01A995', '#E84D39', '#74CF70', '#FFBE26', '#CA337C', '#7853AB', '#11ACCD', '#20A0FF', '#21242C']|

# Events

| 事件名称 | 说明         | 回调参数 |
| -------- | ------------ | -------- |
|init|画板初始化成功|drawBoard 实例|
|change|路径变更|-|
|undo|撤销上一步操作|-|
|clear|清除画板事件|-|
|save|保存的事件|图片base64，路径数组|
