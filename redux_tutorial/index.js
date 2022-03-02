const redux = require('redux')
//redux method to create redux store -> createStore
const createStore = redux.createStore

// define string const that defines type of action
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAMS = 'BUY_ICECREAMS'
//now we define action
//action is an object that has type property

// {
//     type : BUY_CAKE,
//     info : 'First redux action'
// }
//action creator simply creates an action => function returns an action
//we can directly write this in disptach method but whenever we want to add an object property
// we should add in every place where dispatch method is written
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

//(prevState,action) => newState

const intialState = {
    numOfCakes : 5,
    numOfIceCreams : 10
}
//we should return new object and should not mutate
const reducer = (state = intialState,action) => {
        switch(action.type) {
            case BUY_CAKE: return{
                //to copy other states which we dont change
                ...state,
                numOfCakes : state.numOfCakes -1
            }
            case BUY_ICECREAMS: return{
                ...state,
                numOfIceCreams : state.numOfIceCreams-1
            }

            default: return state
        }
}


//create store accepts the method -> reducer function -> which has intial state
const store = createStore(reducer)
console.log('Initial State', store.getState())
// const unsubscriibe = store.subscribe(()=> console.log('Update state',store.getState()))
store.subscribe(()=> console.log('Update state',store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
// unsubscriibe()