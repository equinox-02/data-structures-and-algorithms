
// ==========================================
// DSA REVISION NOTEBOOK - APPLICATION LOGIC
// ==========================================

const dsaUnits = [
  {
    "id": 1,
    "unitNumber": 1,
    "title": "Unit 1: Introduction to Data Structures & Algorithms",
    "shortTitle": "Unit 1: Intro & Arrays",
    "badge": "Foundations",
    "summary": "Core concepts of Data, Information, Primitive vs Non-Primitive, Linear vs Non-Linear structures, Arrays in C, Memory address calculations, Structures, Pointers, Dynamic Memory Allocation (malloc, calloc, realloc, free), and Algorithm Analysis (Time, Space, Big O, Omega, Theta).",
    "topics": [
      {
        "id": "u1-t1",
        "title": "Introduction to DSA & Core Concepts",
        "category": "Foundations",
        "readTime": "5 min",
        "definition": "A **Data Structure** is a specialized format for organizing, processing, retrieving, and storing data in computer memory efficiently. An **Algorithm** is a finite, well-defined step-by-step sequence of instructions to solve a computational problem. As formulated by Niklaus Wirth:\n$$\\text{Program} = \\text{Algorithm} + \\text{Data Structure}$$",
        "explanation": "<p>Data Structures and Algorithms form the foundational pillar of Computer Science. Understanding how data is represented and manipulated in memory enables students to write high-performance, scalable software.</p>\n<ul>\n  <li><strong>Data:</strong> Raw, unorganized facts, figures, and statistics collected together for reference or analysis (e.g., numbers, characters).</li>\n  <li><strong>Information:</strong> Processed, meaningful, and structured data that carries context (e.g., student grade sheet, sorted rank list).</li>\n  <li><strong>Need for Data Structures:</strong> Helps manage massive datasets, reduces execution time, optimizes RAM consumption, and ensures efficient algorithmic search and retrieval.</li>\n</ul>",
        "logic": "1. Input data is accepted in raw form.\n2. An appropriate data structure (e.g., Array, Stack, Tree) is selected based on access patterns and memory constraints.\n3. Algorithms operate on the data structure via fundamental operations (Traversal, Insertion, Deletion, Search).\n4. Output is generated within specified time and space bounds.",
        "example": "Consider storing marks of 60 students:\n- Without Data Structures: 60 distinct variables (m1, m2, ..., m60) — highly inefficient and unmanageable.\n- With Linear Data Structure (Array): int marks[60]; — single contiguous memory block accessible via indices 0 to 59 in O(1) time.",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Program Composition Formula & Data Pipeline</div>\n  <div class=\"pipeline-flow\">\n    <div class=\"pipeline-box highlight-box\">Raw Data (Facts & Stats)</div>\n    <div class=\"flow-arrow\">➔</div>\n    <div class=\"pipeline-box formula-box\">Data Structure (Organization) + Algorithm (Logic)</div>\n    <div class=\"flow-arrow\">➔</div>\n    <div class=\"pipeline-box success-box\">Meaningful Information / Result</div>\n  </div>\n</div>",
        "code": "// Simple C demonstration: Array Data Structure + Linear Search Algorithm\n// include <stdio.h>\n\nint main() {\n    int marks[5] = {85, 92, 78, 64, 88}; // Data Structure: 1D Array\n    int target = 78;\n    int found = -1;\n\n    // Algorithm: Linear Search\n    for(int i = 0; i < 5; i++) {\n        if(marks[i] == target) {\n            found = i;\n            break;\n        }\n    }\n\n    if(found != -1)\n        printf(\"Element %d found at index %d\\n\", target, found);\n    else\n        printf(\"Element not found\\n\");\n\n    return 0;\n}",
        "complexity": {
          "time": "O(1) direct index access, O(n) linear search",
          "space": "O(n) for storing n elements",
          "notes": "Program efficiency directly depends on choosing the correct data structure."
        },
        "examNotes": [
          {
            "type": "exam",
            "title": "Golden Formula",
            "text": "Program = Algorithm + Data Structure. Frequently asked in 2-mark viva and short questions!"
          },
          {
            "type": "tip",
            "title": "Data vs Information",
            "text": "Remember: Data is unprocessed raw facts (e.g., 98, 76), whereas Information is contextualized processed data (e.g., Average marks = 87)."
          }
        ]
      },
      {
        "id": "u1-t2",
        "title": "Classification of Data Structures",
        "category": "Classification",
        "readTime": "7 min",
        "definition": "Data structures are primarily categorized into **Primitive** and **Non-Primitive** structures. Non-primitive structures are further subdivided into **Linear** (sequential elements) and **Non-Linear** (hierarchical or interconnected elements).",
        "explanation": "<p>The classification determines how data elements are laid out in memory and what relationships exist between consecutive elements.</p>\n<h4>1. Primitive Data Structures</h4>\n<p>Basic data structures that are directly operated upon by machine instructions. Examples: <code>int</code>, <code>float</code>, <code>char</code>, <code>pointers</code>.</p>\n<h4>2. Non-Primitive Data Structures</h4>\n<p>Derived from primitive structures to emphasize grouping, organizing, and maintaining relationships among homogeneous or heterogeneous items.</p>\n<ul>\n  <li><strong>Linear Data Structures:</strong> Elements form a single sequential line. Each element has unique predecessor and successor (except endpoints).\n    <ul>\n      <li><em>Array:</em> Fixed-size homogeneous contiguous memory collection.</li>\n      <li><em>Stack:</em> LIFO (Last-In-First-Out) ordered list. Insert/Delete at TOP.</li>\n      <li><em>Queue:</em> FIFO (First-In-First-Out) list. Insert at REAR, delete at FRONT.</li>\n      <li><em>Linked List:</em> Dynamically allocated nodes linked via pointers.</li>\n    </ul>\n  </li>\n  <li><strong>Non-Linear Data Structures:</strong> Data elements have multi-level or branching relationships (one-to-many or many-to-many).\n    <ul>\n      <li><em>Tree:</em> Hierarchical collection of nodes with root, branches, and leaves (acyclic).</li>\n      <li><em>Graph:</em> Collection of vertices (nodes) and connecting edges (relationships).</li>\n    </ul>\n  </li>\n</ul>",
        "logic": "Taxonomy Tree:\nData Structures\n ├── Primitive (int, float, char, pointer)\n └── Non-Primitive\n      ├── Linear (Array, Stack, Queue, Linked List)\n      └── Non-Linear (Tree, Graph)",
        "example": "Linear vs Non-Linear Real-World Analogy:\n- Linear: Students standing in a single-file prayer line (each has one person ahead and one behind).\n- Non-Linear: College Organizational Hierarchy (Principal ➔ HODs ➔ Professors ➔ Students) -> Tree structure.",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Data Structure Classification Hierarchy</div>\n  <div class=\"tree-classification\">\n    <div class=\"class-node root-node\">Data Structures</div>\n    <div class=\"class-branches\">\n      <div class=\"class-subbranch\">\n        <div class=\"class-node branch-node\">Primitive</div>\n        <div class=\"class-leaves\">\n          <span class=\"leaf-tag\">int</span>\n          <span class=\"leaf-tag\">float</span>\n          <span class=\"leaf-tag\">char</span>\n          <span class=\"leaf-tag\">pointer</span>\n        </div>\n      </div>\n      <div class=\"class-subbranch\">\n        <div class=\"class-node branch-node\">Non-Primitive</div>\n        <div class=\"class-sub-sub\">\n          <div class=\"sub-col\">\n            <strong>Linear (Sequential)</strong>\n            <span class=\"leaf-tag\">Array</span>\n            <span class=\"leaf-tag\">Stack (LIFO)</span>\n            <span class=\"leaf-tag\">Queue (FIFO)</span>\n            <span class=\"leaf-tag\">Linked List</span>\n          </div>\n          <div class=\"sub-col\">\n            <strong>Non-Linear (Branching)</strong>\n            <span class=\"leaf-tag\">Tree (Hierarchical)</span>\n            <span class=\"leaf-tag\">Graph (Network)</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
        "code": "// Summary of fundamental declarations in C\n// Primitive\nint age = 20;\nchar grade = 'A';\n\n// Linear Non-Primitive\nint arr[5] = {10, 20, 30, 40, 50}; // Array\nstruct Node { int data; struct Node *next; }; // Linked list node\n\n// Non-Linear Non-Primitive\nstruct TreeNode { int val; struct TreeNode *left, *right; }; // Binary tree node",
        "complexity": {
          "time": "Varies by structure: Array access O(1), Search in Linear O(n), Tree Search O(log n)",
          "space": "Linear: O(n) sequential. Non-linear: O(V + E) for graphs, O(n) for trees.",
          "notes": "Tree can be perceived as a restricted graph without cycles."
        },
        "examNotes": [
          {
            "type": "exam",
            "title": "Linear vs Non-Linear Comparison",
            "text": "Linear: Single-level traversal, single predecessor/successor. Non-linear: Multi-level hierarchical/interconnected traversal."
          },
          {
            "type": "trap",
            "title": "Is Array Primitive?",
            "text": "No! In C, arrays are Non-Primitive derived data structures because they group multiple primitive elements together."
          }
        ]
      },
      {
        "id": "u1-t3",
        "title": "Operations on Data Structures",
        "category": "Operations",
        "readTime": "4 min",
        "definition": "An **Operation** on a data structure refers to the systematic processing, manipulation, or querying of elements stored within that structure.",
        "explanation": "<p>Standard operations supported across most data structures include:</p>\n<ol>\n  <li><strong>Create:</strong> Allocates memory and initializes the structure.</li>\n  <li><strong>Traversing:</strong> Visiting each element of the data structure exactly once in a systematic order to process or display it.</li>\n  <li><strong>Inserting:</strong> Adding a new data element at a designated position (beginning, end, or middle).</li>\n  <li><strong>Deleting:</strong> Removing an existing element from the data structure and freeing memory.</li>\n  <li><strong>Searching:</strong> Finding the location or index of a target element with a specific key.</li>\n  <li><strong>Sorting:</strong> Arranging elements in logical order (ascending or descending).</li>\n  <li><strong>Merging:</strong> Combining elements of two similar data structures into a single unified structure.</li>\n</ol>",
        "logic": "General operation pipeline:\n1. Validate boundary conditions (e.g., Check Underflow on Deletion, Overflow on Insertion).\n2. Execute pointer or index adjustments.\n3. Update size counter and return status.",
        "example": "Array of size 5: [10, 20, 30, 40, 50]\n- Traversal: Print 10 -> 20 -> 30 -> 40 -> 50.\n- Search(30): Compares index 0, index 1, index 2 -> Match found at index 2.\n- Deletion(index 1): Shift elements at index 2, 3, 4 leftwards -> [10, 30, 40, 50].",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">7 Fundamental Data Structure Operations</div>\n  <div class=\"ops-grid\">\n    <div class=\"op-card\">✨ <strong>Create</strong><br>Memory init</div>\n    <div class=\"op-card\">🚶 <strong>Traverse</strong><br>Visit every node</div>\n    <div class=\"op-card\">➕ <strong>Insert</strong><br>Add new item</div>\n    <div class=\"op-card\">❌ <strong>Delete</strong><br>Remove & free</div>\n    <div class=\"op-card\">🔍 <strong>Search</strong><br>Locate key</div>\n    <div class=\"op-card\">📶 <strong>Sort</strong><br>Asc / Desc order</div>\n    <div class=\"op-card\">🔀 <strong>Merge</strong><br>Combine 2 lists</div>\n  </div>\n</div>",
        "code": "// Traversing & Deletion by shifting in an Array in C\n// include <stdio.h>\n\nvoid traverse(int arr[], int n) {\n    printf(\"Array elements: \");\n    for(int i = 0; i < n; i++)\n        printf(\"%d \", arr[i]);\n    printf(\"\\n\");\n}\n\nint deleteAt(int arr[], int *n, int pos) {\n    if(pos < 0 || pos >= *n) return 0; // Boundary check\n    for(int i = pos; i < *n - 1; i++) {\n        arr[i] = arr[i + 1]; // Shift left\n    }\n    (*n)--;\n    return 1;\n}",
        "complexity": {
          "time": "Traversal: O(n), Search: O(n) linear / O(log n) binary, Insert/Delete in Array: O(n) due to shifting",
          "space": "O(1) auxiliary space for in-place operations",
          "notes": "Linked lists achieve O(1) insertion/deletion if position pointer is already known."
        },
        "examNotes": [
          {
            "type": "exam",
            "title": "Must Know Operations List",
            "text": "Always write all 7 operations: Create, Traverse, Insert, Delete, Search, Sort, Merge in full-mark questions!"
          }
        ]
      },
      {
        "id": "u1-t4",
        "title": "Review of Arrays & Memory Representation in C",
        "category": "Arrays",
        "readTime": "8 min",
        "definition": "An **Array** is a fixed-size, sequenced collection of homogeneous data elements stored in contiguous memory locations. Address of any element can be computed mathematically in $O(1)$ time using the **Base Address**.",
        "explanation": "<p>In C, arrays have a static size determined at compile-time. Elements are indexed from $0$ to $N-1$.</p>\n<h4>1D Array Address Formula</h4>\n<p>Given an array $A[LB \\dots UB]$ where $LB$ is Lower Bound (usually 0 in C), $B$ is Base Address, and $W$ is the size of each element in bytes:</p>\n$$\\text{Address}(A[i]) = B + (i - LB) \\times W$$\n<p>When $LB = 0$:</p>\n$$\\text{Address}(A[i]) = B + i \\times W$$\n\n<h4>2D Array Memory Mapping</h4>\n<p>Computer memory is linear (1D). A 2D array of dimension $M \\times N$ ($M$ rows, $N$ columns) can be stored in two ways:</p>\n<ol>\n  <li><strong>Row-Major Order (RMO - Standard in C):</strong> Row by row storage.\n  $$\\text{Address}(A[i][j]) = B + W \\times [(i - LB_r) \\times N + (j - LB_c)]$$\n  </li>\n  <li><strong>Column-Major Order (CMO - Fortran/MATLAB):</strong> Column by column storage.\n  $$\\text{Address}(A[i][j]) = B + W \\times [(j - LB_c) \\times M + (i - LB_r)]$$\n  </li>\n</ol>",
        "logic": "Example 1D Address Calculation:\nBase Address B = 0x1000 (decimal 4096)\nElement type = int (W = 4 bytes)\nAddress of arr[3]:\nAddress(arr[3]) = 4096 + 3 * 4 = 4096 + 12 = 4108 (0x100C).",
        "example": "Numerical Problem:\nGiven array A[1..10][1..20] with Base Address B = 500, element size W = 2 bytes. Find address of A[5][10]:\nHere M = 10 rows, N = 20 columns. LBr = 1, LBc = 1.\n1. Row Major Order:\n   Addr = 500 + 2 * [(5 - 1) * 20 + (10 - 1)]\n        = 500 + 2 * [4 * 20 + 9]\n        = 500 + 2 * [80 + 9] = 500 + 178 = 678.\n2. Column Major Order:\n   Addr = 500 + 2 * [(10 - 1) * 10 + (5 - 1)]\n        = 500 + 2 * [9 * 10 + 4]\n        = 500 + 2 * [94] = 500 + 188 = 688.",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Contiguous Memory Mapping of 1D Array</div>\n  <div class=\"array-strip\">\n    <div class=\"array-cell\"><span class=\"cell-idx\">arr[0]</span><span class=\"cell-val\">10</span><span class=\"cell-addr\">0x1000</span></div>\n    <div class=\"array-cell\"><span class=\"cell-idx\">arr[1]</span><span class=\"cell-val\">20</span><span class=\"cell-addr\">0x1004</span></div>\n    <div class=\"array-cell\"><span class=\"cell-idx\">arr[2]</span><span class=\"cell-val\">30</span><span class=\"cell-addr\">0x1008</span></div>\n    <div class=\"array-cell\"><span class=\"cell-idx\">arr[3]</span><span class=\"cell-val\">40</span><span class=\"cell-addr\">0x100C</span></div>\n    <div class=\"array-cell\"><span class=\"cell-idx\">arr[4]</span><span class=\"cell-val\">50</span><span class=\"cell-addr\">0x1010</span></div>\n  </div>\n  <div class=\"diagram-note\">Byte offset = Index × sizeof(int) = i × 4</div>\n</div>",
        "code": "// 2D Array in C demonstration\n// include <stdio.h>\n\nint main() {\n    int matrix[2][3] = {\n        {10, 20, 30},\n        {40, 50, 60}\n    };\n\n    printf(\"Base Address: %p\\n\", (void*)matrix);\n    printf(\"Address of matrix[0][0]: %p\\n\", (void*)&matrix[0][0]);\n    printf(\"Address of matrix[1][2]: %p\\n\", (void*)&matrix[1][2]);\n\n    // Difference in indices: row 1 * 3 cols + col 2 = 5 ints = 20 bytes\n    return 0;\n}",
        "complexity": {
          "time": "Index Access: O(1), Insertion/Deletion: O(n) due to shifting elements",
          "space": "O(n) contiguous RAM allocation",
          "notes": "Accessing arr[i] is lightning fast because the compiler does direct pointer arithmetic."
        },
        "examNotes": [
          {
            "type": "formula",
            "title": "RMO Address Formula",
            "text": "Address = B + W * [(i - LBr)*N + (j - LBc)]. Multiply row offset by total columns N!"
          },
          {
            "type": "formula",
            "title": "CMO Address Formula",
            "text": "Address = B + W * [(j - LBc)*M + (i - LBr)]. Multiply column offset by total rows M!"
          }
        ]
      },
      {
        "id": "u1-t5",
        "title": "Structures, Self-Referential Structures & Unions",
        "category": "C Structures",
        "readTime": "6 min",
        "definition": "A **Structure** (`struct`) is a user-defined data type grouping heterogeneous members under one name. A **Self-Referential Structure** contains a pointer pointing to another structure of the same type. A **Union** (`union`) groups heterogeneous members sharing the same single memory location.",
        "explanation": "<p>Structures and Unions form the backbone of dynamic data structures like Linked Lists and Trees.</p>\n<h4>1. Structures (<code>struct</code>)</h4>\n<p>Each member of a structure has its own unique memory location. Total size $\\ge$ sum of member sizes (accounting for padding).</p>\n\n<h4>2. Self-Referential Structures (Crucial for DSA!)</h4>\n<p>A structure that contains one or more pointers pointing to an instance of the <em>same</em> structure type:</p>\n<pre><code>struct node {\n    int data;\n    struct node *next; // Self-referential pointer!\n};</code></pre>\n<p>This allows nodes to be linked into dynamic chains (Linked lists, Trees, Graphs).</p>\n\n<h4>3. Unions (<code>union</code>)</h4>\n<p>Unlike structures, all union members share the exact same memory location. The size of a union equals the size of its largest member. Modifying one member overwrites other members.</p>",
        "logic": "Comparison:\nFeature         | struct                        | union\n----------------|-------------------------------|-----------------------------\nMemory          | Separate memory for each      | Shared memory for all\nSize            | Sum of members (+ padding)    | Size of largest member\nSimultaneous Use| All members active at once    | Only one member active at a time",
        "example": "Memory footprint comparison:\nstruct DemoS { int i; char c; double d; }; // Size = 4 + 1(pad) + 8 = 16 bytes\nunion DemoU  { int i; char c; double d; }; // Size = 8 bytes (double is largest)",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Memory Allocation: Struct vs Union vs Self-Referential Node</div>\n  <div class=\"struct-union-vis\">\n    <div class=\"vis-box\">\n      <strong>struct Example</strong>\n      <div class=\"mem-block\"><span class=\"m-part\">int (4B)</span><span class=\"m-part\">char (1B)</span><span class=\"m-part\">float (4B)</span></div>\n      <small>Total: 9+ bytes (Unique slots)</small>\n    </div>\n    <div class=\"vis-box\">\n      <strong>union Example</strong>\n      <div class=\"mem-block union-overlap\"><span class=\"m-shared\">Shared largest slot (4B)</span></div>\n      <small>Total: 4 bytes (Overlapping slots)</small>\n    </div>\n    <div class=\"vis-box\">\n      <strong>Self-Referential Node</strong>\n      <div class=\"node-block\"><span class=\"n-data\">Data (4B)</span><span class=\"n-ptr\">*next (8B)</span></div>\n      <small>Points to next node in heap</small>\n    </div>\n  </div>\n</div>",
        "code": "// Demonstration of Self-Referential Structure\n// include <stdio.h>\n// include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node *next; // Self-referential pointer\n};\n\nint main() {\n    struct Node n1, n2;\n    n1.data = 100;\n    n1.next = &n2; // Linking n1 to n2\n\n    n2.data = 200;\n    n2.next = NULL; // End of chain\n\n    printf(\"n1: %d -> n2: %d\\n\", n1.data, n1.next->data);\n    return 0;\n}",
        "complexity": {
          "time": "Member access via '.' or '->': O(1)",
          "space": "Struct: sum of sizes. Union: max of sizes.",
          "notes": "Self-referential structures are the absolute foundation of all linked data structures."
        },
        "examNotes": [
          {
            "type": "exam",
            "title": "Viva Question: Self-Referential",
            "text": "Define self-referential structure with an example. Must write: 'A struct containing a pointer to an instance of its own type'!"
          },
          {
            "type": "trap",
            "title": "Can a struct contain an object of itself?",
            "text": "No! struct Node n; inside struct Node is illegal (infinite size). It must be a pointer: struct Node *next; (fixed 4 or 8 bytes)."
          }
        ]
      },
      {
        "id": "u1-t6",
        "title": "Pointers & Dynamic Memory Allocation Functions",
        "category": "Memory Management",
        "readTime": "8 min",
        "definition": "A **Pointer** is a variable storing the memory address of another variable. **Dynamic Memory Allocation (DMA)** allows allocating and freeing memory on the **Heap** at runtime using `malloc()`, `calloc()`, `realloc()`, and `free()`.",
        "explanation": "<p>Static arrays have fixed sizes determined at compile-time. DMA gives programs the flexibility to request memory dynamically according to user demand.</p>\n<h4>Dynamic Memory Functions in <code>&lt;stdlib.h&gt;</code></h4>\n<ol>\n  <li><strong><code>malloc(size_t size)</code>:</strong>\n    Allocates a single contiguous block of <code>size</code> bytes on the heap. Returns <code>void*</code> pointer to the first byte. Memory contents are <em>uninitialized garbage values</em>.\n    <pre><code>int *p = (int*) malloc(5 * sizeof(int));</code></pre>\n  </li>\n  <li><strong><code>calloc(size_t num, size_t size)</code>:</strong>\n    Allocates contiguous memory for an array of <code>num</code> elements, each of <code>size</code> bytes. Initializes <em>all bytes to zero</em>.\n    <pre><code>int *p = (int*) calloc(5, sizeof(int));</code></pre>\n  </li>\n  <li><strong><code>free(void *ptr)</code>:</strong>\n    Deallocates dynamically allocated heap memory. Failure to call <code>free()</code> leads to <strong>Memory Leaks</strong>.\n    <pre><code>free(p); p = NULL; // avoid dangling pointer</code></pre>\n  </li>\n  <li><strong><code>realloc(void *ptr, size_t new_size)</code>:</strong>\n    Resizes previously allocated heap block. Expands or shrinks the block, preserving existing data.\n    <pre><code>p = (int*) realloc(p, 10 * sizeof(int));</code></pre>\n  </li>\n</ol>",
        "logic": "Memory allocation rules:\n1. Always check if pointer returned is NULL (indicates Heap Full / Out of Memory).\n2. Cast returned void* to the appropriate pointer type: (int*), (struct node*).\n3. Free memory when done and set pointer to NULL.",
        "example": "malloc vs calloc difference:\n- malloc(5 * sizeof(int)): 20 bytes allocated. Values: [?32423, ?8483, ?0, ?-1, ?992] (Garbage).\n- calloc(5, sizeof(int)): 20 bytes allocated. Values: [0, 0, 0, 0, 0] (All zero initialized).",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">C Memory Architecture & Dynamic Allocation</div>\n  <div class=\"memory-layout\">\n    <div class=\"mem-tier stack-tier\"><strong>Stack</strong> (Local variables, function frames) ↓ Grows downward</div>\n    <div class=\"mem-tier free-tier\">Free Memory Pool</div>\n    <div class=\"mem-tier heap-tier\"><strong>Heap</strong> (malloc, calloc, realloc) ↑ Grows upward</div>\n    <div class=\"mem-tier data-tier\"><strong>Data Segment</strong> (Global & static variables)</div>\n    <div class=\"mem-tier code-tier\"><strong>Code Segment (Text)</strong> (Compiled machine instructions)</div>\n  </div>\n</div>",
        "code": "// Dynamic Array Allocation, Resizing and Deallocation in C\n// include <stdio.h>\n// include <stdlib.h>\n\nint main() {\n    int n = 3;\n    int *arr = (int*) malloc(n * sizeof(int));\n\n    if (arr == NULL) {\n        printf(\"Memory allocation failed!\\n\");\n        return 1;\n    }\n\n    for(int i = 0; i < n; i++) arr[i] = (i + 1) * 10;\n\n    // Resizing array from 3 to 5 elements\n    int *temp = (int*) realloc(arr, 5 * sizeof(int));\n    if(temp != NULL) {\n        arr = temp;\n        arr[3] = 40;\n        arr[4] = 50;\n    }\n\n    printf(\"Dynamic elements: \");\n    for(int i = 0; i < 5; i++) printf(\"%d \", arr[i]);\n    printf(\"\\n\");\n\n    free(arr);    // Free memory\n    arr = NULL;   // Prevent dangling pointer\n    return 0;\n}",
        "complexity": {
          "time": "malloc/calloc/free: O(1) average. realloc: O(n) if data copied to a new location.",
          "space": "Heap space allocated dynamically on demand.",
          "notes": "Always check for NULL after malloc to prevent segmentation faults."
        },
        "examNotes": [
          {
            "type": "exam",
            "title": "malloc vs calloc Table",
            "text": "malloc takes 1 argument (total bytes) and leaves memory garbage. calloc takes 2 arguments (num, size) and zeroes all memory!"
          },
          {
            "type": "trap",
            "title": "Dangling Pointer vs Memory Leak",
            "text": "Memory Leak: Forgetting to free memory. Dangling Pointer: Accessing memory that was already freed."
          }
        ]
      },
      {
        "id": "u1-t7",
        "title": "Analysis of Algorithms & Asymptotic Complexity",
        "category": "Algorithm Analysis",
        "readTime": "9 min",
        "definition": "An **Algorithm** is a finite sequence of unambiguous instructions. **Algorithm Analysis** evaluates the efficiency of an algorithm by measuring its **Time Complexity** (execution steps) and **Space Complexity** (memory consumed) as a function of input size $n$.",
        "explanation": "<p>An efficient algorithm solves a problem using the minimum possible time and storage resources.</p>\n<h4>Measures of Analysis</h4>\n<ol>\n  <li><strong>Input Size ($n$):</strong> Number of elements to be processed (e.g., array length).</li>\n  <li><strong>Time Complexity:</strong> Calculated via <em>Frequency Count</em> (number of times each statement executes).</li>\n  <li><strong>Space Complexity:</strong> Fixed space (code, constants) + Variable space (data structures, recursion call stack).</li>\n</ol>\n\n<h4>Cases of Computation</h4>\n<ul>\n  <li><strong>Best Case:</strong> Minimum time required for any input of size $n$ (Lower Bound).</li>\n  <li><strong>Worst Case:</strong> Maximum time required for any input of size $n$ (Upper Bound — standard guarantee).</li>\n  <li><strong>Average Case:</strong> Expected time across all uniformly distributed possible inputs.</li>\n</ul>\n\n<h4>Asymptotic Notations</h4>\n<ul>\n  <li><strong>Big-O ($O$): Upper Bound.</strong> $f(n) = O(g(n))$ if $f(n) \\le c \\cdot g(n)$ for all $n \\ge n_0$. Represents worst-case running time.</li>\n  <li><strong>Big-Omega ($\\Omega$): Lower Bound.</strong> $f(n) = \\Omega(g(n))$ if $f(n) \\ge c \\cdot g(n)$ for all $n \\ge n_0$.</li>\n  <li><strong>Big-Theta ($\\Theta$): Tight Bound.</strong> $c_1 \\cdot g(n) \\le f(n) \\le c_2 \\cdot g(n)$ for all $n \\ge n_0$.</li>\n</ul>\n\n<h4>Order of Growth Hierarchy</h4>\n$$O(1) < O(\\log n) < O(n) < O(n \\log n) < O(n^2) < O(n^3) < O(2^n) < O(n!)$$",
        "logic": "Frequency Count Method:\nStatement                 | Count\n--------------------------|-----------\nint sum = 0;              | 1\nfor(int i = 0; i < n; i++)| n + 1\n    sum += arr[i];        | n\nTotal Frequency = 2n + 2  | O(n) Time",
        "example": "Nested Loop Analysis:\nfor(i = 0; i < n; i++) {\n    for(j = 0; j < n; j++) {\n        // executes n * n = n^2 times!\n    }\n}\nTime Complexity = O(n^2).",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Orders of Growth Comparison Graph (Time vs Input Size n)</div>\n  <div class=\"growth-curves\">\n    <div class=\"curve-row bad\"><span class=\"c-label\">O(n!) / O(2^n)</span><span class=\"c-bar\" style=\"width: 100%\">Horrible (Exponential)</span></div>\n    <div class=\"curve-row poor\"><span class=\"c-label\">O(n^2)</span><span class=\"c-bar\" style=\"width: 75%\">Poor (Quadratic)</span></div>\n    <div class=\"curve-row fair\"><span class=\"c-label\">O(n log n)</span><span class=\"c-bar\" style=\"width: 45%\">Fair (Log-linear)</span></div>\n    <div class=\"curve-row good\"><span class=\"c-label\">O(n)</span><span class=\"c-bar\" style=\"width: 30%\">Good (Linear)</span></div>\n    <div class=\"curve-row great\"><span class=\"c-label\">O(log n)</span><span class=\"c-bar\" style=\"width: 15%\">Excellent (Logarithmic)</span></div>\n    <div class=\"curve-row best\"><span class=\"c-label\">O(1)</span><span class=\"c-bar\" style=\"width: 5%\">Ideal (Constant)</span></div>\n  </div>\n</div>",
        "code": "// Frequency Count Comparison in C\n// O(1) Constant Time\nint getFirst(int arr[]) {\n    return arr[0];\n}\n\n// O(n) Linear Time\nint sumArray(int arr[], int n) {\n    int sum = 0;\n    for(int i = 0; i < n; i++) // runs n times\n        sum += arr[i];\n    return sum;\n}\n\n// O(n^2) Quadratic Time\nvoid printPairs(int arr[], int n) {\n    for(int i = 0; i < n; i++)\n        for(int j = 0; j < n; j++)\n            printf(\"(%d, %d)\\n\", arr[i], arr[j]);\n}",
        "complexity": {
          "time": "Constant: O(1), Logarithmic: O(log n), Linear: O(n), Quadratic: O(n^2)",
          "space": "Auxiliary memory beyond input data.",
          "notes": "Worst-case analysis O(g(n)) is the standard benchmark used in industry and exams."
        },
        "examNotes": [
          {
            "type": "exam",
            "title": "Asymptotic Definitions",
            "text": "Big O = Upper bound (Worst Case). Big Omega = Lower bound (Best Case). Big Theta = Tight bound (Average/Exact)."
          },
          {
            "type": "formula",
            "title": "Order of Growth",
            "text": "O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n) < O(n!). Memorize this order!"
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "unitNumber": 2,
    "title": "Unit 2: Stacks, Recursion and Queue",
    "shortTitle": "Unit 2: Stacks & Queues",
    "badge": "Linear ADTs",
    "summary": "Stack Abstract Data Type, Array implementation, Push, Pop, Peek operations, Applications, Direct/Indirect Recursion, Tower of Hanoi, Infix to Postfix/Prefix conversion, Postfix evaluation, Linear Queue & false overflow, Circular Queue algorithms, Deque, and Priority Queue.",
    "topics": [
      {
        "id": "u2-t1",
        "title": "Stack ADT & Array Representation",
        "category": "Stack",
        "readTime": "7 min",
        "definition": "A **Stack** is a linear Abstract Data Type (ADT) that follows the **LIFO (Last-In, First-Out)** principle. Elements can only be inserted or deleted from a single designated end called the **TOP** of the stack.",
        "explanation": "<p>Real-world examples include a stack of dinner plates, a deck of cards, or browser back-button history.</p>\n<h4>Core Stack Operations</h4>\n<ol>\n  <li><strong><code>push(data)</code>:</strong> Inserts an element onto the TOP of the stack. Requires checking for <strong>Stack Overflow</strong> (<code>top == MAX - 1</code>).</li>\n  <li><strong><code>pop()</code>:</strong> Removes and returns the element at the TOP of the stack. Requires checking for <strong>Stack Underflow</strong> (<code>top == -1</code>).</li>\n  <li><strong><code>peek()</code> / <code>top()</code>:</strong> Inspects the top element without removing it.</li>\n  <li><strong><code>isEmpty()</code>:</strong> Returns true if <code>top == -1</code>.</li>\n  <li><strong><code>isFull()</code>:</strong> Returns true if <code>top == MAX - 1</code>.</li>\n</ol>",
        "logic": "Array Implementation Steps:\n1. Initialize TOP = -1.\n2. Push(data):\n   if (TOP == MAX - 1) -> Output \"Overflow\", exit.\n   else: TOP = TOP + 1; Stack[TOP] = data.\n3. Pop():\n   if (TOP == -1) -> Output \"Underflow\", exit.\n   else: val = Stack[TOP]; TOP = TOP - 1; return val.",
        "example": "Stack Trace with MAX = 3:\nInitial: TOP = -1, Stack: []\n1. Push(10) -> TOP = 0, Stack: [10]\n2. Push(20) -> TOP = 1, Stack: [10, 20]\n3. Push(30) -> TOP = 2, Stack: [10, 20, 30] (Full!)\n4. Push(40) -> OVERFLOW! Cannot insert.\n5. Pop()    -> Returns 30, TOP = 1, Stack: [10, 20]",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Stack LIFO Mechanics (Push & Pop via TOP)</div>\n  <div class=\"stack-vis-container\">\n    <div class=\"stack-box\">\n      <div class=\"stack-slot full\"><span class=\"slot-idx\">TOP = 2</span><span class=\"slot-val\">30</span></div>\n      <div class=\"stack-slot\"><span class=\"slot-idx\">1</span><span class=\"slot-val\">20</span></div>\n      <div class=\"stack-slot\"><span class=\"slot-idx\">0</span><span class=\"slot-val\">10</span></div>\n    </div>\n    <div class=\"stack-actions\">\n      <div class=\"action-arrow push-arrow\">⬇ PUSH: TOP increases, element enters from top</div>\n      <div class=\"action-arrow pop-arrow\">⬆ POP: TOP decreases, element leaves from top</div>\n    </div>\n  </div>\n</div>",
        "code": "// Stack Implementation using Array in C\n// include <stdio.h>\n// define MAX 5\n\nint stack[MAX];\nint top = -1;\n\nint isFull() { return top == MAX - 1; }\nint isEmpty() { return top == -1; }\n\nvoid push(int data) {\n    if (isFull()) {\n        printf(\"Stack Overflow! Cannot push %d\\n\", data);\n        return;\n    }\n    top++;\n    stack[top] = data;\n    printf(\"Pushed: %d (TOP = %d)\\n\", data, top);\n}\n\nint pop() {\n    if (isEmpty()) {\n        printf(\"Stack Underflow!\\n\");\n        return -1;\n    }\n    int data = stack[top];\n    top--;\n    return data;\n}\n\nint peek() {\n    if (isEmpty()) return -1;\n    return stack[top];\n}",
        "complexity": {
          "time": "Push: O(1), Pop: O(1), Peek: O(1), isEmpty: O(1)",
          "space": "O(MAX) for fixed array",
          "notes": "Every stack operation executes in strict O(1) constant time."
        },
        "examNotes": [
          {
            "type": "exam",
            "title": "Boundary Conditions",
            "text": "Overflow: TOP == MAX - 1. Underflow: TOP == -1. Never forget to check these before push and pop!"
          },
          {
            "type": "tip",
            "title": "LIFO Principle",
            "text": "Last-In, First-Out: The most recently added element is the very first one to be removed."
          }
        ]
      },
      {
        "id": "u2-t2",
        "title": "Recursion & Tower of Hanoi",
        "category": "Recursion",
        "readTime": "8 min",
        "definition": "A function is **Recursive** if it calls itself either directly or indirectly to solve a smaller subproblem. The **Tower of Hanoi** is a classic mathematical recursion puzzle involving moving $n$ disks between three rods subject to specific placement rules.",
        "explanation": "<p>Recursion relies on the system call stack. Every recursive call pushes an activation record onto the stack until a <strong>Base Condition</strong> is met.</p>\n<h4>Types of Recursion</h4>\n<ul>\n  <li><strong>Direct Recursion:</strong> Function calls itself directly (e.g., <code>factorial(n)</code> calls <code>factorial(n-1)</code>).</li>\n  <li><strong>Indirect Recursion:</strong> Function <code>A()</code> calls <code>B()</code>, and <code>B()</code> calls <code>A()</code>.</li>\n</ul>\n\n<h4>Tower of Hanoi Rules</h4>\n<ol>\n  <li>Only one disk may be moved at a time.</li>\n  <li>Each move consists of taking the upper disk from one peg and sliding it onto another peg.</li>\n  <li>No larger disk may be placed on top of a smaller disk.</li>\n</ol>\n<p>Total moves required for $n$ disks is exactly $2^n - 1$.</p>",
        "logic": "Tower of Hanoi Recursive Algorithm:\nTower(n, Source, Dest, Aux):\n1. If n == 1:\n   Print \"Move disk 1 from Source -> Dest\"\n   Return\n2. Move top n-1 disks from Source to Aux using Dest:\n   Tower(n - 1, Source, Aux, Dest)\n3. Move disk n from Source to Dest:\n   Print \"Move disk n from Source -> Dest\"\n4. Move n-1 disks from Aux to Dest using Source:\n   Tower(n - 1, Aux, Dest, Source)",
        "example": "Complete 7-Step Trace for N = 3 Disks (Pegs A -> C using B):\nTotal moves = 2^3 - 1 = 7 moves:\n1. Move disk 1 from A -> C\n2. Move disk 2 from A -> B\n3. Move disk 1 from C -> B\n4. Move disk 3 from A -> C  (Largest disk reaches destination!)\n5. Move disk 1 from B -> A\n6. Move disk 2 from B -> C\n7. Move disk 1 from A -> C  (All 3 disks now on Peg C!)",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Tower of Hanoi Initial vs Final State (N = 3)</div>\n  <div class=\"hanoi-vis\">\n    <div class=\"peg-col\">\n      <div class=\"peg-rod\">\n        <div class=\"h-disk d1\">1</div>\n        <div class=\"h-disk d2\">2</div>\n        <div class=\"h-disk d3\">3</div>\n      </div>\n      <strong>Peg A (Source)</strong>\n    </div>\n    <div class=\"peg-col\">\n      <div class=\"peg-rod\"></div>\n      <strong>Peg B (Auxiliary)</strong>\n    </div>\n    <div class=\"peg-col\">\n      <div class=\"peg-rod\"></div>\n      <strong>Peg C (Destination)</strong>\n    </div>\n  </div>\n</div>",
        "code": "// Tower of Hanoi in C\n// include <stdio.h>\n\nvoid towerOfHanoi(int n, char from_peg, char to_peg, char aux_peg) {\n    if (n == 1) {\n        printf(\"Move disk 1 from peg %c to peg %c\\n\", from_peg, to_peg);\n        return;\n    }\n    // Step 1: Move top n-1 disks from A to B using C\n    towerOfHanoi(n - 1, from_peg, aux_peg, to_peg);\n\n    // Step 2: Move remaining disk from A to C\n    printf(\"Move disk %d from peg %c to peg %c\\n\", n, from_peg, to_peg);\n\n    // Step 3: Move n-1 disks from B to C using A\n    towerOfHanoi(n - 1, aux_peg, to_peg, from_peg);\n}\n\nint main() {\n    int n = 3;\n    printf(\"Steps for %d disks:\\n\", n);\n    towerOfHanoi(n, 'A', 'C', 'B');\n    return 0;\n}",
        "complexity": {
          "time": "Recurrence: T(n) = 2T(n-1) + 1 => O(2^n) Exponential",
          "space": "O(n) auxiliary space on function call stack",
          "notes": "Each increase of 1 disk doubles the required work."
        },
        "examNotes": [
          {
            "type": "formula",
            "title": "Total Moves Formula",
            "text": "Total moves = 2^n - 1. For n=3 -> 7 moves; for n=4 -> 15 moves; for n=64 -> 1.84 x 10^19 moves!"
          },
          {
            "type": "exam",
            "title": "Base Condition",
            "text": "Never omit the base condition (n == 1). Without it, infinite recursion causes stack overflow crash."
          }
        ]
      },
      {
        "id": "u2-t3",
        "title": "Expression Parsing: Infix, Postfix & Prefix",
        "category": "Expressions",
        "readTime": "10 min",
        "definition": "An arithmetic expression can be written in three equivalent notations: **Infix** ($A + B$), **Prefix** or Polish ($+ A B$), and **Postfix** or Reverse Polish ($A B +$). Stacks are used to convert and evaluate these expressions without parenthesis ambiguity.",
        "explanation": "<p>Computers cannot easily evaluate infix expressions with precedence and parentheses directly. Postfix notation removes parentheses completely and evaluates in a single linear pass from left to right.</p>\n\n<h4>Operator Precedence & Associativity</h4>\n<table class=\"nb-table\">\n  <tr><th>Operator</th><th>Precedence</th><th>Associativity</th></tr>\n  <tr><td><code>^</code> (Power / Exponent)</td><td>Highest (3)</td><td>Right-to-Left</td></tr>\n  <tr><td><code>*</code> , <code>/</code> (Multiply, Divide)</td><td>Medium (2)</td><td>Left-to-Right</td></tr>\n  <tr><td><code>+</code> , <code>-</code> (Add, Subtract)</td><td>Lowest (1)</td><td>Left-to-Right</td></tr>\n</table>\n\n<h4>Infix to Postfix Algorithm</h4>\n<ol>\n  <li>Initialize an empty Operator Stack. Output expression is empty.</li>\n  <li>Scan the infix expression from left to right:\n    <ul>\n      <li>If character is an <strong>operand</strong>, append it to the Output.</li>\n      <li>If character is <code>'('</code>, push it onto the stack.</li>\n      <li>If character is <code>')'</code>, pop from stack and append to Output until <code>'('</code> is encountered; discard both parentheses.</li>\n      <li>If character is an <strong>operator</strong>: while stack is not empty and top of stack has $\\ge$ precedence than current operator (and top != <code>'('</code>), pop and append to Output. Then push current operator.</li>\n    </ul>\n  </li>\n  <li>Pop and append all remaining operators from stack to Output.</li>\n</ol>",
        "logic": "Example 1: Convert 3 + 4 * 5 / 6 to Postfix\nToken | Stack    | Output\n------|----------|-----------------\n3     | []       | 3\n+     | [+]      | 3\n4     | [+]      | 3 4\n*     | [+, *]   | 3 4\n5     | [+, *]   | 3 4 5\n/     | [+, /]   | 3 4 5 *   (pop * since * has >= prec than /)\n6     | [+, /]   | 3 4 5 * 6\nEnd   | []       | 3 4 5 * 6 / +\nFinal Postfix: 3 4 5 * 6 / +",
        "example": "Example 2 from Slide 24: ((A - (B + C)) * D) ^ (E + F)\nStep-by-step resolution:\n1. (B + C) -> B C +\n2. A - (B + C) -> A B C + -\n3. (...) * D -> A B C + - D *\n4. (E + F) -> E F +\n5. Combining with ^ -> A B C + - D * E F + ^",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Infix to Postfix Stack Conversion Pipeline</div>\n  <div class=\"token-pipe\">\n    <div class=\"token-in\">Infix: 3 + 4 * 5 / 6</div>\n    <div class=\"pipe-split\">\n      <div class=\"stack-holder\"><strong>Operator Stack:</strong> [+] [ / ]</div>\n      <div class=\"output-holder\"><strong>Output String:</strong> 3 4 5 * 6 / +</div>\n    </div>\n  </div>\n</div>",
        "code": "// Infix to Postfix Conversion in C\n// include <stdio.h>\n// include <ctype.h>\n\nchar stack[100];\nint top = -1;\n\nvoid push(char x) { stack[++top] = x; }\nchar pop() { return stack[top--]; }\n\nint precedence(char c) {\n    if (c == '^') return 3;\n    if (c == '*' || c == '/') return 2;\n    if (c == '+' || c == '-') return 1;\n    return 0;\n}\n\nvoid infixToPostfix(char *exp) {\n    for (int i = 0; exp[i] != '\\0'; i++) {\n        char c = exp[i];\n        if (isalnum(c)) {\n            printf(\"%c\", c);\n        } else if (c == '(') {\n            push(c);\n        } else if (c == ')') {\n            while (top != -1 && stack[top] != '(')\n                printf(\"%c\", pop());\n            pop(); // remove '('\n        } else {\n            while (top != -1 && precedence(stack[top]) >= precedence(c))\n                printf(\"%c\", pop());\n            push(c);\n        }\n    }\n    while (top != -1) printf(\"%c\", pop());\n    printf(\"\\n\");\n}",
        "complexity": {
          "time": "O(n) single pass scan of n tokens",
          "space": "O(n) auxiliary stack space",
          "notes": "Each character is pushed and popped at most once."
        },
        "examNotes": [
          {
            "type": "exam",
            "title": "Infix to Prefix Rule",
            "text": "1. Reverse infix string. 2. Swap ( and ). 3. Run Infix to Postfix algorithm. 4. Reverse the final result!"
          },
          {
            "type": "trap",
            "title": "Exponent Associativity",
            "text": "Power operator ^ is right-associative: 2^3^2 = 2^(3^2) = 2^9 = 512, NOT (2^3)^2."
          }
        ]
      },
      {
        "id": "u2-t4",
        "title": "Evaluation of Postfix Expressions",
        "category": "Expressions",
        "readTime": "6 min",
        "definition": "A **Postfix Expression** is evaluated linearly using an **Operand Stack**. Operands are pushed onto the stack, and when an operator is encountered, the top two operands are popped, evaluated, and the result is pushed back.",
        "explanation": "<p>Postfix evaluation requires no parenthesis tracking and executes in a single left-to-right scan.</p>\n<h4>Postfix Evaluation Algorithm</h4>\n<ol>\n  <li>Initialize an empty numeric Stack.</li>\n  <li>Scan the postfix expression from left to right:\n    <ul>\n      <li>If token is an <strong>operand</strong>, push its value onto the Stack.</li>\n      <li>If token is an <strong>operator</strong>:\n        <ol>\n          <li>Pop operand 2: <code>op2 = pop()</code></li>\n          <li>Pop operand 1: <code>op1 = pop()</code></li>\n          <li>Compute <code>result = op1 [operator] op2</code> (Careful with order!)</li>\n          <li>Push <code>result</code> back onto the Stack.</li>\n        </ol>\n      </li>\n    </ul>\n  </li>\n  <li>When scan completes, the final result is the single remaining value on top of the stack.</li>\n</ol>",
        "logic": "Crucial Rule on Operand Order:\nop2 is popped first, op1 is popped second!\nSubtraction: op1 - op2\nDivision: op1 / op2\nNever evaluate op2 - op1 or op2 / op1!",
        "example": "Evaluate: 2 3 1 * + 9 -\nSymbol | Stack State       | Action\n-------|-------------------|---------------------------------\n2      | [2]               | Push 2\n3      | [2, 3]            | Push 3\n1      | [2, 3, 1]         | Push 1\n*      | [2, 3] -> [2, 3]  | op2=1, op1=3 => 3 * 1 = 3 -> Push 3\n+      | [5]               | op2=3, op1=2 => 2 + 3 = 5 -> Push 5\n9      | [5, 9]            | Push 9\n-      | [-4]              | op2=9, op1=5 => 5 - 9 = -4 -> Push -4\nResult = -4.",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Postfix Evaluation Stack Mechanics</div>\n  <div class=\"eval-pipeline\">\n    <div class=\"eval-step\">Encounter '+': Pop op2, Pop op1</div>\n    <div class=\"flow-arrow\">➔</div>\n    <div class=\"eval-step\">Calculate: op1 + op2</div>\n    <div class=\"flow-arrow\">➔</div>\n    <div class=\"eval-step\">Push result back to Stack</div>\n  </div>\n</div>",
        "code": "// Evaluation of Postfix Expression in C\n// include <stdio.h>\n// include <ctype.h>\n\nint stack[50];\nint top = -1;\n\nvoid push(int val) { stack[++top] = val; }\nint pop() { return stack[top--]; }\n\nint evaluatePostfix(char *exp) {\n    for (int i = 0; exp[i] != '\\0'; i++) {\n        char c = exp[i];\n        if (isdigit(c)) {\n            push(c - '0'); // Convert char to int\n        } else {\n            int op2 = pop();\n            int op1 = pop();\n            switch (c) {\n                case '+': push(op1 + op2); break;\n                case '-': push(op1 - op2); break;\n                case '*': push(op1 * op2); break;\n                case '/': push(op1 / op2); break;\n            }\n        }\n    }\n    return pop();\n}",
        "complexity": {
          "time": "O(n) where n is number of tokens",
          "space": "O(n) stack space for numbers",
          "notes": "Fastest and cleanest way computer compilers evaluate mathematical expressions."
        },
        "examNotes": [
          {
            "type": "trap",
            "title": "Operand Order Trap",
            "text": "op2 = pop(); op1 = pop(); Result is op1 - op2 (NOT op2 - op1). Reversing this loses marks!"
          }
        ]
      },
      {
        "id": "u2-t5",
        "title": "Queue ADT & Linear Queue",
        "category": "Queue",
        "readTime": "7 min",
        "definition": "A **Queue** is a linear Abstract Data Type operating under the **FIFO (First-In, First-Out)** discipline. Elements are inserted at the **REAR** end and deleted from the **FRONT** end.",
        "explanation": "<p>Like a cinema ticket counter, the customer arriving first is served first.</p>\n<h4>Core Queue Operations</h4>\n<ul>\n  <li><strong><code>enqueue(x)</code>:</strong> Inserts element <code>x</code> at the REAR. Increments <code>rear</code>.</li>\n  <li><strong><code>dequeue()</code>:</strong> Removes element from the FRONT. Increments <code>front</code>.</li>\n  <li><strong><code>front()</code> / <code>peek()</code>:</strong> Returns the front element without removing it.</li>\n</ul>\n\n<h4>Computing Applications</h4>\n<ul>\n  <li>CPU Scheduling (Round Robin scheduling queue).</li>\n  <li>Printer Spooling (documents printed in order received).</li>\n  <li>Asynchronous data transfer (IO buffers, pipes, sockets).</li>\n</ul>\n\n<h4>The Major Drawback of Linear Queue (False Overflow)</h4>\n<p>In a standard linear queue, when elements are repeatedly inserted and deleted, <code>rear</code> reaches <code>MAX - 1</code>. Even if front elements have been deleted and memory slots at the beginning are empty, no new elements can be inserted! This condition is called <strong>False Overflow</strong>.</p>",
        "logic": "Linear Queue Initialization:\nFRONT = -1, REAR = -1\n\nEnqueue(x):\n1. If REAR == MAX - 1: print \"Overflow\", exit.\n2. If FRONT == -1 and REAR == -1: FRONT = 0, REAR = 0.\n   Else: REAR = REAR + 1.\n3. Queue[REAR] = x.\n\nDequeue():\n1. If FRONT == -1 or FRONT > REAR: print \"Underflow\", exit.\n2. val = Queue[FRONT]; FRONT = FRONT + 1.\n3. If FRONT > REAR: FRONT = -1, REAR = -1 (Reset empty).\n4. Return val.",
        "example": "Linear Queue False Overflow Walkthrough:\nQueue size MAX = 4:\n1. Enqueue A, B, C, D -> [A, B, C, D], FRONT = 0, REAR = 3 (Queue Full).\n2. Dequeue() -> deletes A, FRONT = 1, REAR = 3.\n3. Dequeue() -> deletes B, FRONT = 2, REAR = 3.\n4. Try Enqueue(E): REAR == 3 (MAX - 1), so OVERFLOW!\nEven though index 0 and 1 are empty, E cannot be inserted!",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Linear Queue FIFO Mechanics & False Overflow</div>\n  <div class=\"queue-strip\">\n    <div class=\"q-cell empty\"><span class=\"q-idx\">0</span><span class=\"q-val\">[Deleted]</span></div>\n    <div class=\"q-cell empty\"><span class=\"q-idx\">1</span><span class=\"q-val\">[Deleted]</span></div>\n    <div class=\"q-cell active\"><span class=\"q-idx\">2 (FRONT)</span><span class=\"q-val\">C</span></div>\n    <div class=\"q-cell active\"><span class=\"q-idx\">3 (REAR)</span><span class=\"q-val\">D</span></div>\n  </div>\n  <div class=\"diagram-note\">⚠️ REAR = 3 is at end. Cannot insert new element despite slots 0 & 1 being free! (Solved by Circular Queue)</div>\n</div>",
        "code": "// Linear Queue Implementation in C\n// include <stdio.h>\n// define MAX 5\n\nint queue[MAX];\nint front = -1, rear = -1;\n\nvoid enqueue(int val) {\n    if (rear == MAX - 1) {\n        printf(\"Queue Overflow (False Overflow possible!)\\n\");\n        return;\n    }\n    if (front == -1) front = 0;\n    queue[++rear] = val;\n    printf(\"Enqueued %d (rear=%d)\\n\", val, rear);\n}\n\nint dequeue() {\n    if (front == -1 || front > rear) {\n        printf(\"Queue Underflow!\\n\");\n        return -1;\n    }\n    int val = queue[front++];\n    if (front > rear) front = rear = -1; // reset\n    return val;\n}",
        "complexity": {
          "time": "Enqueue: O(1), Dequeue: O(1)",
          "space": "O(MAX) static array",
          "notes": "Linear queues suffer from inefficient memory utilization due to false overflow."
        },
        "examNotes": [
          {
            "type": "exam",
            "title": "False Overflow Question",
            "text": "What is the drawback of a linear queue? Ans: False overflow — rear reaches MAX-1 and rejects inserts even when front slots are vacant!"
          }
        ]
      },
      {
        "id": "u2-t6",
        "title": "Circular Queue",
        "category": "Queue",
        "readTime": "8 min",
        "definition": "A **Circular Queue** is an enhanced queue where the last position connects back to the first position in a ring. It eliminates false overflow by wrapping around using **modulo arithmetic**: `(index + 1) % MAX`.",
        "explanation": "<p>In a circular queue, empty spaces vacated by previous dequeues at the beginning of the array are reused seamlessly.</p>\n<h4>Boundary Conditions</h4>\n<ul>\n  <li><strong>Empty Queue Condition:</strong> <code>front == -1</code></li>\n  <li><strong>Full Queue Condition:</strong>\n    $$\\text{front} == 0 \\text{ and } \\text{rear} == \\text{MAX} - 1 \\quad \\text{OR} \\quad \\text{front} == \\text{rear} + 1$$\n    Alternatively written: <code>(rear + 1) % MAX == front</code>.\n  </li>\n</ul>\n\n<h4>Circular Insertion Algorithm: <code>CQINSERT(Q, F, R, N, Y)</code></h4>\n<ol>\n  <li>If <code>(F == 0 && R == N - 1) || (F == R + 1)</code>:\n    Write \"Queue Overflow\" and Return.</li>\n  <li>If <code>F == -1</code> (Empty Queue):\n    Set <code>F = 0</code>, <code>R = 0</code>.\n    Else if <code>R == N - 1</code> (Wrap around):\n    Set <code>R = 0</code>.\n    Else:\n    Set <code>R = R + 1</code>.</li>\n  <li>Set <code>Q[R] = Y</code>. Return.</li>\n</ol>\n\n<h4>Circular Deletion Algorithm: <code>CQDELETE(Q, F, R, N)</code></h4>\n<ol>\n  <li>If <code>F == -1</code>:\n    Write \"Queue Underflow\" and Return.</li>\n  <li>Set <code>Y = Q[F]</code>.</li>\n  <li>If <code>F == R</code> (Single element left):\n    Set <code>F = -1</code>, <code>R = -1</code>.\n    Else if <code>F == N - 1</code> (Wrap around):\n    Set <code>F = 0</code>.\n    Else:\n    Set <code>F = F + 1</code>.</li>\n  <li>Return <code>Y</code>.</li>\n</ol>",
        "logic": "Modulo Increment Formula:\nNext REAR = (REAR + 1) % MAX\nNext FRONT = (FRONT + 1) % MAX",
        "example": "Step-by-Step Circular Queue Walkthrough (MAX = 5):\n1. Initial: F = -1, R = -1.\n2. Insert A, B, C, D, E -> F = 0, R = 4. (Full).\n3. Delete A, Delete B -> F = 2, R = 4.\n4. Insert F -> Since R == 4 and F = 2 != 0, R wraps to 0! Q[0] = F, R = 0.\n   Memory slot 0 successfully reused!",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Circular Queue Modulo Ring Representation</div>\n  <div class=\"circ-ring\">\n    <div class=\"ring-node pos0\">0: F (Reused!)</div>\n    <div class=\"ring-node pos1\">1: [Free]</div>\n    <div class=\"ring-node pos2\">2: C (FRONT)</div>\n    <div class=\"ring-node pos3\">3: D</div>\n    <div class=\"ring-node pos4\">4: E</div>\n    <div class=\"ring-center\">Wrap: (R+1)%MAX</div>\n  </div>\n</div>",
        "code": "// Circular Queue Implementation in C\n// include <stdio.h>\n// define MAX 5\n\nint cqueue[MAX];\nint front = -1, rear = -1;\n\nint isFull() {\n    return ((front == 0 && rear == MAX - 1) || (front == rear + 1));\n}\n\nint isEmpty() {\n    return (front == -1);\n}\n\nvoid cqInsert(int val) {\n    if (isFull()) {\n        printf(\"Circular Queue Overflow!\\n\");\n        return;\n    }\n    if (front == -1) {\n        front = rear = 0;\n    } else if (rear == MAX - 1 && front != 0) {\n        rear = 0; // wrap around\n    } else {\n        rear++;\n    }\n    cqueue[rear] = val;\n    printf(\"Inserted %d at R=%d (F=%d)\\n\", val, rear, front);\n}\n\nint cqDelete() {\n    if (isEmpty()) {\n        printf(\"Circular Queue Underflow!\\n\");\n        return -1;\n    }\n    int val = cqueue[front];\n    if (front == rear) {\n        front = rear = -1; // reset empty\n    } else if (front == MAX - 1) {\n        front = 0; // wrap around\n    } else {\n        front++;\n    }\n    return val;\n}",
        "complexity": {
          "time": "CQInsert: O(1), CQDelete: O(1)",
          "space": "O(MAX) with 100% space utilization",
          "notes": "Solves false overflow completely."
        },
        "examNotes": [
          {
            "type": "formula",
            "title": "Circular Queue Full Condition",
            "text": "(F == 0 && R == MAX - 1) || (F == R + 1). Alternatively: (R + 1) % MAX == F."
          },
          {
            "type": "exam",
            "title": "CQINSERT Algorithm",
            "text": "Must state both wrap-around checks: R = (R == MAX - 1 ? 0 : R + 1)."
          }
        ]
      },
      {
        "id": "u2-t7",
        "title": "Deque (Double-Ended Queue) & Priority Queue",
        "category": "Advanced Queues",
        "readTime": "8 min",
        "definition": "A **Deque (Double-Ended Queue)** allows insertion and deletion from **both ends** (Front and Rear). A **Priority Queue** is a collection where each element has an assigned **priority**, and elements are processed in order of priority rather than arrival time.",
        "explanation": "<p>Both are specialized queue variants with extensive real-world applications in operating systems and algorithm design.</p>\n\n<h4>1. Deque Classifications</h4>\n<ul>\n  <li><strong>Input-Restricted Deque:</strong> Insertion is allowed at <em>only one end</em> (Rear), but deletion is allowed at <em>both ends</em> (Front and Rear).</li>\n  <li><strong>Output-Restricted Deque:</strong> Deletion is allowed at <em>only one end</em> (Front), but insertion is allowed at <em>both ends</em> (Front and Rear).</li>\n</ul>\n<p>Implementation can be achieved via circular arrays or doubly linked lists.</p>\n\n<h4>2. Priority Queue</h4>\n<p>In a Priority Queue, higher priority elements are processed before lower priority ones. If two elements have the same priority, they are served according to FIFO.</p>\n<h4>Representations of Priority Queue</h4>\n<ol>\n  <li><strong>One-Way Linked List Representation:</strong>\n    Nodes contain three fields: <code>INFO</code>, <code>PRN</code> (Priority Number), and <code>NEXT</code>.\n    List is kept sorted by priority. Insertion takes $O(n)$ to locate position; Deletion takes $O(1)$ from front.\n  </li>\n  <li><strong>Array of Queues Representation:</strong>\n    An array where each index corresponds to a priority level ($0 \\dots K$). Each slot points to an independent linear/circular queue. Deletion simply checks the highest priority non-empty queue.\n  </li>\n</ol>",
        "logic": "Priority Queue Processing Rules:\n1. Higher priority processed before lower priority.\n2. Equal priority processed via FIFO.\nPriority numbers: In many systems, lower number = higher priority (e.g., Priority 1 > Priority 5).",
        "example": "Deque Character Array Example (Size 6):\n1. Initial: [ , , , , , ]\n2. InsertRight(F) -> [ , , , F, , ]\n3. DeleteRight() -> F removed\n4. InsertLeft(G, H) -> [G, H, , , , ]\n5. InsertRight(I, J) -> [G, H, , , I, J]",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Deque vs Priority Queue Architecture</div>\n  <div class=\"dual-vis\">\n    <div class=\"deque-box\">\n      <strong>Deque (Double-Ended)</strong>\n      <div class=\"deque-ends\">\n        <span>⬅ Insert / Delete (Front)</span>\n        <div class=\"inner-q\">[ Data Elements ]</div>\n        <span>Insert / Delete (Rear) ➡</span>\n      </div>\n    </div>\n    <div class=\"pq-box\">\n      <strong>Priority Queue (Array of Queues)</strong>\n      <div class=\"pq-level\"><span class=\"p-badge p1\">P1 (High)</span> [ JobA, JobB ]</div>\n      <div class=\"pq-level\"><span class=\"p-badge p2\">P2 (Med)</span> [ JobC ]</div>\n      <div class=\"pq-level\"><span class=\"p-badge p3\">P3 (Low)</span> [ JobD, JobE, JobF ]</div>\n    </div>\n  </div>\n</div>",
        "code": "// Priority Queue Node in C\n// include <stdio.h>\n// include <stdlib.h>\n\nstruct PQNode {\n    int data;\n    int priority; // Lower integer = higher priority\n    struct PQNode *next;\n};\n\n// Insert element according to its priority (Sorted Linked List)\nstruct PQNode* pqInsert(struct PQNode *head, int data, int priority) {\n    struct PQNode *temp = (struct PQNode*) malloc(sizeof(struct PQNode));\n    temp->data = data;\n    temp->priority = priority;\n    temp->next = NULL;\n\n    // If head is null or new node has higher priority than head\n    if (head == NULL || priority < head->priority) {\n        temp->next = head;\n        return temp;\n    }\n\n    struct PQNode *curr = head;\n    while (curr->next != NULL && curr->next->priority <= priority) {\n        curr = curr->next;\n    }\n    temp->next = curr->next;\n    curr->next = temp;\n    return head;\n}",
        "complexity": {
          "time": "Deque: O(1) for all 4 end operations. Priority Queue: O(n) insert, O(1) delete in sorted list.",
          "space": "O(n) auxiliary space",
          "notes": "Binary Heap provides O(log n) insert and delete for priority queues."
        },
        "examNotes": [
          {
            "type": "exam",
            "title": "Input vs Output Restricted Deque",
            "text": "Input Restricted: 1 end for insert, 2 ends for delete. Output Restricted: 1 end for delete, 2 ends for insert."
          },
          {
            "type": "tip",
            "title": "Priority Queue Application",
            "text": "Crucial in Dijkstra's Shortest Path, Prim's Minimum Spanning Tree, and OS process schedulers."
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "unitNumber": 3,
    "title": "Unit 3: Linked List",
    "shortTitle": "Unit 3: Linked Lists",
    "badge": "Dynamic Lists",
    "summary": "Non-contiguous memory allocation, Singly Linked List structure, Traversal, Searching, Insertion (beginning, end, between), Deletion (first, last, specific node), Circular Linked List, Doubly Linked List, Complexity comparisons, and Polynomial representation & addition.",
    "topics": [
      {
        "id": "u3-t1",
        "title": "Structure & Memory Representation of Linked Lists",
        "category": "Foundations",
        "readTime": "6 min",
        "definition": "A **Linked List** is a linear data structure whose elements are not stored at contiguous memory locations. Instead, each element is a separate **Node** consisting of two fields: a **Data** field and a **Pointer** (or link) pointing to the next node in memory.",
        "explanation": "<p>Unlike fixed-size arrays, a linked list can grow and shrink dynamically at runtime according to exact memory demand.</p>\n<h4>Structure of a Node</h4>\n<ul>\n  <li><strong>Data Field:</strong> Holds the actual user information (integer, character, object).</li>\n  <li><strong>Link / Next Field:</strong> Holds the memory address of the succeeding node. The last node's link contains <code>NULL</code>, indicating the end of the list.</li>\n  <li><strong>START / HEAD:</strong> A special pointer variable storing the memory address of the first node in the list. If <code>START == NULL</code>, the list is empty.</li>\n</ul>\n\n<h4>Comparison: Array vs Linked List</h4>\n<table class=\"nb-table\">\n  <tr><th>Feature</th><th>Array</th><th>Linked List</th></tr>\n  <tr><td>Memory Allocation</td><td>Contiguous, static/fixed compile-time</td><td>Non-contiguous, dynamic runtime</td></tr>\n  <tr><td>Element Access</td><td>Direct index access: $O(1)$</td><td>Sequential traversal: $O(n)$</td></tr>\n  <tr><td>Insertion / Deletion</td><td>Expensive $O(n)$ due to element shifting</td><td>Fast $O(1)$ by adjusting pointers (if pos known)</td></tr>\n  <tr><td>Memory Overhead</td><td>Zero pointer overhead</td><td>Extra pointer field per node (4 or 8 bytes)</td></tr>\n</table>",
        "logic": "Node Declaration in C:\nstruct node {\n    int data;\n    struct node *next;\n};\nstruct node *START = NULL;",
        "example": "3-Node Linked List in Memory:\nSTART = 0x2000\nNode 1 at 0x2000: data = 10, next = 0x2040\nNode 2 at 0x2040: data = 20, next = 0x2080\nNode 3 at 0x2080: data = 30, next = NULL\nChain: [10 | 0x2040] ➔ [20 | 0x2080] ➔ [30 | NULL]",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Singly Linked List Memory Anatomy</div>\n  <div class=\"ll-chain\">\n    <div class=\"ll-start-ptr\"><span class=\"ptr-name\">START</span><span class=\"ptr-addr\">0x2000</span></div>\n    <div class=\"ll-arrow\">➔</div>\n    <div class=\"ll-node\"><span class=\"ll-val\">10</span><span class=\"ll-next\">0x2040</span><span class=\"ll-pos\">Node 1</span></div>\n    <div class=\"ll-arrow\">➔</div>\n    <div class=\"ll-node\"><span class=\"ll-val\">20</span><span class=\"ll-next\">0x2080</span><span class=\"ll-pos\">Node 2</span></div>\n    <div class=\"ll-arrow\">➔</div>\n    <div class=\"ll-node\"><span class=\"ll-val\">30</span><span class=\"ll-next\">NULL</span><span class=\"ll-pos\">Node 3</span></div>\n  </div>\n</div>",
        "code": "// Basic Linked List Creation in C\n// include <stdio.h>\n// include <stdlib.h>\n\nstruct node {\n    int data;\n    struct node *next;\n};\n\nint main() {\n    struct node *head = NULL;\n    struct node *second = NULL;\n    struct node *third = NULL;\n\n    // Allocate 3 nodes on heap\n    head = (struct node*) malloc(sizeof(struct node));\n    second = (struct node*) malloc(sizeof(struct node));\n    third = (struct node*) malloc(sizeof(struct node));\n\n    head->data = 10;\n    head->next = second;\n\n    second->data = 20;\n    second->next = third;\n\n    third->data = 30;\n    third->next = NULL;\n\n    printf(\"Created 3-node linked list successfully.\\n\");\n    return 0;\n}",
        "complexity": {
          "time": "Access: O(n), Search: O(n)",
          "space": "O(n) with pointer overhead per node",
          "notes": "Linked lists eliminate memory wastage caused by fixed-size array allocations."
        },
        "examNotes": [
          {
            "type": "exam",
            "title": "Viva Question: START Pointer",
            "text": "What does START hold? Answer: START holds the memory address of the first node. If START is NULL, the list is empty!"
          }
        ]
      },
      {
        "id": "u3-t2",
        "title": "Singly Linked List: Traversal & Searching",
        "category": "Singly Linked List",
        "readTime": "6 min",
        "definition": "**Traversal** accesses every node of the linked list sequentially to perform an operation (like printing). **Searching** traverses the list to find the memory location of a target `KEY` value.",
        "explanation": "<p>Both operations start from <code>START</code> and advance using a temporary pointer <code>PTR = PTR-&gt;next</code> until <code>PTR == NULL</code>.</p>\n\n<h4>Traversal Algorithm: <code>TRAVERSE(START)</code></h4>\n<ol>\n  <li>Set <code>PTR = START</code>.</li>\n  <li>Repeat Steps 3 and 4 while <code>PTR != NULL</code>:</li>\n  <li>Apply process to <code>PTR-&gt;data</code> (e.g., print).</li>\n  <li>Set <code>PTR = PTR-&gt;next</code>.</li>\n  <li>Exit.</li>\n</ol>\n\n<h4>Searching Algorithm: <code>SEARCH(START, KEY)</code></h4>\n<ol>\n  <li>Set <code>PTR = START</code>, <code>POS = 1</code>.</li>\n  <li>Repeat while <code>PTR != NULL</code>:\n    <ul>\n      <li>If <code>PTR-&gt;data == KEY</code>, return <code>POS</code> (Found!).</li>\n      <li>Set <code>PTR = PTR-&gt;next</code>, <code>POS = POS + 1</code>.</li>\n    </ul>\n  </li>\n  <li>Return -1 (Key not found in list).</li>\n</ol>",
        "logic": "Step-by-Step Traversal Logic:\n1. PTR = START (points to 1st node).\n2. Read PTR->data.\n3. Advance: PTR = PTR->next.\n4. When PTR becomes NULL, end of list reached.",
        "example": "List: START -> [15] -> [25] -> [35] -> NULL\nSearch for KEY = 25:\n- Step 1: PTR points to node 15 (POS=1). 15 != 25. Advance PTR = PTR->next.\n- Step 2: PTR points to node 25 (POS=2). 25 == 25! Match found! Return POS = 2.",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Linked List Traversal Pointer Advancement</div>\n  <div class=\"pointer-march\">\n    <div class=\"march-step\">Step 1: PTR ➔ [ 15 | • ]</div>\n    <div class=\"march-step active-step\">Step 2: PTR = PTR->next ➔ [ 25 | • ] (MATCH!)</div>\n    <div class=\"march-step\">Step 3: PTR = PTR->next ➔ [ 35 | NULL ]</div>\n    <div class=\"march-step\">Step 4: PTR = NULL (STOP)</div>\n  </div>\n</div>",
        "code": "// Traversal and Search in Singly Linked List in C\n// include <stdio.h>\n// include <stdlib.h>\n\nstruct node {\n    int data;\n    struct node *next;\n};\n\nvoid traverseList(struct node *start) {\n    struct node *ptr = start;\n    printf(\"List: \");\n    while (ptr != NULL) {\n        printf(\"%d -> \", ptr->data);\n        ptr = ptr->next;\n    }\n    printf(\"NULL\\n\");\n}\n\nint searchList(struct node *start, int key) {\n    struct node *ptr = start;\n    int pos = 1;\n    while (ptr != NULL) {\n        if (ptr->data == key) return pos;\n        ptr = ptr->next;\n        pos++;\n    }\n    return -1; // Not found\n}",
        "complexity": {
          "time": "Traversal: O(n), Search: Best O(1), Worst O(n), Average O(n)",
          "space": "O(1) auxiliary pointer space",
          "notes": "Cannot perform Binary Search on a standard linked list because elements cannot be indexed randomly in O(1)."
        },
        "examNotes": [
          {
            "type": "exam",
            "title": "Why no Binary Search on Linked List?",
            "text": "Even if sorted, finding the middle element takes O(n) traversal time, negating O(log n) efficiency!"
          }
        ]
      },
      {
        "id": "u3-t3",
        "title": "Singly Linked List: Insertion Operations",
        "category": "Singly Linked List",
        "readTime": "9 min",
        "definition": "**Insertion** adds a new node into a singly linked list. There are three primary cases: **Case 1: At the Beginning**, **Case 2: At the End**, and **Case 3: After a Given Node** (in-between).",
        "explanation": "<p>Every insertion requires allocating a new node dynamically via <code>malloc()</code> and adjusting link pointers.</p>\n\n<h4>Case 1: Insert at Beginning</h4>\n<p>Steps:</p>\n<ol>\n  <li>Allocate memory for <code>NEW_NODE</code>. Set <code>NEW_NODE-&gt;data = VAL</code>.</li>\n  <li><code>NEW_NODE-&gt;next = START;</code></li>\n  <li><code>START = NEW_NODE;</code></li>\n</ol>\n<p>Time Complexity: $\\mathbf{O(1)}$.</p>\n\n<h4>Case 2: Insert at End</h4>\n<p>Steps:</p>\n<ol>\n  <li>Allocate <code>NEW_NODE</code>. Set <code>NEW_NODE-&gt;data = VAL; NEW_NODE-&gt;next = NULL;</code></li>\n  <li>If <code>START == NULL</code>: <code>START = NEW_NODE; return;</code></li>\n  <li>Initialize <code>PTR = START</code>. Traverse: <code>while (PTR-&gt;next != NULL) PTR = PTR-&gt;next;</code></li>\n  <li>Connect last node: <code>PTR-&gt;next = NEW_NODE;</code></li>\n</ol>\n<p>Time Complexity: $\\mathbf{O(n)}$.</p>\n\n<h4>Case 3: Insert After a Given Node (VAL after TARGET)</h4>\n<p>Steps:</p>\n<ol>\n  <li>Allocate <code>NEW_NODE</code>. Set <code>NEW_NODE-&gt;data = VAL;</code></li>\n  <li>Traverse with <code>PTR = START</code> until <code>PTR-&gt;data == TARGET</code>.</li>\n  <li><code>NEW_NODE-&gt;next = PTR-&gt;next;</code></li>\n  <li><code>PTR-&gt;next = NEW_NODE;</code></li>\n</ol>\n<p>Time Complexity: $\\mathbf{O(n)}$ to locate target node.</p>",
        "logic": "CRITICAL POINTER ASSIGNMENT ORDER:\nIn Case 3:\nCorrect:\n1. NEW_NODE->next = PTR->next;\n2. PTR->next = NEW_NODE;\nWRONG ORDER:\nIf you do PTR->next = NEW_NODE first, you lose the address of the rest of the list forever!",
        "example": "Insert 99 after node 20 in: START -> [10] -> [20] -> [30] -> NULL\n1. Locate PTR at [20].\n2. NEW_NODE = [99].\n3. NEW_NODE->next = PTR->next (points to [30]).\n4. PTR->next = NEW_NODE (node 20 points to [99]).\nResult: START -> [10] -> [20] -> [99] -> [30] -> NULL.",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Pointer Rewiring: Insert After Given Node</div>\n  <div class=\"insertion-diagram\">\n    <div class=\"exist-chain\">[Node: PTR (20)] ───────────────➔ [Next Node (30)]</div>\n    <div class=\"splice-box\">\n      <div class=\"step-num\">Step 1: NEW->next ↗</div>\n      <div class=\"step-num\">Step 2: PTR->next ↘</div>\n      <div class=\"new-insert-node\">★ NEW_NODE (99)</div>\n    </div>\n  </div>\n</div>",
        "code": "// Insertion Functions in C\n// include <stdio.h>\n// include <stdlib.h>\n\nstruct node {\n    int data;\n    struct node *next;\n};\n\n// Case 1: Insert at Beginning - O(1)\nstruct node* insertAtBeginning(struct node *start, int val) {\n    struct node *newNode = (struct node*) malloc(sizeof(struct node));\n    newNode->data = val;\n    newNode->next = start;\n    start = newNode;\n    return start;\n}\n\n// Case 2: Insert at End - O(n)\nstruct node* insertAtEnd(struct node *start, int val) {\n    struct node *newNode = (struct node*) malloc(sizeof(struct node));\n    newNode->data = val;\n    newNode->next = NULL;\n\n    if (start == NULL) return newNode;\n\n    struct node *ptr = start;\n    while (ptr->next != NULL) ptr = ptr->next;\n    ptr->next = newNode;\n    return start;\n}\n\n// Case 3: Insert after a specific node\nvoid insertAfterNode(struct node *start, int target, int val) {\n    struct node *ptr = start;\n    while (ptr != NULL && ptr->data != target) ptr = ptr->next;\n\n    if (ptr == NULL) { printf(\"Target not found!\\n\"); return; }\n\n    struct node *newNode = (struct node*) malloc(sizeof(struct node));\n    newNode->data = val;\n    newNode->next = ptr->next; // 1st link\n    ptr->next = newNode;       // 2nd link\n}",
        "complexity": {
          "time": "Beginning: O(1), End: O(n), After Node: O(n)",
          "space": "O(1) auxiliary memory per insertion",
          "notes": "Insert at beginning is instantaneous because no traversal is required."
        },
        "examNotes": [
          {
            "type": "trap",
            "title": "Pointer Ordering Error",
            "text": "Always set NEW_NODE->next = PTR->next FIRST before PTR->next = NEW_NODE. Otherwise, the remaining chain is severed and leaked!"
          }
        ]
      },
      {
        "id": "u3-t4",
        "title": "Singly Linked List: Deletion Operations",
        "category": "Singly Linked List",
        "readTime": "9 min",
        "definition": "**Deletion** removes an existing node from the linked list and deallocates its memory using `free()`. There are three primary cases: **Case 1: Delete First Node**, **Case 2: Delete Last Node**, and **Case 3: Delete a Specific Node** (in-between).",
        "explanation": "<p>Before deleting, always check for <strong>Underflow</strong> (<code>START == NULL</code>).</p>\n\n<h4>Case 1: Delete First Node</h4>\n<p>Steps:</p>\n<ol>\n  <li>If <code>START == NULL</code>: Underflow! Return.</li>\n  <li><code>PTR = START;</code></li>\n  <li><code>START = START-&gt;next;</code></li>\n  <li><code>free(PTR);</code></li>\n</ol>\n<p>Time Complexity: $\\mathbf{O(1)}$.</p>\n\n<h4>Case 2: Delete Last Node</h4>\n<p>Requires two pointers: <code>PTR</code> (advancing ahead) and <code>PREPTR</code> (trailing one node behind).</p>\n<ol>\n  <li>If <code>START == NULL</code>: Underflow!</li>\n  <li>If <code>START-&gt;next == NULL</code> (only 1 node): <code>free(START); START = NULL; return;</code></li>\n  <li>Set <code>PTR = START</code>.</li>\n  <li>Traverse: <code>while (PTR-&gt;next != NULL) { PREPTR = PTR; PTR = PTR-&gt;next; }</code></li>\n  <li><code>PREPTR-&gt;next = NULL;</code></li>\n  <li><code>free(PTR);</code></li>\n</ol>\n<p>Time Complexity: $\\mathbf{O(n)}$.</p>\n\n<h4>Case 3: Delete Node After a Given Node / Specific Node</h4>\n<ol>\n  <li>Traverse with <code>PTR</code> and <code>PREPTR</code> until <code>PTR-&gt;data == TARGET</code>.</li>\n  <li><code>PREPTR-&gt;next = PTR-&gt;next;</code></li>\n  <li><code>free(PTR);</code></li>\n</ol>",
        "logic": "Two-Pointer Technique (PREPTR & PTR):\nPREPTR maintains the predecessor node so its next pointer can bypass the target node and seal the chain.",
        "example": "Delete node 20 from: START -> [10] -> [20] -> [30] -> NULL\n1. PREPTR is at [10], PTR is at [20].\n2. Set PREPTR->next = PTR->next (points [10] directly to [30]).\n3. free(PTR) removes [20].\nResult: START -> [10] -> [30] -> NULL.",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Two-Pointer Bypass & Free in Deletion</div>\n  <div class=\"delete-diagram\">\n    <div class=\"node-preptr\">PREPTR [10] ────────(Bypass link)────────➔ [30]</div>\n    <div class=\"node-deleted\">❌ PTR [20] (free called)</div>\n  </div>\n</div>",
        "code": "// Deletion Functions in C\n// include <stdio.h>\n// include <stdlib.h>\n\nstruct node {\n    int data;\n    struct node *next;\n};\n\n// Case 1: Delete First Node - O(1)\nstruct node* deleteFirst(struct node *start) {\n    if (start == NULL) {\n        printf(\"Underflow! List is empty.\\n\");\n        return NULL;\n    }\n    struct node *ptr = start;\n    start = start->next;\n    free(ptr);\n    return start;\n}\n\n// Case 2: Delete Last Node - O(n)\nstruct node* deleteLast(struct node *start) {\n    if (start == NULL) return NULL;\n    if (start->next == NULL) {\n        free(start);\n        return NULL;\n    }\n    struct node *ptr = start;\n    struct node *preptr = NULL;\n    while (ptr->next != NULL) {\n        preptr = ptr;\n        ptr = ptr->next;\n    }\n    preptr->next = NULL;\n    free(ptr);\n    return start;\n}",
        "complexity": {
          "time": "First Node: O(1), Last Node: O(n), Specific Node: O(n)",
          "space": "O(1) auxiliary pointer memory",
          "notes": "Always call free(ptr) to deallocate heap memory and prevent memory leaks."
        },
        "examNotes": [
          {
            "type": "exam",
            "title": "Memory Leak Prevention",
            "text": "Simply moving START = START->next without calling free(ptr) leaves the deleted node orphaned in heap, causing a memory leak!"
          }
        ]
      },
      {
        "id": "u3-t5",
        "title": "Circular Linked List",
        "category": "Circular List",
        "readTime": "7 min",
        "definition": "A **Circular Linked List** is a variation of linked list where the last node does not point to `NULL`; instead, its `next` pointer points back to the **START** (first) node, forming a continuous circular loop.",
        "explanation": "<p>In a circular linked list, there are no <code>NULL</code> references. Any node can act as a starting point to traverse the entire list.</p>\n<h4>Key Differences from Singly Linked List</h4>\n<ul>\n  <li><strong>End condition:</strong> Instead of checking <code>PTR == NULL</code>, we check <code>PTR-&gt;next == START</code>.</li>\n  <li><strong>Traversal:</strong> A loop visits every node until returning back to <code>START</code>.</li>\n</ul>\n\n<h4>Insertion at Beginning</h4>\n<ol>\n  <li>Allocate <code>NEW_NODE</code>.</li>\n  <li>Traverse to find the last node (where <code>PTR-&gt;next == START</code>).</li>\n  <li><code>NEW_NODE-&gt;next = START;</code></li>\n  <li><code>PTR-&gt;next = NEW_NODE;</code> (Update last node's link)</li>\n  <li><code>START = NEW_NODE;</code></li>\n</ol>\n\n<h4>Deletion of First Node</h4>\n<ol>\n  <li>If <code>START == NULL</code>: Underflow!</li>\n  <li>If <code>START-&gt;next == START</code> (single node): <code>free(START); START = NULL; return;</code></li>\n  <li>Traverse to last node: <code>while (PTR-&gt;next != START) PTR = PTR-&gt;next;</code></li>\n  <li><code>PTR-&gt;next = START-&gt;next;</code></li>\n  <li><code>struct node *temp = START; START = START-&gt;next; free(temp);</code></li>\n</ol>",
        "logic": "Traversal Loop for Circular List:\nPTR = START;\ndo {\n    printf(\"%d \", PTR->data);\n    PTR = PTR->next;\n} while (PTR != START);",
        "example": "Circular Ring:\nSTART ➔ [10 | •] ➔ [20 | •] ➔ [30 | •] ──(loops back)──➔ [10]",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Circular Linked List Closed Ring Topology</div>\n  <div class=\"cll-ring\">\n    <div class=\"cll-node\">START ➔ [10]</div>\n    <div class=\"ll-arrow\">➔</div>\n    <div class=\"cll-node\">[20]</div>\n    <div class=\"ll-arrow\">➔</div>\n    <div class=\"cll-node\">[30]</div>\n    <div class=\"cll-back-link\">↩ Returns to START (No NULL pointer)</div>\n  </div>\n</div>",
        "code": "// Circular Linked List Traversal in C\n// include <stdio.h>\n// include <stdlib.h>\n\nstruct node {\n    int data;\n    struct node *next;\n};\n\nvoid printCircular(struct node *start) {\n    if (start == NULL) return;\n    struct node *ptr = start;\n    do {\n        printf(\"%d -> \", ptr->data);\n        ptr = ptr->next;\n    } while (ptr != start);\n    printf(\"(START)\\n\");\n}",
        "complexity": {
          "time": "Traversal: O(n), Insert/Delete at beginning: O(n) without tail pointer, O(1) with tail pointer",
          "space": "O(1) auxiliary pointer memory",
          "notes": "Often used in round-robin process scheduling in operating systems."
        },
        "examNotes": [
          {
            "type": "exam",
            "title": "Loop Termination Trap",
            "text": "Never write while(ptr != NULL) for circular linked lists! It creates an infinite loop. Always use while(ptr->next != START) or do-while."
          }
        ]
      },
      {
        "id": "u3-t6",
        "title": "Doubly Linked List (Two-Way List)",
        "category": "Doubly Linked List",
        "readTime": "8 min",
        "definition": "A **Doubly Linked List (DLL)** is a two-way linear data structure where each node contains **three fields**: a `prev` pointer to the predecessor, a `data` field, and a `next` pointer to the successor.",
        "explanation": "<p>Doubly linked lists allow bidirectional traversal (both forwards and backwards), making operations like backward scrolling and node deletion much simpler.</p>\n<h4>Node Structure in C</h4>\n<pre><code>struct node {\n    struct node *prev; // Pointer to previous node\n    int data;\n    struct node *next; // Pointer to next node\n};</code></pre>\n\n<h4>Boundary Rules</h4>\n<ul>\n  <li>First node's <code>prev = NULL</code>.</li>\n  <li>Last node's <code>next = NULL</code>.</li>\n</ul>\n\n<h4>Insertion at Beginning</h4>\n<ol>\n  <li>Allocate <code>NEW_NODE</code>. Set <code>NEW_NODE-&gt;prev = NULL; NEW_NODE-&gt;next = START;</code></li>\n  <li>If <code>START != NULL</code>: <code>START-&gt;prev = NEW_NODE;</code></li>\n  <li><code>START = NEW_NODE;</code></li>\n</ol>\n\n<h4>Deletion of a Node given its Pointer (<code>PTR</code>)</h4>\n<ol>\n  <li>If <code>PTR-&gt;prev != NULL</code>: <code>PTR-&gt;prev-&gt;next = PTR-&gt;next;</code></li>\n  <li>If <code>PTR-&gt;next != NULL</code>: <code>PTR-&gt;next-&gt;prev = PTR-&gt;prev;</code></li>\n  <li>If <code>PTR == START</code>: <code>START = PTR-&gt;next;</code></li>\n  <li><code>free(PTR);</code></li>\n</ol>\n<p>Takes $\\mathbf{O(1)}$ time because no traversal is needed to find the predecessor!</p>",
        "logic": "Bidirectional Node Links:\nNode A <=========> Node B\nA->next = B\nB->prev = A",
        "example": "Doubly Linked List:\nNULL <─ [prev | 10 | next] <─┬─> [prev | 20 | next] <─┬─> [prev | 30 | next] ─> NULL",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Doubly Linked List Two-Way Links</div>\n  <div class=\"dll-chain\">\n    <div class=\"dll-node\"><span class=\"d-prev\">NULL</span><span class=\"d-val\">10</span><span class=\"d-next\">ptr2</span></div>\n    <div class=\"dll-arrows\">⇄</div>\n    <div class=\"dll-node\"><span class=\"d-prev\">ptr1</span><span class=\"d-val\">20</span><span class=\"d-next\">ptr3</span></div>\n    <div class=\"dll-arrows\">⇄</div>\n    <div class=\"dll-node\"><span class=\"d-prev\">ptr2</span><span class=\"d-val\">30</span><span class=\"d-next\">NULL</span></div>\n  </div>\n</div>",
        "code": "// Doubly Linked List Insertion in C\n// include <stdio.h>\n// include <stdlib.h>\n\nstruct node {\n    struct node *prev;\n    int data;\n    struct node *next;\n};\n\nstruct node* insertBeginning(struct node *start, int val) {\n    struct node *newNode = (struct node*) malloc(sizeof(struct node));\n    newNode->data = val;\n    newNode->prev = NULL;\n    newNode->next = start;\n\n    if (start != NULL) start->prev = newNode;\n    start = newNode;\n    return start;\n}",
        "complexity": {
          "time": "Insert/Delete at ends: O(1). Delete given node pointer: O(1). Search: O(n).",
          "space": "O(n) with 2 pointer fields per node (more memory than SLL)",
          "notes": "Trade-off: Twice the pointer overhead for bidirectional navigation."
        },
        "examNotes": [
          {
            "type": "exam",
            "title": "Advantage of DLL over SLL",
            "text": "In DLL, deleting a node takes O(1) if its pointer is given, because ptr->prev gives direct access to predecessor without traversal!"
          }
        ]
      },
      {
        "id": "u3-t7",
        "title": "Applications of Linked Lists & Complexity Summary",
        "category": "Applications",
        "readTime": "6 min",
        "definition": "Linked lists are applied in **Dynamic Memory Allocation**, **Polynomial Representation and Addition**, **Header Lists**, and building other ADTs (Stacks, Queues, Graphs).",
        "explanation": "<p>A major application is representing mathematical polynomials of arbitrary degree.</p>\n<h4>Polynomial Representation</h4>\n<p>Each term in a polynomial is represented as a node with three fields:</p>\n<pre><code>struct PolyNode {\n    int coeff; // Coefficient\n    int exp;   // Exponent / Power\n    struct PolyNode *next;\n};</code></pre>\n<p>Example: $5x^4 + 3x^2 - 7$ is stored as:</p>\n<p><code>[5, 4] ➔ [3, 2] ➔ [-7, 0] ➔ NULL</code></p>\n\n<h4>Polynomial Addition Algorithm</h4>\n<ol>\n  <li>Maintain pointers <code>P1</code> and <code>P2</code> at the start of both polynomial lists.</li>\n  <li>While both lists have terms:\n    <ul>\n      <li>If <code>P1-&gt;exp == P2-&gt;exp</code>: add coefficients (<code>coeff = P1-&gt;coeff + P2-&gt;coeff</code>), append term to result, advance both <code>P1</code> and <code>P2</code>.</li>\n      <li>If <code>P1-&gt;exp &gt; P2-&gt;exp</code>: append <code>P1</code> term to result, advance <code>P1</code>.</li>\n      <li>If <code>P2-&gt;exp &gt; P1-&gt;exp</code>: append <code>P2</code> term to result, advance <code>P2</code>.</li>\n    </ul>\n  </li>\n  <li>Append remaining terms of <code>P1</code> or <code>P2</code>.</li>\n</ol>\n\n<h4>Master Complexity Comparison Table</h4>\n<table class=\"nb-table\">\n  <tr><th>Operation</th><th>Singly Linked List</th><th>Doubly Linked List</th><th>Circular Linked List</th></tr>\n  <tr><td>Insert at Beginning</td><td>$O(1)$</td><td>$O(1)$</td><td>$O(1)$ (with tail) / $O(n)$</td></tr>\n  <tr><td>Insert at End</td><td>$O(n)$ ($O(1)$ with tail)</td><td>$O(n)$ ($O(1)$ with tail)</td><td>$O(n)$ ($O(1)$ with tail)</td></tr>\n  <tr><td>Delete First Node</td><td>$O(1)$</td><td>$O(1)$</td><td>$O(1)$ (with tail) / $O(n)$</td></tr>\n  <tr><td>Delete Given Node</td><td>$O(n)$ (need predecessor)</td><td>$O(1)$ (has prev pointer)</td><td>$O(n)$</td></tr>\n  <tr><td>Search / Access</td><td>$O(n)$</td><td>$O(n)$</td><td>$O(n)$</td></tr>\n</table>",
        "logic": "Polynomial Addition Merge Logic:\nP1: 4x^3 + 3x^2 + 5\nP2: 2x^3 + 1x^1 + 2\nResult: (4+2)x^3 + 3x^2 + 1x^1 + (5+2) = 6x^3 + 3x^2 + x + 7",
        "example": "Poly Node Chain:\n[Coeff: 6 | Exp: 3] ➔ [Coeff: 3 | Exp: 2] ➔ [Coeff: 1 | Exp: 1] ➔ [Coeff: 7 | Exp: 0] ➔ NULL",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Polynomial Addition Merge Step</div>\n  <div class=\"poly-merge\">\n    <div class=\"p-row\">P1: [ 4 | 3 ] ➔ [ 3 | 2 ] ➔ [ 5 | 0 ]</div>\n    <div class=\"p-row\">P2: [ 2 | 3 ] ➔ [ 1 | 1 ] ➔ [ 2 | 0 ]</div>\n    <div class=\"p-res\">Sum: [ 6 | 3 ] ➔ [ 3 | 2 ] ➔ [ 1 | 1 ] ➔ [ 7 | 0 ]</div>\n  </div>\n</div>",
        "code": "// Node definition for Polynomial Addition in C\nstruct PolyNode {\n    int coeff;\n    int exp;\n    struct PolyNode *next;\n};\n\n// Creating a new poly term\nstruct PolyNode* createTerm(int c, int e) {\n    struct PolyNode *n = (struct PolyNode*) malloc(sizeof(struct PolyNode));\n    n->coeff = c;\n    n->exp = e;\n    n->next = NULL;\n    return n;\n}",
        "complexity": {
          "time": "Polynomial Addition: O(m + n) where m and n are terms in the two polynomials",
          "space": "O(m + n) for resulting polynomial list",
          "notes": "Elegant demonstration of merge logic on linked lists."
        },
        "examNotes": [
          {
            "type": "exam",
            "title": "Polynomial Addition Exam Question",
            "text": "Very frequent 7-mark question: Explain polynomial representation and addition using linked lists with algorithm!"
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "unitNumber": 4,
    "title": "Unit 4: Searching & Sorting",
    "shortTitle": "Unit 4: Search & Sort",
    "badge": "Algorithms",
    "summary": "Concepts of Sorting, Selection Sort, Bubble Sort, Insertion Sort, Divide-and-Conquer with Merge Sort and Quick Sort, Linear Search, Binary Search, step-by-step trace walkthroughs, and comprehensive Time/Space complexity matrices.",
    "topics": [
      {
        "id": "u4-t1",
        "title": "Introduction to Sorting & Selection Sort",
        "category": "Sorting",
        "readTime": "8 min",
        "definition": "**Sorting** is the algorithmic rearrangement of elements in an array or list in a designated order (ascending or descending) based on a comparison operator. **Selection Sort** repeatedly finds the minimum element from the unsorted portion and swaps it into its correct sorted position.",
        "explanation": "<p>Sorting is fundamental to computer science because searching, database queries, and graphic rendering become drastically faster on sorted data.</p>\n<h4>How Selection Sort Works</h4>\n<ol>\n  <li>Divide array conceptually into two subarrays: sorted (initially empty) and unsorted.</li>\n  <li>Find the minimum element in the unsorted subarray.</li>\n  <li>Swap the found minimum with the first element of the unsorted subarray.</li>\n  <li>Advance the boundary between sorted and unsorted subarrays by one element.</li>\n  <li>Repeat until the entire array is sorted ($n-1$ passes).</li>\n</ol>",
        "logic": "Selection Sort Algorithm:\nfor i = 0 to n - 2:\n    min_idx = i\n    for j = i + 1 to n - 1:\n        if arr[j] < arr[min_idx]:\n            min_idx = j\n    swap(arr[i], arr[min_idx])",
        "example": "Complete Pass-by-Pass Trace on [64, 25, 12, 22, 11]:\nInitial: [ 64, 25, 12, 22, 11 ]\n- Pass 1: Min in [64, 25, 12, 22, 11] is 11. Swap 64 and 11:\n          [ 11 | 25, 12, 22, 64 ]\n- Pass 2: Min in [25, 12, 22, 64] is 12. Swap 25 and 12:\n          [ 11, 12 | 25, 22, 64 ]\n- Pass 3: Min in [25, 22, 64] is 22. Swap 25 and 22:\n          [ 11, 12, 22 | 25, 64 ]\n- Pass 4: Min in [25, 64] is 25. Already at position:\n          [ 11, 12, 22, 25 | 64 ]\n- Pass 5: 64 is automatically in position.\nFinal Sorted: [ 11, 12, 22, 25, 64 ]",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Selection Sort: Boundary Movement & Minimum Swap</div>\n  <div class=\"sort-trace\">\n    <div class=\"trace-row\"><span class=\"t-badge sorted\">[ 11 ]</span><span class=\"t-badge unsorted\">[ 25, 12, 22, 64 ] (Min = 12)</span></div>\n    <div class=\"trace-row\"><span class=\"t-badge sorted\">[ 11, 12 ]</span><span class=\"t-badge unsorted\">[ 25, 22, 64 ] (Min = 22)</span></div>\n    <div class=\"trace-row\"><span class=\"t-badge sorted\">[ 11, 12, 22 ]</span><span class=\"t-badge unsorted\">[ 25, 64 ] (Min = 25)</span></div>\n    <div class=\"trace-row\"><span class=\"t-badge sorted\">[ 11, 12, 22, 25, 64 ]</span><span class=\"t-badge done\">All Sorted!</span></div>\n  </div>\n</div>",
        "code": "// Selection Sort in C\n// include <stdio.h>\n\nvoid selectionSort(int arr[], int n) {\n    for (int i = 0; i < n - 1; i++) {\n        int min_idx = i;\n        for (int j = i + 1; j < n; j++) {\n            if (arr[j] < arr[min_idx])\n                min_idx = j;\n        }\n        // Swap minimum element with first element\n        int temp = arr[min_idx];\n        arr[min_idx] = arr[i];\n        arr[i] = temp;\n    }\n}",
        "complexity": {
          "time": "Best: O(n^2), Average: O(n^2), Worst: O(n^2)",
          "space": "O(1) in-place auxiliary space",
          "notes": "Always does n*(n-1)/2 comparisons regardless of whether the array is already sorted."
        },
        "examNotes": [
          {
            "type": "exam",
            "title": "Total Comparisons",
            "text": "Total comparisons in Selection Sort is always n*(n-1)/2. For 5 elements: 4 + 3 + 2 + 1 = 10 comparisons!"
          },
          {
            "type": "tip",
            "title": "Minimal Swaps",
            "text": "Selection Sort performs at most n - 1 swaps, making it useful when write memory operations are very costly."
          }
        ]
      },
      {
        "id": "u4-t2",
        "title": "Bubble Sort",
        "category": "Sorting",
        "readTime": "7 min",
        "definition": "**Bubble Sort** is a simple comparison sorting algorithm that repeatedly steps through the array, compares adjacent elements, and **swaps them if they are in the wrong order**. The largest unsorted element 'bubbles up' to its correct final position at the end of each pass.",
        "explanation": "<p>Bubble sort is intuitive and can be optimized with an early termination boolean flag if the array is already sorted.</p>\n<h4>Bubble Sort Mechanism</h4>\n<ol>\n  <li>In Pass 1, compare <code>arr[0]</code> with <code>arr[1]</code>, <code>arr[1]</code> with <code>arr[2]</code>, ..., up to <code>arr[n-2]</code> with <code>arr[n-1]</code>. Swap whenever <code>arr[j] &gt; arr[j+1]</code>.</li>\n  <li>At the end of Pass 1, the largest element is placed at index $n-1$.</li>\n  <li>In Pass 2, repeat for the remaining $n-1$ elements.</li>\n  <li>Repeat for $n-1$ passes.</li>\n</ol>",
        "logic": "Optimized Bubble Sort with Swapped Flag:\nfor i = 0 to n - 2:\n    swapped = false\n    for j = 0 to n - i - 2:\n        if arr[j] > arr[j + 1]:\n            swap(arr[j], arr[j + 1])\n            swapped = true\n    if not swapped:\n        break (Array already sorted!)",
        "example": "Complete Trace on [5, 1, 4, 2, 8]:\nPass 1:\n- Compare 5 > 1 -> Swap -> [1, 5, 4, 2, 8]\n- Compare 5 > 4 -> Swap -> [1, 4, 5, 2, 8]\n- Compare 5 > 2 -> Swap -> [1, 4, 2, 5, 8]\n- Compare 5 < 8 -> No swap -> [1, 4, 2, 5, 8]  (8 is now fixed at end!)\nPass 2:\n- Compare 1 < 4 -> No swap\n- Compare 4 > 2 -> Swap -> [1, 2, 4, 5, 8]\n- Compare 4 < 5 -> No swap  (5 is now fixed!)\nPass 3:\n- Compare 1 < 2 -> No swap\n- Compare 2 < 4 -> No swap  (No swaps occurred -> Early Exit!)\nFinal: [ 1, 2, 4, 5, 8 ]",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Adjacent Pair Comparison & Bubble Up</div>\n  <div class=\"bubble-trace\">\n    <div class=\"pair-step\"><span class=\"hl-pair\">[ 5, 1 ]</span> ➔ Swap ➔ [ 1, 5 ]</div>\n    <div class=\"pair-step\"><span class=\"hl-pair\">[ 5, 4 ]</span> ➔ Swap ➔ [ 4, 5 ]</div>\n    <div class=\"pair-step\"><span class=\"hl-pair\">[ 5, 2 ]</span> ➔ Swap ➔ [ 2, 5 ]</div>\n    <div class=\"pair-step end-anchor\">[ 1, 4, 2, 5, <span class=\"fixed-val\">8</span> ] (Largest fixed at end!)</div>\n  </div>\n</div>",
        "code": "// Optimized Bubble Sort in C\n// include <stdio.h>\n// include <stdbool.h>\n\nvoid bubbleSort(int arr[], int n) {\n    for (int i = 0; i < n - 1; i++) {\n        bool swapped = false;\n        for (int j = 0; j < n - i - 1; j++) {\n            if (arr[j] > arr[j + 1]) {\n                int temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n                swapped = true;\n            }\n        }\n        // If no two elements were swapped by inner loop, array is sorted\n        if (!swapped) break;\n    }\n}",
        "complexity": {
          "time": "Best: O(n) (with swapped flag on sorted array), Average: O(n^2), Worst: O(n^2)",
          "space": "O(1) auxiliary space (in-place)",
          "notes": "Stable sorting algorithm (preserves relative order of equal elements)."
        },
        "examNotes": [
          {
            "type": "exam",
            "title": "Best Case Condition",
            "text": "Best case time complexity of Bubble Sort is O(n) when array is already sorted, BUT only if the 'swapped' boolean flag check is implemented!"
          }
        ]
      },
      {
        "id": "u4-t3",
        "title": "Insertion Sort",
        "category": "Sorting",
        "readTime": "7 min",
        "definition": "**Insertion Sort** works iteratively by taking one element at a time from an unsorted list and **inserting it into its correct position** within an already sorted subarray, analogous to sorting playing cards in hand.",
        "explanation": "<p>Insertion sort is highly efficient for small datasets and partially sorted arrays.</p>\n<h4>How Insertion Sort Works</h4>\n<ol>\n  <li>Assume the first element (<code>arr[0]</code>) is already sorted.</li>\n  <li>Pick the next element as the <code>key = arr[i]</code>.</li>\n  <li>Compare <code>key</code> with elements in the sorted portion from right to left.</li>\n  <li>Shift elements greater than <code>key</code> one position to the right.</li>\n  <li>Insert <code>key</code> into the opened vacant slot.</li>\n  <li>Repeat for all elements from index $1$ to $n-1$.</li>\n</ol>",
        "logic": "Insertion Sort Algorithm:\nfor i = 1 to n - 1:\n    key = arr[i]\n    j = i - 1\n    while j >= 0 and arr[j] > key:\n        arr[j + 1] = arr[j]  // Shift right\n        j = j - 1\n    arr[j + 1] = key         // Insert key into slot",
        "example": "Complete Trace on [12, 11, 13, 5, 6]:\n- Initial: [ 12 | 11, 13, 5, 6 ]\n- Pass 1 (key = 11): 12 > 11 -> Shift 12 -> [ 11, 12 | 13, 5, 6 ]\n- Pass 2 (key = 13): 12 < 13 -> No shift -> [ 11, 12, 13 | 5, 6 ]\n- Pass 3 (key = 5):  13 > 5, 12 > 5, 11 > 5 -> Shift all -> [ 5, 11, 12, 13 | 6 ]\n- Pass 4 (key = 6):  13 > 6, 12 > 6, 11 > 6 -> Shift -> [ 5, 6, 11, 12, 13 ]\nFinal Sorted: [ 5, 6, 11, 12, 13 ]",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Insertion Sort: Playing Card Insertion Model</div>\n  <div class=\"card-insert-vis\">\n    <div class=\"sorted-hand\">[ 11, 12, 13 ] (Sorted Hand)</div>\n    <div class=\"shift-action\">Shift elements rightwards ➔ ➔</div>\n    <div class=\"card-drop\">Insert key = 5 at position 0</div>\n    <div class=\"new-hand\">[ 5, 11, 12, 13 ]</div>\n  </div>\n</div>",
        "code": "// Insertion Sort in C\n// include <stdio.h>\n\nvoid insertionSort(int arr[], int n) {\n    for (int i = 1; i < n; i++) {\n        int key = arr[i];\n        int j = i - 1;\n\n        // Move elements of arr[0..i-1] that are greater than key\n        // to one position ahead of their current position\n        while (j >= 0 && arr[j] > key) {\n            arr[j + 1] = arr[j];\n            j--;\n        }\n        arr[j + 1] = key;\n    }\n}",
        "complexity": {
          "time": "Best: O(n) (already sorted), Average: O(n^2), Worst: O(n^2) (reverse sorted)",
          "space": "O(1) in-place auxiliary space",
          "notes": "Adaptive and stable sorting algorithm."
        },
        "examNotes": [
          {
            "type": "exam",
            "title": "Card Player Analogy",
            "text": "Insertion sort is the exact algorithm people use when sorting playing cards in their hands."
          }
        ]
      },
      {
        "id": "u4-t4",
        "title": "Merge Sort (Divide and Conquer)",
        "category": "Sorting",
        "readTime": "9 min",
        "definition": "**Merge Sort** is an efficient, general-purpose, comparison-based sorting algorithm based on the **Divide-and-Conquer** paradigm. It recursively divides the input array into two halves, sorts them, and then merges the two sorted halves.",
        "explanation": "<p>Merge Sort guarantees $\\mathbf{O(n \\log n)}$ worst-case performance under all circumstances.</p>\n<h4>Divide-and-Conquer Phases</h4>\n<ol>\n  <li><strong>Divide:</strong> Find the midpoint <code>mid = (low + high) / 2</code> and divide array into two equal halves.</li>\n  <li><strong>Conquer:</strong> Recursively sort left subarray <code>mergeSort(arr, low, mid)</code> and right subarray <code>mergeSort(arr, mid + 1, high)</code> until base case (subarrays of size 1).</li>\n  <li><strong>Combine:</strong> Merge the two sorted subarrays using the two-pointer <code>merge()</code> procedure into a single sorted array.</li>\n</ol>",
        "logic": "Merge Sort Recurrence Relation:\nT(n) = 2T(n/2) + O(n)\nBy Master Theorem:\nT(n) = O(n log n) in all cases (Best, Worst, Average)!",
        "example": "Complete Trace on [38, 27, 43, 10] from Slide 13:\n1. Divide:\n   [38, 27, 43, 10]\n   ├── [38, 27] ➔ [38] and [27]\n   └── [43, 10] ➔ [43] and [10]\n2. Merge Subarrays:\n   - Merge [38] and [27] ➔ [27, 38]\n   - Merge [43] and [10] ➔ [10, 43]\n3. Final Merge:\n   - Merge [27, 38] and [10, 43]:\n     Compare 27 & 10 ➔ pick 10\n     Compare 27 & 43 ➔ pick 27\n     Compare 38 & 43 ➔ pick 38\n     Remaining: pick 43\n   Result: [10, 27, 38, 43]",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Merge Sort Divide & Conquer Tree</div>\n  <div class=\"tree-vis\">\n    <div class=\"t-level\">[38, 27, 43, 10]</div>\n    <div class=\"t-level split\"><span>[38, 27]</span> <span>[43, 10]</span></div>\n    <div class=\"t-level split\"><span>[38] [27]</span> <span>[43] [10]</span></div>\n    <div class=\"t-level merge\"><span>[27, 38]</span> <span>[10, 43]</span></div>\n    <div class=\"t-level\">[10, 27, 38, 43]</div>\n  </div>\n</div>",
        "code": "// Merge Sort in C\n// include <stdio.h>\n\nvoid merge(int arr[], int l, int m, int r) {\n    int n1 = m - l + 1;\n    int n2 = r - m;\n    int L[n1], R[n2];\n\n    for (int i = 0; i < n1; i++) L[i] = arr[l + i];\n    for (int j = 0; j < n2; j++) R[j] = arr[m + 1 + j];\n\n    int i = 0, j = 0, k = l;\n    while (i < n1 && j < n2) {\n        if (L[i] <= R[j]) arr[k++] = L[i++];\n        else arr[k++] = R[j++];\n    }\n    while (i < n1) arr[k++] = L[i++];\n    while (j < n2) arr[k++] = R[j++];\n}\n\nvoid mergeSort(int arr[], int l, int r) {\n    if (l < r) {\n        int m = l + (r - l) / 2;\n        mergeSort(arr, l, m);\n        mergeSort(arr, m + 1, r);\n        merge(arr, l, m, r);\n    }\n}",
        "complexity": {
          "time": "Best: O(n log n), Average: O(n log n), Worst: O(n log n)",
          "space": "O(n) auxiliary memory for temporary arrays L and R",
          "notes": "Stable sort, highly suitable for sorting linked lists and external files."
        },
        "examNotes": [
          {
            "type": "exam",
            "title": "Guaranteed O(n log n)",
            "text": "Unlike Quick Sort, Merge Sort NEVER degrades to O(n^2). Its worst-case is strictly O(n log n)."
          },
          {
            "type": "trap",
            "title": "Space Disadvantage",
            "text": "The major downside of Merge Sort is O(n) extra space required for merging arrays."
          }
        ]
      },
      {
        "id": "u4-t5",
        "title": "Quick Sort (Divide and Conquer)",
        "category": "Sorting",
        "readTime": "9 min",
        "definition": "**Quick Sort** is an in-place Divide-and-Conquer sorting algorithm that selects a **Pivot** element, **partitions** the array around the pivot (smaller elements to the left, larger to the right), and recursively sorts the sub-partitions.",
        "explanation": "<p>Quick Sort is typically the fastest sorting algorithm in practice due to exceptional cache locality.</p>\n\n<h4>Choice of Pivot</h4>\n<ul>\n  <li>First element</li>\n  <li>Last element (common standard in textbooks)</li>\n  <li>Random element</li>\n  <li>Median-of-three (median of first, middle, last elements)</li>\n</ul>\n\n<h4>Partitioning Mechanism (Lomuto Partition)</h4>\n<ol>\n  <li>Choose pivot (e.g., <code>arr[high]</code>).</li>\n  <li>Maintain pointer <code>i</code> for elements smaller than pivot.</li>\n  <li>Scan with pointer <code>j</code> from <code>low</code> to <code>high - 1</code>.</li>\n  <li>If <code>arr[j] &lt; pivot</code>: increment <code>i</code>, swap <code>arr[i]</code> and <code>arr[j]</code>.</li>\n  <li>Finally, swap <code>arr[i+1]</code> and <code>arr[high]</code> (places pivot in its correct final index).</li>\n</ol>",
        "logic": "Quick Sort Recurrence:\nBest / Average Case (Balanced split):\nT(n) = 2T(n/2) + O(n) => O(n log n)\nWorst Case (Extremely unbalanced split, e.g., already sorted array):\nT(n) = T(n-1) + O(n) => O(n^2)",
        "example": "Partitioning Trace on [10, 80, 30, 90, 40, 50, 70] with Pivot = 70:\n- Compare 10 < 70 -> swap -> [10, ...]\n- Compare 80 > 70 -> no swap\n- Compare 30 < 70 -> swap 80 & 30 -> [10, 30, 80, 90, 40, 50, 70]\n- Compare 90 > 70 -> no swap\n- Compare 40 < 70 -> swap 80 & 40 -> [10, 30, 40, 90, 80, 50, 70]\n- Compare 50 < 70 -> swap 90 & 50 -> [10, 30, 40, 50, 80, 90, 70]\n- Final swap pivot 70 with 80:\n  [10, 30, 40, 50 | 70 | 90, 80]\nPivot 70 is permanently in its sorted position!",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Quick Sort Partitioning Principle</div>\n  <div class=\"partition-vis\">\n    <div class=\"part-box left-part\">Elements &le; Pivot</div>\n    <div class=\"part-box pivot-pin\">★ PIVOT (Sorted spot)</div>\n    <div class=\"part-box right-part\">Elements &ge; Pivot</div>\n  </div>\n</div>",
        "code": "// Quick Sort in C (Lomuto Partition)\n// include <stdio.h>\n\nvoid swap(int *a, int *b) {\n    int t = *a; *a = *b; *b = t;\n}\n\nint partition(int arr[], int low, int high) {\n    int pivot = arr[high];\n    int i = (low - 1);\n\n    for (int j = low; j < high; j++) {\n        if (arr[j] < pivot) {\n            i++;\n            swap(&arr[i], &arr[j]);\n        }\n    }\n    swap(&arr[i + 1], &arr[high]);\n    return (i + 1);\n}\n\nvoid quickSort(int arr[], int low, int high) {\n    if (low < high) {\n        int pi = partition(arr, low, high);\n        quickSort(arr, low, pi - 1);\n        quickSort(arr, pi + 1, high);\n    }\n}",
        "complexity": {
          "time": "Best: O(n log n), Average: O(n log n), Worst: O(n^2)",
          "space": "O(log n) auxiliary stack space in best/avg, O(n) in worst",
          "notes": "Unstable in standard form, but in-place and fastest in practice."
        },
        "examNotes": [
          {
            "type": "exam",
            "title": "Worst Case of Quick Sort",
            "text": "Worst case O(n^2) occurs when array is already sorted (ascending or descending) and the smallest/largest element is chosen as pivot."
          },
          {
            "type": "tip",
            "title": "Avoiding Worst Case",
            "text": "Choosing a random pivot or median-of-three virtually guarantees O(n log n) average performance."
          }
        ]
      },
      {
        "id": "u4-t6",
        "title": "Linear Search & Binary Search",
        "category": "Searching",
        "readTime": "8 min",
        "definition": "**Linear Search** sequentially checks every element in an array from start to finish ($O(n)$). **Binary Search** is an advanced search algorithm that repeatedly divides a **sorted array** in half ($O(\\log n)$).",
        "explanation": "<p>Searching algorithms locate the position of a specific target key within a collection.</p>\n\n<h4>1. Linear Search (Sequential Search)</h4>\n<ul>\n  <li>Works on both sorted and unsorted data structures.</li>\n  <li>Compares <code>key</code> with <code>arr[0]</code>, <code>arr[1]</code>, ..., <code>arr[n-1]</code>.</li>\n  <li>Terminates immediately upon match or when end of array is reached.</li>\n</ul>\n\n<h4>2. Binary Search</h4>\n<p><strong>Mandatory Precondition: The array MUST be sorted!</strong></p>\n<ol>\n  <li>Set <code>low = 0</code>, <code>high = n - 1</code>.</li>\n  <li>While <code>low &lt;= high</code>:\n    <ol>\n      <li>Calculate midpoint: <code>mid = low + (high - low) / 2</code>.</li>\n      <li>If <code>arr[mid] == key</code>: return <code>mid</code> (Target found!).</li>\n      <li>If <code>key &lt; arr[mid]</code>: target is in left half; set <code>high = mid - 1</code>.</li>\n      <li>If <code>key &gt; arr[mid]</code>: target is in right half; set <code>low = mid + 1</code>.</li>\n    </ol>\n  </li>\n  <li>If <code>low &gt; high</code>, key does not exist; return -1.</li>\n</ol>",
        "logic": "Binary Search Space Reduction:\nn elements ➔ n/2 ➔ n/4 ➔ ... ➔ 1\nNumber of divisions = log2(n)\nTime Complexity = O(log n).",
        "example": "Binary Search for key = 23 in sorted array:\nIndex:   0   1   2   3   4   5   6\nArray: [ 2,  5,  8, 12, 16, 23, 38 ]\n\n- Step 1: low = 0, high = 6. mid = (0 + 6)/2 = 3.\n  arr[3] = 12. 23 > 12 -> Target in right half!\n  low = mid + 1 = 4.\n- Step 2: low = 4, high = 6. mid = (4 + 6)/2 = 5.\n  arr[5] = 23. 23 == 23! MATCH FOUND at index 5!",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Binary Search Space Halving</div>\n  <div class=\"bsearch-vis\">\n    <div class=\"bs-range eliminated\">[ 2, 5, 8, 12 ] (Eliminated left)</div>\n    <div class=\"bs-range active\">[ 16, <span class=\"hit-target\">23 (MATCH)</span>, 38 ]</div>\n  </div>\n</div>",
        "code": "// Linear Search and Binary Search in C\n// include <stdio.h>\n\nint linearSearch(int arr[], int n, int key) {\n    for (int i = 0; i < n; i++) {\n        if (arr[i] == key) return i;\n    }\n    return -1;\n}\n\nint binarySearch(int arr[], int n, int key) {\n    int low = 0, high = n - 1;\n    while (low <= high) {\n        int mid = low + (high - low) / 2; // Avoid integer overflow\n        if (arr[mid] == key) return mid;\n        else if (arr[mid] < key) low = mid + 1;\n        else high = mid - 1;\n    }\n    return -1;\n}",
        "complexity": {
          "time": "Linear Search: O(n). Binary Search: O(log n).",
          "space": "Iterative Binary Search: O(1). Recursive: O(log n).",
          "notes": "For 1,000,000 items: Linear Search takes up to 1,000,000 steps; Binary Search takes at most 20 steps!"
        },
        "examNotes": [
          {
            "type": "formula",
            "title": "Safe Midpoint Formula",
            "text": "Use mid = low + (high - low) / 2 instead of (low + high) / 2 to avoid integer overflow when low + high exceeds INT_MAX!"
          },
          {
            "type": "exam",
            "title": "Prerequisite Condition",
            "text": "Binary search CANNOT be performed on unsorted data without sorting first."
          }
        ]
      },
      {
        "id": "u4-t7",
        "title": "Sorting & Searching Master Comparison Matrix",
        "category": "Summary",
        "readTime": "5 min",
        "definition": "A comprehensive comparative reference synthesizing the **Time Complexity**, **Space Complexity**, and **Algorithmic Paradigm** of all Unit 4 algorithms.",
        "explanation": "<p>This master cheat sheet summarizes every sorting and searching algorithm for fast exam revision.</p>\n<h4>Sorting Algorithms Master Matrix</h4>\n<table class=\"nb-table\">\n  <tr><th>Algorithm</th><th>Best Time</th><th>Average Time</th><th>Worst Time</th><th>Space</th><th>Stable?</th><th>Paradigm</th></tr>\n  <tr><td><strong>Selection Sort</strong></td><td>$O(n^2)$</td><td>$O(n^2)$</td><td>$O(n^2)$</td><td>$O(1)$</td><td>No</td><td>Brute Force / Greedy</td></tr>\n  <tr><td><strong>Bubble Sort</strong></td><td>$O(n)$</td><td>$O(n^2)$</td><td>$O(n^2)$</td><td>$O(1)$</td><td>Yes</td><td>Exchanging</td></tr>\n  <tr><td><strong>Insertion Sort</strong></td><td>$O(n)$</td><td>$O(n^2)$</td><td>$O(n^2)$</td><td>$O(1)$</td><td>Yes</td><td>Incremental Insertion</td></tr>\n  <tr><td><strong>Merge Sort</strong></td><td>$O(n \\log n)$</td><td>$O(n \\log n)$</td><td>$O(n \\log n)$</td><td>$O(n)$</td><td>Yes</td><td>Divide and Conquer</td></tr>\n  <tr><td><strong>Quick Sort</strong></td><td>$O(n \\log n)$</td><td>$O(n \\log n)$</td><td>$O(n^2)$</td><td>$O(\\log n)$</td><td>No</td><td>Divide and Conquer</td></tr>\n</table>\n\n<h4>Searching Algorithms Matrix</h4>\n<table class=\"nb-table\">\n  <tr><th>Algorithm</th><th>Best Time</th><th>Average Time</th><th>Worst Time</th><th>Space</th><th>Pre-condition</th></tr>\n  <tr><td><strong>Linear Search</strong></td><td>$O(1)$</td><td>$O(n)$</td><td>$O(n)$</td><td>$O(1)$</td><td>None (Unsorted or Sorted)</td></tr>\n  <tr><td><strong>Binary Search</strong></td><td>$O(1)$</td><td>$O(\\log n)$</td><td>$O(\\log n)$</td><td>$O(1)$</td><td>Array MUST be sorted</td></tr>\n</table>",
        "logic": "Exam Selection Rules:\n1. Small arrays (n < 50): Insertion Sort.\n2. Guaranteed O(n log n) needed: Merge Sort.\n3. Fastest in-place average performance: Quick Sort.\n4. Minimal memory writes: Selection Sort.",
        "example": "Comparing 100,000 Elements:\n- Bubble/Selection: ~10,000,000,000 operations (~10 seconds)\n- Merge/Quick Sort: ~1,660,000 operations (~0.002 seconds) -> Over 5,000x faster!",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Sorting Algorithm Efficiency Hierarchy</div>\n  <div class=\"matrix-card-grid\">\n    <div class=\"matrix-tile great\"><strong>Merge Sort:</strong> Guaranteed O(n log n) everywhere</div>\n    <div class=\"matrix-tile great\"><strong>Quick Sort:</strong> Fastest real-world O(n log n) average</div>\n    <div class=\"matrix-tile ok\"><strong>Insertion Sort:</strong> Great O(n) for near-sorted data</div>\n    <div class=\"matrix-tile slow\"><strong>Selection Sort:</strong> Always O(n^2), minimal swaps</div>\n  </div>\n</div>",
        "code": "// Quick demonstration of checking if array is sorted\n// include <stdio.h>\n// include <stdbool.h>\n\nbool isSorted(int arr[], int n) {\n    for (int i = 0; i < n - 1; i++) {\n        if (arr[i] > arr[i + 1]) return false;\n    }\n    return true;\n}",
        "complexity": {
          "time": "Summary reference above",
          "space": "Summary reference above",
          "notes": "Essential table for semester exams and multiple-choice questions."
        },
        "examNotes": [
          {
            "type": "exam",
            "title": "Stability in Sorting",
            "text": "A sort is Stable if it preserves the relative order of elements with equal keys. Stable: Bubble, Insertion, Merge. Unstable: Selection, Quick."
          }
        ]
      }
    ]
  },
  {
    "id": 5,
    "unitNumber": 5,
    "title": "Unit 5: Trees",
    "shortTitle": "Unit 5: Trees",
    "badge": "Hierarchical ADTs",
    "summary": "Tree ADT terminologies, Binary Trees, Full/Complete/Perfect/Skewed variants, Mathematical tree properties, Array & Linked representations, Preorder/Inorder/Postorder traversals, Threaded Binary Trees, Binary Search Trees (BST), BST Search/Insert/Delete algorithms, and Expression Trees.",
    "topics": [
      {
        "id": "u5-t1",
        "title": "Tree ADT & Fundamental Terminologies",
        "category": "Foundations",
        "readTime": "8 min",
        "definition": "A **Tree** is a non-linear, hierarchical Abstract Data Type composed of a collection of nodes connected by directed or undirected edges. A non-empty tree $T$ has a unique designated node called the **Root**, and zero or more disjoint non-empty subtrees.",
        "explanation": "<p>Unlike linear structures where elements follow one after another, trees model hierarchical relationships such as file directories, corporate hierarchies, and DOM structures.</p>\n\n<h4>Core Tree Terminologies</h4>\n<ul>\n  <li><strong>Root:</strong> The unique top-most node of the tree with no parent (e.g., node $A$).</li>\n  <li><strong>Parent:</strong> A node that has one or more outgoing links to descendant nodes.</li>\n  <li><strong>Child:</strong> A node that directly descends from another node (its parent).</li>\n  <li><strong>Siblings:</strong> Nodes that share the exact same parent node.</li>\n  <li><strong>Leaf / External Node:</strong> A node with no children (degree = 0).</li>\n  <li><strong>Internal Node:</strong> A node having at least one child.</li>\n  <li><strong>Degree of a Node:</strong> The total number of children belonging to that node.</li>\n  <li><strong>Degree of a Tree:</strong> The maximum degree among all nodes in the tree.</li>\n  <li><strong>Edge:</strong> The connecting link between a parent node and its child.</li>\n  <li><strong>Path:</strong> A sequence of consecutive nodes and edges from an ancestor to a descendant.</li>\n  <li><strong>Level:</strong> The rank in the hierarchy (Root is at Level 0 or 1).</li>\n  <li><strong>Depth of a Node:</strong> The length of the unique path from the root to that node.</li>\n  <li><strong>Height of a Tree:</strong> The maximum depth among all nodes (maximum number of edges/nodes from root to farthest leaf).</li>\n  <li><strong>Forest:</strong> A collection of disjoint trees formed when the root of a tree is removed.</li>\n</ul>",
        "logic": "Tree Interface Functions:\n- root(): Returns root node.\n- parent(v): Returns parent of node v.\n- children(v): Returns set of children of node v.\n- isInternal(v): Returns true if node has children.\n- isExternal(v): Returns true if node is a leaf.",
        "example": "Hierarchy Walkthrough:\n        [ A ] (Root, Level 0)\n       /     \\\n    [ B ]    [ C ] (Children of A, Siblings, Level 1)\n    /   \\       \\\n  [ D ] [ E ]   [ F ] (Leaves, Level 2)\n\n- Leaves: D, E, F (Degree = 0)\n- Internal Nodes: A, B, C\n- Degree of B = 2 (Children D and E)\n- Height of Tree = 2 (edges)",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Anatomy of a Tree Hierarchy</div>\n  <div class=\"tree-diagram-box\">\n    <div class=\"tree-svg-holder\">\n      <div class=\"t-node root-t\">A (Root)</div>\n      <div class=\"t-branches\">\n        <div class=\"t-sub\">\n          <div class=\"t-node\">B (Parent)</div>\n          <div class=\"t-leaves\">\n            <span class=\"t-node leaf-t\">D (Leaf)</span>\n            <span class=\"t-node leaf-t\">E (Leaf)</span>\n          </div>\n        </div>\n        <div class=\"t-sub\">\n          <div class=\"t-node\">C (Parent)</div>\n          <div class=\"t-leaves\">\n            <span class=\"t-node leaf-t\">F (Leaf)</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
        "code": "// General Tree Node Representation in C\nstruct TreeNode {\n    int data;\n    struct TreeNode *firstChild;\n    struct TreeNode *nextSibling;\n};",
        "complexity": {
          "time": "Traversal: O(n) visits all nodes",
          "space": "O(h) call stack memory where h is tree height",
          "notes": "Non-linear organization cuts search times drastically compared to arrays."
        },
        "examNotes": [
          {
            "type": "exam",
            "title": "Tree Terminologies",
            "text": "Common 5-mark question: Define Root, Leaf, Height, Depth, and Degree of a Tree with a neat diagram!"
          }
        ]
      },
      {
        "id": "u5-t2",
        "title": "Binary Tree & Types of Binary Trees",
        "category": "Binary Tree",
        "readTime": "8 min",
        "definition": "A **Binary Tree** is a hierarchical data structure in which each node has **at most two children**, referred to as the **Left Child** and the **Right Child** (out-degree $\\le 2$).",
        "explanation": "<p>Binary trees are the most widely applied class of trees in computer science, serving as the basis for BSTs, Heaps, and AVL trees.</p>\n\n<h4>Types of Binary Trees</h4>\n<ol>\n  <li><strong>Strict / Full Binary Tree:</strong> Every node has either $0$ or $2$ children. No node has exactly 1 child.</li>\n  <li><strong>Complete Binary Tree:</strong> All levels are completely filled except possibly the last level, and all nodes in the last level are as far left as possible. (Crucial for Heaps!)</li>\n  <li><strong>Perfect Binary Tree:</strong> All internal nodes have exactly 2 children, and all leaf nodes are at the exact same level.</li>\n  <li><strong>Balanced Binary Tree:</strong> The height difference between left and right subtrees of every node is at most 1 (AVL condition).</li>\n  <li><strong>Skewed Binary Tree:</strong> Every node has only one child.\n    <ul>\n      <li><em>Left-Skewed:</em> Only left children exist.</li>\n      <li><em>Right-Skewed:</em> Only right children exist. (Degenerates into a linked list!).</li>\n    </ul>\n  </li>\n</ol>",
        "logic": "Complete vs Full Distinction:\n- Full Binary Tree: 0 or 2 children per node.\n- Complete Binary Tree: Levels 0 to h-1 full; last level filled strictly from left to right.\nA tree can be Complete without being Full, and Full without being Complete!",
        "example": "Complete Binary Tree Array Mapping:\n        [1]\n       /   \\\n     [2]   [3]\n     / \\\n   [4] [5]\nCan be placed compactly in array: [1, 2, 3, 4, 5] without holes!",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Binary Tree Taxonomy</div>\n  <div class=\"tree-types-grid\">\n    <div class=\"tt-card\"><strong>Full / Strict</strong><br>Every node has 0 or 2 children</div>\n    <div class=\"tt-card\"><strong>Complete</strong><br>Filled levels, left-packed last level</div>\n    <div class=\"tt-card\"><strong>Perfect</strong><br>All leaves at same bottom level</div>\n    <div class=\"tt-card\"><strong>Skewed</strong><br>Only 1 branch (degrades to O(n))</div>\n  </div>\n</div>",
        "code": "// Standard Binary Tree Node Declaration in C\n// include <stdio.h>\n// include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node *left;\n    struct Node *right;\n};\n\nstruct Node* createNode(int val) {\n    struct Node *newNode = (struct Node*) malloc(sizeof(struct Node));\n    newNode->data = val;\n    newNode->left = NULL;\n    newNode->right = NULL;\n    return newNode;\n}",
        "complexity": {
          "time": "Height h: O(log n) best for balanced, O(n) worst for skewed",
          "space": "O(1) per node",
          "notes": "Maintaining balanced height is essential for O(log n) efficiency."
        },
        "examNotes": [
          {
            "type": "exam",
            "title": "Full vs Complete Tree",
            "text": "Examiners love asking the difference between Full and Complete binary trees. Memorize the left-aligned last level requirement!"
          }
        ]
      },
      {
        "id": "u5-t3",
        "title": "Properties & Memory Representations of Binary Trees",
        "category": "Binary Tree",
        "readTime": "8 min",
        "definition": "Mathematical properties govern node counts and heights in binary trees. Binary trees are stored in memory using either **Sequential Array Representation** or **Doubly Linked Representation**.",
        "explanation": "<p>Knowing the mathematical properties enables efficient space bounds calculation.</p>\n<h4>5 Fundamental Mathematical Properties</h4>\n<ol>\n  <li><strong>Maximum nodes at Level $i$:</strong>\n  $$\\text{Max nodes} = 2^i \\quad (\\text{where root is at level } 0)$$\n  </li>\n  <li><strong>Maximum nodes in tree of Height $h$:</strong>\n  $$\\text{Max nodes} = 2^h - 1 \\quad (\\text{if height counts levels } 1 \\dots h)$$\n  </li>\n  <li><strong>Minimum Height for $n$ nodes:</strong>\n  $$h_{min} = \\lceil \\log_2(n + 1) \\rceil$$\n  </li>\n  <li><strong>Leaf Nodes vs Degree-2 Nodes:</strong>\n  In any non-empty binary tree, if $n_0$ is the number of leaf nodes and $n_2$ is the number of nodes with degree 2:\n  $$n_0 = n_2 + 1$$\n  </li>\n  <li><strong>Total Edges vs Total Nodes:</strong>\n  $$e = n - 1$$\n  </li>\n</ol>\n\n<h4>Memory Representations</h4>\n<h4>1. Array (Sequential) Representation</h4>\n<p>Store nodes in a 1D array. For a node stored at index $i$ (1-based):</p>\n<ul>\n  <li><code>Left Child(i) = 2 * i</code></li>\n  <li><code>Right Child(i) = 2 * i + 1</code></li>\n  <li><code>Parent(i) = floor(i / 2)</code></li>\n</ul>\n<p><em>Drawback:</em> Massive memory wastage for sparse or skewed trees.</p>\n\n<h4>2. Linked Representation</h4>\n<p>Nodes stored on heap using three fields: <code>left</code> pointer, <code>data</code>, and <code>right</code> pointer. Zero wasted space for absent children (set to <code>NULL</code>).</p>",
        "logic": "Property 4 Proof Intuition (n0 = n2 + 1):\nEach degree-2 node introduces a fork that creates one additional leaf. Hence, leaves are always 1 more than 2-child nodes.",
        "example": "Numerical Problem:\nA full binary tree has 20 internal nodes with 2 children (n2 = 20). How many leaves does it have?\nAnswer: n0 = n2 + 1 = 20 + 1 = 21 leaf nodes!",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Array Representation Index Calculations (1-based)</div>\n  <div class=\"array-calc-strip\">\n    <div class=\"calc-cell\"><span class=\"c-i\">Index 1</span><span class=\"c-v\">Root [A]</span></div>\n    <div class=\"calc-cell\"><span class=\"c-i\">Index 2</span><span class=\"c-v\">Left [B] (2*1)</span></div>\n    <div class=\"calc-cell\"><span class=\"c-i\">Index 3</span><span class=\"c-v\">Right [C] (2*1+1)</span></div>\n    <div class=\"calc-cell\"><span class=\"c-i\">Index 4</span><span class=\"c-v\">Left of B [D] (2*2)</span></div>\n    <div class=\"calc-cell\"><span class=\"c-i\">Index 5</span><span class=\"c-v\">Right of B [E] (2*2+1)</span></div>\n  </div>\n</div>",
        "code": "// Linked Representation of Binary Tree\nstruct Node {\n    struct Node *left;\n    int data;\n    struct Node *right;\n};",
        "complexity": {
          "time": "Finding parent/child in Array: O(1). In Linked: O(1) for child, O(n) for parent without parent pointer.",
          "space": "Array: O(2^h) in worst case (wasteful). Linked: O(n) strictly proportional to node count.",
          "notes": "Complete binary trees (Heaps) use arrays; general trees use linked nodes."
        },
        "examNotes": [
          {
            "type": "formula",
            "title": "Index Formulas",
            "text": "1-based: Left = 2i, Right = 2i + 1, Parent = floor(i/2). 0-based: Left = 2i + 1, Right = 2i + 2, Parent = floor((i-1)/2)."
          },
          {
            "type": "exam",
            "title": "Golden Property",
            "text": "n0 = n2 + 1. Very common 1-mark or 2-mark question!"
          }
        ]
      },
      {
        "id": "u5-t4",
        "title": "Binary Tree Traversals (Preorder, Inorder, Postorder, Level-Order)",
        "category": "Traversals",
        "readTime": "10 min",
        "definition": "**Tree Traversal** is the process of visiting each node in the tree exactly once in a systematic order. The four fundamental traversals are **Preorder (NLR)**, **Inorder (LNR)**, **Postorder (LRN)**, and **Level-Order (Breadth-First)**.",
        "explanation": "<p>Traversal algorithms are the primary mechanism to process, print, evaluate, or copy trees.</p>\n\n<h4>1. Depth-First Traversals</h4>\n<ol>\n  <li><strong>Preorder Traversal (Node ➔ Left ➔ Right):</strong>\n    <ol>\n      <li>Process Root node.</li>\n      <li>Traverse Left subtree in Preorder.</li>\n      <li>Traverse Right subtree in Preorder.</li>\n    </ol>\n    <em>Use case:</em> Cloning/copying trees, Prefix expression generation.\n  </li>\n  <li><strong>Inorder Traversal (Left ➔ Node ➔ Right):</strong>\n    <ol>\n      <li>Traverse Left subtree in Inorder.</li>\n      <li>Process Root node.</li>\n      <li>Traverse Right subtree in Inorder.</li>\n    </ol>\n    <em>Use case:</em> Produces sorted order for a Binary Search Tree (BST)!\n  </li>\n  <li><strong>Postorder Traversal (Left ➔ Right ➔ Node):</strong>\n    <ol>\n      <li>Traverse Left subtree in Postorder.</li>\n      <li>Traverse Right subtree in Postorder.</li>\n      <li>Process Root node.</li>\n    </ol>\n    <em>Use case:</em> Deleting a tree safely bottom-up, Postfix expression evaluation.\n  </li>\n</ol>\n\n<h4>2. Breadth-First Traversal (Level-Order)</h4>\n<p>Visits nodes level-by-level from top to bottom and left to right, implemented using a <strong>Queue</strong>.</p>",
        "logic": "Memory Aid Acronyms:\n- Preorder:   Root FIRST (Root, Left, Right)\n- Inorder:    Root IN-BETWEEN (Left, Root, Right)\n- Postorder:  Root LAST (Left, Right, Root)",
        "example": "Consider Tree:\n        1\n       / \\\n      2   3\n     / \\\n    4   5\n\n- Preorder  (NLR): 1 -> 2 -> 4 -> 5 -> 3\n- Inorder   (LNR): 4 -> 2 -> 5 -> 1 -> 3\n- Postorder (LRN): 4 -> 5 -> 2 -> 3 -> 1\n- Level-Order:    1 -> 2 -> 3 -> 4 -> 5",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Tree Traversal Pathways</div>\n  <div class=\"traversal-legend\">\n    <div class=\"t-path pre\"><span class=\"p-dot\"></span> Preorder: 1 ➔ 2 ➔ 4 ➔ 5 ➔ 3</div>\n    <div class=\"t-path in\"><span class=\"p-dot\"></span> Inorder: 4 ➔ 2 ➔ 5 ➔ 1 ➔ 3</div>\n    <div class=\"t-path post\"><span class=\"p-dot\"></span> Postorder: 4 ➔ 5 ➔ 2 ➔ 3 ➔ 1</div>\n  </div>\n</div>",
        "code": "// Recursive Tree Traversals in C\n// include <stdio.h>\n\nstruct Node {\n    int data;\n    struct Node *left, *right;\n};\n\nvoid preorder(struct Node *root) {\n    if (root == NULL) return;\n    printf(\"%d \", root->data);   // Node\n    preorder(root->left);        // Left\n    preorder(root->right);       // Right\n}\n\nvoid inorder(struct Node *root) {\n    if (root == NULL) return;\n    inorder(root->left);         // Left\n    printf(\"%d \", root->data);   // Node\n    inorder(root->right);        // Right\n}\n\nvoid postorder(struct Node *root) {\n    if (root == NULL) return;\n    postorder(root->left);       // Left\n    postorder(root->right);      // Right\n    printf(\"%d \", root->data);   // Node\n}",
        "complexity": {
          "time": "O(n) visits all n nodes exactly once",
          "space": "O(h) call stack memory where h is tree height",
          "notes": "In a balanced tree h = O(log n); in skewed tree h = O(n)."
        },
        "examNotes": [
          {
            "type": "exam",
            "title": "BST Inorder Property",
            "text": "Golden rule: Inorder traversal of ANY Binary Search Tree ALWAYS outputs keys in ascending sorted order!"
          }
        ]
      },
      {
        "id": "u5-t5",
        "title": "Threaded Binary Tree",
        "category": "Threaded Trees",
        "readTime": "7 min",
        "definition": "A **Threaded Binary Tree** makes efficient use of wasted `NULL` pointers in an $n$-node binary tree (where $n+1$ links are `NULL`) by replacing them with **Threads** pointing to the node's **Inorder Predecessor** or **Inorder Successor**.",
        "explanation": "<p>In standard linked representation, more than half of all pointer fields are <code>NULL</code>. Threading eliminates this waste and allows fast traversal without recursion or stacks.</p>\n\n<h4>Types of Threaded Binary Trees</h4>\n<ol>\n  <li><strong>One-Way / Single Threaded:</strong>\n    <ul>\n      <li><em>Right Threaded:</em> Right <code>NULL</code> pointer replaced with thread to Inorder Successor.</li>\n      <li><em>Left Threaded:</em> Left <code>NULL</code> pointer replaced with thread to Inorder Predecessor.</li>\n    </ul>\n  </li>\n  <li><strong>Two-Way / Double Threaded:</strong>\n    Both left and right <code>NULL</code> pointers are replaced with threads to Inorder Predecessor and Successor respectively.\n  </li>\n</ol>\n\n<h4>Node Structure with Boolean Flags</h4>\n<pre><code>struct ThreadedNode {\n    struct ThreadedNode *left;\n    int lthread; // 1 if thread, 0 if regular left child pointer\n    int data;\n    int rthread; // 1 if thread, 0 if regular right child pointer\n    struct ThreadedNode *right;\n};</code></pre>\n\n<h4>Advantages & Disadvantages</h4>\n<ul>\n  <li><strong>Advantages:</strong> Inorder traversal requires NO system stack and NO recursion. Linear $O(1)$ memory traversal. Backward traversal is also supported in double-threaded trees.</li>\n  <li><strong>Disadvantages:</strong> Increased node complexity, requires extra boolean tag bits, and node insertion/deletion logic is significantly more complex.</li>\n</ul>",
        "logic": "Finding Inorder Successor in Right-Threaded Tree:\nIf (node->rthread == 1):\n    return node->right; // Direct thread jump!\nElse:\n    Go to node->right, then follow left children until left child is NULL/thread.",
        "example": "Threading Concept:\nInorder: [D, B, E, A, C]\n- Node D's right NULL pointer points to B (its Inorder Successor).\n- Node E's right NULL pointer points to A (its Inorder Successor).",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Threaded Binary Tree Links vs Threads</div>\n  <div class=\"threaded-vis\">\n    <div class=\"solid-link\">─── Solid Arrow: Regular Child Pointer (tag = 0)</div>\n    <div class=\"dashed-thread\">--- Dashed Arrow: Inorder Successor Thread (tag = 1)</div>\n  </div>\n</div>",
        "code": "// Inorder Traversal in a Right-Threaded Binary Tree\nstruct ThreadedNode* leftmost(struct ThreadedNode *n) {\n    if (n == NULL) return NULL;\n    while (n->left != NULL && n->lthread == 0)\n        n = n->left;\n    return n;\n}\n\nvoid inorderThreaded(struct ThreadedNode *root) {\n    struct ThreadedNode *curr = leftmost(root);\n    while (curr != NULL) {\n        printf(\"%d \", curr->data);\n        // If thread exists, follow it directly\n        if (curr->rthread == 1)\n            curr = curr->right;\n        else\n            curr = leftmost(curr->right); // Go to leftmost of right subtree\n    }\n}",
        "complexity": {
          "time": "Traversal: O(n)",
          "space": "O(1) strict auxiliary memory (No recursion stack!)",
          "notes": "Ideal for resource-constrained embedded systems where stack memory is minimal."
        },
        "examNotes": [
          {
            "type": "exam",
            "title": "Wasted NULL Links Formula",
            "text": "In any binary tree with n nodes, there are exactly 2n total pointer fields and n + 1 of them are NULL! Threaded trees utilize these n+1 NULLs."
          }
        ]
      },
      {
        "id": "u5-t6",
        "title": "Binary Search Tree (BST): Operations & Deletion Cases",
        "category": "BST",
        "readTime": "10 min",
        "definition": "A **Binary Search Tree (BST)** is a binary tree with the **BST Ordering Property**: for any node $X$, all keys in its left subtree are strictly **smaller** than $X$, and all keys in its right subtree are strictly **greater** than $X$:\n$$\\text{Left Subtree} < X < \\text{Right Subtree}$$",
        "explanation": "<p>The BST property allows binary search-like speed ($O(\\log n)$) on dynamic data structures.</p>\n\n<h4>Core BST Operations</h4>\n<h4>1. Search in BST</h4>\n<p>Compare target <code>key</code> with current node:</p>\n<ul>\n  <li>If <code>key == root-&gt;data</code>: Found!</li>\n  <li>If <code>key &lt; root-&gt;data</code>: Recurse into left subtree.</li>\n  <li>If <code>key &gt; root-&gt;data</code>: Recurse into right subtree.</li>\n</ul>\n\n<h4>2. Insertion in BST</h4>\n<p>Always inserted as a new **leaf node**. Traverse using BST property until reaching a <code>NULL</code> pointer, then attach the new node.</p>\n\n<h4>3. Deletion in BST (3 Cases)</h4>\n<ol>\n  <li><strong>Case 1: Node to be deleted is a Leaf (0 children):</strong>\n    Simply remove the node and set parent's link to <code>NULL</code>.\n  </li>\n  <li><strong>Case 2: Node to be deleted has 1 child:</strong>\n    Bypass the node: link the node's parent directly to its single child, then <code>free()</code> the node.\n  </li>\n  <li><strong>Case 3: Node to be deleted has 2 children:</strong>\n    Cannot simply delete!\n    <ol>\n      <li>Find the node's <strong>Inorder Successor</strong> (the smallest node in its right subtree) OR <strong>Inorder Predecessor</strong> (largest in left subtree).</li>\n      <li>Copy the Inorder Successor's value into the target node.</li>\n      <li>Delete the Inorder Successor node (which will fall into Case 1 or Case 2!).</li>\n    </ol>\n  </li>\n</ol>",
        "logic": "Inorder Successor Finding:\nstruct Node* minValueNode(struct Node* node) {\n    struct Node* current = node;\n    while (current && current->left != NULL)\n        current = current->left;\n    return current;\n}",
        "example": "Delete Node 50 from BST:\n        [50]\n       /    \\\n     [30]   [70]\n            /  \\\n          [60] [80]\n\nNode 50 has 2 children.\n1. Right subtree has root 70.\n2. Smallest node in right subtree is 60 (Inorder Successor).\n3. Copy 60 to root: Root becomes 60.\n4. Delete 60 from right subtree.\nResulting Tree:\n        [60]\n       /    \\\n     [30]   [70]\n               \\\n               [80]",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">BST Deletion Case 3: Inorder Successor Replacement</div>\n  <div class=\"bst-delete-flow\">\n    <div class=\"b-flow-step\">Target [50] (2 children)</div>\n    <div class=\"flow-arrow\">➔</div>\n    <div class=\"b-flow-step\">Find Successor: [60] (Min in right subtree)</div>\n    <div class=\"flow-arrow\">➔</div>\n    <div class=\"b-flow-step\">Copy 60 into 50 slot & delete old [60]</div>\n  </div>\n</div>",
        "code": "// Complete BST Operations in C\n// include <stdio.h>\n// include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node *left, *right;\n};\n\nstruct Node* insert(struct Node* node, int val) {\n    if (node == NULL) {\n        struct Node* temp = (struct Node*) malloc(sizeof(struct Node));\n        temp->data = val; temp->left = temp->right = NULL;\n        return temp;\n    }\n    if (val < node->data) node->left = insert(node->left, val);\n    else if (val > node->data) node->right = insert(node->right, val);\n    return node;\n}\n\nstruct Node* minValueNode(struct Node* node) {\n    struct Node* curr = node;\n    while (curr && curr->left != NULL) curr = curr->left;\n    return curr;\n}\n\nstruct Node* deleteNode(struct Node* root, int key) {\n    if (root == NULL) return root;\n\n    if (key < root->data) root->left = deleteNode(root->left, key);\n    else if (key > root->data) root->right = deleteNode(root->right, key);\n    else {\n        // Case 1 & 2: 0 or 1 child\n        if (root->left == NULL) {\n            struct Node *temp = root->right;\n            free(root);\n            return temp;\n        } else if (root->right == NULL) {\n            struct Node *temp = root->left;\n            free(root);\n            return temp;\n        }\n        // Case 3: 2 children\n        struct Node* temp = minValueNode(root->right); // Inorder successor\n        root->data = temp->data; // Copy value\n        root->right = deleteNode(root->right, temp->data); // Delete successor\n    }\n    return root;\n}",
        "complexity": {
          "time": "Search/Insert/Delete: Best/Avg: O(log n), Worst: O(n) (when skewed)",
          "space": "O(h) recursion stack",
          "notes": "Degeneration to O(n) led to the invention of balanced trees (AVL and Red-Black)."
        },
        "examNotes": [
          {
            "type": "exam",
            "title": "Case 3 in Deletion",
            "text": "Always explain Inorder Successor (min of right subtree) or Inorder Predecessor (max of left subtree) in 7-mark BST questions!"
          }
        ]
      },
      {
        "id": "u5-t7",
        "title": "Expression Trees",
        "category": "Applications",
        "readTime": "6 min",
        "definition": "An **Expression Tree** is a binary tree representation of an arithmetic expression where the **leaves are operands** (variables or constants) and the **internal nodes are operators**.",
        "explanation": "<p>Expression trees are used by compilers and calculators to parse, optimize, and evaluate complex mathematical statements.</p>\n<h4>Key Properties of Expression Trees</h4>\n<ul>\n  <li>Leaves are always operands (e.g., $A, B, 3, 5$).</li>\n  <li>Internal nodes are always operators (e.g., $+ , - , * , /$).</li>\n  <li>Inorder traversal of an expression tree produces the original <strong>Infix expression</strong> (with parentheses).</li>\n  <li>Preorder traversal produces the <strong>Prefix expression</strong>.</li>\n  <li>Postorder traversal produces the <strong>Postfix expression</strong> and provides a natural bottom-up evaluation order.</li>\n</ul>",
        "logic": "Evaluation Algorithm:\nint evaluate(TreeNode* root):\n    if root is leaf: return root->value\n    leftVal = evaluate(root->left)\n    rightVal = evaluate(root->right)\n    return applyOperator(root->operator, leftVal, rightVal)",
        "example": "Expression: (A + B) * (C - D)\nTree Structure:\n        [*]\n       /   \\\n     [+]   [-]\n     / \\   / \\\n    A   B C   D\n- Inorder:   A + B * C - D (Add brackets: (A + B) * (C - D))\n- Postorder: A B + C D - *\n- Preorder:  * + A B - C D",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Expression Tree for (A + B) * (C - D)</div>\n  <div class=\"exp-tree-vis\">\n    <div class=\"et-root\">[*] (Root Operator)</div>\n    <div class=\"et-branches\">\n      <div class=\"et-sub\">[+] ➔ Leaves: A, B</div>\n      <div class=\"et-sub\">[-] ➔ Leaves: C, D</div>\n    </div>\n  </div>\n</div>",
        "code": "// Evaluating an Expression Tree in C\nint eval(struct Node* root) {\n    if (!root) return 0;\n    // Leaf node (Operand)\n    if (!root->left && !root->right) return root->data;\n\n    int l_val = eval(root->left);\n    int r_val = eval(root->right);\n\n    switch (root->data) {\n        case '+': return l_val + r_val;\n        case '-': return l_val - r_val;\n        case '*': return l_val * r_val;\n        case '/': return l_val / r_val;\n    }\n    return 0;\n}",
        "complexity": {
          "time": "Construction: O(n), Evaluation: O(n)",
          "space": "O(n) tree storage + O(h) recursion stack",
          "notes": "Evaluates expressions strictly according to operator precedence."
        },
        "examNotes": [
          {
            "type": "exam",
            "title": "Expression Tree Traversal Outcomes",
            "text": "Preorder = Prefix. Inorder = Infix. Postorder = Postfix. A popular exam multiple choice question!"
          }
        ]
      }
    ]
  },
  {
    "id": 6,
    "unitNumber": 6,
    "title": "Unit 6: Red Black Trees and AVL Trees",
    "shortTitle": "Unit 6: AVL & Red-Black",
    "badge": "Balanced Trees",
    "summary": "Balanced Search Trees, AVL Tree definition, Balance Factor calculations, the 4 AVL Rotations (LL, RR, LR, RL), complete step-by-step AVL tree construction from college slides, AVL deletion, Red-Black Tree 5 core properties, insertion violation cases, and comparative analysis.",
    "topics": [
      {
        "id": "u6-t1",
        "title": "Need for Balanced Trees & AVL Tree Foundations",
        "category": "Foundations",
        "readTime": "7 min",
        "definition": "A standard Binary Search Tree can degenerate into an unbalanced skewed tree with worst-case search time of $O(n)$ when keys are inserted in sorted order. An **AVL Tree** (named after Adelson-Velsky and Landis) is a self-balancing binary search tree where the **Balance Factor** of every node is restricted to **-1, 0, or +1**.",
        "explanation": "<p>AVL Trees enforce a strict height-balancing property ensuring that the tree's height is always bounded by $O(\\log n)$.</p>\n\n<h4>Balance Factor Formula</h4>\n<p>For any node in an AVL tree, the Balance Factor ($BF$) is defined as:</p>\n$$BF(\\text{node}) = \\text{Height}(\\text{Left Subtree}) - \\text{Height}(\\text{Right Subtree})$$\n<p>Alternatively written as $\\text{Height}(Right) - \\text{Height}(Left)$ in some texts; our curriculum uses $\\text{Height}(Left) - \\text{Height}(Right)$.</p>\n\n<h4>Node Balance Classifications</h4>\n<ul>\n  <li><strong>Left Heavy ($BF = +1$):</strong> Longest path in left subtree is 1 greater than longest path in right subtree.</li>\n  <li><strong>Balanced ($BF = 0$):</strong> Left and right subtrees have equal height.</li>\n  <li><strong>Right Heavy ($BF = -1$):</strong> Longest path in right subtree is 1 greater than longest path in left subtree.</li>\n  <li><strong>Unbalanced ($|BF| &gt; 1$):</strong> $BF = +2$ or $-2$. Requires immediate **Rotation** to rebalance!</li>\n</ul>",
        "logic": "Height & Balance Invariant:\nFor an AVL tree with n nodes:\nMaximum Height h <= 1.44 * log2(n + 2) - 0.328\nGuarantees Search, Insertion, and Deletion in strictly O(log n) time!",
        "example": "Degenerate BST vs AVL Tree:\nInsert keys: 10, 20, 30\n- In Standard BST:\n  [10] ➔ \\ [20] ➔ \\ [30] (Right-skewed line, Height = 2, O(n) search).\n- In AVL Tree:\n  Node 10 has BF = -2 (Unbalanced!).\n  Perform RR (Left) Rotation on 10:\n        [20] (BF = 0)\n       /    \\\n     [10]   [30] (Height = 1, O(log n) search!)",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Skewed BST vs Balanced AVL Tree</div>\n  <div class=\"skew-vs-avl\">\n    <div class=\"skew-col\">\n      <strong>Standard BST (Skewed)</strong>\n      <div class=\"skew-chain\">[10] ➔ [20] ➔ [30] ➔ [40]</div>\n      <small>Height = 4, Search = O(n)</small>\n    </div>\n    <div class=\"avl-col\">\n      <strong>AVL Tree (Self-Balanced)</strong>\n      <div class=\"avl-mini-tree\">[20] with children [10] & [30, 40]</div>\n      <small>Height = 2, Search = O(log n)</small>\n    </div>\n  </div>\n</div>",
        "code": "// AVL Node Structure and Balance Factor in C\n// include <stdio.h>\n// include <stdlib.h>\n\nstruct Node {\n    int key;\n    struct Node *left;\n    struct Node *right;\n    int height;\n};\n\nint max(int a, int b) { return (a > b) ? a : b; }\n\nint height(struct Node *n) {\n    if (n == NULL) return 0;\n    return n->height;\n}\n\nint getBalance(struct Node *n) {\n    if (n == NULL) return 0;\n    return height(n->left) - height(n->right);\n}",
        "complexity": {
          "time": "Search: O(log n) guaranteed. Height: O(log n).",
          "space": "O(n) for tree nodes",
          "notes": "AVL trees are more rigidly balanced than Red-Black trees, yielding faster lookups."
        },
        "examNotes": [
          {
            "type": "exam",
            "title": "AVL Definition",
            "text": "An AVL tree is a height-balanced BST where |BF(node)| <= 1 for EVERY node. BF = Height(Left) - Height(Right)."
          },
          {
            "type": "formula",
            "title": "Permitted Balance Factors",
            "text": "Only {-1, 0, +1} are allowed. If BF becomes +2 or -2, rotation must be triggered!"
          }
        ]
      },
      {
        "id": "u6-t2",
        "title": "The Four AVL Rotations (LL, RR, LR, RL)",
        "category": "AVL Rotations",
        "readTime": "9 min",
        "definition": "When an insertion makes a node unbalanced ($BF = +2$ or $-2$), **Rotations** are local pointer reconfigurations that restore the AVL height balance property in $O(1)$ time without violating BST ordering.",
        "explanation": "<p>There are four fundamental rotation cases depending on where the new node was inserted relative to the unbalanced ancestor:</p>\n\n<h4>1. LL Rotation (Single Right Rotation)</h4>\n<p><strong>Cause:</strong> New node inserted into the <em>Left</em> subtree of node's <em>Left</em> child ($BF = +2$, Left child $BF = +1$).</p>\n<p><strong>Mechanism:</strong></p>\n<ol>\n  <li>Left child (<code>B</code>) becomes the new root.</li>\n  <li>Old root (<code>A</code>) becomes the right child of <code>B</code>.</li>\n  <li>Left child's old right subtree (<code>T2</code>) becomes the new left subtree of <code>A</code>.</li>\n</ol>\n\n<h4>2. RR Rotation (Single Left Rotation)</h4>\n<p><strong>Cause:</strong> New node inserted into the <em>Right</em> subtree of node's <em>Right</em> child ($BF = -2$, Right child $BF = -1$).</p>\n<p><strong>Mechanism:</strong></p>\n<ol>\n  <li>Right child (<code>B</code>) becomes the new root.</li>\n  <li>Old root (<code>A</code>) becomes the left child of <code>B</code>.</li>\n  <li>Right child's old left subtree (<code>T2</code>) becomes the new right subtree of <code>A</code>.</li>\n</ol>\n\n<h4>3. LR Rotation (Double Rotation: Left then Right)</h4>\n<p><strong>Cause:</strong> New node inserted into the <em>Right</em> subtree of node's <em>Left</em> child ($BF = +2$, Left child $BF = -1$).</p>\n<p><strong>Mechanism:</strong></p>\n<ol>\n  <li>Perform Single Left (RR) Rotation on the Left child.</li>\n  <li>Perform Single Right (LL) Rotation on the Unbalanced root.</li>\n</ol>\n\n<h4>4. RL Rotation (Double Rotation: Right then Left)</h4>\n<p><strong>Cause:</strong> New node inserted into the <em>Left</em> subtree of node's <em>Right</em> child ($BF = -2$, Right child $BF = +1$).</p>\n<p><strong>Mechanism:</strong></p>\n<ol>\n  <li>Perform Single Right (LL) Rotation on the Right child.</li>\n  <li>Perform Single Left (RR) Rotation on the Unbalanced root.</li>\n</ol>",
        "logic": "Rotation Decision Matrix:\nUnbalanced Node BF | Child BF | Rotation Required\n-------------------|----------|---------------------\n+2                 | +1 or 0  | LL (Single Right)\n-2                 | -1 or 0  | RR (Single Left)\n+2                 | -1       | LR (Left then Right)\n-2                 | +1       | RL (Right then Left)",
        "example": "LR Rotation Example:\n        [30] (BF = +2)\n       /\n     [10]   (BF = -1)\n       \\\n       [20]\n1. Left rotate on child 10 -> 20 becomes left child of 30, 10 is left of 20.\n2. Right rotate on 30 -> 20 becomes new root!\nResult:\n        [20]\n       /    \\\n     [10]   [30] (Balanced!)",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">LL (Right) and RR (Left) Rotations</div>\n  <div class=\"rotation-diagram-pair\">\n    <div class=\"rot-card\">\n      <strong>LL Rotation (Right Rotate)</strong>\n      <div class=\"rot-flow\">\n        <span>[A] (BF=+2)<br>/<br>[B] ➔ [C]</span>\n        <span class=\"r-arrow\">➔ Rotate Right ➔</span>\n        <span>&nbsp;&nbsp;[B]<br>&nbsp;/&nbsp;&nbsp;\\<br>[C]&nbsp;&nbsp;[A]</span>\n      </div>\n    </div>\n    <div class=\"rot-card\">\n      <strong>RR Rotation (Left Rotate)</strong>\n      <div class=\"rot-flow\">\n        <span>[A] (BF=-2)<br>\\<br>[B] ➔ [C]</span>\n        <span class=\"r-arrow\">➔ Rotate Left ➔</span>\n        <span>&nbsp;&nbsp;[B]<br>&nbsp;/&nbsp;&nbsp;\\<br>[A]&nbsp;&nbsp;[C]</span>\n      </div>\n    </div>\n  </div>\n</div>",
        "code": "// C Implementation of Left and Right Rotations\nstruct Node* rightRotate(struct Node *y) {\n    struct Node *x = y->left;\n    struct Node *T2 = x->right;\n\n    // Perform rotation\n    x->right = y;\n    y->left = T2;\n\n    // Update heights\n    y->height = max(height(y->left), height(y->right)) + 1;\n    x->height = max(height(x->left), height(x->right)) + 1;\n\n    return x; // New root\n}\n\nstruct Node* leftRotate(struct Node *x) {\n    struct Node *y = x->right;\n    struct Node *T2 = y->left;\n\n    // Perform rotation\n    y->left = x;\n    x->right = T2;\n\n    // Update heights\n    x->height = max(height(x->left), height(x->right)) + 1;\n    y->height = max(height(y->left), height(y->right)) + 1;\n\n    return y; // New root\n}",
        "complexity": {
          "time": "Every rotation: O(1) constant time (adjusts only 3-4 pointers)",
          "space": "O(1) auxiliary space",
          "notes": "Rotations perfectly preserve the BST Inorder sequence."
        },
        "examNotes": [
          {
            "type": "exam",
            "title": "Rotation Names Tip",
            "text": "LL insert -> Single Right rotate. RR insert -> Single Left rotate. LR insert -> Left rotate child, then Right rotate root!"
          }
        ]
      },
      {
        "id": "u6-t3",
        "title": "Step-by-Step AVL Tree Construction Example",
        "category": "AVL Construction",
        "readTime": "10 min",
        "definition": "A comprehensive, step-by-step walkthrough of **constructing an AVL Search Tree** by inserting the sequence: `[64, 1, 44, 26, 13, 110, 98, 85]` as presented in the college lecture slides (Slide 10).",
        "explanation": "<p>This exact sequence illustrates all rotation scenarios in practice.</p>\n\n<h4>Step-by-Step Construction</h4>\n<ol>\n  <li><strong>Insert 64:</strong>\n    Tree: <code>[64]</code> ($BF = 0$). Balanced.\n  </li>\n  <li><strong>Insert 1:</strong>\n    Tree: <code>[64]</code> (left: <code>1</code>). $BF(64) = +1$, $BF(1) = 0$. Balanced.\n  </li>\n  <li><strong>Insert 44:</strong>\n    Tree: <code>[64]</code> (left: <code>1</code> (right: <code>44</code>)).\n    $BF(64) = +2$, $BF(1) = -1$.\n    <br><strong>Violation: LR Case at Node 64!</strong>\n    <ul>\n      <li>Left rotate on node 1 ➔ 44 becomes left child of 64, 1 becomes left child of 44.</li>\n      <li>Right rotate on node 64 ➔ <strong>44 becomes new Root</strong>, with left child 1 and right child 64!</li>\n    </ul>\n    Tree after LR Rotation: Root <code>[44]</code>, left <code>[1]</code>, right <code>[64]</code>. All $BF = 0$!\n  </li>\n  <li><strong>Insert 26:</strong>\n    26 &lt; 44, 26 &gt; 1 ➔ attached as right child of 1.\n    $BF(44) = +1$, $BF(1) = -1$. Balanced.\n  </li>\n  <li><strong>Insert 13:</strong>\n    13 attached as left child of 26.\n    $BF(1) = -2$, $BF(26) = +1$.\n    <br><strong>Violation: RL Case at Node 1!</strong>\n    <ul>\n      <li>Right rotate on 26, Left rotate on 1.</li>\n      <li><strong>Node 26</strong> becomes child of 44 with left 1 (right: 13).</li>\n    </ul>\n  </li>\n  <li><strong>Insert 110:</strong>\n    110 &gt; 44, 110 &gt; 64 ➔ attached as right child of 64. Balanced.\n  </li>\n  <li><strong>Insert 98:</strong>\n    98 attached as left child of 110. Balanced.\n  </li>\n  <li><strong>Insert 85:</strong>\n    Triggers rebalancing in right subtree (RL Rotation on node 64).\n  </li>\n</ol>",
        "logic": "AVL Insertion Algorithm:\n1. Perform standard BST insertion.\n2. Update heights of ancestor nodes bottom-up.\n3. Get balance factor of current node.\n4. If unbalanced, apply one of 4 rotations (LL, RR, LR, RL).\n5. Return new root.",
        "example": "Final Balanced AVL Tree:\n          [44]\n        /      \\\n      [26]     [98]\n      /  \\     /   \\\n    [1]  [13] [64] [110]\n                 \\\n                 [85]\nEvery single node satisfies |BF| <= 1!",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Final AVL Tree for [64, 1, 44, 26, 13, 110, 98, 85]</div>\n  <div class=\"avl-final-vis\">\n    <div class=\"af-root\">[44] (BF = 0)</div>\n    <div class=\"af-branches\">\n      <div class=\"af-sub\">\n        [26]\n        <div class=\"af-leaves\">[1] & [13]</div>\n      </div>\n      <div class=\"af-sub\">\n        [98]\n        <div class=\"af-leaves\">[64 (85)] & [110]</div>\n      </div>\n    </div>\n  </div>\n</div>",
        "code": "// Complete Recursive AVL Insertion in C\nstruct Node* insertAVL(struct Node* node, int key) {\n    // 1. Standard BST insertion\n    if (node == NULL) return createNode(key);\n\n    if (key < node->key) node->left = insertAVL(node->left, key);\n    else if (key > node->key) node->right = insertAVL(node->right, key);\n    else return node; // Duplicate keys not allowed\n\n    // 2. Update height\n    node->height = 1 + max(height(node->left), height(node->right));\n\n    // 3. Get Balance Factor\n    int balance = getBalance(node);\n\n    // 4. Rebalance if needed\n    // LL Case\n    if (balance > 1 && key < node->left->key)\n        return rightRotate(node);\n\n    // RR Case\n    if (balance < -1 && key > node->right->key)\n        return leftRotate(node);\n\n    // LR Case\n    if (balance > 1 && key > node->left->key) {\n        node->left = leftRotate(node->left);\n        return rightRotate(node);\n    }\n\n    // RL Case\n    if (balance < -1 && key < node->right->key) {\n        node->right = rightRotate(node->right);\n        return leftRotate(node);\n    }\n\n    return node;\n}",
        "complexity": {
          "time": "Insertion: O(log n) total. Rotation: O(1).",
          "space": "O(log n) call stack space",
          "notes": "At most one rotation (single or double) is needed per insertion!"
        },
        "examNotes": [
          {
            "type": "exam",
            "title": "Textbook Numerical",
            "text": "This exact sequence (64, 1, 44, 26, 13, 110, 98, 85) is from College Slide 10. Draw all intermediate trees clearly to score full 10 marks!"
          }
        ]
      },
      {
        "id": "u6-t4",
        "title": "AVL Tree Deletion",
        "category": "AVL Deletion",
        "readTime": "7 min",
        "definition": "**AVL Deletion** removes a node using standard BST deletion rules, followed by bottom-up re-calculation of balance factors and rotations to restore the height-balanced property.",
        "explanation": "<p>Unlike insertion (where at most one rotation rebalances the entire tree), deletion may require multiple rotations propagating all the way up to the root.</p>\n\n<h4>Deletion Steps</h4>\n<ol>\n  <li>Perform standard BST deletion:\n    <ul>\n      <li>If leaf node: remove it.</li>\n      <li>If 1 child: replace with child.</li>\n      <li>If 2 children: replace with <strong>Inorder Successor</strong> (minimum in right subtree) and delete successor.</li>\n    </ul>\n  </li>\n  <li>Update heights of ancestor nodes bottom-up.</li>\n  <li>Check <code>balance = getBalance(node)</code> at each ancestor:\n    <ul>\n      <li><strong>LL Case:</strong> <code>balance &gt; 1</code> and <code>getBalance(node-&gt;left) &gt;= 0</code> ➔ <code>rightRotate(node)</code></li>\n      <li><strong>LR Case:</strong> <code>balance &gt; 1</code> and <code>getBalance(node-&gt;left) &lt; 0</code> ➔ <code>node-&gt;left = leftRotate(node-&gt;left); rightRotate(node)</code></li>\n      <li><strong>RR Case:</strong> <code>balance &lt; -1</code> and <code>getBalance(node-&gt;right) &lt;= 0</code> ➔ <code>leftRotate(node)</code></li>\n      <li><strong>RL Case:</strong> <code>balance &lt; -1</code> and <code>getBalance(node-&gt;right) &gt; 0</code> ➔ <code>node-&gt;right = rightRotate(node-&gt;right); leftRotate(node)</code></li>\n    </ul>\n  </li>\n</ol>",
        "logic": "Deletion Rebalancing Invariant:\nMay require O(log n) rotations in worst case (one at each level up to the root).",
        "example": "Deleting from AVL:\nDeleting a node from the right subtree makes the node Left-Heavy (BF becomes +2).\nLL or LR rotation is triggered to restore balance.",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">AVL Deletion & Rebalancing Cycle</div>\n  <div class=\"avl-del-cycle\">\n    <div class=\"c-step\">1. Standard BST Delete</div>\n    <div class=\"c-arrow\">➔</div>\n    <div class=\"c-step\">2. Trace back up to Root</div>\n    <div class=\"c-arrow\">➔</div>\n    <div class=\"c-step\">3. Re-calculate Balance Factors</div>\n    <div class=\"c-arrow\">➔</div>\n    <div class=\"c-step\">4. Apply Rotations if |BF| &gt; 1</div>\n  </div>\n</div>",
        "code": "// AVL Node Deletion in C (Core Logic)\nstruct Node* deleteNodeAVL(struct Node* root, int key) {\n    if (root == NULL) return root;\n\n    if (key < root->key) root->left = deleteNodeAVL(root->left, key);\n    else if (key > root->key) root->right = deleteNodeAVL(root->right, key);\n    else {\n        // Node with 0 or 1 child\n        if ((root->left == NULL) || (root->right == NULL)) {\n            struct Node *temp = root->left ? root->left : root->right;\n            if (temp == NULL) { temp = root; root = NULL; }\n            else *root = *temp;\n            free(temp);\n        } else {\n            // Node with 2 children: get inorder successor\n            struct Node* temp = minValueNode(root->right);\n            root->key = temp->key;\n            root->right = deleteNodeAVL(root->right, temp->key);\n        }\n    }\n    if (root == NULL) return root;\n\n    root->height = 1 + max(height(root->left), height(root->right));\n    int balance = getBalance(root);\n\n    // Rebalance 4 cases\n    if (balance > 1 && getBalance(root->left) >= 0) return rightRotate(root);\n    if (balance > 1 && getBalance(root->left) < 0) {\n        root->left = leftRotate(root->left);\n        return rightRotate(root);\n    }\n    if (balance < -1 && getBalance(root->right) <= 0) return leftRotate(root);\n    if (balance < -1 && getBalance(root->right) > 0) {\n        root->right = rightRotate(root->right);\n        return leftRotate(root);\n    }\n    return root;\n}",
        "complexity": {
          "time": "O(log n) total time",
          "space": "O(log n) recursion call stack",
          "notes": "Guaranteed logarithmic bounds under all operations."
        },
        "examNotes": [
          {
            "type": "exam",
            "title": "Insertion vs Deletion Rotations",
            "text": "Insertion requires at most ONE rotation to rebalance. Deletion may require up to O(log n) rotations up the tree."
          }
        ]
      },
      {
        "id": "u6-t5",
        "title": "Red-Black Trees: 5 Core Properties & Operations",
        "category": "Red-Black Trees",
        "readTime": "10 min",
        "definition": "A **Red-Black Tree** is a self-balancing binary search tree where each node contains an extra attribute: a **Color (Red or Black)**. It guarantees that no simple path from the root to a leaf is more than twice as long as any other path, bounding height to $\\le 2 \\log_2(n + 1)$.",
        "explanation": "<p>Red-Black Trees relax the strict height requirement of AVL trees, resulting in faster insertions and deletions (fewer rotations) while preserving $O(\\log n)$ search time.</p>\n\n<h4>The 5 Mandatory Red-Black Properties</h4>\n<ol>\n  <li><strong>Every node is either RED or BLACK.</strong></li>\n  <li><strong>The Root node is ALWAYS BLACK.</strong></li>\n  <li><strong>Every Leaf (NIL / null node) is BLACK.</strong></li>\n  <li><strong>If a node is RED, both of its children MUST BE BLACK.</strong> (There can NEVER be two consecutive RED nodes on any path!).</li>\n  <li><strong>For each node, every simple path from that node to any of its descendant NIL leaves contains the exact SAME number of BLACK nodes</strong> (Known as the <em>Black-Height</em>, $bh$).</li>\n</ol>\n\n<h4>Insertion Operation in Red-Black Trees</h4>\n<p>Step 1: Insert new node $Z$ as a <strong>RED</strong> node using standard BST insertion.</p>\n<p>Step 2: If $Z$ is root, recolor to BLACK. If parent of $Z$ is BLACK, no properties violated!</p>\n<p>Step 3: If parent of $Z$ is RED (Red-Red Violation), inspect the <strong>Uncle</strong> (sibling of parent):</p>\n<ul>\n  <li><strong>Case 1: Uncle is RED:</strong>\n    Recolor Parent and Uncle to BLACK, and Grandparent to RED. Propagate check upwards to Grandparent.\n  </li>\n  <li><strong>Case 2: Uncle is BLACK (Triangle / Zig-zag):</strong>\n    Perform rotation on Parent to turn Triangle into a Straight Line (Case 3).\n  </li>\n  <li><strong>Case 3: Uncle is BLACK (Line / Straight):</strong>\n    Perform rotation on Grandparent, and swap colors of Parent (becomes BLACK) and Grandparent (becomes RED).\n  </li>\n</ul>",
        "logic": "Red-Black Insertion Rules Summary:\nUncle RED? ➔ Recolor parent, uncle, grandparent (No rotation).\nUncle BLACK? ➔ Rotate and Recolor!",
        "example": "Red-Black Tree Insertion Walkthrough:\nInsert 10: Root ➔ Color BLACK.\nInsert 20: Child of 10 ➔ Color RED (Valid!).\nInsert 30: Child of 20 ➔ Color RED.\nViolation: Consecutive REDs (20 and 30).\nUncle of 30 is NIL (BLACK).\nCase 3 (Straight line 10 -> 20 -> 30):\nRotate Left on 10, Recolor 20 BLACK, 10 RED.\nResult: Root [20] (BLACK) with children [10] (RED) and [30] (RED). Valid!",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Red-Black Tree 5 Properties Visualized</div>\n  <div class=\"rb-tree-vis\">\n    <div class=\"rb-node black\">[20] (Root: BLACK)</div>\n    <div class=\"rb-branches\">\n      <div class=\"rb-node red\">[10] (RED)</div>\n      <div class=\"rb-node red\">[30] (RED)</div>\n    </div>\n    <div class=\"rb-leaves\">Leaves (NIL): All BLACK, Equal Black-Height = 2</div>\n  </div>\n</div>",
        "code": "// Node structure of Red-Black Tree in C\nenum Color { RED, BLACK };\n\nstruct RBNode {\n    int data;\n    enum Color color;\n    struct RBNode *left, *right, *parent;\n};",
        "complexity": {
          "time": "Search: O(log n), Insert: O(log n), Delete: O(log n)",
          "space": "O(n) with 1 color bit per node",
          "notes": "Used in C++ STL (std::map, std::set) and Linux kernel process schedulers."
        },
        "examNotes": [
          {
            "type": "exam",
            "title": "5 Red-Black Properties",
            "text": "Memorize all 5 properties verbatim! 1. Node is Red or Black. 2. Root is Black. 3. Leaves (NIL) are Black. 4. Red node has Black children. 5. Equal Black-Height on all paths."
          },
          {
            "type": "tip",
            "title": "AVL vs Red-Black",
            "text": "AVL is more strictly balanced (faster searches). Red-Black requires fewer rotations (faster inserts/deletes)."
          }
        ]
      }
    ]
  },
  {
    "id": 7,
    "unitNumber": 7,
    "title": "Unit 7: Graph",
    "shortTitle": "Unit 7: Graphs",
    "badge": "Non-Linear Networks",
    "summary": "Graph ADT definitions, Vertices, Edges, Directed vs Undirected, Cyclic vs Acyclic, Adjacency Matrix vs Adjacency List representations, Breadth-First Search (BFS) with queue, Depth-First Search (DFS) with stack, Complexity analyses, and Real-world applications (MST, Dijkstra, Networks).",
    "topics": [
      {
        "id": "u7-t1",
        "title": "Graph ADT, Terminologies & Classifications",
        "category": "Foundations",
        "readTime": "8 min",
        "definition": "A **Graph** $G = (V, E)$ is a non-linear data structure consisting of a non-empty set of **Vertices** (or nodes) $V$ and a set of **Edges** (connections or links between pairs of vertices) $E$.",
        "explanation": "<p>Graphs model complex networks where relationships are many-to-many, such as social networks, transport grids, and computer networks.</p>\n\n<h4>Core Graph Terminologies</h4>\n<ul>\n  <li><strong>Vertex / Node:</strong> An individual data entity in the graph (e.g., $A, B, C$).</li>\n  <li><strong>Edge:</strong> A pair $(u, v)$ representing a connection between vertex $u$ and vertex $v$.</li>\n  <li><strong>Adjacent Vertices:</strong> Two vertices are adjacent if an edge directly connects them.</li>\n  <li><strong>Degree of a Vertex:</strong> Total number of edges incident to that vertex in an undirected graph.</li>\n  <li><strong>In-Degree & Out-Degree (Directed Graphs):</strong>\n    <ul>\n      <li><em>In-Degree:</em> Number of incoming edges directed towards the vertex.</li>\n      <li><em>Out-Degree:</em> Number of outgoing edges directed away from the vertex.</li>\n    </ul>\n  </li>\n  <li><strong>Handshaking Lemma:</strong> The sum of degrees of all vertices equals twice the total number of edges:\n  $$\\sum_{v \\in V} \\text{deg}(v) = 2|E|$$\n  </li>\n  <li><strong>Path:</strong> A sequence of alternating vertices and edges connecting a start vertex to an end vertex.</li>\n  <li><strong>Simple Path:</strong> A path where all vertices are distinct.</li>\n  <li><strong>Cycle:</strong> A closed path starting and terminating at the exact same vertex.</li>\n  <li><strong>Connected Graph:</strong> An undirected graph where there is at least one path between every pair of vertices.</li>\n</ul>\n\n<h4>Graph Classifications</h4>\n<ol>\n  <li><strong>Directed Graph (Digraph):</strong> Edges have direction $(u \\to v)$. Movement is one-way.</li>\n  <li><strong>Undirected Graph:</strong> Edges are bidirectional $(u - v)$. Edge can be traversed both ways.</li>\n  <li><strong>Weighted vs Unweighted:</strong> Weighted graphs assign numerical costs/weights to edges (e.g., road distances, bandwidth).</li>\n  <li><strong>Cyclic vs Acyclic:</strong> Acyclic graphs contain no cycles. A Directed Acyclic Graph is called a **DAG**.</li>\n</ol>",
        "logic": "Handshaking Lemma Proof:\nEvery single edge has 2 endpoints and contributes exactly 1 to the degree of each of its two vertices.\nHence, Total Degree = 2 * Total Edges.",
        "example": "Undirected Graph:\nV = {A, B, C, D}\nE = {(A, B), (B, C), (C, D), (D, A), (A, C)}\nTotal Edges |E| = 5.\nDegrees:\ndeg(A) = 3 (B, D, C)\ndeg(B) = 2 (A, C)\ndeg(C) = 3 (B, D, A)\ndeg(D) = 2 (A, C)\nSum of degrees = 3 + 2 + 3 + 2 = 10 = 2 * 5! Verified!",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Graph Topologies: Undirected vs Directed vs Weighted</div>\n  <div class=\"graph-topologies\">\n    <div class=\"gt-box\"><strong>Undirected</strong><br>(A) ─── (B)<br>No arrows</div>\n    <div class=\"gt-box\"><strong>Directed</strong><br>(A) ──➔ (B)<br>One-way direction</div>\n    <div class=\"gt-box\"><strong>Weighted</strong><br>(A) ─[5]─ (B)<br>Edge cost / distance</div>\n  </div>\n</div>",
        "code": "// Representing an Edge in C\nstruct Edge {\n    int src;\n    int dest;\n    int weight;\n};",
        "complexity": {
          "time": "Degree computation: O(1) in matrix, O(deg(v)) in list",
          "space": "Vertices V, Edges E",
          "notes": "Trees are special cases of connected, acyclic undirected graphs."
        },
        "examNotes": [
          {
            "type": "formula",
            "title": "Handshaking Theorem",
            "text": "Sum of degrees = 2 * |E|. This implies the number of vertices with odd degree is ALWAYS EVEN!"
          },
          {
            "type": "exam",
            "title": "In-Degree vs Out-Degree",
            "text": "In directed graphs: Sum of in-degrees = Sum of out-degrees = Total edges |E|."
          }
        ]
      },
      {
        "id": "u7-t2",
        "title": "Graph Representations: Adjacency Matrix & Adjacency List",
        "category": "Representations",
        "readTime": "9 min",
        "definition": "Graphs are stored in computer memory primarily using either an **Adjacency Matrix** (a 2D array of size $V \\times V$) or an **Adjacency List** (an array of linked lists of size $V$).",
        "explanation": "<p>Choosing between matrix and list depends on whether the graph is <strong>Dense</strong> (many edges) or <strong>Sparse</strong> (few edges).</p>\n\n<h4>1. Adjacency Matrix</h4>\n<p>A 2D array <code>adj[V][V]</code> where:</p>\n<ul>\n  <li><code>adj[i][j] = 1</code> (or edge weight) if there is an edge from vertex $i$ to vertex $j$.</li>\n  <li><code>adj[i][j] = 0</code> (or $\\infty$) if no edge exists.</li>\n  <li>For an undirected graph, the matrix is always <strong>symmetric</strong> across the main diagonal: <code>adj[i][j] == adj[j][i]</code>.</li>\n  <li><strong>Space Complexity:</strong> $\\mathbf{\\Theta(V^2)}$ regardless of edge count.</li>\n  <li><strong>Pros:</strong> Checking if edge $(u, v)$ exists takes $O(1)$ time.</li>\n  <li><strong>Cons:</strong> Wastes memory for sparse graphs; iterating over all neighbors takes $O(V)$.</li>\n</ul>\n\n<h4>2. Adjacency List</h4>\n<p>An array of $|V|$ linked lists. Slot $i$ points to a linked list containing all vertices directly adjacent to vertex $i$.</p>\n<ul>\n  <li><strong>Space Complexity:</strong> $\\mathbf{\\Theta(V + E)}$ for directed graphs, $\\mathbf{\\Theta(V + 2E)}$ for undirected graphs.</li>\n  <li><strong>Pros:</strong> Optimal memory utilization for sparse graphs; finding neighbors takes $O(\\text{deg}(v))$.</li>\n  <li><strong>Cons:</strong> Checking if edge $(u, v)$ exists takes $O(\\text{deg}(u))$ traversal time.</li>\n</ul>",
        "logic": "Comparison Table:\nFeature                 | Adjacency Matrix   | Adjacency List\n------------------------|--------------------|---------------------\nSpace                   | O(V^2)             | O(V + E)\nCheck if (u, v) exists  | O(1)               | O(deg(u))\nFind all neighbors of u | O(V)               | O(deg(u))\nAdd / Remove Vertex     | O(V^2) (realloc)   | O(1) / O(V)\nBest suited for         | Dense Graphs       | Sparse Graphs",
        "example": "Graph with Vertices {0, 1, 2} and Edges (0-1), (1-2):\n1. Adjacency Matrix (3x3):\n      0  1  2\n   0 [0, 1, 0]\n   1 [1, 0, 1]\n   2 [0, 1, 0]\n\n2. Adjacency List:\n   0: ➔ [1 | NULL]\n   1: ➔ [0 | •] ➔ [2 | NULL]\n   2: ➔ [1 | NULL]",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Adjacency Matrix vs Adjacency List Visualized</div>\n  <div class=\"rep-comp-grid\">\n    <div class=\"matrix-card\">\n      <strong>Adjacency Matrix [V × V]</strong>\n      <div class=\"grid-table-mock\">\n        <span>0, 1, 0</span><br>\n        <span>1, 0, 1</span><br>\n        <span>0, 1, 0</span>\n      </div>\n      <small>Space: O(V^2)</small>\n    </div>\n    <div class=\"list-card\">\n      <strong>Adjacency List [V Lists]</strong>\n      <div class=\"list-mock\">\n        0 ➔ [1]<br>\n        1 ➔ [0] ➔ [2]<br>\n        2 ➔ [1]\n      </div>\n      <small>Space: O(V + E)</small>\n    </div>\n  </div>\n</div>",
        "code": "// Adjacency Matrix and List in C\n// include <stdio.h>\n// include <stdlib.h>\n// define V 4\n\n// 1. Matrix\nint adjMatrix[V][V];\nvoid addEdgeMatrix(int u, int v) {\n    adjMatrix[u][v] = 1;\n    adjMatrix[v][u] = 1; // Undirected\n}\n\n// 2. List Node\nstruct AdjListNode {\n    int dest;\n    struct AdjListNode* next;\n};\nstruct AdjList {\n    struct AdjListNode *head;\n};\n\nvoid addEdgeList(struct AdjList array[], int src, int dest) {\n    // Add edge from src to dest\n    struct AdjListNode* newNode = (struct AdjListNode*) malloc(sizeof(struct AdjListNode));\n    newNode->dest = dest;\n    newNode->next = array[src].head;\n    array[src].head = newNode;\n}",
        "complexity": {
          "time": "Matrix edge query: O(1). List edge query: O(deg(u)).",
          "space": "Matrix: O(V^2). List: O(V + E).",
          "notes": "Most real-world networks (Web, Facebook, Road networks) are extremely sparse, making Adjacency Lists the standard choice."
        },
        "examNotes": [
          {
            "type": "exam",
            "title": "Matrix vs List Question",
            "text": "Frequently asked 7-mark question: Differentiate between Adjacency Matrix and Adjacency List with diagrams and complexity comparisons!"
          }
        ]
      },
      {
        "id": "u7-t3",
        "title": "Breadth-First Search (BFS) Traversal",
        "category": "Traversals",
        "readTime": "9 min",
        "definition": "**Breadth-First Search (BFS)** is a graph traversal algorithm that explores the graph **level by level** (in breadth-ward motion) outward from a starting vertex using a **Queue** and a boolean **`visited[]`** array.",
        "explanation": "<p>BFS visits all direct neighbors of the source vertex (distance 1) before moving on to neighbors' neighbors (distance 2), guaranteeing the shortest path in unweighted graphs.</p>\n\n<h4>BFS Algorithm Steps</h4>\n<ol>\n  <li>Initialize a boolean array <code>visited[V]</code> to <code>false</code> and an empty <code>Queue</code>.</li>\n  <li>Mark the starting vertex <code>s</code> as visited: <code>visited[s] = true</code>, and enqueue <code>s</code>.</li>\n  <li>While the <code>Queue</code> is not empty:\n    <ol>\n      <li>Dequeue front vertex: <code>u = dequeue()</code>.</li>\n      <li>Process/Print vertex <code>u</code>.</li>\n      <li>For each adjacent neighbor <code>v</code> of <code>u</code>:\n        <ul>\n          <li>If <code>visited[v] == false</code>:\n            <ul>\n              <li>Mark <code>visited[v] = true</code>.</li>\n              <li>Enqueue <code>v</code>.</li>\n            </ul>\n          </li>\n        </ul>\n      </li>\n    </ol>\n  </li>\n</ol>\n\n<h4>BFS Spanning Tree</h4>\n<p>The edges traversed to discover previously unvisited vertices form a spanning tree called the <strong>BFS Tree</strong>. Remaining edges that connect vertices on the same or adjacent levels are called <em>Cross Edges</em>.</p>",
        "logic": "BFS Complexity Analysis:\nEvery vertex is enqueued and dequeued exactly once: O(V).\nFor each dequeued vertex, all its incident edges are scanned: O(E).\nTotal Time Complexity = O(V + E).\nSpace Complexity = O(V) for Queue and visited array.",
        "example": "Walkthrough on Graph:\nVertices: {0, 1, 2, 3}\nEdges: (0-1), (0-2), (1-2), (2-0), (2-3), (3-3)\nStart from Vertex 2:\n1. Visited: [2]. Queue: [2].\n2. Dequeue 2 -> Output: 2.\n   Neighbors of 2 are 0 and 3.\n   Visited: [2, 0, 3]. Queue: [0, 3].\n3. Dequeue 0 -> Output: 0.\n   Neighbors of 0 are 1 and 2. 2 is already visited. Visit 1!\n   Visited: [2, 0, 3, 1]. Queue: [3, 1].\n4. Dequeue 3 -> Output: 3.\n5. Dequeue 1 -> Output: 1.\nFinal BFS Traversal Order: 2 -> 0 -> 3 -> 1.",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">BFS Level-by-Level Wavefront</div>\n  <div class=\"bfs-wave\">\n    <div class=\"wave-layer l0\">Level 0: [ Start Node ] (Distance = 0)</div>\n    <div class=\"wave-layer l1\">Level 1: [ Direct Neighbors ] (Distance = 1)</div>\n    <div class=\"wave-layer l2\">Level 2: [ Neighbors' Neighbors ] (Distance = 2)</div>\n  </div>\n</div>",
        "code": "// Breadth-First Search (BFS) in C\n// include <stdio.h>\n// include <stdbool.h>\n// define MAX 100\n\nint queue[MAX], front = -1, rear = -1;\nvoid enqueue(int v) {\n    if (front == -1) front = 0;\n    queue[++rear] = v;\n}\nint dequeue() { return queue[front++]; }\nbool isQueueEmpty() { return front == -1 || front > rear; }\n\nvoid bfs(int adjMatrix[MAX][MAX], int V, int startVertex) {\n    bool visited[MAX] = {false};\n\n    visited[startVertex] = true;\n    enqueue(startVertex);\n\n    printf(\"BFS Traversal: \");\n    while (!isQueueEmpty()) {\n        int curr = dequeue();\n        printf(\"%d \", curr);\n\n        for (int i = 0; i < V; i++) {\n            if (adjMatrix[curr][i] == 1 && !visited[i]) {\n                visited[i] = true;\n                enqueue(i);\n            }\n        }\n    }\n    printf(\"\\n\");\n}",
        "complexity": {
          "time": "O(V + E) using Adjacency List; O(V^2) using Adjacency Matrix",
          "space": "O(V) for queue and visited array",
          "notes": "Finds shortest path in unweighted graphs."
        },
        "examNotes": [
          {
            "type": "exam",
            "title": "Data Structure for BFS",
            "text": "BFS strictly uses a QUEUE. DFS strictly uses a STACK. Very common exam question!"
          }
        ]
      },
      {
        "id": "u7-t4",
        "title": "Depth-First Search (DFS) Traversal",
        "category": "Traversals",
        "readTime": "9 min",
        "definition": "**Depth-First Search (DFS)** is a graph traversal algorithm that explores as deep as possible along each branch before **backtracking**, implemented using a **Stack** (or recursion) and a boolean **`visited[]`** array.",
        "explanation": "<p>DFS plunges down a path until it hits a dead end, then backtracks to the most recent vertex with unexplored incident edges.</p>\n\n<h4>DFS Algorithm Steps (Recursive)</h4>\n<ol>\n  <li>Initialize a boolean array <code>visited[V]</code> to <code>false</code>.</li>\n  <li>Call <code>DFS(startVertex)</code>:\n    <ol>\n      <li>Mark <code>startVertex</code> as visited: <code>visited[startVertex] = true</code>.</li>\n      <li>Process/Print <code>startVertex</code>.</li>\n      <li>For each adjacent neighbor <code>v</code> of <code>startVertex</code>:\n        <ul>\n          <li>If <code>visited[v] == false</code>: recursively call <code>DFS(v)</code>.</li>\n        </ul>\n      </li>\n    </ol>\n  </li>\n</ol>\n\n<h4>Edge Classification in DFS</h4>\n<ul>\n  <li><strong>Discovery Edges (Tree Edges):</strong> Edges that lead to an unvisited vertex. They form the <strong>DFS Spanning Tree</strong>.</li>\n  <li><strong>Back Edges:</strong> Edges that lead to an already visited ancestor node. Back edges indicate the presence of a <strong>Cycle</strong>!</li>\n</ul>",
        "logic": "DFS Complexity Analysis:\nVisits every vertex: O(V).\nTraverses every edge once: O(E).\nTotal Time Complexity = O(V + E).\nSpace Complexity = O(V) for system call stack in worst case.",
        "example": "Walkthrough on Graph:\nVertices: {0, 1, 2, 3}\nEdges: (0-1), (0-2), (1-2), (2-0), (2-3), (3-3)\nStart from Vertex 2:\n1. Visit 2 -> Output: 2.\n2. First neighbor of 2 is 0 -> Visit 0 -> Output: 0.\n3. First neighbor of 0 is 1 -> Visit 1 -> Output: 1.\n4. Neighbors of 1: 2 (already visited). Dead end! Backtrack to 0.\n5. Backtrack to 2.\n6. Next unvisited neighbor of 2 is 3 -> Visit 3 -> Output: 3.\nFinal DFS Traversal Order: 2 -> 0 -> 1 -> 3.",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">DFS Deep Branch Exploration & Backtracking</div>\n  <div class=\"dfs-dive\">\n    <div class=\"dive-step\">Dive: [2] ➔ [0] ➔ [1] (Dead End)</div>\n    <div class=\"dive-back\">↩ Backtrack to [2]</div>\n    <div class=\"dive-step\">Explore alternate branch: [2] ➔ [3]</div>\n  </div>\n</div>",
        "code": "// Depth-First Search (DFS) in C (Recursive)\n// include <stdio.h>\n// include <stdbool.h>\n// define MAX 100\n\nbool visited[MAX];\n\nvoid dfs(int adjMatrix[MAX][MAX], int V, int u) {\n    visited[u] = true;\n    printf(\"%d \", u);\n\n    for (int v = 0; v < V; v++) {\n        if (adjMatrix[u][v] == 1 && !visited[v]) {\n            dfs(adjMatrix, V, v); // Recursive dive\n        }\n    }\n}\n\nvoid runDFS(int adjMatrix[MAX][MAX], int V, int start) {\n    for (int i = 0; i < V; i++) visited[i] = false;\n    printf(\"DFS Traversal: \");\n    dfs(adjMatrix, V, start);\n    printf(\"\\n\");\n}",
        "complexity": {
          "time": "O(V + E) using Adjacency List; O(V^2) using Adjacency Matrix",
          "space": "O(V) for recursion call stack",
          "notes": "Back edges discovered during DFS detect cycles in graphs."
        },
        "examNotes": [
          {
            "type": "exam",
            "title": "Cycle Detection Rule",
            "text": "A graph has a cycle if and only if its DFS traversal discovers a BACK EDGE!"
          },
          {
            "type": "tip",
            "title": "BFS vs DFS Summary",
            "text": "BFS uses Queue (level-order, shortest path). DFS uses Stack (deep exploration, backtracking, topological sort, cycle detection)."
          }
        ]
      },
      {
        "id": "u7-t5",
        "title": "Applications of Graphs (MST, Shortest Path & Networks)",
        "category": "Applications",
        "readTime": "6 min",
        "definition": "Graphs are utilized across Computer Science and Engineering to solve **Minimum Spanning Tree (MST)** problems, **Shortest Path** routing, **Topological Sorting**, and **Utility Networks**.",
        "explanation": "<p>Major classical algorithms and real-world systems based on graphs include:</p>\n\n<h4>1. Minimum Spanning Trees (MST)</h4>\n<p>An MST of a connected, weighted undirected graph is a subgraph that is a tree and connects all vertices with the <em>minimum possible total edge weight</em>.</p>\n<ul>\n  <li><strong>Prim’s Algorithm:</strong> Greedy algorithm starting from a single node and growing the MST by greedily adding the cheapest edge connected to an unvisited vertex ($O(E \\log V)$).</li>\n  <li><strong>Kruskal’s Algorithm:</strong> Greedy algorithm that sorts all edges by weight and adds edges one-by-one unless it forms a cycle (using Disjoint Set / Union-Find) ($O(E \\log E)$).</li>\n</ul>\n\n<h4>2. Shortest Path Problems</h4>\n<ul>\n  <li><strong>Dijkstra’s Algorithm:</strong> Finds the shortest path from a single source vertex to all other vertices in a weighted graph with non-negative edge weights ($O((V + E) \\log V)$ with min-heap priority queue).</li>\n  <li><strong>Bellman-Ford Algorithm:</strong> Handles graphs with negative edge weights ($O(V \\cdot E)$).</li>\n</ul>\n\n<h4>3. Topological Sorting</h4>\n<p>Linear ordering of vertices in a Directed Acyclic Graph (DAG) such that for every directed edge $u \\to v$, vertex $u$ comes before $v$. Used for build systems (Makefile dependencies), course prerequisites, and job scheduling.</p>\n\n<h4>4. Real-World Utility & Network Graphs</h4>\n<ul>\n  <li><strong>Computer Networks:</strong> IP packet routing via Open Shortest Path First (OSPF) using Dijkstra's algorithm.</li>\n  <li><strong>Social Networks:</strong> Friend recommendations and degrees of separation (Facebook, LinkedIn).</li>\n  <li><strong>Physical Utilities:</strong> Electrical power grid distribution, municipal water piping networks, road map GPS routing (Google Maps).</li>\n</ul>",
        "logic": "MST Edge Count Property:\nFor any connected graph with V vertices, any Spanning Tree has exactly V - 1 edges!",
        "example": "MST Example:\nGraph with 4 vertices: A, B, C, D.\nEdges: (A-B: 1), (B-C: 2), (C-D: 3), (A-D: 10), (B-D: 4).\nKruskal picks:\n1. (A-B: 1)\n2. (B-C: 2)\n3. (C-D: 3)\nTotal weight = 1 + 2 + 3 = 6 (V - 1 = 3 edges, connects all 4 vertices!).",
        "diagram": "<div class=\"nb-diagram\">\n  <div class=\"diagram-caption\">Graph Applications Ecosystem</div>\n  <div class=\"apps-grid\">\n    <div class=\"app-card\">🌐 <strong>Networking</strong><br>Routing & OSPF (Dijkstra)</div>\n    <div class=\"app-card\">⚡ <strong>Utility Grids</strong><br>Power, water distribution (MST)</div>\n    <div class=\"app-card\">🗓️ <strong>Task Scheduling</strong><br>Dependencies (Topological Sort)</div>\n    <div class=\"app-card\">🗺️ <strong>GPS Navigation</strong><br>Shortest distance paths</div>\n  </div>\n</div>",
        "code": "// Concept of Minimum Spanning Tree condition\nint isMST(int edgesCount, int verticesCount) {\n    // An MST must contain exactly V - 1 edges\n    return (edgesCount == verticesCount - 1);\n}",
        "complexity": {
          "time": "Prim's: O(E log V), Kruskal's: O(E log E), Dijkstra's: O((V + E) log V)",
          "space": "O(V + E) graph representation + priority queues",
          "notes": "Essential algorithms tested in almost all competitive coding and university exams."
        },
        "examNotes": [
          {
            "type": "exam",
            "title": "Prim vs Kruskal",
            "text": "Prim's grows a single tree vertex-by-vertex. Kruskal's adds edges globally in sorted order avoiding cycles."
          },
          {
            "type": "formula",
            "title": "Spanning Tree Edges",
            "text": "Every spanning tree of a graph with V vertices has exactly V - 1 edges. Never forget this formula!"
          }
        ]
      }
    ]
  }
];

// App State
let currentUnitIdx = 0;
let currentTopicIdx = 0;
let searchModalOpen = false;

// DOM Elements
const elements = {
  themeToggle: document.getElementById('theme-toggle'),
  unitSelector: document.getElementById('unit-selector-container'),
  topicNavList: document.getElementById('topic-nav-list'),
  sidebar: document.getElementById('notebook-sidebar'),
  menuToggleBtn: document.getElementById('mobile-menu-btn'),
  sidebarOverlay: document.getElementById('sidebar-overlay'),
  contentArea: document.getElementById('notebook-content'),
  breadcrumbUnit: document.getElementById('bc-unit'),
  breadcrumbTopic: document.getElementById('bc-topic'),
  searchBtn: document.getElementById('search-trigger-btn'),
  searchModal: document.getElementById('search-modal'),
  searchInput: document.getElementById('search-input'),
  searchResults: document.getElementById('search-results'),
  searchCloseBtn: document.getElementById('search-close-btn')
};

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem('dsa_notebook_theme') || 'light';
  applyTheme(savedTheme);
  
  if (elements.themeToggle) {
    elements.themeToggle.checked = (savedTheme === 'dark');
    elements.themeToggle.addEventListener('change', (e) => {
      const newTheme = e.target.checked ? 'dark' : 'light';
      applyTheme(newTheme);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('dsa_notebook_theme', theme);
}

// Unit Glider & Tabs Rendering
function renderUnitSelector() {
  if (!elements.unitSelector) return;
  
  let html = `
    <div class="radio-container" style="--total-radio: ${dsaUnits.length};">
  `;
  
  dsaUnits.forEach((unit, idx) => {
    const isChecked = idx === currentUnitIdx ? 'checked' : '';
    html += `
      <input type="radio" name="dsa-unit-radio" id="unit-radio-${idx}" ${isChecked} data-unit-idx="${idx}" />
      <label for="unit-radio-${idx}" title="${unit.title}">
        <span class="unit-num">U${unit.id}</span>
        <span class="unit-title-short">${unit.shortTitle.split(':')[1] || unit.shortTitle}</span>
      </label>
    `;
  });
  
  html += `
      <div class="glider-container">
        <div class="glider"></div>
      </div>
    </div>
  `;
  
  elements.unitSelector.innerHTML = html;
  
  // Attach change listener to radio buttons
  const radios = elements.unitSelector.querySelectorAll('input[name="dsa-unit-radio"]');
  radios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      const uIdx = parseInt(e.target.getAttribute('data-unit-idx'), 10);
      selectUnit(uIdx, 0);
    });
  });
}

function updateUnitGliderPosition() {
  const radios = document.querySelectorAll('input[name="dsa-unit-radio"]');
  if (radios[currentUnitIdx]) {
    radios[currentUnitIdx].checked = true;
  }
}

// Topic Navigation Rendering
function renderTopicNav() {
  if (!elements.topicNavList) return;
  
  const unit = dsaUnits[currentUnitIdx];
  let html = `
    <div class="sidebar-unit-header">
      <div class="sub-badge">${unit.badge}</div>
      <h3 class="sidebar-unit-title">${unit.title}</h3>
      <div class="topic-count">${unit.topics.length} Exam Topics</div>
    </div>
    <ul class="topic-items-list" role="list">
  `;
  
  unit.topics.forEach((topic, tIdx) => {
    const isActive = tIdx === currentTopicIdx;
    html += `
      <li class="topic-item ${isActive ? 'active' : ''}" data-topic-idx="${tIdx}">
        <button class="topic-btn" aria-current="${isActive ? 'true' : 'false'}">
          <span class="topic-bullet">${tIdx + 1}</span>
          <div class="topic-btn-text">
            <span class="t-name">${topic.title}</span>
            <span class="t-meta">${topic.readTime} • ${topic.category}</span>
          </div>
        </button>
      </li>
    `;
  });
  
  html += '</ul>';
  elements.topicNavList.innerHTML = html;
  
  // Attach topic click events
  const topicBtns = elements.topicNavList.querySelectorAll('.topic-item');
  topicBtns.forEach(item => {
    item.addEventListener('click', () => {
      const tIdx = parseInt(item.getAttribute('data-topic-idx'), 10);
      selectTopic(tIdx);
      if (window.innerWidth < 1024) {
        closeSidebar();
      }
    });
  });
}

// Topic Content Rendering
function renderTopicContent() {
  if (!elements.contentArea) return;
  
  const unit = dsaUnits[currentUnitIdx];
  const topic = unit.topics[currentTopicIdx];
  
  // Update Breadcrumbs
  if (elements.breadcrumbUnit) elements.breadcrumbUnit.textContent = unit.shortTitle;
  if (elements.breadcrumbTopic) elements.breadcrumbTopic.textContent = topic.title;
  
  // Build Exam Notes HTML
  let examNotesHtml = '';
  if (topic.examNotes && topic.examNotes.length > 0) {
    examNotesHtml = `
      <div class="notebook-section exam-notes-section">
        <h3 class="section-handwritten-title">🎯 Exam Hotspots & Sticky Notes</h3>
        <div class="sticky-notes-grid">
          ${topic.examNotes.map(n => `
            <div class="sticky-note ${n.type}-note">
              <div class="pin">📌</div>
              <div class="sticky-title">${n.title}</div>
              <div class="sticky-body">${n.text}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  
  // Build Complexity Card HTML
  let complexityHtml = '';
  if (topic.complexity) {
    complexityHtml = `
      <div class="notebook-section complexity-section">
        <h3 class="section-handwritten-title">⏱️ Complexity Analysis</h3>
        <div class="complexity-grid">
          <div class="comp-card time-card">
            <div class="comp-label">Time Complexity</div>
            <div class="comp-val">${topic.complexity.time}</div>
          </div>
          <div class="comp-card space-card">
            <div class="comp-label">Space Complexity</div>
            <div class="comp-val">${topic.complexity.space}</div>
          </div>
        </div>
        ${topic.complexity.notes ? `<div class="comp-notes">💡 ${topic.complexity.notes}</div>` : ''}
      </div>
    `;
  }
  
  // Code Block with Copy Button
  let codeHtml = '';
  if (topic.code) {
    const escapedCode = escapeHtml(topic.code);
    codeHtml = `
      <div class="notebook-section code-section">
        <div class="code-card-header">
          <div class="code-title">💻 C / C++ Implementation</div>
          <button class="copy-code-btn" data-code="${encodeURIComponent(topic.code)}">
            <span class="copy-icon">📋</span> <span class="copy-label">Copy Code</span>
          </button>
        </div>
        <pre class="notebook-code-block"><code>${escapedCode}</code></pre>
      </div>
    `;
  }
  
  // Diagram Card
  let diagramHtml = '';
  if (topic.diagram) {
    diagramHtml = `
      <div class="notebook-section diagram-section">
        <h3 class="section-handwritten-title">🎨 Visual Notebook Diagram</h3>
        <div class="diagram-canvas-card">
          ${topic.diagram}
        </div>
      </div>
    `;
  }
  
  // Prev / Next Navigation Buttons
  const hasPrev = !(currentUnitIdx === 0 && currentTopicIdx === 0);
  const isLastInUnit = currentTopicIdx === unit.topics.length - 1;
  const isLastUnit = currentUnitIdx === dsaUnits.length - 1;
  const hasNext = !(isLastUnit && isLastInUnit);
  
  let prevTopicName = 'Previous';
  if (hasPrev) {
    if (currentTopicIdx > 0) {
      prevTopicName = unit.topics[currentTopicIdx - 1].title;
    } else {
      const prevU = dsaUnits[currentUnitIdx - 1];
      prevTopicName = `U${prevU.id}: ${prevU.topics[prevU.topics.length - 1].title}`;
    }
  }
  
  let nextTopicName = 'Next';
  if (hasNext) {
    if (currentTopicIdx < unit.topics.length - 1) {
      nextTopicName = unit.topics[currentTopicIdx + 1].title;
    } else {
      const nextU = dsaUnits[currentUnitIdx + 1];
      nextTopicName = `U${nextU.id}: ${nextU.topics[0].title}`;
    }
  }
  
  const bottomNavHtml = `
    <div class="notebook-bottom-nav">
      <button class="nav-page-btn prev-btn ${!hasPrev ? 'disabled' : ''}" ${!hasPrev ? 'disabled' : ''} id="bottom-prev-btn">
        <span class="arrow">←</span>
        <div class="btn-text">
          <small>Previous Topic</small>
          <strong>${prevTopicName}</strong>
        </div>
      </button>
      
      <div class="page-indicator-pill">
        Topic ${currentTopicIdx + 1} of ${unit.topics.length}
      </div>
      
      <button class="nav-page-btn next-btn ${!hasNext ? 'disabled' : ''}" ${!hasNext ? 'disabled' : ''} id="bottom-next-btn">
        <div class="btn-text">
          <small>Next Topic</small>
          <strong>${nextTopicName}</strong>
        </div>
        <span class="arrow">→</span>
      </button>
    </div>
  `;

  // Render Full Notebook Page
  elements.contentArea.innerHTML = `
    <article class="notebook-page">
      <!-- Spiral binder rings on mobile/desktop -->
      <div class="notebook-rings" aria-hidden="true">
        <span class="ring"></span><span class="ring"></span><span class="ring"></span>
        <span class="ring"></span><span class="ring"></span><span class="ring"></span>
      </div>

      <header class="topic-header">
        <div class="topic-meta-row">
          <span class="unit-tag">${unit.shortTitle}</span>
          <span class="category-tag">${topic.category}</span>
          <span class="time-tag">⏱️ ${topic.readTime}</span>
        </div>
        <h1 class="topic-main-title">${topic.title}</h1>
      </header>
      
      <!-- Definition Box -->
      <section class="notebook-section definition-box">
        <div class="washi-tape"></div>
        <h3 class="section-handwritten-title">📌 Exam Definition</h3>
        <div class="def-content">${renderMarkdownText(topic.definition)}</div>
      </section>

      <!-- Explanation & Concept -->
      <section class="notebook-section explanation-section">
        <h3 class="section-handwritten-title">📝 Core Concept & Detailed Notes</h3>
        <div class="exp-content">${topic.explanation}</div>
      </section>

      <!-- Algorithm / Logic -->
      ${topic.logic ? `
        <section class="notebook-section logic-section">
          <h3 class="section-handwritten-title">⚙️ Algorithm & Working Logic</h3>
          <pre class="logic-pre"><code>${escapeHtml(topic.logic)}</code></pre>
        </section>
      ` : ''}

      <!-- Practical Trace / Example -->
      ${topic.example ? `
        <section class="notebook-section example-section">
          <h3 class="section-handwritten-title">📊 Step-by-Step Example & Trace</h3>
          <div class="example-card">
            <pre class="example-pre"><code>${escapeHtml(topic.example)}</code></pre>
          </div>
        </section>
      ` : ''}

      <!-- Diagram -->
      ${diagramHtml}

      <!-- C/C++ Code -->
      ${codeHtml}

      <!-- Complexity -->
      ${complexityHtml}

      <!-- Exam Notes / Sticky Notes -->
      ${examNotesHtml}

      <!-- Bottom Nav -->
      ${bottomNavHtml}
    </article>
  `;
  
  // Attach Copy Buttons
  const copyBtns = elements.contentArea.querySelectorAll('.copy-code-btn');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const rawCode = decodeURIComponent(btn.getAttribute('data-code'));
      navigator.clipboard.writeText(rawCode).then(() => {
        const label = btn.querySelector('.copy-label');
        const origText = label.textContent;
        label.textContent = 'Copied! ✓';
        btn.classList.add('copied');
        setTimeout(() => {
          label.textContent = origText;
          btn.classList.remove('copied');
        }, 2000);
      });
    });
  });

  // Attach Bottom Nav Listeners
  const prevBtn = document.getElementById('bottom-prev-btn');
  const nextBtn = document.getElementById('bottom-next-btn');
  if (prevBtn) prevBtn.addEventListener('click', goToPrevTopic);
  if (nextBtn) nextBtn.addEventListener('click', goToNextTopic);

  // Scroll to top of notebook content
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Navigation Handlers
function selectUnit(uIdx, tIdx = 0) {
  if (uIdx < 0 || uIdx >= dsaUnits.length) return;
  currentUnitIdx = uIdx;
  currentTopicIdx = tIdx;
  updateUnitGliderPosition();
  renderTopicNav();
  renderTopicContent();
}

function selectTopic(tIdx) {
  const unit = dsaUnits[currentUnitIdx];
  if (tIdx < 0 || tIdx >= unit.topics.length) return;
  currentTopicIdx = tIdx;
  renderTopicNav();
  renderTopicContent();
}

function goToPrevTopic() {
  if (currentTopicIdx > 0) {
    selectTopic(currentTopicIdx - 1);
  } else if (currentUnitIdx > 0) {
    const prevUnit = dsaUnits[currentUnitIdx - 1];
    selectUnit(currentUnitIdx - 1, prevUnit.topics.length - 1);
  }
}

function goToNextTopic() {
  const currentUnit = dsaUnits[currentUnitIdx];
  if (currentTopicIdx < currentUnit.topics.length - 1) {
    selectTopic(currentTopicIdx + 1);
  } else if (currentUnitIdx < dsaUnits.length - 1) {
    selectUnit(currentUnitIdx + 1, 0);
  }
}

// Search Feature across all 7 units
function setupSearch() {
  // Build Search Index
  const searchIndex = [];
  dsaUnits.forEach((unit, uIdx) => {
    unit.topics.forEach((topic, tIdx) => {
      searchIndex.push({
        unitIndex: uIdx,
        topicIndex: tIdx,
        unitTitle: unit.title,
        unitShort: unit.shortTitle,
        unitId: unit.id,
        title: topic.title,
        category: topic.category,
        definition: topic.definition,
        code: topic.code || '',
        example: topic.example || '',
        keywords: `${topic.title} ${topic.category} ${topic.definition} ${topic.example} ${topic.code}`.toLowerCase()
      });
    });
  });

  function openSearch() {
    searchModalOpen = true;
    elements.searchModal.classList.add('active');
    elements.searchInput.value = '';
    renderSearchResults(searchIndex.slice(0, 10), '');
    setTimeout(() => elements.searchInput.focus(), 100);
  }

  function closeSearch() {
    searchModalOpen = false;
    elements.searchModal.classList.remove('active');
  }

  if (elements.searchBtn) elements.searchBtn.addEventListener('click', openSearch);
  if (elements.searchCloseBtn) elements.searchCloseBtn.addEventListener('click', closeSearch);

  // Click outside to close
  elements.searchModal.addEventListener('click', (e) => {
    if (e.target === elements.searchModal) closeSearch();
  });

  // Search input typing
  elements.searchInput.addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    if (!q) {
      renderSearchResults(searchIndex.slice(0, 10), '');
      return;
    }
    const filtered = searchIndex.filter(item => item.keywords.includes(q));
    renderSearchResults(filtered, q);
  });

  function renderSearchResults(results, query) {
    if (!elements.searchResults) return;
    if (results.length === 0) {
      elements.searchResults.innerHTML = `
        <div class="no-results">
          <span class="no-res-icon">🔍</span>
          <p>No topic matching "<strong>${escapeHtml(query)}</strong>" found in any of the 7 units.</p>
          <small>Try searching for: AVL, Circular Queue, Dijkstra, Infix, Binary Search, etc.</small>
        </div>
      `;
      return;
    }

    let html = `<div class="results-meta">Found ${results.length} matching topics across 7 units:</div>`;
    results.forEach(res => {
      const highlightedTitle = highlightMatch(res.title, query);
      html += `
        <div class="search-result-card" data-uidx="${res.unitIndex}" data-tidx="${res.topicIndex}">
          <div class="res-unit-badge">Unit ${res.unitId}: ${res.unitShort.split(':')[1] || res.unitShort}</div>
          <h4 class="res-title">${highlightedTitle}</h4>
          <div class="res-category">${res.category}</div>
        </div>
      `;
    });

    elements.searchResults.innerHTML = html;

    const cards = elements.searchResults.querySelectorAll('.search-result-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const u = parseInt(card.getAttribute('data-uidx'), 10);
        const t = parseInt(card.getAttribute('data-tidx'), 10);
        selectUnit(u, t);
        closeSearch();
      });
    });
  }

  function highlightMatch(text, q) {
    if (!q) return escapeHtml(text);
    const escapedQ = q.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`(${escapedQ})`, 'gi');
    return escapeHtml(text).replace(regex, '<mark class="hl-search">$1</mark>');
  }
}

// Mobile Sidebar Drawer
function setupMobileMenu() {
  if (elements.menuToggleBtn) {
    elements.menuToggleBtn.addEventListener('click', () => {
      elements.sidebar.classList.toggle('open');
      elements.sidebarOverlay.classList.toggle('active');
    });
  }
  if (elements.sidebarOverlay) {
    elements.sidebarOverlay.addEventListener('click', closeSidebar);
  }
}

function closeSidebar() {
  if (elements.sidebar) elements.sidebar.classList.remove('open');
  if (elements.sidebarOverlay) elements.sidebarOverlay.classList.remove('active');
}

// Global Keyboard Navigation
function setupKeyboard() {
  document.addEventListener('keydown', (e) => {
    // Escape closes modal/sidebar
    if (e.key === 'Escape') {
      if (searchModalOpen) {
        elements.searchModal.classList.remove('active');
        searchModalOpen = false;
        return;
      }
      closeSidebar();
    }
    
    // Quick search shortcut (Ctrl+K or '/')
    if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA')) {
      e.preventDefault();
      if (elements.searchBtn) elements.searchBtn.click();
    }
    
    // Left/Right arrow keys for prev/next topic (when not in input)
    if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA' && !searchModalOpen) {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevTopic();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNextTopic();
      }
    }
  });
}

// Helper Utilities
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderMarkdownText(md) {
  if (!md) return '';
  return md
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\`([^\`]+)\`/g, '<code>$1</code>')
    .replace(/\n/g, '<br>');
}

// Initializer
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderUnitSelector();
  renderTopicNav();
  renderTopicContent();
  setupSearch();
  setupMobileMenu();
  setupKeyboard();
});
