const submitBtn = document.getElementById('submit-btn');
const errorMessage = document.querySelector('.error-message');
const mainParagraph = document.querySelector('.paragraph')
let inputValue = document.querySelector('input');
let mainParagraphText = mainParagraph.innerText;



const updateUIX = ()=>{
    
    let emailValue = inputValue.value;
    let emailPatern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 

    const resetUIX = ()=>{
        mainParagraph.classList.remove('success-message');
        mainParagraph.innerText = mainParagraphText;
        inputValue.value = '';  
        inputValue.classList.remove('input-error'); 
        errorMessage.style.display = 'none';
    } 

    if(!emailPatern.test(emailValue)){
        inputValue.classList.add('input-error');
        errorMessage.style.display = 'flex';
    } else{
        mainParagraph.classList.add('success-message')
        mainParagraph.innerText = 'Thank you for subscribing , we will keep you updated with our launch deals.'
        errorMessage.style.display = 'none'
        
    }

    setTimeout(resetUIX, 3000);
}

submitBtn.addEventListener('click', updateUIX );