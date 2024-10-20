# **Trie Operations**

A **Trie** is designed to provide efficient operations for storing and retrieving strings. The three primary operations for a Trie are insertion, search, and deletion. Below are the details for each operation.

## **1. Insertion: Adding Words Character by Character**

### **Operation Overview**
- The insertion operation involves adding a new word to the Trie, character by character, starting from the root node.

### **Steps for Insertion**
1. **Start at the Root**: Begin at the root node of the Trie.
2. **Process Each Character**:
   - For each character in the word:
     - Check if the character exists in the current node’s children.
     - If it does, move to the corresponding child node.
     - If it does not, create a new node for that character and add it to the current node's children.
3. **Mark the End of the Word**:
   - After processing all characters, mark the last node as an endpoint of a valid word by setting `isEndOfWord` to `true`.

### **Pseudocode for Insertion**
```javascript
class Trie {
    constructor() {
        this.root = new TrieNode(); // Initialize the root
    }

    insert(word) {
        let node = this.root; // Start at the root

        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode(char); // Create new node if not exists
            }
            node = node.children[char]; // Move to the child node
        }

        node.isEndOfWord = true; // Mark the end of the word
    }
}
```

---

## **2. Search: Checking if a Word Exists in the Trie**

### **Operation Overview**
- The search operation checks if a word is present in the Trie by traversing through its characters.

### **Steps for Search**
1. **Start at the Root**: Begin at the root node of the Trie.
2. **Process Each Character**:
   - For each character in the word:
     - Check if the character exists in the current node’s children.
     - If it does, move to the corresponding child node.
     - If it does not, the word is not present; return `false`.
3. **Check the Endpoint**:
   - After processing all characters, check if the last node's `isEndOfWord` is `true`. If it is, return `true`; otherwise, return `false`.

### **Pseudocode for Search**
```javascript
class Trie {
    // Other methods...

    search(word) {
        let node = this.root; // Start at the root

        for (let char of word) {
            if (!node.children[char]) {
                return false; // Character not found, word doesn't exist
            }
            node = node.children[char]; // Move to the child node
        }

        return node.isEndOfWord; // Return true if it's a valid word
    }
}
```

---

## **3. Deletion: Removing Words and Cleaning Up Nodes**

### **Operation Overview**
- The deletion operation involves removing a word from the Trie and cleaning up any nodes that are no longer needed.

### **Steps for Deletion**
1. **Search for the Word**:
   - First, use the search operation to determine if the word exists in the Trie. If it does not exist, there is nothing to delete.
2. **Recursive Deletion**:
   - Start from the root and traverse the Trie according to the characters of the word.
   - When reaching the last character of the word:
     - Set `isEndOfWord` to `false` to indicate the word is no longer valid.
3. **Clean Up Nodes**:
   - Backtrack and check if any nodes can be deleted (i.e., if they are no longer part of another word).
   - If a node has no children and is not an endpoint of another word, remove it.

### **Pseudocode for Deletion**
```javascript
class Trie {
    // Other methods...

    delete(word) {
        this._delete(this.root, word, 0);
    }

    _delete(node, word, depth) {
        // Base case: If the current node is null, return false
        if (!node) return false;

        // If we've reached the end of the word
        if (depth === word.length) {
            if (!node.isEndOfWord) return false; // Word doesn't exist

            node.isEndOfWord = false; // Mark the end of the word as false
            return Object.keys(node.children).length === 0; // Return true if no children
        }

        // Recursive case: Move to the next character
        let char = word[depth];
        const shouldDeleteCurrentNode = this._delete(node.children[char], word, depth + 1);

        // If true, delete the mapping for the character
        if (shouldDeleteCurrentNode) {
            delete node.children[char];
            return Object.keys(node.children).length === 0 && !node.isEndOfWord; // Return true if node can be deleted
        }

        return false; // The node cannot be deleted
    }
}
```

---

## **4. Summary of Trie Operations**

- **Insertion**: Adds words character by character, creating new nodes as needed and marking the endpoint.
- **Search**: Checks for the existence of a word by traversing through its characters and verifying the endpoint.
- **Deletion**: Removes a word and cleans up any nodes that are no longer needed, using a recursive approach.

---

## **Conclusion**
Trie operations—insertion, search, and deletion—allow for efficient handling of strings. These operations leverage the structure of the Trie to ensure fast performance, making it a suitable choice for applications like autocomplete and spell checking.
