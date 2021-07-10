const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
          callback(collection[i], i, collection)
        }
      }else{
        const keys = Object.keys(collection)
        for(let i = 0; i < keys.length; i++){
          callback(collection[keys[i]], keys[i], collection)
        }
      }
      return collection
    },

    map: function(collection, callback) {
      const finalArray = []
      if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
          finalArray.push(callback(collection[i], i, collection))
        }
      }else{
        const keys = Object.keys(collection)
        for(let i = 0; i < keys.length; i++){
          finalArray.push(callback(collection[keys[i]], keys[i], collection))
        }
      }
      return finalArray
    },

    reduce: function(collection, callback, acc) {
      if(acc){
        for(let i = 0; i < collection.length; i++){
          acc = callback(acc, collection[i], collection)
        }
      }else{
        acc = collection[0]
        for(let i = 1; i < collection.length; i++){
          acc = callback(acc, collection[i], collection)
        }
      }
      return acc
    },

    find: function(collection, predicate) {
      for(let i = 0; i < collection.length; i++){
        if(predicate(collection[i])){
          return collection[i]
        }
      }

    },
    
    filter: function(collection, predicate) {
      const finalArray = []
      for(let i = 0; i < collection.length; i++){
        if(predicate(collection[i])){
          finalArray.push(collection[i])
        }
      }
      return finalArray

    },
    
    size: function(collection) {
      return Object.keys(collection).length
    },

    first: function(collection, n) {
      const finalArray = []
      if(n){
        for(let i = 0; i < n; i++){
          finalArray.push(collection[i])
        }
        return finalArray
      }else{
        return collection[0]
      }
    },

    last: function(array, n) {
      if(n){
        const finalArray = []
        for(let i = array.length - n; i < array.length; i++){
          finalArray.push(array[i])
        }
        return finalArray
      }else{
        return array[array.length - 1]
      }

    },

    compact: function(array) {
      const finalArray = []
      for(let i = 0; i < array.length; i++){
        if(array[i]){
          finalArray.push(array[i])
        }
      }
      return finalArray
    },
    
    sortBy: function(array, callback) {
      const arrCopy = [...array]
      return arrCopy.sort(callback)
    },

    flatten: function(array, shallow) {
      return array.flat()
    },
 
    uniq: function() {

    },

    keys: function(object) {
      return Object.keys(object)
    },
    values: function(object) {
      return Object.values(object)
    },
    functions: function(object) {
      const values = Object.values(object).sort()
      const funcs = []
      values.forEach(v => {
        if(typeof v === 'function'){
          funcs.push(v)
        }
      })
      return funcs
    },
  }
})()

console.log(fi.libraryMethod())


console.log(fi.sortBy(['banana', 'apple', 'orange']))