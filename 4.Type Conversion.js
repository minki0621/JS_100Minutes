const mathScore = prompt("수학 몇점?");
const engScore = prompt("영어 몇점?");
const result = (mathScore + engScore) / 2; 

console.log(result); //== 9080 / 2 = 4540 -> 자동형변환

//prompt로 입력받은 값은 무조건 '문자형' 입니다.

//그래서 명시적 형변환 필요
String()
Number()
Boolean() //값이 false가 되는 경우? [0, 빈문자열'', null, undefined, NaN]


//타입변환 규칙에 따른 특이사항, 암기 필요
Number(null); //0
Number(undefined); //NaN, 숫자로 변환될 수 없는 값이기에 NaN

//주의사항2
Boolean(0) //false
Boolean('0') //true
Boolean('') //false
Boolean(' ') //true