/**
 * Converts a string to camelCase.
 * Example: 'hello_world' -> 'helloWorld', 'Hello World' -> 'helloWorld'
 * @param {string} str The string to convert.
 * @returns {string} The camelCased string.
 */
function toCamelCase(str) {
  if (typeof str !== 'string' || !str) return str;
  return str.replace(/([-_ ]\w)/g, g => g[1].toUpperCase())
            .replace(/^./, c => c.toLowerCase()); // Ensure first char is lower if needed after potential hyphen/underscore removal
}

/**
 * Converts a string to snake_case.
 * Example: 'helloWorld' -> 'hello_world', 'Hello World' -> 'hello_world'
 * @param {string} str The string to convert.
 * @returns {string} The snake_cased string.
 */
function toSnakeCase(str) {
  if (typeof str !== 'string' || !str) return str;
  return str.replace(/([A-Z])/g, g => `_${g.toLowerCase()}`)
            .replace(/[- ]+/g, '_') // Replace hyphens/spaces with underscore
            .replace(/^_/, ''); // Remove leading underscore if any
}

/**
 * Converts a string to kebab-case.
 * Example: 'helloWorld' -> 'hello-world', 'Hello World' -> 'hello-world'
 * @param {string} str The string to convert.
 * @returns {string} The kebab-cased string.
 */
function toKebabCase(str) {
  if (typeof str !== 'string' || !str) return str;
   return str.replace(/([A-Z])/g, g => `-${g.toLowerCase()}`)
             .replace(/[ _]+/g, '-') // Replace underscores/spaces with hyphen
             .replace(/^-/, ''); // Remove leading hyphen if any
}

/**
 * Converts a string to PascalCase.
 * Example: 'hello_world' -> 'HelloWorld', 'hello world' -> 'HelloWorld'
 * @param {string} str The string to convert.
 * @returns {string} The PascalCased string.
 */
function toPascalCase(str) {
  if (typeof str !== 'string' || !str) return str;
  const camel = toCamelCase(str);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

const caseConverters = {
  camel: toCamelCase,
  snake: toSnakeCase,
  kebab: toKebabCase,
  pascal: toPascalCase,
};

/**
 * Recursively converts the keys of an object or array of objects to the specified case.
 * @param {*} input The input data (object, array, or other).
 * @param {'camel' | 'snake' | 'kebab' | 'pascal'} targetCase The target case for keys.
 * @returns {*} The data with keys converted.
 */
function convertKeys(input, targetCase) {
  const converter = caseConverters[targetCase];
  if (!converter) {
    throw new Error(`Invalid targetCase: ${targetCase}. Must be one of ${Object.keys(caseConverters).join(', ')}.`);
  }

  if (Array.isArray(input)) {
    // If it's an array, map over it and recursively convert each element
    return input.map(item => convertKeys(item, targetCase));
  } else if (input !== null && typeof input === 'object' && !(input instanceof Date)) {
    // If it's a plain object (and not null or a Date), convert its keys
    const newObj = {};
    for (const key in input) {
      if (Object.prototype.hasOwnProperty.call(input, key)) {
        const newKey = converter(key);
        newObj[newKey] = convertKeys(input[key], targetCase); // Recursively convert values
      }
    }
    return newObj;
  } else {
    // If it's a primitive or a type we don't handle (like Date), return as is
    return input;
  }
}

module.exports = {
  convertKeys,
  toCamelCase, // Optionally expose individual converters too
  toSnakeCase,
  toKebabCase,
  toPascalCase
};
