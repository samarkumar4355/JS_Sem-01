var aura = 10;

function decrease(){
    if(aura>0){
    aura--;
    // console.log(aura);
    head[0].innerHTML=`cart count = ${aura}`;
    } else{
        aura = 0;
    }
}