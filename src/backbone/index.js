import Backbone from "backbone";

const BankboneView = Backbone.View.extend({
  el: "#app",
  initialize: function() {
    this.render();
  },
  render: function() {
    console.log(this, this.$el);
    this.$el.html("Backbone");
  }
});

const startBackBoneApp = () => {
  new BankboneView();
};

export default startBackBoneApp;
