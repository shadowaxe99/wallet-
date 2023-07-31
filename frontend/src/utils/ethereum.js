```javascript
import Web3 from 'web3';

let web3;

export const connectEthereum = async () => {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
    return web3;
  } else if (window.web3) {
    web3 = new Web3(window.web3.currentProvider);
    return web3;
  } else {
    window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
  }
};

export const getAccounts = async () => {
  const accounts = await web3.eth.getAccounts();
  return accounts;
};

export const getContractInstance = async (abi, contractAddress) => {
  const instance = new web3.eth.Contract(abi, contractAddress);
  return instance;
};
```