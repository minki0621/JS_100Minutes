//array (배열)은 순서가 있는 list 라고 할 수 있다.
//대괄호 [] 와 index를 이용하여 요소에 배열 요소에 접근.
//배열은 문자 뿐만 아니라, 숫자, 객체, 함수 등도 포함 가능.

let arr = [
  '신민기',
  32,
  true,
  {
    hobby :'programming'
  },
  hello = function() {
    console.log(`hello`);
  }
]

arr[4]();

//추가
arr.push (bye = function(){
  console.log(`byebye`)
  }
);

arr[5]();

//제거
arr.pop ();
console.log(arr);

//맨 앞에 추가
arr.unshift(`앞에 unshift 생성`);
console.log(arr);

//맨 앞에 제거
arr.shift();
console.log(arr);


//배열을 이용한 for문

//방법 1
let days = ['월', '화', '수'];
for (index = 0; index < days.length; index++) {
  console.log(days[index])
}

//방법2.. for..of
for (let day of days){
  console.log(day)
}