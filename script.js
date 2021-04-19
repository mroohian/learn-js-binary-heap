import { BinaryHeap } from "./BinaryHeap";

console.clear();

const heap = new BinaryHeap();
[10, 3, 4, 8, 2, 9, 7, 1, 6, 5].forEach(x => heap.push(x));

heap.remove(6);

heap.push(5.5);

while (heap.size > 0) {
  console.log(heap.pop());
}
