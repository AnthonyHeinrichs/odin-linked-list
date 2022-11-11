const Node = (data = null, next = null) => {
  return {data, next}
}
const LinkedList = () => {
  let head = null
  let tail = null
  let size = 0

  // Adding new node to head of linked list
  const append = (value) => {
    let newNode = Node(value)

    if (!head) {
      head = newNode
      tail = newNode
      size++
      return {head, tail}
    }

    let current = head
    while (current.next) {
      current = current.next
    }
    current.next = newNode
    tail = newNode
    size++
    return tail
  }

  // Adding new node to tail of linked list
  const prepend = (value) => {
    let newNode = Node(value, head)
    head = newNode
    size++
    return head
  }

  // Finding the node at a specific index
  const at = (index) => {
    let current = head
    for (let i = 0; i < index; i++) {
      current = current.next
      if (!current) {
        return 'There is no node at that index'
      }
    }
    return current
  } 

  // Finding the last node of the linked list, and removing it from list
  const pop = () => {
    let current = head
    let prevNode = null
    while (current.next) {
      prevNode = current
      current = current.next
    }
    prevNode.next = null
  }

  // Converting linked list to string and returning string
  const toString = () => {
    let string = ''

    if (!head) {
      string = 'The linked list is empty'
      return string
    }
    
    let current = head
    while (current !== null) {
      string += `( ${current.data} ) -> `;
      current = current.next;
    }
    return `${string}null`;
  }

  return {append, prepend, at, pop, toString, get head() { return head }, get size() { return size }, get tail() {return tail}}
}

const newLinkedList = LinkedList()

newLinkedList.append('John')
newLinkedList.append('Tony')
newLinkedList.append('Benji')
newLinkedList.prepend('Taco')
newLinkedList.pop()
console.log(newLinkedList.toString())