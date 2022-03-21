# NFT Whitelist Merkle Tree Generator

Simple script that will generate a Merkle Tree to put in place a Whitelist system for your NFT collection.
## Utilites

We're using it in our team to:
- Generate Merkle Root and make the Whitelist system works in our collections

## Tech Stack

**Server:** Node.js, merkletreejs and keccak256

## Configurations

In order to use the script you have to set the array of items that contains the list of the whitelisted wallet.
Below you can find the variable in file *src/index.js* that you need to change in order to make things happen:

```javascript
let whitelistAddresses = [
    "address1",
    "address2"
]
```

When you changed that configuration you can launch the application and then you'll receive in output something like that:

```bash
---------------------------
   Generating Merke Tree
---------------------------
└─ 887fa7a9ed0600fc0a281008da6e242652f96c48588b643e97b7f3c869ff7d53
   ├─ 0d8be2f4456a10f96272d1154d5b0198312ff44deb52dff14ce7a0bb1948bd5f
   └─ 6b19758a320b6dad76b490b20bfb644d7839a97fce4d986e2426e1bdf6ebc7ba
```

The number of the leaf depends by the number of addresses that you put in the array.
The Merkle Root value is always the first one, and it is the only things that you need to consider in order to put in place your whitelist system: 887fa7a9ed0600fc0a281008da6e242652f96c48588b643e97b7f3c869ff7d53

With that specific value you're able to verify if an address is whitelisted or not.
## Run Locally

Clone the project

```bash
  git clone https://github.com/0xBlend/whitelist-hash-generator
```

Go to the project directory

```bash
  cd whitelist-hash-generator
```

Install dependencies using NPM

```bash
  npm install
```

Run the script issuing the command

```bash
  npm start
```
## Authors

- [@0xBlend](https://www.github.com/0xBlend)

## License

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://choosealicense.com/licenses/mit/)

## Support

For support or other implementations reach me out on Discord 0xBlend#9532.
