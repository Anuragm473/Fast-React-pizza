import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItem, increaseItem } from "../cart/cartSlice";


export default function UpdateQuantity({pizzaId}) {
    const quantity=useSelector(state=>state.cart.cart.find(item=>item.pizzaId===pizzaId).quantity)
    const dispatch=useDispatch()
  return (
    <div className='flex items-center gap-1 md:gap-3'>
      <Button type='round' onClick={()=>dispatch(decreaseItem(pizzaId))}>-</Button>
      <span>{quantity}</span>
      <Button type='round' onClick={()=>dispatch(increaseItem(pizzaId))}>+</Button>
    </div>
  )
}
