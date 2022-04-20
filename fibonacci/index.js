// fibonacci

// recursion
const fibonacci = n => {
  if (n < 2) return n;

  return fibonacci(n - 2) + fibonacci(n - 1);
};

// cycles
const fibonacciV2 = n => {
  const fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[0 - 2] - fib[n - 1];
  }

  return fib[n];
};

fibonacciV2(50);
