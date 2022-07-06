'use strict'

const DEFAULT_SIZE = 16;
const DEFAULT_CHARSET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXZ';

function getChars(ch){
    const num = '0123456789';
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    if(ch.toLowerCase() === 'num') return num;
    if(ch === 'alpha') return alpha;
    if(ch === 'Alpha') return alpha + alpha.toUpperCase();
    if(ch === 'ALPHA') return alpha.toUpperCase();
    if(ch === 'hex') return num + 'abcdef';
    if(ch === 'HEX') return num + 'ABCDEF';
    if(ch === 'alphanum') return num + alpha;
    if(ch === 'ALPHANUM') return num + alpha.toUpperCase();
    return ch;
}

function generateUrid(length, chars) {
    let id = '';
    for (let i = 0; i < length; i++) {
        id += chars[Math.floor(Math.random() * chars.length)];
    }
    return id;
}

export default function urid(size = DEFAULT_SIZE, charset = DEFAULT_CHARSET) {
    let length = size;
    let chars = charset;
    if(arguments.length === 1 && typeof size === 'string'){
        length = DEFAULT_SIZE;
        chars = size;
    }
    return generateUrid(length, getChars(chars));
  }