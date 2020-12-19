<template>
  <div class="zz-input" :class="{ 'zz-input-suffix': showSuffix }">
    <input
      class="zz-input-inner"
      :class="{ 'is-disabled': disabled }"
      :placeholder="placeholder"
      :disabled="disabled"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :name="name"
      :value="value"
      @input="changeInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <span class="zz-input-suffix" v-if="showSuffix">
      <i
        class="zz-input-icon zz-icon-circle-close"
        :class="{ 'zz-marr': showPassword }"
        v-if="clearable && value"
        @click="clearInput"
      ></i>
      <i
        class="zz-input-icon zz-icon-view"
        :class="{ 'zz-icon-view-active': passwordVisible }"
        v-if="showPassword"
        @click="handlePassword"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "ZzInput",
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      passwordVisible: false // 控制是否显示密码框
    };
  },
  computed: {
    showSuffix() {
      return this.clearable || this.showPassword;
    }
  },
  methods: {
    handleFocus(e) {
      this.$emit("focus", e);
    },
    handleBlur(e) {
      this.$emit("blur", e);
    },
    changeInput(e) {
      this.$emit("input", e.target.value);
    },
    handlePassword() {
      this.passwordVisible = !this.passwordVisible;
    },
    clearInput() {
      this.$emit("input", "");
    }
  }
};
</script>
<style lang="scss" scoped>
.zz-input {
  position: relative;
  display: inline-block;
  width: 100%;
  font-size: 14px;
  .zz-input-inner {
    display: inline-block;
    width: 100%;
    -webkit-appearance: none;
    background-image: none;
    background-color: #ffffff;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.zz-input-suffix {
  .zz-input-inner {
    padding-right: 30px;
  }
  .zz-input-suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 99;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .zz-icon-circle-close.zz-marr {
      margin-right: 5px;
    }
    .zz-icon-view-active {
      color: blue;
    }
  }
}
</style>
