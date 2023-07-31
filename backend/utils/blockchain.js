```javascript
const Web3 = require('web3');
const { abi, networks } = require('../../build/contracts/AIAgent.json');

let web3;
let contract;

const connectBlockchain = async () => {
  try {
    if (typeof web3 !== 'undefined') {
      web3 = new Web3(web3.currentProvider);
    } else {
      web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }

    const networkId = await web3.eth.net.getId();
    const deployedNetwork = networks[networkId];
    contract = new web3.eth.Contract(abi, deployedNetwork && deployedNetwork.address);

  } catch (error) {
    console.error("Could not connect to blockchain", error);
  }
};

const getAgentById = async (agentId) => {
  try {
    await connectBlockchain();
    return await contract.methods.getAgent(agentId).call();
  } catch (error) {
    console.error("Could not fetch agent", error);
  }
};

const updateAgent = async (agentId, attributes) => {
  try {
    await connectBlockchain();
    const accounts = await web3.eth.getAccounts();
    await contract.methods.updateAgent(agentId, attributes).send({ from: accounts[0] });
  } catch (error) {
    console.error("Could not update agent", error);
  }
};

const activateAgent = async (agentId) => {
  try {
    await connectBlockchain();
    const accounts = await web3.eth.getAccounts();
    await contract.methods.activateAgent(agentId).send({ from: accounts[0] });
  } catch (error) {
    console.error("Could not activate agent", error);
  }
};

const deactivateAgent = async (agentId) => {
  try {
    await connectBlockchain();
    const accounts = await web3.eth.getAccounts();
    await contract.methods.deactivateAgent(agentId).send({ from: accounts[0] });
  } catch (error) {
    console.error("Could not deactivate agent", error);
  }
};

module.exports = {
  connectBlockchain,
  getAgentById,
  updateAgent,
  activateAgent,
  deactivateAgent
};
```