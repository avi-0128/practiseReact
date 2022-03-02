import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake} from '../redux/cake/cakeActions'

function HooksCakeContainer() {
    const numOfcakes = useSelector(state => state.cake.numOfCakes)
  const dispatch =  useDispatch()
  return (
    <div>
        <h2>Number of cakes: {numOfcakes}</h2>
        <button onClick={()=> dispatch(buyCake())}>Buy Cakes</button>
    </div>
  )
}

export default HooksCakeContainer