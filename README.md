# zeroise

Add leading zeros to fill a certain number to the given size.

```
npm install zeroise
```

[![Build Status](https://travis-ci.org/tyxla/zeroise.svg?branch=master)](https://travis-ci.org/tyxla/zeroise)

## About

This will fill a number with leading zeros to reach a specified digit threshold.

If you set the threshold to '4' and the number is '17', then you will get back '0017'. 

If you set the threshold to '4' and the number is '1400', then you will get back '1400'.

Optionally, you can specify your preferred string to pad the number with (instead of the default '0').

## Syntax

``` js
zeroise(12, 5, 0);
```

#### number

This is the number you wish to pad with leading zeros.

#### threshold

This is the target number of digits you wish to reach.

#### pad

Optional. This is the string you wish to pad by. Default: '0'. 

## Usage

Pass the number you wish to pad with zeros, and the number of digits, and you will receive the padded number.

``` js
var zeroise = require('zeroise');

var result = zeroise(12, 4);

console.log(result); // 0012

```

## License

MIT