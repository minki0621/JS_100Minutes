
function sayHi(name) {
  let msg = `안녕하세요! `;
  if (name) {
    msg += `${name}님 만나서 반가워요.`
  } else {
    msg = `이름을 입력 후 다시 시도해주세요.`
  }
  console.log(msg); //msg는 함수 내부의 지역변수. }중괄호를 만나면 함수 사라짐.
}



sayHi('Raphael');
sayHi();

//다른 버전

function newHello(name) {
  let newName = name || 'stranger';
  let msg = `Hello, ${newName} 반가워요.`;
  console.log(msg);
}

newHello();
newHello('윤윤');


// 위 코드를 더 간단히, 매개변수에 default 값을 설정해서.
function secHello(name = 'stranger') { //default 값 설정했음
  let msg = `Hello, ${name} 두번째 만나서 반가워요.`;
  console.log(msg);
}

secHello();
secHello('미나씨');

//------------------------------------------------------------------------------
//return 으로 값 반환하기

function add(num1, num2){
  return num1+num2;
}
const result = add(2,4);
console.log(result);