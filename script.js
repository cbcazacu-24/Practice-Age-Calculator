// declaring output elements
let outputDay = document.querySelector(".outputDay")
let outputMonth = document.querySelector(".outputMonth")
let outputYear = document.querySelector(".outputYear")

// declaring button
const button = document.querySelector(".button")

// declaring input elements
const inputDay = document.querySelector("#day")
const inputMonth = document.querySelector("#month")
const inputYear = document.querySelector("#year")

// declaring error elements
const errorDay = document.querySelector(".errorDay")
const errorMonth = document.querySelector(".errorMonth")
const errorYear = document.querySelector(".errorYear")

let isValid = false;

//checking the day input and its validity
inputDay.addEventListener('input', e => {
    console.log(e)
    if(+inputDay.value > 31 || +inputDay.value <= 0 ) {
        errorDay.textContent = "Must be a valid day";
        isValid = false;
        return;
    } else {
        isValid = true;
        errorDay.textContent = ""
    }
    if(!inputDay.value ) {
    isValid = false;
    errorDay.textContent = "This field is required";
    isValid = false;   
    return;     
    } else {
        errorDay.textContent = ""
    }
})

inputMonth.addEventListener('input', e => {
    if(+inputMonth.value > 12 || +inputMonth.value <= 0) {
        errorMonth.textContent = "Must be a valid Month";
        isValid = false;
        return;
    } else {
        isValid = true;
        errorMonth.textContent = ""
    }
    if(!inputMonth.value ) {
    isValid = false;
    errorMonth.textContent = "This field is required";
    isValid = false;   
    return;     
    } else {
        errorMonth.textContent = ""
    }
})


inputYear.addEventListener('input', e => {
    if(+inputYear.value > 2024) {
        errorYear.textContent = "Must be a valid Year";
        isValid = false;
        return;
    } else {
        isValid = true;
        errorYear.textContent = ""
    }
    if(!inputYear.value) {
    isValid = false;
    errorYear.textContent = "This field is required";
    isValid = false;   
    return;     
    } else {
        errorYear.textContent = ""
    }
})


// activating button
button.addEventListener('click', calculateDate)



function calculateDate() {

    if(isValid){
        let birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
        let birthdayObj = new Date(birthday);
        let ageDiffMill = Date.now() - birthdayObj;
        let ageDate = new Date(ageDiffMill);
        let ageYear = ageDate.getUTCFullYear() - 1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDay() - 1;

        outputDay.textContent = ageDay;
        outputMonth.textContent = ageMonth;
        outputYear.textContent = ageYear;
    }else{
        alert('error')
    }
}