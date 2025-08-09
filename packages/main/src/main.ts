import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { registerMicroApps, start } from "qiankun";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

// 注册子应用
registerMicroApps([
  {
    name: "sub-one",
    entry: "//localhost:8081", // 子应用 1 的入口地址
    container: "#subapp-container", // 子应用挂载的 DOM 节点
    activeRule: "/sub-one", // 子应用激活的路由规则
  },
  {
    name: "sub-two",
    entry: "//localhost:8082", // 子应用 1 的入口地址
    container: "#subapp-container", // 子应用挂载的 DOM 节点
    activeRule: "/sub-two", // 子应用激活的路由规则
  },
]);

// 启动微前端
start();
