import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux/iceCream/iceCreamActions'

function IceCreamContainer(props) {
  return (
    <div>
        <h2>Number of Ice Creams - {props.numOfIceCream}</h2>
        <button onClick={props.buyIceCream}> Buy Ice Creams</button>
    </div>
  )
}

const mapStateToProps = state => {
    return{
     numOfIceCream: state.iceCream.numOfIceCream

    }
}

const mapDispatchToProps  = dispatch => {
    return{
        buyIceCream : () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)