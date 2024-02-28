console.log("ghj");


const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("http://localhost:3000/api/get")
  .then((response) => response.json())
  .then((result) => {      
    console.log(result);
    console.log(result.response.length);

    document.getElementById('input1').value = result.response[result.response.length - 1].input1;
    document.getElementById('input2').value = result.response.length;
    document.getElementById('input3').value = result.response[result.response.length - 1].input3;
    document.getElementById('input4').value = result.response[result.response.length - 1].input4;
    document.getElementById('input5').value = result.response[result.response.length - 1].input5;
    document.getElementById('input6').value = result.response[result.response.length - 1].input6;
    document.getElementById('input7').value = result.response[result.response.length - 1].input7;
    document.getElementById('input8').value = result.response[result.response.length - 1].input8;
    document.getElementById('input9').value = result.response[result.response.length - 1].input9;
    document.getElementById('input10').value = result.response[result.response.length - 1].input10;
    document.getElementById('input11').value = result.response[result.response.length - 1].input11;
    document.getElementById('input12').value = result.response[result.response.length - 1].input12;
    document.getElementById('input13').value = result.response[result.response.length - 1].input13;
    document.getElementById('input14').value = result.response[result.response.length - 1].input14;
    document.getElementById('input15').value = result.response[result.response.length - 1].input15;
    document.getElementById('input16').value = result.response[result.response.length - 1].input16;
    document.getElementById('input17').value = result.response[result.response.length - 1].input17;
    document.getElementById('input18').value = result.response[result.response.length - 1].input18;
    document.getElementById('input19').value = result.response[result.response.length - 1].input19;
    document.getElementById('input20').value = result.response[result.response.length - 1].input20;
    document.getElementById('input21').value = result.response[result.response.length - 1].input21;
    document.getElementById('input22').value = result.response[result.response.length - 1].input22;
    document.getElementById('input23').value = result.response[result.response.length - 1].input23;
    document.getElementById('input24').value = result.response[result.response.length - 1].input24;
    document.getElementById('input25').value = result.response[result.response.length - 1].input25;
    document.getElementById('input26').value = result.response[result.response.length - 1].input26;
    document.getElementById('input27').value = result.response[result.response.length - 1].input27;
    document.getElementById('input28').value = result.response[result.response.length - 1].input28;
    document.getElementById('input29').value = result.response[result.response.length - 1].input29;
    document.getElementById('input30').value = result.response[result.response.length - 1].input30;
    document.getElementById('input31').value = result.response[result.response.length - 1].input31;
    document.getElementById('input32').value = result.response[result.response.length - 1].input32;
    document.getElementById('input34').value = result.response[result.response.length - 1].input34;
    document.getElementById('input35').value = result.response[result.response.length - 1].input35;
    document.getElementById('input36').value = result.response[result.response.length - 1].input36;
    document.getElementById('input37').value = result.response[result.response.length - 1].input37;
    document.getElementById('input38').value = result.response[result.response.length - 1].input38;
    document.getElementById('input39').value = result.response[result.response.length - 1].input39;
    document.getElementById('input40').value = result.response[result.response.length - 1].input40;
    document.getElementById('input41').value = result.response[result.response.length - 1].input41;
    document.getElementById('input42').value = result.response[result.response.length - 1].input42;
    document.getElementById('check1').checked = result.response[result.response.length - 1].check1;
    document.getElementById('check2').checked = result.response[result.response.length - 1].check2;
    document.getElementById('check3').checked = result.response[result.response.length - 1].check3;
    document.getElementById('check4').checked = result.response[result.response.length - 1].check4;
    document.getElementById('check5').checked = result.response[result.response.length - 1].check5;
    document.getElementById('check6').checked = result.response[result.response.length - 1].check6;
    document.getElementById('check7').checked = result.response[result.response.length - 1].check7;
    document.getElementById('check8').checked = result.response[result.response.length - 1].check8;
    document.getElementById('check9').checked = result.response[result.response.length - 1].check9;
    document.getElementById('check10').checked = result.response[result.response.length - 1].check10;
    document.getElementById('check11').checked = result.response[result.response.length - 1].check11;
    document.getElementById('check12').checked = result.response[result.response.length - 1].check12;
    document.getElementById('check13').checked = result.response[result.response.length - 1].check13;
    document.getElementById('check14').checked = result.response[result.response.length - 1].check14;
    document.getElementById('check15').checked = result.response[result.response.length - 1].check15;
    document.getElementById('check16').checked = result.response[result.response.length - 1].check16;
    document.getElementById('check17').checked = result.response[result.response.length - 1].check17;
    document.getElementById('check18').checked = result.response[result.response.length - 1].check18;
    document.getElementById('check19').checked = result.response[result.response.length - 1].check19;
    document.getElementById('check20').checked = result.response[result.response.length - 1].check20;
    document.getElementById('check21').checked = result.response[result.response.length - 1].check21;
    document.getElementById('check22').checked = result.response[result.response.length - 1].check22;
    document.getElementById('check23').checked = result.response[result.response.length - 1].check23;
    document.getElementById('check24').checked = result.response[result.response.length - 1].check24;
    document.getElementById('check25').checked = result.response[result.response.length - 1].check25;
    document.getElementById('check26').checked = result.response[result.response.length - 1].check26;
    document.getElementById('check27').checked = result.response[result.response.length - 1].check27;
    document.getElementById('check28').checked = result.response[result.response.length - 1].check28;
    document.getElementById('check29').checked = result.response[result.response.length - 1].check29;
    document.getElementById('check30').checked = result.response[result.response.length - 1].check30;
    document.getElementById('check31').checked = result.response[result.response.length - 1].check31;
    document.getElementById('check32').checked = result.response[result.response.length - 1].check32;
    document.getElementById('check33').checked = result.response[result.response.length - 1].check33;
    document.getElementById('check34').checked = result.response[result.response.length - 1].check34;
    document.getElementById('check35').checked = result.response[result.response.length - 1].check35;
    document.getElementById('check36').checked = result.response[result.response.length - 1].check36;
    document.getElementById('check37').checked = result.response[result.response.length - 1].check37;
    document.getElementById('check38').checked = result.response[result.response.length - 1].check38;
    document.getElementById('check39').checked = result.response[result.response.length - 1].check39;
    document.getElementById('check40').checked = result.response[result.response.length - 1].check40;
    document.getElementById('check41').checked = result.response[result.response.length - 1].check41;
    document.getElementById('check42').checked = result.response[result.response.length - 1].check42;
    document.getElementById('check43').checked = result.response[result.response.length - 1].check43;
    document.getElementById('check44').checked = result.response[result.response.length - 1].check44;
    document.getElementById('check45').checked = result.response[result.response.length - 1].check45;
    document.getElementById('check46').checked = result.response[result.response.length - 1].check46;
    document.getElementById('check47').checked = result.response[result.response.length - 1].check47;
    document.getElementById('check48').checked = result.response[result.response.length - 1].check48;
    document.getElementById('uv').innerHTML = result.response[result.response.length - 1].uv;
    document.getElementById('french-number').innerHTML = result.response[result.response.length - 1].fn;

    for (let i = 10; i <= 23; i++) {
      if (i == 10 || i == 12 || i == 15 || i == 18 || i == 21 || i == 22 || i == 23) {
    
        
        const n = 'input' + i;
        const v = 'v' + i;
        const r = 'r' + i;
        
        if (!(document.getElementById(n).value === "")) {
          console.log(document.getElementById(n).value)
          document.getElementById(r).innerHTML = (document.getElementById(v).textContent)*document.getElementById(n).value;
        }
        else{
          document.getElementById(r).innerHTML = "";
        }
      }
    }
  })
  .catch((error) => console.error(error));