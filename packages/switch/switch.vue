<template>
  <div
    class="zz-switch"
    :class="{ 'is-checked': value, 'is-disabled': disabled }"
    @click="changeSwitch"
  >
    <span class="zz-switch-core" ref="core">
      <span class="zz-switch-btn"></span>
    </span>
    <input
      type="checkbox"
      :name="name"
      ref="checkbox"
      class="zz-switch-checkbox"
    />
  </div>
</template>

<script>
export default {
  name: "ZzSwitch",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ""
    },
    uncheckedColor: {
      type: String,
      default: ""
    },
    checkedColor: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.setColor();
    this.$refs.checkbox.checked = this.value;
  },
  methods: {
    async changeSwitch() {
      if (this.disabled) return;
      this.$emit("input", !this.value);
      await this.$nextTick();
      this.setColor();
      this.$refs.checkbox.checked = this.value;
    },
    setColor() {
      if (this.uncheckedColor || this.checkedColor) {
        let color = this.value ? this.checkedColor : this.uncheckedColor;
        this.$refs.core.style.backgroundColor = color;
        this.$refs.core.style.borderColor = color;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.zz-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .zz-switch-checkbox {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .zz-switch-core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .zz-switch-btn {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
.zz-switch.is-checked {
  .zz-switch-core {
    border-color: #409eff;
    background-color: #409eff;
    .zz-switch-btn {
      transform: translateX(20px);
    }
  }
}
.zz-switch.is-disabled {
  .zz-switch-core {
    opacity: 0.6;
    cursor: not-allowed;
  }
}
</style>
