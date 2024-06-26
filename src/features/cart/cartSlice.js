import { createSlice } from "@reduxjs/toolkit"

const initialState={
    cart:[]
}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem(state,action){
            state.cart.push(action.payload)
        },
        deleteItem(state,action){
            state.cart=state.cart.filter(item=>item.pizzaId!==action.payload)
        },
        increaseItem(state,action){
            const item=state.cart.find(item=>item.pizzaId===action.payload)
            item.quantity++
            item.totalPrice=item.quantity*item.unitPrice
        },
        decreaseItem(state,action){
            const item=state.cart.find(item=>item.pizzaId===action.payload)
            item.quantity--
            item.totalPrice=item.quantity*item.unitPrice
            if(item.quantity===0) state.cart=state.cart.filter(item=>item.pizzaId!==action.payload)
        },
        clearCart(state){
            state.cart=[]
        }
    }
})

export const {addItem,deleteItem,clearCart,increaseItem,decreaseItem}=cartSlice.actions
export default cartSlice.reducer

export const itemInList=id=>state=>state.cart.cart.find(item=>item.pizzaId===id)?.quantity ?? 0

