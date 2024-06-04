# Square Calculator

A simple app for calculating the square of a number.

## Installation

You can install the package using npm:

```bash
npm install square-calc
```

##  Usage

Here's how you can use the square-calc module in your project:

### CJS

```javascript
const { calculateSquare } = require('square-calc');

const number = 5;
console.log(`The square of ${number} is ${calculateSquare(number)}`);
```

### ESM

```javascript
import { calculateSquare } from 'esm-square-calculator';

const squaredNumber = calculateSquare(5);
console.log(squaredNumber); // Output: 25
```