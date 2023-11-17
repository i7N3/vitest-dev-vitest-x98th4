// https://www.codewars.com/kata/55dd5386575839a74f0000a9/train/javascript

export class Node {
  data: number;
  next: Node | null = null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

class Context {
  first: Node | null;
  second: Node | null;

  constructor(first: Node | null, second: Node | null) {
    this.first = first;
    this.second = second;
  }
}

export const buildList = (input: number[]): Node | null => {
  if (input.length === 0) return null;

  const linkedList: Node[] = [];

  for (let i = 0; i < input.length; i++) {
    const current = new Node(input[i]);
    if (i > 0) linkedList[i - 1].next = current;
    linkedList.push(current);
  }

  return linkedList[0];
};

const split = (head: Node | null) => {
  if (head == null) return null;
  const result = new Node(head.data);
  result.next = head.next == null ? null : split(head.next.next);
  return result;
};

// time: O(n), space: O(n)
export const linkedListsAlternatingSplitRecursively = (
  head: Node | null
): Context => {
  if (!head) throw new Error("Can't process list with head == null");
  if (!head.next) throw new Error("Can't process list with length == 1");
  return new Context(split(head), split(head.next));
};

// time: O(n), space: O(n)
const linkedListsAlternatingSplitIteratively = (head: Node | null): Context => {
  if (!head) throw new Error("Can't process list with head == null");
  if (!head.next) throw new Error("Can't process list with length == 1");

  let index = 0;
  let current: Node | null = head;

  const first = [];
  const second = [];

  while (current !== null) {
    if (index % 2 === 0) {
      // first
      first.push(current.data);
    } else {
      // second
      second.push(current.data);
    }
    current = current.next;
    index++;
  }

  return new Context(buildList(first), buildList(second));
};
