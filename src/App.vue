<template>
  <div id="app" class="">
    <!-- button -->
    <!-- <div class="row">
      <zz-button>按钮</zz-button>
      <zz-button type="success">按钮</zz-button>
      <zz-button type="primary">按钮</zz-button>
      <zz-button type="info">按钮</zz-button>
      <zz-button type="warning">按钮</zz-button>
      <zz-button type="danger">按钮</zz-button>
    </div>
    <div class="row">
      <zz-button plain>按钮</zz-button>
      <zz-button plain type="success">按钮</zz-button>
      <zz-button plain type="primary">按钮</zz-button>
      <zz-button plain type="info">按钮</zz-button>
      <zz-button plain type="warning">按钮</zz-button>
      <zz-button plain type="danger">按钮</zz-button>
    </div>
    <div class="row">
      <zz-button plain round icon="zz-icon-check">按钮</zz-button>
      <zz-button plain round type="success">按钮</zz-button>
      <zz-button plain round type="primary">按钮</zz-button>
      <zz-button plain round type="info">按钮</zz-button>
      <zz-button plain round type="warning">按钮</zz-button>
      <zz-button plain round type="danger">按钮</zz-button>
    </div>
    <div class="row">
      <zz-button circle>按钮</zz-button>
      <zz-button plain circle type="success" icon="zz-icon-check"></zz-button>
      <zz-button plain circle type="primary">拆</zz-button>
      <zz-button plain circle type="info">拆</zz-button>
      <zz-button plain circle type="warning">拆</zz-button>
      <zz-button plain circle type="danger">拆</zz-button>
    </div>
    <div class="row">
      <zz-button disabled circle icon="zz-icon-check"></zz-button>
      <zz-button
        disabled
        plain
        circle
        type="success"
        icon="zz-icon-check"
      ></zz-button>
      <zz-button
        disabled
        plain
        circle
        type="primary"
        icon="zz-icon-check"
      ></zz-button>
      <zz-button
        disabled
        plain
        circle
        type="info"
        icon="zz-icon-check"
      ></zz-button>
      <zz-button
        disabled
        plain
        circle
        type="warning"
        icon="zz-icon-check"
      ></zz-button>
      <zz-button
        @click="fn"
        disabled
        plain
        circle
        type="danger"
        icon="zz-icon-check"
      ></zz-button>
    </div> -->
    <!-- dialog -->
    <!-- <zz-dialog title="温馨提示">
      弹出框
    </zz-dialog> -->
    <!-- <zz-dialog width="60%" top="10px"></zz-dialog> -->
    <!-- <zz-button @click="visible = true">打开弹窗</zz-button>
    <zz-dialog :visible.sync="visible">
      <template v-slot:title>
        <h3>我是标题</h3>
      </template>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
      </ul>
      <template v-slot:footer>
        <zz-button type="danger" @click="cancelHandle">取消</zz-button>
        <zz-button type="success" @click="confirmHanle">确定</zz-button>
      </template>
    </zz-dialog> -->

    <!-- <zz-input
      placeholder="请输入"
      type="text"
      :showPassword="true"
      :clearable="true"
      v-model="input"
      :disabled="false"
      @focus="focus"
      @blur="blur"
    ></zz-input> -->

    <!-- <zz-switch
      v-model="switchVal"
      checkedColor="red"
      uncheckedColor="green"
      :disabled="false"
    ></zz-switch> -->

    <!-- <zz-radio label="0" :disabled="false" v-model="gender1">男</zz-radio><br />
    <zz-radio label="1" :disabled="false" v-model="gender1">女</zz-radio>
    <hr />
    <zz-radio-group v-model="gender">
      <zz-radio label="0">男</zz-radio><br />
      <zz-radio label="1">女</zz-radio>
    </zz-radio-group> -->

    <zz-checkbox label="喝酒" v-model="checkbox"></zz-checkbox><br />
    <zz-checkbox-group v-model="checkbox1">
      <zz-checkbox label="喝酒"></zz-checkbox>
      <zz-checkbox disabled label="抽烟"></zz-checkbox>
      <zz-checkbox label="烫头"></zz-checkbox>
    </zz-checkbox-group>
    <br />
    <zz-form labelWidth="80px" :model="obj">
      <zz-form-item label="按钮">
        <zz-button>按钮</zz-button>
      </zz-form-item>
      <zz-form-item label="按钮">
        <zz-input v-model="obj.username"></zz-input>
      </zz-form-item>
      <zz-form-item label="按钮">
        <zz-switch v-model="obj.ss"></zz-switch>
      </zz-form-item>
    </zz-form>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      visible: false,
      input: "",
      switchVal: true,
      gender: 1,
      gender1: 1,
      checkbox: false,
      checkbox1: [],
      obj: {
        username: "",
        ss: false
      }
    };
  },
  methods: {
    // fn(e) {
    //   console.log(e);
    // },
    // cancelHandle() {
    //   this.visible = false;
    // },
    // confirmHanle() {
    //   this.visible = false;
    // }
    focus(e) {
      console.log(e);
    },
    blur(e) {
      console.log(e);
    }
  }
};
</script>

<style lang="scss">
.row {
  margin-bottom: 20px;
  .zz-button {
    margin-right: 20px !important;
  }
}
</style>
