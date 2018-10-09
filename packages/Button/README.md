# API

属性 | 说明 | 类型 | 默认值
---|---|---|---
type | 按钮类型，可选值为default/primary/warning/danger或者不设 | string | default
size | 按钮大小，可选值为mini、small、normal、large、gradient(其中gradient为large的默认渐变色)| string | normal
block | 是否是块级元素 | boolean或者直接写block | inline-block
plain | 是否是空心按钮 | boolean | 空心
disabled | 是否禁用 | boolean | 不禁用
loading | 加载状态loading | boolean | -无loading
children | 按钮内部文案 | string | 无
className | 类名 | string | 无
icon | 可以是 [Icon](https://github.com/nanjiren/njui-mobile/tree/master/packages/Icon) 组件里内置的某个 icon 的 name 值，也可以是任意合法的 ReactElement (注意: loading设置后此项设置失效) | string/React.Element    | 无
style | 自定义样式 | object | 无
其它 | 其它自定义属性如<Button onClick={() => Toast.show('自定义属性')}> | 任意类型 | 无
