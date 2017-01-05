'use strict'

export default class set {


  constructor( aSet=[] ) {
    this.top = 0
    this.element = aSet
  }


  add(element) {
    let count = 0
    this.element[this.top++] = element
    for
    ( let i = 0; i <= this.top; i++ ) {
      if ( this.element[i] === element ) {
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

    if( this.element.includes(element) ) {
      return true
    } else {
      return false
    }
  }

  remove( element ) {
    let position = this.element.indexOf(element)
    this.element.splice( position, 1 )
    this.top--
  }
}

//   set.remove('C')          // removes an element (if it exists) from the set.
//   set.forEach(elem => console.log(elem))  // takes a callback function and passes it each element in sequence.
//   set.size()               // returns the number of elements in the set.
//   set.union(otherSet)      // unions the set with another set and returns the resulting set.
//   set.intersect(otherSet)  // intersects the set with another set and returns the resulting set.
//   set.difference(otherSet) // returns a set that contains the elements found in the set but not in otherSet.
//   set.isSubset(otherSet)   // returns true if the set is a subset of otherSet or false if not.
//   set.clone()              // returns a cloned set.
