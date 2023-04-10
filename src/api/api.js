import axios from "axios";

export const shoeApiInstance = () => axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 2000
})

const urls = {
    all_goods: "/goods"
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
    }
}
