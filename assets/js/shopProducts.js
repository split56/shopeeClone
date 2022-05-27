var optionInner=document.querySelector('.header__search-options-check-icon-one')
var innerBox=document.querySelector('.header__search-options-item-one')
var optionOuter=document.querySelector('.header__search-options-check-icon-two')
var outerBox=document.querySelector('.header__search-options-item-two')
innerBox.addEventListener('click',function(){
    if(optionInner.classList.contains('disabled')){
        optionInner.classList.remove('disabled')
    }
    else{
        optionInner.classList.add('disabled')
    }
})
outerBox.addEventListener('click',function(){
    if(optionOuter.classList.contains('disabled')){
        optionOuter.classList.remove('disabled')
    }
    else{
        optionOuter.classList.add('disabled')
    }
})