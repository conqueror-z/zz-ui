<template>
  <label
    :class="[
      'zz-radio',
      { 'is-checked': radioVal == label },
      { 'is-disabled': disabled }
    ]"
  >
    <span class="zz-radio-input">
      <span class="zz-radio-inner"></span>
      <input
        type="radio"
        :name="name"
        :value="label"
        class="zz-radio-original"
        v-model="radioVal"
      />
    </span>
    <span class="zz-radio-label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: "ZzRadio",
  inject: {
    radioGroup: {
      default: ""
    }
  },
  props: {
    name: {
      type: String,
      default: ""
    },
    value: null,
    label: {
      type: [Boolean, String, Number],
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    radioVal: {
      get() {
        return this.isRadioGroup ? this.radioGroup.value : this.value;
      },
      set(value) {
        if (this.disabled === true) return;
        return this.isRadioGroup
          ? this.radioGroup.$emit("input", value)
          : this.$emit("input", value);
      }
    },
    isRadioGroup() {
      return !!this.radioGroup;
    }
  }
};
</script>
<style lang="scss" scoped>
.zz-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .zz-radio-input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .zz-radio-inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .zz-radio-original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .zz-radio-label {
    font-size: 14px;
    padding-left: 10px;
  }
}

.zz-radio.is-checked {
  .zz-radio-input {
    .zz-radio-inner {
      border-color: #409eff;
      background: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .zz-radio-label {
    color: #409eff;
  }
}
.zz-radio.is-disabled {
  cursor: not-allowed;
  opacity: 0.6;
  .zz-radio-input .zz-radio-inner {
    cursor: not-allowed;
  }
}
</style>
