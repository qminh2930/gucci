import {SHOW_PRODUCT,ADD_PRODUCT_TO_CART,DELETE_PRODUCT_TO_CART,ADD_NEW_ACCOUNT,IS_VALID_ACCOUNT } from "./constants"

const innitialState = {
    products : [
        {
            id: 1,
            name:'Silk duchesse midi-length dress',
            src: 'https://i.imgur.com/ZHHkKoN.jpg',
            price:4200
        },
        {
            id:2,
            name:'Denim shirt with embroidery',
            src:'https://i.imgur.com/bMAVdo5.jpg',
            price:1800
        },
        {
            id:3,
            name:'Tie-dye lycra swimsuit',
            src:'https://i.imgur.com/TOcD1y8.jpg',
            price:980,
            onTrend:true
        }
        ,
        {
            id:4,
            name:'Cotton cropped T-shirt with embroidery',
            src:'https://i.imgur.com/nlKbv9f.jpg',
            price:1150
        }
        ,
        {
            id:5,
            name:'Cotton T-shirt with Gucci palm print',
            src:'https://i.imgur.com/BLaM9WG.jpg',
            price:750
        },
        {
            id:6,
            name:'Crêpe de chine dress',
            src:'https://i.imgur.com/5rvsf5N.jpg',
            price:5700
        },{
            id:7,
            name:'Cotton zip jacket with patch',
            src:'https://i.imgur.com/1qecp7b.jpg',
            price:3400

        },
        {
            id:8,
            name:'Faux fur shorts',
            src:'https://i.imgur.com/bUm5Oxd.jpg',
            price:1200
        },
        {
            id:9,
            name:'adidas x Gucci T-shirt dress',
            src:'https://i.imgur.com/jxlS26b.jpg',
            price:980,
            onTrend:true
        },
        {
            id:10,
            name:'adidas x Gucci GG Trefoil jacquard jacket',
            src:'https://i.imgur.com/YJk3O6W.png',
            price:2400

        },
        {
            id:11,
            name:'adidas x Gucci v-neck T-shirt ',
            src:'https://i.imgur.com/7vgyVxb.jpg',
            price:750
        },
        {
            id:12,
            name:'adidas x Gucci Trefoil print jacket',
            src:'https://i.imgur.com/3zV4CK1.jpg',
            price:2980
        },
        {
            id:13,
            name:'Polo with Interlocking G stripe',
            src:'https://i.imgur.com/bRvfBwL.jpg',
            price:900

        },
        {
            id:14,
            name:'Interlocking G chain silk jacket',
            src:'https://i.imgur.com/dLQ3Nch.jpg',
            price:3300,
            onTrend:true
        },
        {
            id:15,
            name:'Cotton polo with Web and feline head',
            src:'https://i.imgur.com/HiY8TUh.jpg',
            price:710

        },
        {
            id:16,
            name:'Wool GG piquet jacquard polo shirt',
            src:'https://i.imgur.com/VrdN6V3.jpg',
            price:1980
        },
        {
            id:17,
            name:'GG embroidered tulle dress',
            src:'https://i.imgur.com/mSHXs4u.jpg',
            price:4500
        },
        {
            id:18,
            name:'Oversize washed T-shirt with Gucci logo',
            src:'https://i.imgur.com/jQDACbn.jpg',
            price:580,
            onTrend:true

        },
        {
            id:19,
            name:'Viscose rib stitch dress',
            src:'https://i.imgur.com/d6HrbSB.jpg',
            price:2100
        },
        {
            id:20,
            name:'Prince of Wales check formal jacket',
            src:'https://i.imgur.com/ARBbiL8.jpg',
            price:3750

        },
        {
            id:21,
            name:'Cotton drill pants with Gucci print',
            src:'https://i.imgur.com/EPoUixT.jpg',
            price:1100

        },
        {
            id:22,
            name:'Interlocking G jersey bikini',
            src:'https://i.imgur.com/7SqA4CJ.jpg',
            price:690
        },
        {
            id:23,
            name:'GG jacquard cotton jacket',
            src:'https://i.imgur.com/P4w4He8.jpg',
            price:1980

        },
        {
            id:24,
            name:'Cotton dress with chenille Web',
            src:'https://i.imgur.com/XZ4Stl4.jpg',
            price:2250

        },
        {
            id:25,
            name:'Short sleeves flannel jacket',
            src:'https://i.imgur.com/nlALxHk.jpg',
            price:3500
        },
        {
            id:26,
            name:' Denim jacket with Horsebits',
            src:'https://i.imgur.com/Zhc6VYj.jpg',
            price:2450

        },
        {
            id:27,
            name:'Silk chiffon ruffle shirt',
            src:'https://i.imgur.com/sDqJ9fj.jpg',
            price:1800
        },
        {
            id:28,
            name:'Gucci Pineapple GG canvas bowling shirt',
            src:'https://i.imgur.com/0TyiiR4.jpg',
            price:1350
        }
       
    ],
    productInfo:[],
    yourCart:[],
    login:false,
    accountList:[],
    CurrentUserName:''
}

function reducer(state,action){
    switch(action.type){
        case SHOW_PRODUCT:
            return {
                ...state,
                productInfo: action.payload
            }
        case ADD_PRODUCT_TO_CART:
            const addedProduct = [...state.yourCart,action.payload]
            return {
                ...state,
                yourCart:addedProduct
            }
        case DELETE_PRODUCT_TO_CART:
            let cart = [...state.yourCart]
            cart.splice(action.payload,1)
            return {
                ...state,
                yourCart:cart
            }
        case ADD_NEW_ACCOUNT:
            return {
                ...state,
                accountList:[...state.accountList,action.payload]
            }
        case IS_VALID_ACCOUNT:
            return {
                ...state,
                login:action.payload.valid,
                CurrentUserName:action.payload.userName
            }
    

        default:
            return state
    }
}
export {innitialState}
export default reducer