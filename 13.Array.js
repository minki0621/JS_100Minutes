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