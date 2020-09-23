//3.4

const promise = function(){
    return new Promise(function(resolve, reject){
        return resolve();
    })
}

const promise = () => new Promise(resolve, reject => resolve());


