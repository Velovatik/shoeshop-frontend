export default {
    actions: {

    },
    mutations: {
        addItemToCart(state, {id: id, title: title, price: price, size: size,
        inStock: inStock}) { //Method for adding item to cart

            let foundId = state.purchases.find(el => el.id == id)

            if (foundId) {
                let foundSize = foundId.sizes.find(el => el.size == size)

                if (foundSize) {
                    foundSize.amount += 1
                }
                else {
                    foundId.sizes.push({
                        size: size,
                        amount: 1,
                        inStock: inStock
                    })
                }
            }
            else {
                state.purchases.push({
                    id: id,
                    title: title,
                    price: price,
                    sizes: [
                        {
                            size: size,
                            amount: 1,
                            inStock: inStock
                        }
                    ],
                });
            }
        }
    },
    state: {
        purchases: [] //Arr of added items to cart
    },
    getters: {
        getAllPurchases(state) { //Getter for operations with items in cart
            return state.purchases;
        },
        getPurchasesQuantity(state) {
            return state?.purchases?.length
        }
    },
}