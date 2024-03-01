const fruits_into_baskets = (fruits: string[]) => {
  let fruitMap: Record<string, number> = {};
  let leftFruit: number = 0;
  let mostFruit: number = 0;

  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    const currentFruit: string = fruits[windowEnd];
    if (!(currentFruit in fruitMap)) {
      fruitMap[currentFruit] = 0;
    }
    fruitMap[currentFruit] += 1;

    while (Object.keys(fruitMap).length > 2) {
      const firstFruit: string = fruits[leftFruit];
      fruitMap[firstFruit] -= 1;
      if (fruitMap[firstFruit] === 0) {
        delete fruitMap[firstFruit];
      }
      leftFruit += 1;
    }
    mostFruit = Math.max(mostFruit, windowEnd - leftFruit + 1);
  }
  console.log(mostFruit);
  return mostFruit;
};

fruits_into_baskets(["A", "B", "C", "A", "C"]); // expect 3
fruits_into_baskets(["A", "B", "C", "B", "B", "C"]); // expect 5
