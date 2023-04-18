import axios from "axios";

export const shoeApiInstance = () => axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 2000
})

const urls = {
    all_goods: "/goods",
    all_manufacturers: "/manufacturers"
}

export const shoeApi = {
    getAllGoods () {
        return shoeApiInstance()
            .get(urls.all_goods)
            .then((resp) => {
                return resp.data
            })
            .catch((err) => {
                throw err
            })
    },

    getAllManufacturers () {
        return shoeApiInstance()
            .get(urls.all_manufacturers)
            .then((resp) => {
                return resp.data
            })
            .catch((err) => {
                throw err
            })
    },

    postNewManufacturer({title, sex, manufacturerId, sizes}) {
       return shoeApiInstance()
           .post(urls.all_goods, {
               title : title,
               sex : sex,
               manufacturerId : manufacturerId,
               sizes : sizes
           })
           .then((resp) => {
               return resp.data;
           })
           .catch((err) => {
               throw err;
           })
    }
}
