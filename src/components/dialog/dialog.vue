<template>
  <transition name="dialog-fade">
    <div class="zz-dialog-wrapper" v-show="visible" @click.self="closeDialog">
      <div class="zz-dialog" :style="{ width: width, marginTop: top }">
        <div class="zz-dialog-header">
          <slot name="title">
            <span class="zz-dialog-title">{{ title }}</span>
          </slot>
          <button class="zz-dialog-headerbtn" @click="closeDialog">
            <i class="zz-icon-close"></i>
          </button>
        </div>
        <div class="zz-dialog-body">
          <slot></slot>
        </div>
        <div class="zz-dialog-footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ZzDialog",
  props: {
    title: {
      type: String,
      default: "提示"
    },
    width: {
      type: String,
      default: "50%"
    },
    top: {
      type: String,
      default: "15vh"
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeDialog() {
      this.$emit("update:visible", false);
    }
  }
};
</script>
<style lang="scss" scoped>
.zz-dialog-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.5);

  .zz-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;

    &-header {
      padding: 20px 20px 10px;
      .zz-dialog-title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .zz-dialog-headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
          color: #909399;
        }
      }
    }

    &-body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &-footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .zz-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
// dialog 动画
.dialog-fade-enter,
.dialog-fade-leave-to {
  opacity: 0;
}
.dialog-fade-enter-to,
.dialog-fade-leave {
  opacity: 1;
}
.dialog-fade-enter-active,
.dialog-fade-leave-active {
  transition: 0.3s all;
}
</style>
