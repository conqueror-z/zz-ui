<template>
  <div class="zz-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ZzCheckboxGroup",
  provide() {
    return {
      checkboxGroup: this
    };
  },
  props: {
    value: {
      type: Array
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
