# DSA Study Guide 📚

> A mobile-first, handwritten-style Data Structures & Algorithms
> revision notebook covering the complete 7-unit curriculum in one
> interactive website.

## 📖 Overview

The **DSA Study Guide** is a lightweight, interactive study website
designed to make technical exam preparation feel like revising from a
well-organized personal notebook.

Instead of presenting DSA concepts as plain documentation, the website
combines a handwritten notebook aesthetic with structured academic
content, visual explanations, algorithms, code, complexity analysis, and
exam-focused revision notes.

The entire syllabus is available in a single-page application so
students can move between units and topics without page reloads.

## 🎯 Purpose

The project is designed to help students:

-   Revise the complete DSA syllabus from one place.
-   Understand concepts through structured explanations and visual
    diagrams.
-   Review algorithms and their step-by-step working.
-   Study implementation-oriented C/C++ concepts and code.
-   Quickly revise time and space complexities.
-   Identify important exam concepts and common mistakes.
-   Use the guide comfortably on mobile phones, tablets, laptops, and
    desktops.

## 🧩 Curriculum

The website covers **7 units**:

### Unit 1 --- Introduction to Data Structures & Algorithms

-   Data structures and their classifications
-   Linear and non-linear structures
-   Data structure operations
-   Arrays and memory representation
-   Structures, self-referential structures, and unions
-   Pointers and dynamic memory allocation
-   Algorithm analysis
-   Time and space complexity
-   Asymptotic notations: Big O, Omega, and Theta
-   Best, average, and worst cases

### Unit 2 --- Stacks, Recursion & Queues

-   Stack ADT and operations
-   Recursion
-   Tower of Hanoi
-   Infix, Prefix, and Postfix expressions
-   Infix-to-Postfix conversion
-   Infix-to-Prefix conversion
-   Postfix evaluation
-   Linear queues
-   Circular queues
-   Deques
-   Priority queues

### Unit 3 --- Linked Lists

-   Linked-list concepts and memory representation
-   Singly linked lists
-   Traversal and searching
-   Insertion and deletion
-   Circular linked lists
-   Doubly linked lists
-   Polynomial representation and addition
-   Complexity comparisons

### Unit 4 --- Searching & Sorting

-   Sorting fundamentals
-   Selection sort
-   Bubble sort
-   Insertion sort
-   Merge sort
-   Quick sort
-   Linear search
-   Binary search
-   Algorithm comparison and complexity analysis

### Unit 5 --- Trees

-   Tree terminology and ADT
-   Binary trees and their types
-   Binary-tree properties
-   Sequential and linked representation
-   Preorder, inorder, postorder, and level-order traversal
-   Threaded binary trees
-   Binary Search Trees
-   BST searching, insertion, and deletion
-   Expression trees

### Unit 6 --- Balanced Search Trees

-   Problems with ordinary BSTs
-   AVL trees
-   Balance factors
-   LL, RR, LR, and RL rotations
-   AVL construction
-   AVL deletion and rebalancing
-   Red-Black trees
-   Red-Black properties
-   Insertion and violation-fixing cases
-   Deletion principles

### Unit 7 --- Graphs

-   Graph ADT
-   Directed and undirected graphs
-   Weighted and unweighted graphs
-   Graph terminology
-   Adjacency matrices
-   Adjacency lists
-   Breadth-First Search (BFS)
-   Depth-First Search (DFS)
-   BFS and DFS traces
-   Minimum Spanning Trees
-   Prim's algorithm
-   Kruskal's algorithm
-   Dijkstra's shortest-path algorithm
-   Topological sorting
-   Graph applications

## ✨ Key Features

### 📝 Handwritten Notebook UI

The visual language is inspired by a student's revision notebook:

-   Ruled-paper backgrounds
-   Margin guides
-   Handwritten-style headings and accents
-   Sticky-note callouts
-   Highlighter effects
-   Paper/tape details
-   Doodle-inspired technical diagrams
-   Clear exam-oriented content cards

The aesthetic is designed to remain visually engaging without
compromising readability.

### 📱 Mobile-First Design

The interface is designed for smartphones first and progressively
enhanced for larger screens.

Supported layouts include:

-   320px
-   375px
-   390px
-   430px
-   768px
-   1024px
-   1366px
-   1440px

Mobile interactions prioritize touch-friendly controls, readable
content, horizontal scrolling for code blocks, and prevention of
unwanted page overflow.

### 🧭 Unit & Topic Navigation

Students can:

-   Switch between Units 1--7.
-   Browse topics within each unit.
-   See the currently active topic.
-   Move between topics using Previous/Next controls.
-   Navigate across unit boundaries without reloading the page.

### 🔎 Quick Topic Search

A built-in search/filter system allows users to quickly find topics
across the entire syllabus.

Example searches:

-   `AVL`
-   `Circular Queue`
-   `Dijkstra`
-   `Infix`
-   `Binary Search`
-   `Linked List`

### 🌗 Light & Dark Themes

The website provides two notebook-inspired themes:

**Light Mode** - Warm parchment background - Ruled notebook paper - Dark
ink - Highlighter accents

**Dark Mode** - Midnight notebook/blackboard appearance - Comfortable
contrast - Chalk-like visual accents - Dark content cards

The selected theme is persisted using browser `localStorage`.

### 🎯 Exam-Focused Callouts

Important information is visually emphasized using dedicated revision
callouts:

-   🎯 Exam Hotspot
-   ⚠️ Common Trap
-   💡 Quick Revision Rule
-   ⭐ Complexity Summary

These help students identify information that deserves extra attention
during revision.

### 💻 Algorithms & Code

The guide presents algorithmic concepts using:

-   Structured explanations
-   Step-by-step traces
-   Pseudocode where appropriate
-   C/C++ implementation-oriented examples
-   Complexity analysis
-   Visual representations

### 🧠 Technical Diagrams

The notebook includes visual representations for important DSA
structures, including:

-   Arrays and memory layouts
-   Stack push/pop operations
-   Circular queues
-   Linked-list nodes and pointers
-   Binary trees
-   Tree traversals
-   AVL rotations
-   Graphs
-   Adjacency matrices
-   Graph traversal states

## 🛠️ Technology Stack

The project intentionally uses a simple client-side architecture.

  -----------------------------------------------------------------------
  Technology                          Purpose
  ----------------------------------- -----------------------------------
  HTML5                               Semantic website structure

  CSS3                                Notebook design, responsive layout,
                                      themes, animations

  Vanilla JavaScript                  Navigation, search, interactions,
                                      state management

  localStorage                        Theme preference persistence
  -----------------------------------------------------------------------

### No Framework Dependency

The project does not require:

-   React
-   Vue
-   Angular
-   Tailwind
-   Bootstrap
-   Backend services
-   Database
-   Build tools
-   Unnecessary external UI libraries

This keeps the project lightweight, portable, and easy to run.

## 📁 Project Structure

``` text
DSA-Study-Guide/
│
├── index.html
├── style.css
└── script.js
```

### `index.html`

Contains the semantic structure and UI components of the study guide.

### `style.css`

Controls:

-   Notebook visual design
-   Responsive layouts
-   Light/dark themes
-   Typography
-   Cards and callouts
-   Diagrams
-   Animations
-   Mobile and desktop behavior

### `script.js`

Controls:

-   Unit navigation
-   Topic navigation
-   Previous/Next navigation
-   Search/filtering
-   Theme switching
-   localStorage persistence
-   Dynamic study content
-   Interactive UI behavior

## 🚀 Running the Project

No build process is required.

Simply open `index.html` in a modern web browser.

For development, the project can also be served through a simple local
development server or VS Code's Live Server.

## 🎨 Design Philosophy

The website follows four main principles:

### 1. Learn

Explain the concept clearly before presenting implementation details.

### 2. Visualize

Use diagrams, traces, structures, and notebook-style illustrations
wherever they improve understanding.

### 3. Revise

Make important definitions, algorithms, complexities, and exam points
easy to scan.

### 4. Practice

Keep algorithm steps and implementation-oriented examples accessible
while studying.

The goal is not to make the website look like generic documentation. It
should feel like a **digital personal revision notebook built
specifically for DSA**.

## ♿ Accessibility

The interface is designed with accessibility in mind:

-   Semantic HTML
-   Appropriate ARIA attributes where required
-   Keyboard-accessible controls
-   Visible focus states
-   Touch-friendly targets
-   Readable contrast
-   Responsive layouts
-   Reduced-motion considerations

## ⚡ Performance

The project is intentionally lightweight.

Performance goals include:

-   Minimal dependencies
-   No unnecessary frameworks
-   Client-side navigation
-   Efficient DOM updates
-   Horizontally scrollable code blocks instead of breaking mobile
    layouts
-   No unnecessary page reloads

## 🔐 Data & Privacy

The study guide is a client-side educational website.

No personal account system, backend database, or server-side storage is
required for the core application.

The only persistent browser state used by the application is the user's
interface preference, such as the selected theme.

## ✅ Quality Verification

Before the project is considered complete, the following should be
verified:

-   All 7 units are accessible.
-   All required topics are present.
-   Unit navigation works correctly.
-   Topic navigation works correctly.
-   Previous/Next navigation works across unit boundaries.
-   Search finds topics across all units.
-   Light/dark mode works.
-   Theme preference survives refresh.
-   Mobile layouts work at narrow screen widths.
-   Code blocks do not create unwanted page overflow.
-   Desktop and tablet layouts remain usable.
-   Keyboard navigation works.
-   Accessibility attributes are valid and meaningful.
-   No JavaScript runtime errors occur.
-   No broken controls or undefined references remain.
-   No unnecessary dependencies are introduced.

## 📚 Source Grounding

The academic content of the study guide is based on the provided college
DSA course material.

The source material is treated as the authority for:

-   Definitions
-   Concepts
-   Algorithms
-   Examples
-   Step-by-step traces
-   Complexity information
-   Diagrams and representations
-   Syllabus organization

Content should not be invented or silently substituted with unrelated
material.

## 🌟 Project Vision

The DSA Study Guide aims to turn traditional exam preparation into a
more interactive and memorable experience.

It combines the familiarity of a handwritten notebook with the
convenience of a digital application:

**7 Units → One Website → Interactive Navigation → Visual Learning →
Fast Revision**

> **Learn the structure. Trace the algorithm. Understand the logic.
> Revise smarter.**
