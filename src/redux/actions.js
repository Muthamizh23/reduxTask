import { store } from "./store";
import * as actionTypes from './actionType';

export const fetchProducts= getProductsRes => ({
    type : actionTypes.PRODUCTS,
    getProductsRes
});

export const fetchProductsRes = (data) => dispatch => {
    store.dispatch(fetchProducts(data));
}

export const fetchTotal = getTotalRes => ({
    type : actionTypes.TOTAL,
    getTotalRes
});

export const fetchTotalRes = (data, id, quantity) => dispatch => {
    var total = 0;
    var index = 0;
    // var price = 0;
    data.forEach((data, i)=>{
        if(data.id === id){
            total += data.price * quantity
        }
        else if(data.quantity){
            total += data.price * data.quantity
        }
        else{
            total += data.price
        }
        // total += data.id === id ? data.price * quantity : data.price ;
        if(data.id === id){ index = i ; }
    });
    if(id){
        data[index].quantity =  quantity;
    }

    fetchProductsRes(data);
    store.dispatch(fetchTotal(total));
}