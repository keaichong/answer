// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
// import "./utils/flexible";
import axios from "axios";
import ToastComponent from "./components/toast.vue";

Vue.config.productionTip = false;
Vue.config.debug = true;
Vue.prototype.$http = axios;

var opt = {
  duration: 2000
};
Vue.prototype.$toast = function(msg, options) {
  // if (typeof options == "object") {
  //   for (var key in options) {
  //     //往opt里增加配置信息
  //     opt[key] = options[key];
  //   }
  // }
  const ToastController = Vue.extend(ToastComponent);
  console.log(ToastController);

  var instance = new ToastController().$mount(document.createElement("div"));
  instance.msg = msg;
  instance.visible = true;
  document.body.appendChild(instance.$el);
  setTimeout(() => {
    instance.visible = false;
    document.body.removeChild(instance.$el);
    instance.visible = false;
  }, opt.duration);
};

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
