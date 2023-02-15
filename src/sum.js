function sum(a, b) {
    if (a == undefined || b == undefined) {
      throw new Error('Provide 2 numbers.');
    }
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Enter numbers only.");
    }
    return a + b;
}

export { sum };