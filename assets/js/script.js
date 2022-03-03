

const labelEmail = document.querySelector('#labelEmail');
const labelSenha = document.querySelector('#labelSenha');
const email = document.querySelector('#email')

const senha = document.querySelector('#senha')


labelEmail.addEventListener('click', ()=>{
    if(labelEmail.focus){
        labelEmail.classList.add('label-email-active');
        console.log('entrou');
    }else if(labelEmail){
        labelEmail.classList.remove('label-email-active');
        console.log('saiu');
    }
})
labelSenha.addEventListener('click', ()=>{
    if(labelSenha.focus){
        labelSenha.classList.add('label-senha-active');
        console.log('entrou');
    }else if(labelSenha){
        labelSenha.classList.remove('label-senha-active');
        console.log('saiu');
    }
})



//==========VER SENHA==========
const verSenha = document.querySelector('#verSenha');
verSenha.addEventListener('click', ()=>{
    if(verSenha.checked){
        senha.type = 'text'
    }else if(!verSenha.checked){
        senha.type = 'password'
    }
})
//==========VER SENHA==========








/* 


console.log(verSenha.value);
labelEmail.addEventListener('click', ()=>{
    labelEmail.style.color = 'red'
})
labelSenha.addEventListener('click', ()=>{
    labelSenha.style.color = 'red'
})
*/



