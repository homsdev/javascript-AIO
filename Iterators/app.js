//ItemIterator
const makeItemIterator = (items) => {
  let nextIndex = 0;
  const itemIterator = {
    next: () => {
      let result =
        nextIndex < items.length
          ? { value: items[nextIndex++], done: false }
          : { done: true };
      return result;
    },
  };
  return itemIterator;
};

const numList = [1, 2, 3, 4, 5, 6, 7, 8];
const iterator = makeItemIterator(numList);
let item = iterator.next();
while (!item.done) {
  console.log(item.value);
  item.value = 1;
  item = iterator.next();
}

//item generator
function* makeItemGenerator(items){
  for (let i = 0; i < items.length; i++) {
    yield items[i];
  }
}

const iterator2 = makeItemGenerator(numList);
let result = iterator2.next();
while(!result.done){
  console.log(result.value);
  result = iterator2.next();
}