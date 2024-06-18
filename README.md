# Square Calculator

A simple application for calculating the square of a number.

## Installation

Install the package using npm:

```bash
npm install square-calc
```

## Usage

Here's how you can use the `square-calc` module in your project:

### CommonJS (square-calc v2 uses CommonJS)

```javascript
const calculateSquare = require('square-calc');

const number = 5;
console.log(`The square of ${number} is ${calculateSquare(number)}`);
```

### ES Module (square-calc v3 uses ES Module)

```javascript
import calculateSquare from 'square-calc';

const number = 5;
console.log(`The square of ${number} is ${calculateSquare(number)}`);
```