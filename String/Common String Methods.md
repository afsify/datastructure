# **Common String Methods in JavaScript**

## **1. split()**
- **Purpose**: Splits a string into an array of substrings based on a specified delimiter.
- **Syntax**:
  ```javascript
  string.split(separator, limit);
  ```
  - **separator**: The string or regular expression used to determine where to split the string. If omitted, the entire string is returned as an array.
  - **limit**: An optional integer that specifies the maximum number of splits.

- **Example**:
  ```javascript
  let text = "JavaScript,HTML,CSS";
  let result = text.split(","); // ["JavaScript", "HTML", "CSS"]
  ```

## **2. join()**
- **Purpose**: Joins the elements of an array into a single string, using a specified separator.
- **Syntax**:
  ```javascript
  array.join(separator);
  ```
  - **separator**: The string used to separate the elements. If omitted, a comma (`,`) is used by default.

- **Example**:
  ```javascript
  let arr = ["JavaScript", "HTML", "CSS"];
  let result = arr.join(" | "); // "JavaScript | HTML | CSS"
  ```

## **3. replace()**
- **Purpose**: Replaces the first occurrence of a specified substring or pattern with a new substring.
- **Syntax**:
  ```javascript
  string.replace(searchValue, newValue);
  ```
  - **searchValue**: The substring or regular expression to search for.
  - **newValue**: The substring to replace the matched substring.

- **Example**:
  ```javascript
  let text = "Hello, World!";
  let result = text.replace("World", "JavaScript"); // "Hello, JavaScript!"
  ```

### **Using Regular Expressions**:
- To replace all occurrences, use a regular expression with the global flag (`g`).
  ```javascript
  let text = "Hello, World! Hello, Universe!";
  let result = text.replace(/Hello/g, "Hi"); // "Hi, World! Hi, Universe!"
  ```

## **4. toUpperCase()**
- **Purpose**: Converts all characters in a string to uppercase.
- **Syntax**:
  ```javascript
  string.toUpperCase();
  ```

- **Example**:
  ```javascript
  let text = "hello world";
  let result = text.toUpperCase(); // "HELLO WORLD"
  ```

## **5. toLowerCase()**
- **Purpose**: Converts all characters in a string to lowercase.
- **Syntax**:
  ```javascript
  string.toLowerCase();
  ```

- **Example**:
  ```javascript
  let text = "HELLO WORLD";
  let result = text.toLowerCase(); // "hello world"
  ```

## **6. trim()**
- **Purpose**: Removes whitespace from both ends of a string.
- **Syntax**:
  ```javascript
  string.trim();
  ```

- **Example**:
  ```javascript
  let text = "   Hello, World!   ";
  let result = text.trim(); // "Hello, World!"
  ```

## **7. charAt()**
- **Purpose**: Returns the character at a specified index in a string.
- **Syntax**:
  ```javascript
  string.charAt(index);
  ```

- **Example**:
  ```javascript
  let text = "Hello";
  let result = text.charAt(1); // "e"
  ```

## **8. indexOf()**
- **Purpose**: Returns the index of the first occurrence of a specified substring. Returns `-1` if not found.
- **Syntax**:
  ```javascript
  string.indexOf(searchValue, startIndex);
  ```

- **Example**:
  ```javascript
  let text = "Hello, World!";
  let result = text.indexOf("World"); // 7
  ```

## **9. lastIndexOf()**
- **Purpose**: Returns the index of the last occurrence of a specified substring. Returns `-1` if not found.
- **Syntax**:
  ```javascript
  string.lastIndexOf(searchValue, startIndex);
  ```

- **Example**:
  ```javascript
  let text = "Hello, World! Hello!";
  let result = text.lastIndexOf("Hello"); // 13
  ```

## **10. substring()**
- **Purpose**: Extracts characters from a string between two specified indices.
- **Syntax**:
  ```javascript
  string.substring(startIndex, endIndex);
  ```

- **Example**:
  ```javascript
  let text = "JavaScript";
  let result = text.substring(0, 4); // "Java"
  ```

## **11. slice()**
- **Purpose**: Similar to `substring()`, but can accept negative indices, allowing for extraction from the end of the string.
- **Syntax**:
  ```javascript
  string.slice(startIndex, endIndex);
  ```

- **Example**:
  ```javascript
  let text = "JavaScript";
  let result = text.slice(-6); // "Script"
  ```

## **12. includes()**
- **Purpose**: Checks if a string contains a specified substring. Returns `true` or `false`.
- **Syntax**:
  ```javascript
  string.includes(searchValue, startIndex);
  ```

- **Example**:
  ```javascript
  let text = "Hello, World!";
  let result = text.includes("World"); // true
  ```

---

## **Summary of Common String Methods**

1. **split()**: Splits a string into an array.
2. **join()**: Joins array elements into a string.
3. **replace()**: Replaces the first occurrence of a substring.
4. **toUpperCase()**: Converts a string to uppercase.
5. **toLowerCase()**: Converts a string to lowercase.
6. **trim()**: Removes whitespace from both ends.
7. **charAt()**: Gets a character at a specified index.
8. **indexOf()**: Finds the first index of a substring.
9. **lastIndexOf()**: Finds the last index of a substring.
10. **substring()**: Extracts a portion of a string.
11. **slice()**: Extracts a portion of a string (supports negative indices).
12. **includes()**: Checks if a substring exists.

---

## **Conclusion**
Understanding these common string methods is essential for effective string manipulation in JavaScript. They provide a powerful toolkit for working with text data, enabling developers to perform a variety of operations efficiently.
