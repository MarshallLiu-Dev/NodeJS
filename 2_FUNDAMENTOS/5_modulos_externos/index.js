const minimist = require('minimist');

const args = minimist(process.argv.slice(2));
console.log(args);

const nome = args['nome']
const profissao = args['profissao']
const nick = args['nick']
console.log(nome, nick, profissao);

console.log(`O nome dele é ${nome} e ele é ${profissao} e seu NickName é ${nick}`);