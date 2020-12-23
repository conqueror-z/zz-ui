# 												zz-ui

## 效果演示

- 初始化Vue项目

    `vue create demo`

- 安装组件库

  `npm install @zhangyuhang983/zz-ui --save`

- 全局导入		

  ```
  import zzUi from '@zhangyuhang983/zz-ui'
  import '@zhangyuhang983/zz-ui/dist/zz-ui.css'
  
  Vue.use(zzUi)
  ```

- 使用组件

```
<template>
	<div id="app">
		<zz-button type="success" @click="visible = true">打开弹窗</zz-button>
		 <zz-dialog title="温馨提示" :visible.sync="visible" width="50%">
		  	<zz-form labelWidth="80px" :model="obj">
              <zz-form-item label="用户名">
              	 <zz-input v-model="obj.username" placeholder="请输入用户名" clearable></zz-input>
              </zz-form-item>
              <zz-form-item label="密码">
                  <zz-input v-model="obj.password" placeholder="请输入用户名" :showPassword="true"></zz-input>
              </zz-form-item>
              <zz-form-item label="开关">
                  <zz-switch v-model="obj.switchVal" checkedColor="red" uncheckedColor="green" :disabled="false"></zz-switch>
              </zz-form-item>
              <zz-form-item label="性别">
                  <zz-radio-group v-model="obj.gender">
                      <zz-radio label="0">男</zz-radio>
                      <zz-radio label="1">女</zz-radio>
                  </zz-radio-group>
              </zz-form-item>
              <zz-form-item label="爱好">
                  <zz-checkbox-group v-model="obj.hobby">
                      <zz-checkbox label="喝酒"></zz-checkbox>
                      <zz-checkbox disabled label="抽烟"></zz-checkbox>
                      <zz-checkbox label="烫头"></zz-checkbox>
                  </zz-checkbox-group>
              </zz-form-item>
          	</zz-form>
          	
            <template v-slot:footer>
                <zz-button type="danger" @click="visible=false">取消</zz-button>
                <zz-button type="primary" @click="confirmHandle">确定</zz-button>
            </template>
        </zz-dialog>
	</div>
</template>
```



##  组件的封装



### Button 按钮

 - Attributes

| 参数     | 说明         | 类型    | 可选值                                      | 默认值 |
| -------- | ------------ | ------- | ------------------------------------------- | ------ |
| type     | 类型         | string  | primary / success / warning / danger / info | —      |
| plain    | 是否朴素按钮 | boolean | —                                           | false  |
| round    | 是否圆角按钮 | boolean | —                                           | false  |
| circle   | 是否圆形按钮 | boolean | —                                           | false  |
| icon     | 图标类名     | string  | —                                           | —      |
| disabled | 是否禁用状态 | boolean | —                                           | false  |

- Button Events

| 事件名称 | 说明                 | 回调参数       |
| -------- | -------------------- | -------------- |
| click    | 点击按钮时触发的事件 | (event: Event) |



### Dialog组件

- Attributes

| 参数    | 说明                             | 类型    | 可选值 | 默认值 |
| ------- | -------------------------------- | ------- | ------ | ------ |
| title   | 对话框标题                       | string  | —      | 提示   |
| width   | 宽度                             | string  | —      | 50%    |
| top     | 与顶部的距离                     | string  | —      | 15vh   |
| visible | 是否显示dialog（支持sync修饰符） | boolean | —      | false  |

- Dialog Events

| 事件名称     | 说明         | 回调参数 |
| ------------ | ------------ | -------- |
| confirmHanle | 点击确认按钮 |          |
| cancelHandle | 点击取消按钮 |          |



### Input输入框

- Attributes

| 参数         | 说明              | 类型    | 可选值        | 默认值 |
| ------------ | ----------------- | ------- | ------------- | ------ |
| v-model      | 输入框值          | string  | —             | —      |
| placeholder  | 输入框占位文本    | string  | —             | —      |
| type         | 类型              | string  | text/password | text   |
| showPassword | 切换密码显示/隐藏 | boolean | —             | false  |
| name         | 原生属性          | string  | —             | —      |
| clearable    | 是否可清空        | boolean | —             | false  |
| disabled     | 禁用              | boolean | —             | false  |



- Input Events

| 事件名称 | 说明                    | 回调参数       |
| -------- | ----------------------- | -------------- |
| focus    | 在 Input 获得焦点时触发 | (event: Event) |
| blur     | 在 Input 失去焦点时触发 | (event: Event) |



### Switch开关

- Attributes

| 参数           | 说明                  | 类型    | 可选值 | 默认值   |
| -------------- | --------------------- | ------- | ------ | -------- |
| v-model        | switch状态            | boolean | —      | false    |
| checkedColor   | switch 打开时的背景色 | string  | —      | \#409eff |
| uncheckedColor | switch 关闭时的背景色 | string  | —      | \#C0CCDA |
| name           | 原生属性              | string  | —      | —        |
| disabled       | 是否禁用              | boolean | —      | false    |



### Radio单选框

- Attributes

| 参数     | 说明           | 类型                      | 可选值 | 默认值 |
| -------- | -------------- | ------------------------- | ------ | ------ |
| v-model  | 单选框选中的值 | string                    | —      | —      |
| label    | Radio 的 value | string / number / boolean | —      | —      |
| name     | 原生属性       | string                    | —      | —      |
| disabled | 是否禁用       | boolean                   | —      | false  |

### Radio-group

- Attributes

| 参数    | 说明           | 类型   | 可选值 | 默认值 |
| ------- | -------------- | ------ | ------ | ------ |
| v-model | 单选框选中的值 | string | —      | —      |

- Radio Attributes

  | 参数     | 说明           | 类型                      | 可选值 | 默认值 |
  | -------- | -------------- | ------------------------- | ------ | ------ |
  | label    | Radio 的 value | string / number / boolean | —      | —      |
  | name     | 原生属性       | string                    | —      | —      |
  | disabled | 是否禁用       | boolean                   | —      | false  |

### Checkbox 多选框

- Attributes

| 参数     | 说明         | 类型    | 可选值 | 默认值 |
| -------- | ------------ | ------- | ------ | ------ |
| v-model  | 多选框的状态 | boolean | —      | false  |
| label    | 选中状态的值 | string  | —      | —      |
| name     | 原生属性     | string  | —      | —      |
| disabled | 是否禁用     | boolean | —      | false  |

### Checkbox -group

- Attributes

| 参数    | 说明         | 类型  | 可选值 | 默认值 |
| ------- | ------------ | ----- | ------ | ------ |
| v-model | 多选框的状态 | array | —      | []     |

- Checkbox Attributes

  | 参数     | 说明         | 类型    | 可选值 | 默认值 |
  | -------- | ------------ | ------- | ------ | ------ |
  | label    | 选中状态的值 | string  | —      | —      |
  | name     | 原生属性     | string  | —      | —      |
  | disabled | 是否禁用     | boolean | —      | false  |



### Form表单

- Form Attributes

| 参数       | 说明                                                         | 类型   | 可选值 | 默认值 |
| ---------- | ------------------------------------------------------------ | ------ | ------ | ------ |
| model      | 表单数据对象                                                 | object | —      | —      |
| labelWidth | 表单域标签的宽度，作为 Form 直接子元素的 form-item 会继承该值 | string | —      | —      |

- Form-item Attributes

| 参数       | 说明                                                         | 类型   | 可选值 | 默认值 |
| ---------- | ------------------------------------------------------------ | ------ | ------ | ------ |
| label      | 标签文本                                                     | string | —      | —      |
| labelWidth | 表单域标签的宽度，作为 Form 直接子元素的 form-item 会继承该值 | string | —      | —      |