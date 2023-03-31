var input = document.getElementById('input');
input.addEventListener('input',function(){
    if(input.value.length > 11 || input.value.length < 11){
        input.style.color = 'red';
    }else{
        input.style.color = 'black';
    }
})