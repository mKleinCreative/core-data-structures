'use strict'

export default class set {


  constructor( aSet=[] ) {
    this.top = 0
    this.elements = aSet
  }


  add(element) {
    let count = 0
    this.elements[this.top++] = element
    for
    ( let i = 0; i <= this.top; i++ ) {
      if ( this.elements[i] === element ) {
        count++
      }
      if ( count >= 1 ) {
        return false
      }
    }
  }

  isEmpty() {
    return this.top === 0
  }

  contains(element){

    if( this.elements.includes(element) ) {
      return true
    } else {
      return false
    }
  }

  remove( element ) {
    let position = this.elements.indexOf(element)
    this.elements.splice( position, 1 )
    this.top--
  }

  forEach(callback) {
    this.elements = this.elements.map(callback)
    return this.elements
  }

  size() {
    return this.top
  }

  difference(set1, set2) {
  let setDifference = [];

  for (let i = 0; i < set1.elements.length; i++)  {
    if (set2.elements.indexOf(set1.elements[i]) === -1) {
      setDifference.push(set1.elements[i]);
    }
  }
  return setDifference;
}

}
//   set.union(otherSet)      // unions the set with another set and returns the resulting set.
//   set.intersect(otherSet)  // intersects the set with another set and returns the resulting set.
//   set.difference(otherSet) // returns a set that contains the elements found in the set but not in otherSet.
//   set.isSubset(otherSet)   // returns true if the set is a subset of otherSet or false if not.
//   set.clone()              // returns a cloned set.
