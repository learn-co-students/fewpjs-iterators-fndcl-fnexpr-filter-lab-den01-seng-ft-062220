function findMatching(drivers, string) {
  return drivers.filter( element => {
    return element.toLowerCase() === string.toLowerCase();
  });
}

function fuzzyMatch(drivers, string) {
  return drivers.filter ( element => {
    return element.substring(0, string.length) === string;
  });
}

function matchName(drivers, string) {
  return drivers.filter (element => {
    return element.name === string;
  });
}
