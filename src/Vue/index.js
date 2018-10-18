import Vue from "vue";
const vm = {
  el: "#app",
  template: "<div :id='rootId'>{{framework}} </div>",
  data: function () {
    return {
      rootId: "app",
      framework: "Vue"
    };
  }
};

const startVueApp = () => {
  return new Vue(vm);
};

export default startVueApp;