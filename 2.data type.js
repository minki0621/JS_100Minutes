let name = 'raphael';
const message = `my name is ${name}`;
const message2 = "my name is ${name}";
console.log(message);
console.log(message2); //실수를 일반 따음표로 둘러싸면 변수명이 그대로 노출됨


console.log(typeof null); //object.. NULL이 객체? 아니오. 자바스크립트의 고질적인 오류입니다.


//숫자형과 문자형을 계산하면 문자형으로 자동변환된다. 이는 JS가 덧셈 연산자에서 문자열을 우선시 하여 형변환을 수행하기 때문.
let a = 119;
let b = '소방서 입니다';
console.log (typeof a, typeof b);
console.log(typeof (a+b));

//그러나 뺄셈, 곱셈, 나눗셈에서는 숫자형을 우선시 하여 형변환 수행.
let c = 10;
let d = '5';
console.log(typeof c, typeof d);
console.log(typeof (c-d), typeof (c*d), typeof (c%d));
