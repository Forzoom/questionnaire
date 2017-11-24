1. 使用指南

允许传入的Prop
|key|type|desc|
|color|string|样式颜色，choice/mutliChoice/提交按钮的颜色都由该属性设定|

由于weui-cell_ft的颜色被设定，所以choice和multiChoice的颜色必须设定在weui-cell_ft上

normalize-weui不再对颜色进行处理

由于rem的大小问题，导致只对于经过match处理的项目有效，因为样式本身没有办法使用rem，只能使用px

### Roadmap

### Changelog

#### v0.0.33

1. 将Address修改为AddressLocation，添加AddressPicker

#### v0.0.39

1. 改为插件嵌入方式

#### v0.0.50

1. 修改Select的样式，使用原生<select>

#### v0.0.53

1. 删除DatePicker和AddressPicker，使用Placeholder组件替代
1. 点击Placeholder组件，将触发 @click(id) 事件


### Version

#### v0.0.32

1. 修复uploader在已有result情况下不正确显示的问题

#### v0.0.33

1. 将Address修改为AddressLocation，添加AddressPicker

#### v0.0.34

1. 降低城市选择的精度

#### v0.0.35

1. 修复默认值的错误
1. 更新uploader版本

#### v0.0.36

1. 修复object.assign问题

#### v0.0.37

1. 修复版本错误
2. 修复uploader.updateImage可能存在的错误

#### v0.0.38

1. uploader支持source.size

#### v0.0.39

1. 改为插件嵌入方式

#### v0.0.40

1. 修复_Vue在引入文件时未定义的问题

#### v0.0.41(存在错误，在0.0.42中修复)

1. 优化choice/multipleChoice代码，体积更小
1. 优化uploader样式，添加数量提示

#### v0.0.42

1. 修复0.0.41中uploader的错误

#### v0.0.43

1. 允许使用requiredCondition
2. 优化uploader代码

#### v0.0.47

1. 添加mixins，优化segment样式

#### v0.0.49

1. 更新mobile-button版本

#### v0.0.50

1. 修改Select的样式，使用原生<select>

#### v0.0.51

1. 修改uploader的result逻辑，将string修改为array

#### v0.0.52

1. 修复uploader组件的错误

#### v0.0.53

1. 删除DatePicker和AddressPicker，使用Placeholder组件替代
1. 点击Placeholder组件，将触发 @click(id) 事件