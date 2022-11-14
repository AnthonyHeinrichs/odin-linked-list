const Node = (data = null, next = null) => {
  return { data, next };
};
const LinkedList = () => {
  let head = null;
  let tail = null;
  let size = 0;

  // Adding new node to head of linked list
  const append = (value) => {
    let newNode = Node(value);

    if (!head) {
      head = newNode;
      tail = newNode;
      size++;
      return { head, tail };
    }

    let current = head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    tail = newNode;
    size++;
    return tail;
  };

  // Adding new node to tail of linked list
  const prepend = (value) => {
    let newNode = Node(value, head);
    head = newNode;
    size++;
    return head;
  };

  // Finding the node at a specific index
  const at = (index) => {
    let current = head;
    for (let i = 0; i < index; i++) {
      current = current.next;
      if (!current) {
        return "There is no node at that index";
      }
    }
    return current;
  };

  // Finding the last node of the linked list, and removing it from list
  const pop = () => {
    let current = head;
    let prevNode = null;
    while (current.next) {
      prevNode = current;
      current = current.next;
    }
    prevNode.next = null;
    size--;
  };

  // Checking if a node in the linked list contains the passed value
  const contains = (value) => {
    let current = head;

    while (current.next) {
      current = current.next;
      if (current.data == value) {
        return true;
      }
    }
    if (current.data == value) {
      return true;
    }

    return false;
  };

  // Finding a node's index number by the node's value 
  const find = (value) => {
    let current = head;
    let index = 0;

    while (current.next) {
      if (current.data == value) {
        return index;
      }
      current = current.next;
      index++;
    }
    if (current.data == value) {
      return index;
    }

    return null;
  };

  // Converting linked list to string and returning string
  const toString = () => {
    let string = "";

    if (!head) {
      string = "The linked list is empty";
      return string;
    }

    let current = head;
    while (current !== null) {
      string += `( ${current.data} ) -> `;
      current = current.next;
    }
    return `${string}null`;
  };

  // Adding a new node to the list at a specific index number
  const insertAt = (value, index) => {
    if (index == 0) {
      prepend(value);
    } else {
      const nodeBefore = at(index - 1);
      const newNode = Node(value, nodeBefore.next);
      nodeBefore.next = newNode;
      size++;
    }
  };

  // Removing a node from the list at a specific index number
  const removeAt = (index) => {
    if (index == size - 1) {
      pop();
    } else if (index === 0) {
      head = head.next;
    } else {
      const nodeBefore = at(index - 1);
      nodeBefore.next = nodeBefore.next.next;
      size--;
    }
  };

  // Returning all my methods
  return {
    append,
    prepend,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
    get head() {
      return head;
    },
    get size() {
      return size;
    },
    get tail() {
      return tail;
    },
  };
};

const newLinkedList = LinkedList();

newLinkedList.append("John");
newLinkedList.append("Sarah");
newLinkedList.append("Benji");
newLinkedList.prepend("Taco");
console.log(newLinkedList.find("Taco"));
newLinkedList.insertAt("Ruth", 0);
console.log(newLinkedList.toString());
newLinkedList.removeAt(2);
console.log(newLinkedList.toString());
