import { SHOW_PRODUCT,ADD_PRODUCT_TO_CART,DELETE_PRODUCT_TO_CART,ADD_NEW_ACCOUNT,IS_VALID_ACCOUNT} from './constants'
    
export const showProduct = payload =>({
    type:SHOW_PRODUCT,
    payload
})
export const addProductToCart = payload =>({
    type:ADD_PRODUCT_TO_CART,
    payload
})
export const deleteProductToCart = payload =>({
    type:DELETE_PRODUCT_TO_CART,
    payload
})
export const addNewAccount = payload =>({
    type:ADD_NEW_ACCOUNT,
    payload
})
export const isValidLogin = payload =>({
    type:IS_VALID_ACCOUNT,
    payload
})