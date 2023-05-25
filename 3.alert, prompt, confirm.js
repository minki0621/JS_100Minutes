//대화상자
//alert(알려줌), prompt(입력받음), confirm(확인받음)

const name = prompt(`꿈이 뭐에요?`,  "두번째는 입력받을 default 값입니다 : 개발자");
alert (`환영합니다. 당신은 분명 ${name}의 꿈을 해내실 수 있을겁니다`)

== alert (`환영합니다. 당신은 분명 ${prompt(`꿈이 뭐에요?`)}의 꿈을 해내실 수 있을 겁니다`);

//alert와 달리 confirm은 취소와 확인 버튼이 함께 있습니다.
const yesOrNo = confirm(`당신은 노력하고 있나요?`);
console.log(yesOrNo); //true, false