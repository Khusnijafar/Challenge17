import MesinHitung from './mesinHitung'

let Pi = 22/7;
let mh = new MesinHitung();
mh.add(10).substract(5).result();
mh.add(3).multiply(4).divide(6).result();
mh.i = 7;
console.log(`nilai sekarang : ${mh.i}`);
mh.multiply(2).multiply(Pi).result();
mh.i = 7;
mh.square().multiply(Pi).result();
mh.i = 4;
mh.exponent(3).result();
mh.squareRoot().result();