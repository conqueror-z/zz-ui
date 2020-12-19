<template>
  <label
    :class="[
      'zz-checkbox',
      { 'is-checked': isChecked },
      { 'is-disabled': disabled }
    ]"
  >
    <span class="zz-checkbox-input">
      <span class="zz-checkbox-inner"></span>
      <input
        type="checkbox"
        :name="name"
        :value="label"
        v-model="checkboxVal"
        class="zz-checkbox-original "
      />
    </span>
    <span class="zz-checkbox-label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: "ZzCheckbox",
  inject: {
    checkboxGroup: {
      default: ""
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    checkboxVal: {
      get() {
        return this.isCheckboxGroup ? this.checkboxGroup.value : this.value;
      },
      set(value) {
        if (this.disabled === true) return;
        return this.isCheckboxGroup
          ? this.checkboxGroup.$emit("input", value)
          : this.$emit("input", value);
      }
    },
    isCheckboxGroup() {
      return !!this.checkboxGroup;
    },
    isChecked() {
      return this.isCheckboxGroup
        ? this.checkboxVal.includes(this.label)
        : this.checkboxVal;
    }
  }
};
</script>
<style lang="scss" scoped>
.zz-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .zz-checkbox-input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .zz-checkbox-inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
      &:after {
        box-sizing: content-box;
        content: "";
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
      }
    }
    .zz-checkbox-original {
      opacity: 0;
      outline: none;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .zz-checkbox-label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}
.zz-checkbox.is-checked {
  .zz-checkbox-input {
    .zz-checkbox-inner {
      background-color: #409eff;
      border-color: #409eff;
      &:after {
        transform: rotate(45deg) scaleY(1);
      }
    }
  }
  .zz-checkbox-label {
    color: #409eff;
  }
}
.zz-checkbox.is-disabled {
  color: #c0c4cc;
  cursor: not-allowed;
  .zz-checkbox-inner {
    cursor: not-allowed;
  }
}
</style>
