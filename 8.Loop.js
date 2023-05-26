//for if문 continue 사용
//짝수만

for (i = 0; i <= 10; i++) {
  if (i%2) { //나머지 구하는 값, 홀수이면 나머지가 1이므로 ==true. continue 실행
    continue;
  } 
  console.log(i); //false, 즉 나머지 값이 0이기에 i 는 짝수.
}
//-------------------------------------------------------------------------------

let i = 0;

while (i<=10) {
  console.log(i);
  i++;
}
// break : 멈추고 빠져나옴
// continue : 멈추고 다음 반복으로 진행

while (true) {
  let loveHer = confirm(`정말 사랑하세요?`, 1++);
  if (!loveHer) {
    alert (`실망이네요.`);
    break;
  }
}
//-------------------------------------------------------------------------------


let i = 0; // i 변수를 while 루프 외부에서 선언

while (true) {
  const yourClickCount = confirm(`현재 클릭하신 횟수는 ${i}입니다.`);
  // 취소를 누르면 if 문으로
  if (i > 4 || !yourClickCount) {
    if (i > 4) {
      alert('5회까지만 등록 가능합니다.');
    } else {
      alert('벌써 포기하시게요? 실망이에요');
    }
    break;
  }
  // 확인을 누르면 i에 +1을 하고 다시 반복
  i++; // 누른 횟수 알림을 위해서 바로 위에 i++
  alert(`현재까지 ${i}번 확인을 누르셨네요.`);
}

// i = 0;
alert(`현재 전역 변수는 ${i}입니다.`);
//전역변수를 0으로 다시 초기화 하지 않으면 변합니다.


//명확한 횟수가 정해져 있다면 for문, 그게 아니라면 while 문 사용.