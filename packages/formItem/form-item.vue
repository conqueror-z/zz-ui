<template>
  <div class="zz-form-item">
    <label
      class="zz-form-item-label"
      :style="{ width: this.formObj.labelWidth }"
      >{{ label }}</label
    >
    <div class="zz-form-item-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ZzFormItem",
  inject: ["formObj"],
  props: {
    label: {
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
.zz-form-item {
  margin-bottom: 25px;
  .zz-form-item-label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .zz-form-item-content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
