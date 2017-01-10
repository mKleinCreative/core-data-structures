// import chai, { expect } from 'chai'
// import chaiChange from 'chai-change'
// import HashTable from '../src/hash'
//
// chai.use(chaiChange)
//
// describe('HashTable', () => {
//   'use strict'
//
//   it('exists', () => {
//     expect(HashTable).to.be.a('function')
//   })
//
//   context('put()', () => {
//     it('adds a key value pair into the hash table.', () => {
//       const ht = new HashTable()
//       ht.put('Michael', 1234)
//       ht.put('Keith', 5678)
//       ht.put('James', 1566)
//       ht.put('Damien', 666)
//         expect
//           to.be.equal(1234)
//     })
//   }
//   context('get()', () => {
//     it('returns the data associated with a key.', () => {
//       const ht = new HashTable()
//     })
//   })
//   context('contains()', () => {
//     it('returns true if the hash table contains the key provided.', () => {
//       const ht = new HashTable()
//     })
//   })
//   context('iterator()', () => {
//     it('returns an iterator object over the hash table with two functions.', () => {
//       const ht = new HashTable()
//     })
//   })
//   context('remove()', () => {
//     it('removes a key value pair by key.', () => {
//       const ht = new HashTable()
//     })
//   })
//   context('count()', () => {
//     it('returns the amount of key value pairs in the hash table.', () => {
//       const ht = new HashTable()
//     })
//   })
//
// })

// const ht = new HashTable()
// ht.put("name", "Zanzibar")  // adds a key-value pair to the hash table.
// ht.get("name")              // returns the data associated with key.
// ht.contains("name")         // returns true if the hash table contains the key.
// ht.iterate((k, v) => console.log(`${k}: ${v}`)) // takes a callback function and passes it each key and value in sequence.
// ht.remove("name")           // removes a key-value pair by key.
// ht.size()                   // returns the number of key-value pairs in the hash table.
// HashTable.hash("name")      // generates a hash for the key "name"
