# API

| Attribute         | Description              | Type  | Accepted Values | Default    |
| ------------ | ------------------ | ------ | ------ | --------- |
|background|The background color of the draw-board|string|-|'#fff'|
|restoreDisablePath|The inoperative path that needs to be restored at initialization|Array<{ color: string; path: string }>|-|[]|
|restorePath|Operational path that needs to be restored at initialization|Array<{ color: string; path: string }>|-|[]|
|defaultColor|Default brush color|string|-|#21242C|
|readonly|Read only|boolean|-|false|
|ifRunClear|Determine whether to clear all paths|boolean|-|false|
|isBtnLoading|Save button loading status, supports the .sync modifier|boolean|-|false|
|isBtnDisabled|Disable the save button|boolean|-|false|
|penColors|Brush optional color|Array<string>|-|['#01A995', '#E84D39', '#74CF70', '#FFBE26', '#CA337C', '#7853AB', '#11ACCD', '#20A0FF', '#21242C']|

# Events

| Event Name | 	Description         | Parameters |
| -------- | ------------ | -------- |
|init|Triggers when draw-board init|draw-board instance|
|change|Triggers when path change|-|
|undo|Triggers when undo event happen|-|
|clear|Triggers when clear event happen|-|
|save|Triggers when click save button |base64 image，paths|
