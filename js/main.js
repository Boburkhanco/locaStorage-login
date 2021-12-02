let storage = window.localStorage

submitBtn.addEventListener('click' , e => {
    registerP(passWordInput.value)
    register(firstnameInput.value)
    // register(passWordInput.value)

    firstnameInput.value = ''
    passWordInput.value = ''
    firstnameInput.focus()
})


function register(inputData){
    if(firstnameInput.value == '') {
        return
    } else {
        if (storage.getItem("userOne") == inputData){
        result.textContent = "You are already a member!"
        } else {
            storage.setItem("userOne", inputData)
            result.textContent = "You have succesfully been a member!"
        }
    }   
}

function registerP(inputData){
    if (storage.getItem("password") == inputData){
        result.textContent = "You are already a member!"
    } else {
        storage.setItem("password", inputData)
        result.textContent = "You have succesfully been a member!"
    }
}


clearBtn.addEventListener('click', e => {
    localStorage.clear()
    result.textContent = ""
})
