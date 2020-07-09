document.getElementById('value').addEventListener('keypress', (e) => {
    if (e.keyCode === 13);
    conversion();
});

let initialValue;
let convertedNumber;

function conversion() {
    initialValue = document.getElementById('value').value;
    convertedNumber = document.getElementById('output');
    let divLeft = document.getElementById('units-left');
    let divRight = document.getElementById('units-right');
    let leftVal = divLeft.options[divLeft.selectedIndex].value;
    let rightVal = divRight.options[divRight.selectedIndex].value;

    // console.log('left value is ' + leftVal);
    // console.log('right value is ' + rightVal);


    if (leftVal === rightVal) {
        convertedNumber.innerHTML = 'You\'ve selected the same values. Please change your selection.';

    } else if (leftVal === 'km' && rightVal === 'meter') {
        kmToMeters();

    } else if (leftVal === 'km' && rightVal === 'cm') {
        kmToCm();

    } else if (leftVal === 'km' && rightVal === 'mm') {
        kmtoMm();

    } else if (leftVal === 'km' && rightVal === 'mile') {
        kmToMile();

    } else if (leftVal === 'meter' && rightVal === 'km') {
        metersToKm();

    } else if (leftVal === 'meter' && rightVal === 'cm') {
        metersToCm();

    } else if (leftVal === 'meter' && rightVal === 'mm') {
        metersToMm();

    } else if (leftVal === 'meter' && rightVal === 'mile') {
        metersToMile();

    } else if (leftVal === 'cm' && rightVal === 'km') {
        cmToKm();

    } else if (leftVal === 'cm' && rightVal === 'meter') {
        cmToMeter();

    } else if (leftVal === 'cm' && rightVal === 'mm') {
        cmToMm();

    } else if (leftVal === 'cm' && rightVal === 'mile') {
        cmToMile();

    } else if (leftVal === 'mm' && rightVal === 'km') {
        mmToKm();

    } else if (leftVal === 'mm' && rightVal === 'meter') {
        mmToMeter();

    } else if (leftVal === 'mm' && rightVal === 'cm') {
        mmToCm();

    } else if (leftVal === 'mm' && rightVal === 'mile') {
        mmToMile();

    } else if (leftVal === 'mile' && rightVal === 'km') {
        milesToKm();

    } else if (leftVal === 'mile' && rightVal === 'meter') {
        milesToMeter();

    } else if (leftVal === 'mile' && rightVal === 'cm') {
        milesToCm();

    } else if (leftVal === 'mile' && rightVal === 'mm') {
        milesToMm();

    }
}


// KM to
function kmToMeters() {
    let meters = initialValue * 1000;
    convertedNumber.innerHTML = meters;
}

function kmToCm() {
    let cm = initialValue * 100000;
    convertedNumber.innerHTML = cm;
}

function kmtoMm() {
    let mm = initialValue * 1000000;
    convertedNumber.innerHTML = mm;
}

function kmToMile() {
    let mile = initialValue / 1.609;
    let roundedMile = Math.round(mile * 100) / 100;
    convertedNumber.innerHTML = roundedMile;
}

// 
// |||||||| Meters to

function metersToKm() {
    let km = initialValue / 1000;
    let roundedKm = Math.round(km * 1000) / 1000;
    convertedNumber.innerHTML = roundedKm;
}

function metersToCm() {
    let cm = initialValue * 100;
    convertedNumber.innerHTML = cm;
}

function metersToMm() {
    let mm = initialValue * 1000;
    convertedNumber.innerHTML = mm;
}

function metersToMile() {
    let mile = initialValue / 1609;
    let roundedMile = Math.round(mile * 1000) / 1000;
    convertedNumber.innerHTML = roundedMile;
}

// 
// ||||||||||||||| CM to

function cmToKm() {
    let km = initialValue * 100000;
    convertedNumber.innerHTML = km;
}

function cmToMeter() {
    let m = initialValue * 100;
    convertedNumber.innerHTML = m;
}

function cmToMm() {
    let mm = initialValue * 10;
    convertedNumber.innerHTML = mm;
}

function cmToMile() {
    let mile = initialValue / 160934;
    let roundedMile = Math.round(mile * 1000) / 1000;
    convertedNumber.innerHTML = roundedMile;
}


//
// |||||||||| MM to 

function mmToKm() {
    let km = initialValue * 1000000;
    convertedNumber.innerHTML = km;
}

function mmToMeter() {
    let meter = initialValue * 1000;
    convertedNumber.innerHTML = meter;
}

function mmToCm() {
    let cm = initialValue * 10;
    convertedNumber.innerHTML = cm;
}

function mmToMile() {
    let mile = initialValue * 1609344;
    convertedNumber.innerHTML = mile;
};


//
// |||||||||| Miles to 

function milesToKm() {
    let km = initialValue * 1.609;
    convertedNumber.innerHTML = km;
}

function milesToMeter() {
    let meter = initialValue * 1609;
    convertedNumber.innerHTML = meter;
}

function milesToCm() {
    let cm = initialValue * 160934;
    convertedNumber.innerHTML = cm;
}

function milesToMm() {
    let mm = initialValue * 1609344;
    convertedNumber.innerHTML = mm;
}