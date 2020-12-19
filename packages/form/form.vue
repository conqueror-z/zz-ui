<template>
  <div class="zz-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ZzForm",
  provide() {
    return {
      formObj: this
    };
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: "80px"
    }
  }
};
</script>
