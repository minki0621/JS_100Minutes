let son = {
  name : '신석용',
  age : 32,
  introduce : function() {
    console.log(`안녕하세요 제 이름은 ${son.name} 입니다`);
  }
};

son.introduce();

let me = son; //참조변수 me 선언초기화, son과 동일한 객체를 참조하게 되었음
me.name = '신민기'; //참조변수 me의 프로퍼티의 값을 변경하면
son.introduce(); //원조변수의 프로퍼티의 값도 변경됨. 왜냐면 동일한 객체를 참조하고 있기 때문.


son = null; //son이 이전에 참조하던 객체와 연결을 끊고, 어떤 객체도 참조하지 않게됨.
me.introduce(); // son이 null이 되었으니 me도 null을 가리키게 됨. 그래서 에러 발생.

//this 는 호출하는 시점에 따라 동적으로 바인딩 된다. 어떤 객체에서 메서드를 호출하는냐에 따라 참조하는 객체가 달라져요. 
