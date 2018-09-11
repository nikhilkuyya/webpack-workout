import Vue from "vue";
const vm = {
  el: "#app",
  template: '<div id="app"> {{framework}} </div>',
  data: {
    framework: "Vue"
  }
};

const startVueApp = () => {
  new Vue(vm);
};

export default startVueApp;
