var loginBtn=document.querySelector('.header__navbar-login')
var innerLoginBtn=document.querySelector('.register.auth-form__switch-btn')
var innerRegisBtn=document.querySelector('.login.auth-form__switch-btn')
console.log(innerLoginBtn)
var regisBtn=document.querySelector('.header__navbar-register')
var loginForm=document.querySelector('.auth-form__login')
var regisForm=document.querySelector('.auth-form__regis')
var modal=document.querySelector('.modal')
var blank=document.querySelector('.modal__overlay')
var returnBtnLogin=document.querySelector('.login-form__back')
var returnBtnRegis=document.querySelector('.regis-form__back')
blank.addEventListener('click',function(){
    if(modal.classList.contains('active')){
        modal.classList.replace('active','disabled')
    }
    modal.classList.add('disabled')
    if(loginForm.classList.contains('active')){
        loginForm.classList.remove('active')
    }
    else if(loginForm.classList.contains('disabled')){
        loginForm.classList.remove('disabled')
    }
    if(regisForm.classList.contains('active')){
        regisForm.classList.remove('active')
    }
    else if (regisForm.classList.contains('disabled')){
        regisForm.classList.remove('disabled')
    }
})
loginBtn.addEventListener('click',function(){
    if(modal.classList.contains('disabled')){
        modal.classList.replace('disabled','active')
        if(loginForm.classList.contains('disabled')){
            loginForm.classList.replace('disabled','active')
            regisForm.classList.add('disabled')
        }
        loginForm.classList.add('active')
        regisForm.classList.add('disabled')
    }
    else{
        modal.classList.add('active')
        if(loginForm.classList.contains('disabled')){
            loginForm.classList.replace('disabled','active')
            regisForm.classList.add('disabled')

        }
        loginForm.classList.add('active')
        regisForm.classList.add('disabled')
    }
})
regisBtn.addEventListener('click',function(){
    if(modal.classList.contains('disabled')){
        modal.classList.replace('disabled','active')
        if(regisForm.classList.contains('disabled')){
            regisForm.classList.replace('disabled','active')
            loginForm.classList.add('disabled')
        }
        regisForm.classList.add('active')
        loginForm.classList.add('disabled')
    }
    else{
        modal.classList.add('active')
        if(regisForm.classList.contains('disabled')){
            regisForm.classList.replace('disabled','active')
            loginForm.classList.add('disabled')

        }
        regisForm.classList.add('active')
        loginForm.classList.add('disabled')
    }
})
innerLoginBtn.addEventListener('click',function(){
    regisForm.classList.replace('active','disabled')
    loginForm.classList.replace('disabled','active')
})
innerRegisBtn.addEventListener('click',function(){
    loginForm.classList.replace('active','disabled')
    regisForm.classList.replace('disabled','active')
})
returnBtnLogin.addEventListener('click',function(){
    modal.classList.replace('active','disabled')
    if(loginForm.classList.contains('active')){
        loginForm.classList.replace('active','disabled')
    }
})
returnBtnRegis.addEventListener('click',function(){
    modal.classList.replace('active','disabled')
    if(regisForm.classList.contains('active')){
        regisForm.classList.replace('active','disabled')
    }
})