
let counter = 0;

const getData = () => {
    //calls an API and gets Data
    console.log('Fetching data..',counter++);
}

const doMagic = function (fn,d) {
    let timer;
    return function (){
        let context = this,
        args = arguments;
        clearTimeout(timer);

       timer =  setTimeout(()=>{
            getData.apply(context,arguments);
        },d);
    }
}

const betterFunction = doMagic(getData,300);