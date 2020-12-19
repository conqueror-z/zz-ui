import Vue from 'vue'
import App from './App.vue'
import './assets/css/fonts/font.scss'

import ZzButton from './components/button/button.vue';
import ZzDialog from './components/dialog/dialog.vue';
import ZzInput from './components/input/input.vue';
import ZzSwitch from './components/switch/switch.vue';
import ZzRadio from './components/radio/radio.vue';
import ZzRadioGroup from './components/radioGroup/radio-group.vue';
import ZzCheckbox from './components/checkbox/checkbox.vue';
import ZzCheckboxGroup from './components/checkboxGroup/checkbox-group.vue';
import ZzForm from './components/form/form.vue';
import ZzFormItem from './components/formItem/form-item.vue';

Vue.config.productionTip = false

// Vue.component(ZzButton.name, ZzButton)
// Vue.component(ZzDialog.name, ZzDialog)
// Vue.component(ZzInput.name, ZzInput)
// Vue.component(ZzSwitch.name, ZzSwitch)
// Vue.component(ZzRadio.name, ZzRadio)
// Vue.component(ZzRadioGroup.name, ZzRadioGroup)
// Vue.component(ZzCheckbox.name, ZzCheckbox)
// Vue.component(ZzCheckboxGroup.name, ZzCheckboxGroup)
// Vue.component(ZzForm.name, ZzForm)
// Vue.component(ZzFormItem.name, ZzFormItem)

let components = [
  ZzButton, ZzDialog, ZzInput, ZzSwitch, ZzRadio, ZzRadioGroup, ZzCheckbox, ZzCheckboxGroup, ZzFormItem, ZzForm
]
components.forEach(item => {
  Vue.component(item.name, item)
})

new Vue({
  render: h => h(App)
}).$mount('#app')
