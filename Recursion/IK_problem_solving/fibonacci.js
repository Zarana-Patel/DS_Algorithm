
function find_fibonacci(n) {
      if (n === 0) return 0; 
    if (n === 1 || n === 2) return 1;
   const table = new Array(3); 
   
   table[0] = 0;
   table[1] = 1; 
   
   for (let i = 2; i <= n; i++) {
       table[i % 3] = table[(i - 1) % 3] + table[(i - 2) % 3] 
   }
   
   return table[n % 3];
}
