function cpfConditions (cpf) {
  if (cpf.length !== 11 ||
    cpf === '00000000000' ||
    cpf === '11111111111' ||
    cpf === '22222222222' ||
    cpf === '33333333333' ||
    cpf === '44444444444' ||
    cpf === '55555555555' ||
    cpf === '66666666666' ||
    cpf === '77777777777' ||
    cpf === '88888888888' ||
    cpf === '99999999999') {
    return false;
  }
  return true;
}

function cpfValidator (strCpf) {
  if (cpfConditions(strCpf)) {
    let ten = 10;
    let numbersCpf = Array.from(strCpf);
    let firstNineNumbers = numbersCpf.slice(0, 9);
    let cpfValidatorFirstPart = firstNineNumbers.map(number => number * (ten--));
    let sumFirstPart = cpfValidatorFirstPart.reduce((a, b) => a + b);
    let restFirstPart = (sumFirstPart * 10) % 11;
    let firstChecker = numbersCpf[9];
    let rest;

    if (restFirstPart === 10 || restFirstPart === 11) {
      rest = 0;
    }

    if (restFirstPart !== parseInt(firstChecker) && rest !== parseInt(firstChecker)) {
      return false;
    }

    let eleven = 11;
    let firstTenNumbers = numbersCpf.slice(0, 10);
    let cpfValidatorSecondPart = firstTenNumbers.map(number => number * (eleven--));
    let sumSecondPart = cpfValidatorSecondPart.reduce((a, b) => a + b);
    let restSecondPart = (sumSecondPart * 10) % 11;
    let secondChecker = numbersCpf[10];

    if (restSecondPart !== parseInt(secondChecker) && rest !== parseInt(secondChecker)) {
      return false;
    }
    return true;
  }
  return false;
}
console.log(cpfValidator('3819477985'));

module.exports.cpfValidator = cpfValidator;
