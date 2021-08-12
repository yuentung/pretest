function fibonacci(position) {
    if (position === 1) return 0;
    else if (position === 2) return 1;
    return fibonacci(position - 2) + fibonacci(position - 1);
}

console.log(fibonacci(3));
console.log(fibonacci(5));