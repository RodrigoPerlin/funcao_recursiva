  const r = [["t", "a", "i"]];

  function meuArrayRecursivo(arr) {
    let next = arr.length;
    if (next > 0) {
      const n = arr.shift();
      console.log(n);
      return meuArrayRecursivo(arr);
    }
  }
  for (const a of r) {
    meuArrayRecursivo(a);
  }
