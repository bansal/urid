'use strict'

const DEFAULT_SIZE = 16;
const DEFAULT_CHARSET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXZ';

function getChars(chars){
    switch (chars){
        case 'num': return '0123456789';
        case 'alpha': return 'abcdefghijklmnopqrstuvwxyz';
        case 'alphanum': return '0123456789abcdefghijklmnopqrstuvwxyz';
        default: return chars;
    }
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