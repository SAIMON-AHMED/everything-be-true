function truthCheck(collection, pre) {

  let flag = true;
  for (let object in collection) {
    
    if (collection[object][pre]) {
      flag = true;
    } else {
      flag = false;
      break;
    }
  }
  return flag;
}

console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name"));  // prints "true"
