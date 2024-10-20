# **Graph: Basic Structure**

Graphs are abstract data structures used to represent relationships or connections between different entities. A graph consists of two fundamental components: **nodes (vertices)** and **edges**.

---

### **1. Node (Vertex)**

- **Definition**: A node, also called a **vertex**, is a basic unit in a graph that represents an entity. Each node can store some information, such as a value or an identifier.
- **Representation**: Typically represented as a point or circle in visual diagrams of graphs.
- **Example**: In a social network, each person could be represented as a node.

---

### **2. Edge**

- **Definition**: An edge is a connection between two nodes in a graph. It defines a relationship or link between the nodes.
- **Representation**: Typically represented as a line or arrow connecting two nodes.
- **Types**:
  - **Undirected Edge**: Represents a bidirectional relationship, meaning the connection between the two nodes works both ways.
    - Example: A friendship on a social network is usually mutual, so the edge is undirected.
  - **Directed Edge (Arc)**: Represents a one-way relationship, meaning the connection only goes from one node to the other.
    - Example: A "follows" relationship on social media (like Twitter) is one-way, so it's represented with a directed edge (an arrow).

---

### **3. Directed vs. Undirected Graphs**

- **Undirected Graph**:
  - In an **undirected graph**, edges do not have a direction.
  - If there is an edge between node A and node B, you can travel from A to B and from B to A freely.
  - **Example**: A graph representing friendships, where the relationship is mutual.
  
- **Directed Graph (Digraph)**:
  - In a **directed graph**, edges have a direction, meaning connections go one way.
  - An edge from node A to node B indicates that you can go from A to B, but not necessarily from B to A unless there is a reverse edge.
  - **Example**: A graph representing follow relationships on social media (you can follow someone, but they may not follow you back).

---

### **4. Types of Graphs**

- **Simple Graph**: A graph with no loops (an edge that connects a node to itself) and no more than one edge between any two nodes.
  
- **Weighted Graph**:
  - In a **weighted graph**, edges have a weight (or cost) associated with them. This is often used to represent distances, costs, or any other quantifiable relationship between nodes.
  - **Example**: A graph representing a road network, where nodes are cities and edges represent roads, with the weight being the distance or travel time.

- **Cyclic vs. Acyclic Graph**:
  - A **cyclic graph** contains at least one cycle, which is a path that starts and ends at the same node.
  - An **acyclic graph** has no cycles.
  - **Example**: Directed Acyclic Graphs (DAGs) are often used to represent task scheduling, where tasks must be completed in a specific order.

---

### **5. Common Graph Use Cases**

- **Social Networks**: Nodes represent people, and edges represent relationships (friendships, follows).
- **Transport Networks**: Nodes represent locations (cities, airports), and edges represent connections (roads, flights) with weights like distances or travel times.
- **Web Graph**: Nodes represent web pages, and directed edges represent hyperlinks from one page to another.
- **Computer Networks**: Nodes represent devices (computers, routers), and edges represent connections between them.

---

### **Conclusion**

In a graph, **nodes (vertices)** represent individual entities, and **edges** define relationships or connections between these entities. The direction of edges (directed vs. undirected) is crucial for understanding the nature of these relationships. Understanding these basic concepts lays the foundation for working with various types of graphs in algorithms and applications.
