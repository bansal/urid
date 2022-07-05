# Generate unique random id

Generate unique/random id based on the given size and character set. Default id size is 16 characters and it is randomly generated from [0-9a-bA-B] characters.

## Install

`npm install urid`

## Usage

```js
import urid from urid

const id = urid();
```

## Examples

```js

const id = urid(); // qRpky22nKJ4vkbFZ

// Set the size
const id = urid(8); //ZDJLC0Zq

// Use the character set
const id = urid('num'); // 4629118294212196
const id = urid('alpha'); // ebukmhyiagonmmbm
const id = urid('alphanum'); // nh9glmi1ra83979b

// Use size with character set
const id = urid(12, 'alpha'); // wwfkvpkevhbg

// use custom character set
const id = urid(6, '0123456789ABCDEF'); // EC58F3
const id = urid('0123456789ABCDEF'); // 6C11044E128FB44B

```

## LICENSE

MIT
