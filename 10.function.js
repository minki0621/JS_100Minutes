

function sayHi(name) {
  let msg = `안녕하세요! `;
  if (name) {
    msg += `${name}님 만나서 반가워요.`
  } else {
    msg = `이름을 입력 후 다시 시도해주세요.`
  }
  console.log(msg);
}



sayHi('Raphael');
sayHi();