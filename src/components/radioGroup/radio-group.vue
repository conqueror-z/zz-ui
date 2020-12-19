<template>
  <div class="zz-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ZzRadioGroup",
  provide() {
    return {
      radioGroup: this
    };
  },
  props: {
    value: null
  }
};
</script>
