function numberToFrenchWords(number) {
    const units = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
    const teens = ['dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];
    const tens = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingt', 'quatre-vingt-dix'];
    const thousands = ['', 'mille', 'million', 'milliard', 'billion', 'billiard']; // Add more if needed

    if (number === 0) {
        return 'zéro';
    }

    if (number < 0 || number >= 10000) {
        return 'Out of range';
    }

    if (number < 10) {
        return units[number];
    }

    if (number >= 10 && number < 20) {
        return teens[number - 10];
    }

    if (number >= 1000) {
        const thousandIndex = Math.floor(number / 1000);
        const remainder = number % 1000;
        let result = numberToFrenchWords(thousandIndex) + ' ' + thousands[1];
        if (remainder > 0) {
            result += ' ' + numberToFrenchWords(remainder);
        }
        return result;
    }

    if (number >= 100) {
        const hundred = Math.floor(number / 100);
        const remainder = number % 100;
        let result = '';
        if (hundred === 1) {
            result += 'cent';
        } else {
            result += units[hundred] + '-cent';
        }
        if (remainder > 0) {
            result += '-' + numberToFrenchWords(remainder);
        }
        return result;
    }

    const ten = Math.floor(number / 10);
    const unit = number % 10;
    let result = tens[ten];
    if (unit > 0) {
        result += '-' + units[unit];
    }
    return result;
}



var uuvv = 0;


var input10 = document.getElementById('input10').value;
var input21 = document.getElementById('input21').value;
var input22 = document.getElementById('input22').value;
var input23 = document.getElementById('input23').value;
var input11 = document.getElementById('input11').value;
var input12 = document.getElementById('input12').value;
var input13 = document.getElementById('input13').value;
var input14 = document.getElementById('input14').value;
var input15 = document.getElementById('input15').value;
var input16 = document.getElementById('input16').value;
var input17 = document.getElementById('input17').value;
var input18 = document.getElementById('input18').value;
var input19 = document.getElementById('input19').value;
var input20 = document.getElementById('input20').value;
var c5 = document.getElementById('c5').textContent;
var c6 = document.getElementById('c5').textContent;

const button = document.getElementById('btn');

// Create an array to store previous input values
let previousInputs = new Array(24).fill(0); // Initialize with 24 elements, all set to 0

// Attach event listeners dynamically for inputs from 10 to 23
for (let i = 10; i <= 23; i++) {
    const inputId = 'input' + i;
    // Add event listener to the input element
    document.getElementById(inputId).addEventListener('input', function () {
        const inputValue = parseFloat(document.getElementById(inputId).value); // Parse input value to float

        if (i == 10 || i == 12 || i == 15 || i == 18 || i == 21 || i == 22 || i == 23) {

            const inp = 'inp' + i;
            const r = 'r' + i;
            const inpVal = document.getElementById(inp).textContent;
            if (!isNaN(inputValue)) {
                uuvv = uuvv - previousInputs[i] + (inputValue * parseFloat(inpVal));
                previousInputs[i] = inputValue * inpVal;
                document.getElementById('french-number').innerHTML = numberToFrenchWords(uuvv);
                document.getElementById(r).innerHTML = inputValue * parseFloat(inpVal)
            }
            else {
                uuvv = uuvv - previousInputs[i]; // Subtract previous value
                document.getElementById('french-number').innerHTML = numberToFrenchWords(uuvv);
                previousInputs[i] = 0;
                document.getElementById(r).innerHTML = "";
            }
        }
        else {
            // Update uuvv based on the change in input value
            if (!isNaN(inputValue)) {
                uuvv = uuvv - previousInputs[i] + inputValue; // Subtract previous value and add new value
                previousInputs[i] = inputValue; // Update the previous input value
            } else {
                uuvv = uuvv - previousInputs[i]; // Subtract previous value
                previousInputs[i] = 0; // Reset previous input value to 0
            }
        }

        // Update the display of uuvv
        document.getElementById('uuvv').innerHTML = uuvv;
        document.getElementById('french-number').innerHTML = numberToFrenchWords(uuvv);
        console.log(uuvv);
    });
}



for (let i = 1; i <= 43; i++) {
    const checkId = 'check' + i;
    const thId = 'c' + i;

    const checkbox = document.getElementById(checkId);
    const thElement = document.getElementById(thId);

    if (checkbox && thElement) {
        checkbox.addEventListener('input', function () {
            if (checkbox.checked) {
                uuvv += parseFloat(thElement.textContent);
                document.getElementById('uuvv').innerHTML = uuvv;
                document.getElementById('french-number').innerHTML = numberToFrenchWords(uuvv);
            } else {
                uuvv -= parseFloat(thElement.textContent);
                document.getElementById('uuvv').innerHTML = uuvv;
                document.getElementById('french-number').innerHTML = numberToFrenchWords(uuvv);
            }
        });
    }
}






button.addEventListener('click', function () {
    const input1 = document.getElementById('input1').value;
    const input3 = document.getElementById('input3').value;
    const input4 = document.getElementById('input4').value;
    const input5 = document.getElementById('inputt5').value;
    const input6 = document.getElementById('input6').value;
    const input7 = document.getElementById('input7').value;
    const input8 = document.getElementById('input8').value;
    const input9 = document.getElementById('input9').value;
    input10 = document.getElementById('input10').value;
    input21 = document.getElementById('input21').value;
    input22 = document.getElementById('input22').value;
    input23 = document.getElementById('input23').value;
    const input24 = document.getElementById('input24').value;
    const input25 = document.getElementById('input25').value;
    const input26 = document.getElementById('input26').value;
    const input27 = document.getElementById('input27').value;
    const input28 = document.getElementById('input28').value;
    const input29 = document.getElementById('input29').value;
    const input30 = document.getElementById('input30').value;
    input11 = document.getElementById('input11').value;
    input12 = document.getElementById('input12').value;
    input13 = document.getElementById('input13').value;
    input14 = document.getElementById('input14').value;
    input15 = document.getElementById('input15').value;
    input16 = document.getElementById('input16').value;
    input17 = document.getElementById('input17').value;
    input18 = document.getElementById('input18').value;
    input19 = document.getElementById('input19').value;
    input20 = document.getElementById('input20').value;
    const input31 = document.getElementById('input31').value;
    const input32 = document.getElementById('input31').value;
    const input33 = document.getElementById('input32').value;
    const input34 = document.getElementById('input34').value;
    const input35 = document.getElementById('input35').value;
    const input36 = document.getElementById('input36').value;
    const input37 = document.getElementById('inputt37').value;
    const input38 = document.getElementById('inputt38').value;
    const input39 = document.getElementById('input39').value;
    const input40 = document.getElementById('input40').value;
    const input41 = document.getElementById('input41').value;
    const input42 = document.getElementById('input42').value;
    const check1 = document.getElementById('check1').checked;
    const check2 = document.getElementById('check2').checked;
    const check3 = document.getElementById('check3').checked;
    const check4 = document.getElementById('check4').checked;
    const check5 = document.getElementById('check5').checked;
    const check6 = document.getElementById('check6').checked;
    const check7 = document.getElementById('check7').checked;
    const check8 = document.getElementById('check8').checked;
    const check9 = document.getElementById('check9').checked;
    const check10 = document.getElementById('check10').checked;
    const check11 = document.getElementById('check11').checked;
    const check12 = document.getElementById('check12').checked;
    const check13 = document.getElementById('check13').checked;
    const check14 = document.getElementById('check14').checked;
    const check15 = document.getElementById('check15').checked;
    const check16 = document.getElementById('check16').checked;
    const check17 = document.getElementById('check17').checked;
    const check18 = document.getElementById('check18').checked;
    const check19 = document.getElementById('check19').checked;
    const check20 = document.getElementById('check20').checked;
    const check21 = document.getElementById('check21').checked;
    const check22 = document.getElementById('check22').checked;
    const check23 = document.getElementById('check23').checked;
    const check24 = document.getElementById('check24').checked;
    const check25 = document.getElementById('check25').checked;
    const check26 = document.getElementById('check26').checked;
    const check27 = document.getElementById('check27').checked;
    const check28 = document.getElementById('check28').checked;
    const check29 = document.getElementById('check29').checked;
    const check30 = document.getElementById('check30').checked;
    const check31 = document.getElementById('check31').checked;
    const check32 = document.getElementById('check32').checked;
    const check33 = document.getElementById('check33').checked;
    const check34 = document.getElementById('check34').checked;
    const check35 = document.getElementById('check35').checked;
    const check36 = document.getElementById('check36').checked;
    const check37 = document.getElementById('check37').checked;
    const check38 = document.getElementById('check38').checked;
    const check39 = document.getElementById('check39').checked;
    const check40 = document.getElementById('check40').checked;
    const check41 = document.getElementById('check41').checked;
    const check42 = document.getElementById('check42').checked;
    const check43 = document.getElementById('check43').checked;
    const check44 = document.getElementById('check44').checked;
    const check45 = document.getElementById('check45').checked;
    const check46 = document.getElementById('check46').checked;
    const check47 = document.getElementById('check47').checked;
    const check48 = document.getElementById('check48').checked;
    const fn = document.getElementById('french-number').textContent;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "input1": input1,
        "input3": input3,
        "input4": input4,
        "input5": input5,
        "input6": input6,
        "input7": input7,
        "input8": input8,
        "input9": input9,
        "input10": input10,
        "input11": input11,
        "input12": input12,
        "input13": input13,
        "input14": input14,
        "input15": input15,
        "input16": input16,
        "input17": input17,
        "input18": input18,
        "input19": input19,
        "input20": input20,
        "input21": input21,
        "input22": input22,
        "input23": input23,
        "input24": input24,
        "input25": input25,
        "input26": input26,
        "input27": input27,
        "input28": input28,
        "input29": input29,
        "input30": input30,
        "input31": input31,
        "input32": input32,
        "input33": input33,
        "input34": input34,
        "input35": input35,
        "input36": input36,
        "input37": input37,
        "input38": input38,
        "input39": input39,
        "input40": input40,
        "input41": input41,
        "input42": input42,
        "check1": check1,
        "check2": check2,
        "check3": check3,
        "check4": check4,
        "check5": check5,
        "check6": check6,
        "check7": check7,
        "check8": check8,
        "check9": check9,
        "check10": check10,
        "check11": check11,
        "check12": check12,
        "check13": check13,
        "check14": check14,
        "check15": check15,
        "check16": check16,
        "check17": check17,
        "check18": check18,
        "check19": check19,
        "check20": check20,
        "check21": check21,
        "check22": check22,
        "check23": check23,
        "check24": check24,
        "check25": check25,
        "check26": check26,
        "check27": check27,
        "check28": check28,
        "check29": check29,
        "check30": check30,
        "check31": check31,
        "check32": check32,
        "check33": check33,
        "check34": check34,
        "check35": check35,
        "check36": check36,
        "check37": check37,
        "check38": check38,
        "check39": check39,
        "check40": check40,
        "check41": check41,
        "check42": check42,
        "check43": check43,
        "check44": check44,
        "check45": check45,
        "check46": check46,
        "check47": check47,
        "check48": check48,
        "uv": uuvv,
        "fn": fn,
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("http://localhost:3000/api/store", requestOptions)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));

    window.open("/users/report_generate");
});

function showDropdown() {
    var dropdown = document.getElementById("dropdown-options");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

function selectOption(option) {
    document.getElementById("input5").value = option;
    document.getElementById("dropdown-options").style.display = "none";
}