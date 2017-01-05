import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import set from '../src/set'

chai.use(chaiChange)

describe.only('set', () => {
  'use strict'

  it('exists', () => {
    expect(set).to.be.a('function')
  })

  context ('isEmpty()', () => {
    it('shows the current set is empty.', () => {
      const aSet = new set()
      expect(aSet.isEmpty())
        .to.equal(true)
    })
    it('returns false if the current set is occupied.', () => {
      const aSet = new set()
      aSet.add('stuff', null)
      aSet.add('morestuff', null)
      expect(aSet.isEmpty())
        .to.equal(false)
    })
  })

  context ('contains()', () => {
    it('shows the current set contains the specified element.', () => {
      const aSet = new set()
      aSet.add('A', null)
      aSet.add('b', null)
      aSet.add('c', null)
      expect(aSet.contains('b'))
        .to.equal(true)
    })
    it('returns false if the current element is not there.', () => {
      const aSet = new set()
      aSet.add('A', null)
      aSet.add('b', null)
      aSet.add('c', null)
      expect(aSet.contains(' fergendurgen '))
        .to.equal(false)
    })
  })

  context ( 'add()', () => {
    it( 'Adds an element to the front of the current set.', () => {
      const aSet = new set()
      aSet.add( 'hi' )
      expect(aSet.top)
        .to.equal(1)
    })
    it( 'Returns an error if the element is not unique.', () => {
      const aSet = new set()
      aSet.add( 'morestuff' )
      aSet.add( 'something else' )
      aSet.add( 'stuff' )
      expect(aSet.add( 'stuff' ))
        .to.equal(false)

    })
  })

  context ('remove()', () => {
    it('removes the specified element from the set.', () => {
      const aSet = new set()
      aSet.add('junk')
      aSet.add('things')
      aSet.add('stuff')
      expect(aSet.contains('stuff'))
        .to.equal(true)

      aSet.remove('stuff')

      expect(aSet.contains('stuff'))
        .to.equal(false)
    })
    it('decreases the length of the set when an element is removed.', () => {
      const aSet = new set()
      aSet.add('junk')
      aSet.add('things')
      aSet.add('stuff')
      console.log(';otj', aSet );
      expect(() => aSet.remove('stuff'))
        .to.alter(() => aSet.top, { from: 3, to: 2 })
      console.log(';otj', aSet );
    })
  })

})

  // set.remove('C')          // removes an element (if it exists) from the set.
  // set.forEach(elem => console.log(elem))  // takes a callback function and passes it each element in sequence.
  // set.size()               // returns the number of elements in the set.
  // set.union(otherSet)      // unions the set with another set and returns the resulting set.
  // set.intersect(otherSet)  // intersects the set with another set and returns the resulting set.
  // set.difference(otherSet) // returns a set that contains the elements found in the set but not in otherSet.
  // set.isSubset(otherSet)   // returns true if the set is a subset of otherSet or false if not.
  // set.clone()              // returns a cloned set.
