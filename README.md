# Generate urid

Generate unique/random id based on the given size and characterset. Default id size is 10 characters and it is randomly generated from [0-9a-bAB] characters

## Install

`npm install urid`

## Usage

```js
import urid from urid

const id = urid();
```

## Examples

```js

const id = urid();
const id = urid(8);
const id = urid(16);
const id = urid('num');
const id = urid('alpha');
const id = urid('alphanum');
const id = urid(12, 'alpha');
const id = urid(6, '0123456789ABCDEF'); // use custom characterset
const id = urid('0123456789ABCDEF'); // use custom characterset

```
