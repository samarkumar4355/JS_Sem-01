function addtodo(){
    let input = document.querySelector("main");
    let li=document.createElement("li");
      li.innerElement = input.value;
      
      console.log(li);
       let ul=document.querySelector("ul");
      if(input.value==" "){
        alert("bhai value to daal");
        return;
      }

     
      ul.prepend(li);
      input.value=" ";
      

}