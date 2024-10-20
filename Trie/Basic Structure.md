# **Trie: Basic Structure**

A **Trie** (pronounced as "try") is a tree-like data structure that is primarily used for storing strings or sequences of characters in a way that allows for efficient retrieval. It is particularly useful for tasks such as autocomplete, spell checking, and prefix matching.

## **1. Basic Structure of a Trie**

### **Node**
- **Definition**: A node in a Trie represents a single character in a string. Each node can have multiple children corresponding to possible characters that follow the current character.
- **Components**:
  - **Character**: The specific character that the node represents.
  - **Children**: An array (or a hash map) of child nodes, where each child represents the next possible character in the sequence. The size of the array is typically equal to the number of characters in the alphabet (e.g., 26 for lowercase English letters).
  - **IsEndOfWord**: A boolean flag indicating whether the current node marks the end of a valid word. This is crucial for differentiating between complete words and prefixes.

#### **Example of a Trie Node Structure** (in pseudocode):
```plaintext
class TrieNode:
    char: Character
    children: Map<Character, TrieNode> // Map of child nodes
    isEndOfWord: Boolean // True if the node marks the end of a word

    constructor(char):
        this.char = char
        this.children = {}
        this.isEndOfWord = false
```

### **Root**
- **Definition**: The root node of a Trie serves as the starting point of the data structure. It does not contain any character but points to the first level of child nodes, which represent the first characters of inserted strings.
- **Characteristics**:
  - The root node is typically empty (or can be thought of as a placeholder).
  - All words in the Trie are formed by traversing from the root node through its children.
  - It simplifies the implementation since it does not need to check for empty conditions when inserting or searching for words.

#### **Example of a Trie Structure**:
```plaintext
        (root)
         / \
        a   b
       /     \
      p       a
     / \     / \
    p   l   n   c
   /     \     /
  l       e   e
 /         \ /
e           s
```
In this example, the Trie stores the words "apple", "app", "banana", and "base".

---

## **2. Key Operations on a Trie**

### **Insertion**
- Traverse the Trie according to each character of the string being inserted. If the character does not exist in the current node’s children, create a new node. Mark the last node of the inserted string with `isEndOfWord = true`.

### **Search**
- To check if a word exists in the Trie, traverse through the Trie based on the characters of the word. If all characters are found and the last node's `isEndOfWord` is true, the word exists in the Trie.

### **Deletion**
- Deletion in a Trie is slightly more complex, as it may involve marking a node as not an endpoint or removing nodes that are no longer part of any word.

---

## **3. Summary of Trie Structure**

- **Nodes**: Store characters, have children, and include an endpoint flag.
- **Root**: The starting point of the Trie that connects to the first characters of inserted words.

---

## **Conclusion**
A Trie is a powerful and efficient data structure for storing strings, enabling fast search and retrieval operations based on prefixes. Its structure, characterized by nodes and a root, allows for efficient implementations in various applications such as autocomplete systems and spell checkers.
