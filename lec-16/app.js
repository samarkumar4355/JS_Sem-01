// function banking(){

// }

async function dataFetching(){
    try {
        let responce = await fetch('http:/fakestoeapi.com/products')
    let data = await responce.json();
    console.log(data);
    } catch (error) {
        console.log(error);
        console.log("think karo kuchh problem h try me");
    }
}
dataFetching();