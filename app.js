// https://www.omnicalculator.com/health/fib-4

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const FIB4Radio = document.getElementById('FIB4Radio');
const ageRadio = document.getElementById('ageRadio');
const ASTRadio = document.getElementById('ASTRadio');
const ALTRadio = document.getElementById('ALTRadio');
const plateletcountRadio = document.getElementById('plateletcountRadio');

let FIB4;
let age = v1;
let AST = v2;
let ALT = v3;
let plateletcount = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

FIB4Radio.addEventListener('click', function() {
  variable1.textContent = 'Age';
  variable2.textContent = 'AST';
  variable3.textContent = 'ALT';
  variable4.textContent = 'Platelet count';
  age = v1;
  AST = v2;
  ALT = v3;
  plateletcount = v4;
  result.textContent = '';
});

ageRadio.addEventListener('click', function() {
  variable1.textContent = 'FIB-4';
  variable2.textContent = 'AST';
  variable3.textContent = 'ALT';
  variable4.textContent = 'Platelet count';
  FIB4 = v1;
  AST = v2;
  ALT = v3;
  plateletcount = v4;
  result.textContent = '';
});

ASTRadio.addEventListener('click', function() {
  variable1.textContent = 'FIB-4';
  variable2.textContent = 'Age';
  variable3.textContent = 'ALT';
  variable4.textContent = 'Platelet count';
  FIB4 = v1;
  age = v2;
  ALT = v3;
  plateletcount = v4;
  result.textContent = '';
});

ALTRadio.addEventListener('click', function() {
  variable1.textContent = 'FIB-4';
  variable2.textContent = 'Age';
  variable3.textContent = 'AST';
  variable4.textContent = 'Platelet count';
  FIB4 = v1;
  age = v2;
  AST = v3;
  plateletcount = v4;
  result.textContent = '';
});

plateletcountRadio.addEventListener('click', function() {
  variable1.textContent = 'FIB-4';
  variable2.textContent = 'Age';
  variable3.textContent = 'AST';
  variable4.textContent = 'ALT';
  FIB4 = v1;
  age = v2;
  AST = v3;
  ALT = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(FIB4Radio.checked)
    result.textContent = `FIB-4 = ${computeFIB4().toFixed(2)}`;

  else if(ageRadio.checked)
    result.textContent = `Age = ${computeage().toFixed(2)}`;

  else if(ASTRadio.checked)
    result.textContent = `AST = ${computeAST().toFixed(2)}`;

  else if(ALTRadio.checked)
    result.textContent = `ALT = ${computeALT().toFixed(2)}`;

  else if(plateletcountRadio.checked)
    result.textContent = `Platelet count = ${computeplateletcount().toFixed(2)}`;
})

// calculation

// FIB-4 = (age * AST) / ( platelet count * √ALT)

function computeFIB4() {
  return ((Number(age.value) * Number(AST.value)) / (Number(plateletcount.value) * Math.sqrt(Number(ALT.value)))) * 1000;
}

function computeage() {
  return ((Number(FIB4.value) / 1000) * (Number(plateletcount.value) * Math.sqrt(Number(ALT.value)))) / Number(AST.value);
}

function computeAST() {
  return ((Number(FIB4.value) / 1000) * (Number(plateletcount.value) * Math.sqrt(Number(ALT.value)))) / Number(age.value);
}

function computeALT() {
  return Math.pow((Number(age.value) * Number(AST.value)) / (Number(plateletcount.value) * (Number(FIB4.value) / 1000)), 2);
}

function computeplateletcount() {
  return (Number(age.value) * Number(AST.value)) / ((Number(FIB4.value) / 1000) * Math.sqrt(Number(ALT.value)));
}