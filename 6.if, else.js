// == 동등연산자

const a = 1;
const b = '1';

console.log(a==b); //동등비교 연산자는 자동형변환 시, 문자 -> 숫자로 변환한다.
console.log(a===b);

//잘 쓰이는 if조건문

let myCharmingPoint = 20;
if(myCharmingPoint >= 80) {
  console.log(`당신은 윤윤씨의 사랑을 듬뿍 받게 될 것입니다`);
} else if (myCharmingPoint >= 50){
  console.log(`당신은 윤윤씨의 사랑을 받기에 조금 어리숙합니다`);
} else {
  console.log(`당신은 전혀 매력이 없습니다. 노력하세요`);
}

