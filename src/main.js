import Vue from "vue";
import App from "./App.vue";
import {
  Carousel,
  CarouselItem,
  Row,
  Card,
  Col,
  Button,
  Table,
  TableColumn,
  Dialog,
  Input,
  DatePicker,
} from "element-ui";
import VueRouter from "vue-router";
import router from "./router";
// 引入store
import store from "./store";

Vue.config.productionTip = false;
Vue.component(Carousel.name, Carousel);
Vue.component(CarouselItem.name, CarouselItem);
Vue.component(Row.name, Row);
Vue.component(Card.name, Card);
Vue.component(Col.name, Col);
Vue.component(Button.name, Button);
Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);
Vue.component(Dialog.name, Dialog);
Vue.component(Input.name, Input);
Vue.component(DatePicker.name, DatePicker);
Vue.use(VueRouter);
new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
