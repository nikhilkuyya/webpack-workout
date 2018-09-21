import Vue from "vue";
const vm = {
  el: "#app",
  template: "<div :id='rootId'>{{framework}} </div>",
  data: {
    rootId: "app",
    framework: "Vue"
  }
};

const startVueApp = () => {
  new Vue(vm);
};

export default startVueApp;
