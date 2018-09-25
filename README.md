Create By [create-react-library](https://github.com/transitive-bullshit/create-react-library)
# NjUI-Mobile

轻量、高扩展的移动端 React 组件库

## Features

+ 50+ 常用组件
+ 完善的文档和示例
+ 轻量

## Install

### NPM

```bash
npm install --save njui-mobile
```

### Yarn
 
```bash
yarn add njui-mobile
```

## Example

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'njui-mobile';
//import styles
import 'njui-mobile/dist/njui-mobile.css';

const App = () => <Button>Hello NJ</Button>;

ReactDOM.render((
    <App/>
), document.getElementById('container'));
```

## Mobile Demo

<img src="./assets/preview_code.png" style="width: 200px" />

## License

The MIT License(http://opensource.org/licenses/MIT)

