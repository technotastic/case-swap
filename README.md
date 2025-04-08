# Case-Swap

Recursively swap the case of keys in JavaScript objects and arrays (e.g., `snake_case` to `camelCase`).

---

## Installation

Install the package using:

```npm install case-swap```

---

## Usage

### Example 1: Convert Keys to Camel Case

```
const { convertKeys } = require('case-swap');

const apiData = {
  user_profile: {
    first_name: "John",
    last_name: "Doe",
    contact_details: {
      email_address: "john.doe@example.com"
    }
  },
  order_ids: ["order_123", "order_456"]
};

const camelCaseData = convertKeys(apiData, 'camel');
console.log(JSON.stringify(camelCaseData, null, 2));
```

**Result**:
```
{
  "userProfile": {
    "firstName": "John",
    "lastName": "Doe",
    "contactDetails": {
      "emailAddress": "john.doe@example.com"
    }
  },
  "orderIds": ["order_123", "order_456"]
}
```

---

### Example 2: Convert Keys to Snake Case

```
const snakeCaseData = convertKeys(camelCaseData, 'snake');
console.log(JSON.stringify(snakeCaseData, null, 2));
```

**Result**:
```
{
  "user_profile": {
    "first_name": "John",
    "last_name": "Doe",
    "contact_details": {
      "email_address": "john.doe@example.com"
    }
  },
  "order_ids": ["order_123", "order_456"]
}
```

---

## API Reference

### `convertKeys(input, targetCase)`

- **input**: The object or array to process.
- **targetCase**: A string specifying the desired case. Options include:
  - `'camel'`
  - `'snake'`
  - `'kebab'`
  - `'pascal'`
- **Returns**: A new object/array with keys converted to the specified case.

---

## License

This project is licensed under the **MIT License**.
