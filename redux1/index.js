const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAMS = 'BUY_ICECREAMS'

function buyIceCream(){
    return{
        type: BUY_ICECREAMS
    }
}

function buyCake(){
    return {
        type : BUY_CAKE ,
        info : 'First redux action'
    }
}

// const intialState = {
//     numOfCakes : 5,
//     numOfIceCreams : 10
// }

const intialCakeState ={
    numOfCakes : 5
}
const intialIceCreamState = {
    numOfIceCreams : 10
}

// const reducer = (state = intialState,action) => {
//         switch(action.type) {
//             case BUY_CAKE: return{
//                 ...state,
//                 numOfCakes : state.numOfCakes -1
//             }
//             case BUY_ICECREAMS: return{
//                 ...state,
//                 numOfIceCreams : state.numOfIceCreams-1
//             }

//             default: return state
//         }
// }

const cakereducer = (state = intialCakeState,action) => {
    switch(action.type) {
        case BUY_CAKE: return{
            ...state,
            numOfCakes : state.numOfCakes -1
        }

        default: return state
    }
}
const iceCreamreducer = (state = intialIceCreamState,action) => {
    switch(action.type) {
        case BUY_ICECREAMS: return{
            ...state,
            numOfIceCreams : state.numOfIceCreams -1
        }

        default: return state
    }
}

//method accepts an object
const rootReducer = combineReducers({
    cake : cakereducer,
    iceCream : iceCreamreducer
})

const store = createStore(rootReducer,applyMiddleware(logger))
console.log('Initial State', store.getState())

const unsubscriibe = store.subscribe(()=> {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
 unsubscriibe()