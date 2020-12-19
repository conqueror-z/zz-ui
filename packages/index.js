import ZzButton from './button/button.vue';
import ZzDialog from './dialog/dialog.vue';
import ZzInput from './input/input.vue';
import ZzSwitch from './switch/switch.vue';
import ZzRadio from './radio/radio.vue';
import ZzRadioGroup from './radioGroup/radio-group.vue';
import ZzCheckbox from './checkbox/checkbox.vue';
import ZzCheckboxGroup from './checkboxGroup/checkbox-group.vue';
import ZzForm from './form/form.vue';
import ZzFormItem from './formItem/form-item.vue';
import './fonts/font.scss'

// 存储组件列表
const components = [
  ZzButton, ZzDialog, ZzInput, ZzSwitch, ZzRadio, ZzRadioGroup, ZzCheckbox, ZzCheckboxGroup, ZzFormItem, ZzForm
]

const install = function (Vue) {
  // 全局注册所有的组件
  components.forEach(item => {
    Vue.component(item.name, item)
  })
}

// 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
