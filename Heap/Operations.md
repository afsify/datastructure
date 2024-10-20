# **Heap Operations**

Heaps support a few essential operations that allow for maintaining the heap property and efficiently managing the data structure.

## **1. Insertion**

### **Overview**
Insertion in a heap involves adding a new element while ensuring that the heap property is preserved. The process typically consists of adding the new element at the end of the heap (in array representation) and then "bubbling up" or "sifting up" to restore the heap property.

### **Steps for Insertion**
1. **Add the Element**: Place the new element at the next available position in the heap (i.e., at the end of the array).
2. **Bubble Up**:
   - Compare the newly added element with its parent.
   - If the newly added element violates the heap property (i.e., in a max-heap, if it is greater than its parent; in a min-heap, if it is less), swap it with the parent.
   - Continue this process until the heap property is restored or the element reaches the root.

### **Time Complexity**
- **Average and Worst Case**: \(O(\log n)\), where \(n\) is the number of elements in the heap. This is because, in the worst case, the newly added element may need to traverse from the leaf level to the root.

---

## **2. Deletion**

### **Overview**
The primary deletion operation in a heap typically involves removing the root element (the maximum in a max-heap or the minimum in a min-heap) and restructuring the heap to maintain the heap property.

### **Steps for Deletion**
1. **Remove the Root**: Store the value of the root element to return later.
2. **Replace with Last Element**: Move the last element in the heap to the root position (to fill the gap).
3. **Heapify** (Bubble Down):
   - Compare the new root element with its children.
   - If the new root violates the heap property, swap it with the larger (or smaller) child (depending on whether it’s a max-heap or min-heap).
   - Repeat this process until the heap property is restored or the element reaches a leaf.

### **Time Complexity**
- **Average and Worst Case**: \(O(\log n)\) since the deleted element may need to move down the height of the heap to restore the heap property.

---

## **3. Heapify**

### **Overview**
Heapify is the process of maintaining the heap property. It can be applied to a single node or to an entire array to create a heap.

### **Heapify Operations**
1. **Heapify Up (Bubble Up)**:
   - Used during insertion.
   - Restores the heap property by moving an element up the heap.

2. **Heapify Down (Bubble Down)**:
   - Used during deletion.
   - Restores the heap property by moving an element down the heap.

### **Building a Heap from an Array**
- When converting an unsorted array into a heap, the `heapify` operation can be applied starting from the last non-leaf node all the way to the root:
  - This is done by iterating from the last non-leaf node (index \( \lfloor \frac{n}{2} \rfloor - 1 \)) down to index 0.
  - Each node is heapified using the heapify down operation.

### **Time Complexity for Heapify**
- **Heapify Up**: \(O(\log n)\) for insertion.
- **Heapify Down**: \(O(\log n)\) for deletion.
- **Building a Heap from an Array**: \(O(n)\) for heapifying all elements. This is more efficient than calling heapify for each element individually, which would take \(O(n \log n)\).

---

## **Conclusion**
Understanding the operations of insertion, deletion, and heapify is essential for effectively using heaps in applications such as priority queues and sorting algorithms. These operations ensure that the heap maintains its properties, allowing for efficient access to the maximum (or minimum) element and the dynamic management of data.
