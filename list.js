class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	append(value) {
		const node = new Node(value);
		if (this.head === null) this.head = node;
		else {
			let current = this.head;
			while (current.next != null) {
				current = current.next;
			}
			current.next = node;
		}
		this.size++;
	}

	contains(value) {
		let current = this.head;
		while (current != null) {
			if (current.value === value) return true;
			current = current.next;
		}
		return false;
	}

	prepend(value) {
		const node = new Node(value);
		if (this.head === null) this.head = node;
		else {
			let current = this.head;
			node.next = current;
			this.head = node;
		}
		this.size++;
	}

	headNode() {
		let headNode = this.head;
		if (!headNode) return null;
		return headNode.value;
	}

	tail() {
		let current = this.head;
		while (current.next != null) {
			current = current.next;
		}
		return current.value;
	}

	at(index) {
		let count = 0;
		let current = this.head;
		while (count !== index) {
			current = current.next;
			count++;
		}
		return current.value;
	}

	pop() {
		const target = this.at(this.size - 2);
		let current = this.head;
		while (current.value != target) {
			current = current.next;
		}
		current.next = null;
		this.size--;
	}

	find(value) {
		let current = this.head;
		let index = 0;
		while (current != null) {
			if (current.value === value) return index;
			else if (current.next === null) return null;
			current = current.next;
			index++;
		}
	}

	toString() {
		let current = this.head;
		let string = '';
		while (current != null) {
			string = string.concat(`( ${current.value} ) --> `);
			current = current.next;
		}
		string = string.concat(`null`);
		return string;
	}
}

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');

console.log(list.toString());
