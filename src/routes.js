import App from "./App.vue";
import AllGoods from "./AllGoods.vue";
import AllManufacturers from "./AllManufacturers.vue";
import NewGood from "./NewGood.vue";

export const routes = [
    { path: '/', component: App },
    {path: '/goods', component: AllGoods},
    {path: '/manufacturers', component: AllManufacturers},
    {path: '/newGood', component: NewGood}
]