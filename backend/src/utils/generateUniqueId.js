const crypto = require('crypto');

//no react é export default function para exportar uma função
//no node é module.exports=
module.exports = function generateUniqueId(){
    return crypto.randomBytes(4).toString('HEX');
}