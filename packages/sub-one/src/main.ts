import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

let appInstance = null;

// 渲染函数
function render(props = {}) {
  const { container } = props;
  appInstance = createApp(App);
  appInstance.use(createPinia());
  appInstance.use(router);
  appInstance.mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

// 微前端生命周期函数
export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}

export async function unmount() {
  if (appInstance) {
    appInstance.unmount();
    appInstance = null;
  }
}
