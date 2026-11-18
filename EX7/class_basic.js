// Task 2: class with getter, setter, static method and private field
class Rectangle {
  #id;
  static count = 0;
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.#id = ++Rectangle.count;
  }
  get area() { return this.width * this.height; }
  set size(value) {
    if (value <= 0) throw new Error("Size must be positive");
    this.width = value;
    this.height = value;
  }
  get id() { return this.#id; }
  perimeter() { return 2 * (this.width + this.height); }
  static compare(a, b) { return a.area - b.area; }
  toString() { return `Rectangle #${this.#id} (${this.width} x ${this.height})`; }
}
const r1 = new Rectangle(4, 5);
const r2 = new Rectangle(3, 3);
console.log(String(r1), "area =", r1.area, "perimeter =", r1.perimeter());
console.log(String(r2), "area =", r2.area);
r2.size = 6;
console.log("After setting size:", String(r2), "area =", r2.area);
console.log("Compare:", Rectangle.compare(r1, r2));
console.log("Rectangles created:", Rectangle.count);
try { r1.size = -1 } catch (e) { console.log("Error:", e.message); }
console.log("typeof Rectangle:", typeof Rectangle);