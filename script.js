const number = document.querySelector('.result-section');
const lengthDisplay = document.querySelector('.length p');
const volumeDisplay = document.querySelector('.volume p');
const massDisplay = document.querySelector('.mass p');
const units = [];

// const samp = 0.264172 * 20;
// console.log(samp)

// const feet_in_1meter = Math.floor(3.28084 * 40 * 1000) / 1000;
// const gallon_in_1liter = Math.floor(0.264172 * 1000) / 1000;
// const pound_in_1kilogram = Math.floor(2.20462 * 1000) / 1000;

// console.log(feet_in_1meter)

const template = (unitValue) => {

    lengthDisplay.textContent = unitValue[0];
    volumeDisplay.textContent = unitValue[1];
    massDisplay.textContent = unitValue[2];
    let input = number.number.value;
    console.log(input)
}

const checkerLS = () => {
    if(localStorage.getItem('length')) {
        lengthDisplay.textContent = localStorage.getItem('length');
    }
    
    if(localStorage.getItem('volume')) {
        volumeDisplay.textContent = localStorage.getItem('volume');
    }
   
    if(localStorage.getItem('mass')) {
        massDisplay.textContent = localStorage.getItem('mass');
    }
    
}


const unitRenderer = (input) => {
    const feet_in_meter = Math.floor(3.28084 * input * 1000) / 1000;
    const gallon_in_liter = Math.floor(0.264172 * input * 1000) / 1000;
    const pound_in_kilogram = Math.floor(2.20462 * input * 1000) / 1000;
    const meter_in_feet = Math.floor(0.3048 * input * 1000) / 1000;
    const liter_in_gallon = Math.floor(3.78541 * input * 1000) / 1000;
    const kilogram_in_pound = Math.floor(0.453592 * input * 1000) / 1000;

    localStorage.setItem('length', `${input} meters = ${feet_in_meter} feet | ${input} feet = ${meter_in_feet} meters`);
    localStorage.setItem('volume', `${input} liters = ${gallon_in_liter} gallons | ${input} gallons = ${liter_in_gallon} liters`);
    localStorage.setItem('mass', `${input} kilos = ${pound_in_kilogram} pounds | ${input} pounds = ${kilogram_in_pound} kilos`);

    checkerLS();

} 

lengthDisplay.textContent = localStorage.getItem('length');
volumeDisplay.textContent = localStorage.getItem('volume');
massDisplay.textContent = localStorage.getItem('mass');


number.addEventListener('submit', e => {
    e.preventDefault();

    let input = number.number.value;
    if(input) {
        unitRenderer(input);
    }
    
    number.number.value = '';

})






