/* eslint-disable no-extend-native */
Array.prototype.sortByName = function() {
  return this.sort(function(a, b) {
    //sort lastName, firstName
    var result = a.name.last.localeCompare(b.name.last);
    if (result === 0) {
      result = a.name.first.localeCompare(b.name.first);
    }
    return result;
  });
};

Array.prototype.groupBy = function(groupingKeyFn) {
  if (typeof groupingKeyFn !== 'function') {
    throw new Error('groupBy take a function as only parameter');
  }
  return this.reduce((result, item) => {
    let key = groupingKeyFn(item);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
    return result;
  }, {});
};

Array.prototype.groupByIntoArray = function(groupingKeyFn) {
  if (typeof groupingKeyFn !== 'function') {
    throw new Error('groupByIntoArray take a function as only parameter');
  }

  var reducedArray = this.groupBy(groupingKeyFn);
  var entries = Object.entries(reducedArray);

  var results = new Array(entries.length);

  for (let index = 0; index < entries.length; index++) {
    results[index] = {title: entries[index][0], data: entries[index][1]};
  }

  return results;
};
