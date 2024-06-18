# Square Calculator

A simple app for calculating the square of a number.

## Installation

You can install the package using npm:

```bash
npm install square-calc
```

##  Usage

Here's how you can use the square-calc module in your project:

### CJS (square-calc v2 is cjs)

```javascript
const calculateSquare = require('square-calc');

const number = 5;
console.log(`The square of ${number} is ${calculateSquare(number)}`);
```

### ESM (square-calc v3 is pure esm)

```javascript
import calculateSquare from 'square-calc';

const squaredNumber = calculateSquare(5);
console.log(squaredNumber); // Output: 25
```