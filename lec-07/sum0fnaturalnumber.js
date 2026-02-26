function sum(n){
     let sum =0;
     sum = n(n+1)/2;

}

function memo(fn){
    let cache = {};
    console.log(fn);

    return function (n){
        if (cache[n]){
            return `found data directly ${cache[n]}`;
        }
        else{
            let ans = fn(n);
            cache[n] = ans;
            return `not found recalculating .${cache[n]}`;
        }
    }
}

let Myfact = memo(fact);