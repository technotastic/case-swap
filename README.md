Case Swap

A simple utility to recursively convert the keys of JavaScript objects and arrays of objects to a specified case (camelCase, snake_case, kebab-case, or PascalCase).

Useful for standardizing data structures, especially when interacting with APIs that use different naming conventions.

Installation

npm install case-swap

Usage

const { convertKeys } = require('case-swap');

const snakeData = {
  user_id: 123,
  user_name: 'John Doe',
  address_info: {
    street_name: 'Main St',
    zip_code: '12345'
  },
  order_history: [
    { order_id: 'a1', item_count: 2 },
    { order_id: 'b2', item_count: 1 }
  ]
};

// Convert to camelCase
const camelData = convertKeys(snakeData, 'camel');
console.log(JSON.stringify(camelData, null, 2));
/*
{
  "userId": 123,
  "userName": "John Doe",
  "addressInfo": {
    "streetName": "Main St",
    "zipCode": "12345"
  },
  "orderHistory": [
    { "orderId": "a1", "itemCount": 2 },
    { "orderId": "b2", "itemCount": 1 }
  ]
}
*/

// Convert to kebab-case
const kebabData = convertKeys(snakeData, 'kebab');
console.log(JSON.stringify(kebabData, null, 2));
/*
{
  "user-id": 123,
  "user-name": "John Doe",
  "address-info": {
    "street-name": "Main St",
    "zip-code": "12345"
  },
  "order-history": [
    { "order-id": "a1", "item-count": 2 },
    { "order-id": "b2", "item-count": 1 }
  ]
}
*/

// Convert to PascalCase
const pascalData = convertKeys(snakeData, 'pascal');
console.log(JSON.stringify(pascalData, null, 2));
/*
{
  "UserId": 123,
  "UserName": "John Doe",
  "AddressInfo": {
    "StreetName": "Main St",
    "ZipCode": "12345"
  },
  "OrderHistory": [
    { "OrderId": "a1", "itemCount": 2 },
    { "OrderId": "b2", "itemCount": 1 }
  ]
}
*/

// Convert back to snake_case
const snakeAgain = convertKeys(camelData, 'snake');
console.log(JSON.stringify(snakeAgain, null, 2));
/*
{
  "user_id": 123,
  "user_name": "John Doe",
  "address_info": {
    "street_name": "Main St",
    "zip_code": "12345"
  },
  "order_history": [
    { "order_id": 'a1', "item_count": 2 },
    { "order_id": 'b2', "item_count": 1 }
  ]
}
*/

API

convertKeys(input, targetCase)

*   `input` (`*`): The data to process. Can be an object, an array, or any other JavaScript type. The function will only modify keys of plain objects and objects within arrays.
*   `targetCase` (`String`): The target case for the keys. Must be one of: 'camel', 'snake', 'kebab', 'pascal'.
*   Returns (`*`): A new object/array with keys converted, or the original input if it's not an object or array that needs processing. Throws an error if `targetCase` is invalid.

Individual Converters

The package also exports the individual string case converters if needed:

*   toCamelCase(str)
*   toSnakeCase(str)
*   toKebabCase(str)
*   toPascalCase(str)

const { toCamelCase } = require('case-swap');
console.log(toCamelCase('hello_world')); // Output: helloWorld

License

MIT