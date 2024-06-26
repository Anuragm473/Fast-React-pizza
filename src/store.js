import cartSlice from "./features/cart/cartSlice";
import userSlice from "./utility/userSlice";
import {configureStore} from '@reduxjs/toolkit'
const store=configureStore({
    reducer:{user:userSlice,cart:cartSlice}
})
export default store