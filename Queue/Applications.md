# **Applications of Queues: Task Scheduling and Resource Sharing**

## **1. Task Scheduling**
Task scheduling is one of the most common real-world applications of queues. A task scheduler ensures that tasks are executed in the order they are received, maintaining fairness and efficiency. Queues are ideal for managing this, as they operate on a **First In, First Out (FIFO)** principle.

### **1.1 Use Case: Operating System (OS) Task Scheduling**
In operating systems, processes (or tasks) are scheduled to run on the CPU. The OS maintains a **ready queue** of processes waiting for CPU time. Processes are enqueued when they arrive and are dequeued for execution when the CPU is available.

#### **How It Works:**
- When a process needs to be executed, it is **enqueued** in the ready queue.
- The CPU **dequeues** the next process and executes it.
- If the process is incomplete or waiting for a resource, it may be re-enqueued in a separate waiting queue.

#### **Example of Queue-Based Task Scheduling:**
```javascript
let taskQueue = [];

// Adding tasks (enqueue)
taskQueue.push('Task 1');
taskQueue.push('Task 2');
taskQueue.push('Task 3');

// Simulating task execution (dequeue)
while (taskQueue.length > 0) {
    let currentTask = taskQueue.shift();
    console.log(`Executing ${currentTask}`);
}
```
#### **Output:**
```
Executing Task 1
Executing Task 2
Executing Task 3
```

### **1.2 Types of Scheduling Algorithms Using Queues**
1. **First Come First Serve (FCFS):** Tasks are scheduled in the order they arrive.
2. **Round Robin Scheduling:** Processes are executed in a cyclic order. Each process gets a time slice and is re-enqueued if not finished.
3. **Priority Scheduling:** A priority queue is used where higher-priority tasks are dequeued before lower-priority tasks.

---

## **2. Resource Sharing**
In scenarios where multiple clients or processes need to share limited resources (like printers, servers, or network bandwidth), queues play an important role in managing access. By keeping track of which client requests arrived first, queues ensure **fair access** to resources.

### **2.1 Use Case: Printer Job Queue**
A printer can handle only one job at a time. When multiple users send print requests simultaneously, the requests are placed in a **printer queue**. The jobs are printed in the order they were received.

#### **How It Works:**
- Each print job is **enqueued** in the printer queue as soon as it’s submitted.
- The printer **dequeues** and processes each job one by one.

#### **Example of Printer Job Queue:**
```javascript
let printerQueue = [];

// Adding print jobs (enqueue)
printerQueue.push('Job 1');
printerQueue.push('Job 2');
printerQueue.push('Job 3');

// Simulating job processing (dequeue)
while (printerQueue.length > 0) {
    let currentJob = printerQueue.shift();
    console.log(`Processing ${currentJob}`);
}
```
#### **Output:**
```
Processing Job 1
Processing Job 2
Processing Job 3
```

### **2.2 Other Resource Sharing Use Cases**
1. **Server Request Queue:** Web servers use queues to manage incoming client requests. The server processes each request in the order it was received.
2. **Network Packet Queue:** In routers, queues are used to manage network packets that need to be forwarded to the next destination. Packets are processed in FIFO order to ensure fair transmission.
3. **Shared Memory Access:** In multithreading environments, access to shared memory resources can be controlled using queues, ensuring threads get access one at a time.

---

### **3. Common Characteristics of Queue-Based Applications**
- **FIFO Order:** Queues guarantee that the first task/request is the first to be processed.
- **Fair Resource Allocation:** Queues ensure fairness in resource sharing and prevent starvation of tasks.
- **Concurrency Management:** In systems with multiple tasks or requests, queues help manage concurrency by processing tasks one at a time.

---

### **Summary of Queue Applications in Task Scheduling and Resource Sharing**

1. **Task Scheduling:**
   - OS task management
   - Round-robin scheduling
   - Process management in CPU scheduling
2. **Resource Sharing:**
   - Printer queues
   - Server request queues
   - Network bandwidth and packet transmission
3. **Benefits:**
   - Ensures tasks are processed in a fair, predictable manner.
   - Simplifies concurrency management in shared resource environments.

Queues are an essential data structure for managing tasks and resource access in various software and hardware systems.
