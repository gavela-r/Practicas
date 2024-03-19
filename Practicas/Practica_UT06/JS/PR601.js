let div = document.querySelectorAll('div');
div.forEach((element)=>{
    element.addEventListener('click', hacerClick);
    
});



function hacerClick(event){
    console.log(event);
    if(event.ctrlKey){
        event.currentTarget.classList.add('selected');
    }else if(event.currentTarget.classList.contains('selected')){
        event.currentTarget.classList.remove('selected')   
    }else{
        div.forEach((element)=>{
            element.classList.remove('selected');
        });
        event.currentTarget.classList.add('selected');
    }
    
}



    

