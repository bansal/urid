'use strict'

const DEFAULT_SIZE = 16;
const NUM_CHARSET = '0123456789';
const ALPHA_CHARSET = 'abcdefghijklmnopqrstuvwxyz';
const ALPHANUM_CHARSET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXZ';

function getChars(chars){
    switch (chars){
        case 'num': return NUM_CHARSET;
        case 'alpha': return ALPHA_CHARSET;
        case 'alphanum': return ALPHANUM_CHARSET;
        default: return chars;
    }
}

function generateurid(length, chars) {
    let id = '';
    for (let i = 0; i < length; i++) {
        id += chars[Math.floor(Math.random() * chars.length)];
    }
    return id;
}

export default function urid(size = DEFAULT_SIZE, charset = ALPHANUM_CHARSET) {
    let length = size;
    let chars = charset;
    if(arguments.length === 1 && typeof size === 'string'){
        length = DEFAULT_SIZE;
        chars = size;
    }
    return generateurid(length, getChars(chars));
  }