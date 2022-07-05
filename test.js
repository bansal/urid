import urid from './index.js';

console.log("urid()                      =>", urid());
console.log("urid(8, 'num')              =>", urid(8, 'num'));
console.log("urid(8, 'alpha')            =>", urid(8, 'alpha'));
console.log("urid(8, 'alphanum')         =>", urid(8, 'alphanum'));
console.log("urid(8, '0123456789abcdef') =>", urid(8, '0123456789abcdef'));
console.log("urid('num')                 =>", urid('num'));
console.log("urid('alpha')               =>", urid('alpha'));
console.log("urid('alphanum')            =>", urid('alphanum'));
console.log("urid('0123456789abcdef-')   =>", urid('0123456789abcdef-'));