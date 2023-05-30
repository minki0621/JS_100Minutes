//Object _ 접근, 추가, 삭제

const raphael = {
  name: '신석용',
  age: 32
}
//접근
raphael.name;
raphael['age']

//추가
raphael.gender = 'male';
raphael['haircolor'] = 'black';

//삭제
delete raphael.haircolor;

//프로퍼티 존재 여부
'brithday' in raphael;


//객체 만들기
function classWorrior (name, strong, dex, int) {
  return {
    country : 'Mutant',
    name : name,
    str : strong,
    dex : dex,
    int : int
  }
}

const worrior1 = classWorrior ('Mike', 20, 15, 8);
console.log(worrior1);
console.log('dex' in worrior1); //true


//객체 만들기2
function findWife(name) {
  if((name.job && name.age <= 27) || (name.rich && name.age <=32)) {
    return '합격!';
  } else {
    return '불합격!';
  }
}

const anna = {
  name : 'anna',
  age : 33,
  job : false,
  rich : true
};

const merry = {
  name : 'merry',
  age : 32,
  job : true,
  rich : false
};

const yunyun = {
  name : 'yunyun',
  age : 27,
  job : true,
  rich : false
};

console.log(
  'anna :' + findWife(anna), 
  'merry :' + findWife(merry), 
  'yunyun :' + findWife(yunyun));



//객체 for ... in 기능
//객체의 프로퍼티와 값 순차 반환하기

const list = [anna, merry, yunyun];
console.log(list[0]);

for (i = 0; i < list.length; i++) {
  for (key in list[i]) {
    console.log(key + ' : ' + list[i][key]);
  }
}