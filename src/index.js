const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')

let whitelistAddresses = [
    "address1",
    "address2"
]

const leafNodes = whitelistAddresses.map(addr => keccak256(addr))
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })

console.log('---------------------------')
console.log('   Generating Merke Tree')
console.log('---------------------------')
console.log(merkleTree.toString())
