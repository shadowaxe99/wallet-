```javascript
import { ethers } from 'ethers';

// Arbitrum network information
const network = {
  chainId: 42161,
  name: 'arbitrum',
  url: 'https://arb1.arbitrum.io/rpc'
};

// Function to connect to Arbitrum
const connectArbitrum = async () => {
  try {
    // Create a custom provider
    const provider = new ethers.providers.JsonRpcProvider(network.url, {
      name: network.name,
      chainId: network.chainId,
    });

    // Check the network connection
    const network = await provider.getNetwork();

    console.log(`Connected to ${network.name}`);
    return provider;
  } catch (error) {
    console.error(`Failed to connect to Arbitrum: ${error.message}`);
  }
};

export default connectArbitrum;
```