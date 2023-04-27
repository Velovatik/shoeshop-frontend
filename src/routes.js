import App from "./App.vue";
import AllGoods from "./AllGoods.vue";
import AllManufacturers from "./AllManufacturers.vue";
import NewGood from "./NewGood.vue";
import NewManufacturer from "./NewManufacturer.vue";
import EditGood from "./EditGood.vue";
import EditManufacturer from "./EditManufacturer.vue";
import Cart from "./Cart.vue";

export const routes = [
    { path: '/', component: App },
    {path: '/goods', component: AllGoods},
    {path: '/manufacturers', component: AllManufacturers},
    {path: '/newGood', component: NewGood},
    {path: '/editGood/:id', component: EditGood},
    {path: '/newManufacturer', component: NewManufacturer},
    {path: '/editManufacturer/:id', component: EditManufacturer},
    {path: '/cart', component: Cart}
]