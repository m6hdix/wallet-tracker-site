import { Network, Alchemy } from "alchemy-sdk";

const apiKey = "alcht_mZXpqOZt0hAAaQ6I9tYZ2KNNvWQj3x";
const settings = {
  apiKey,
  network: Network.ETH_MAINNET, // or Network.ETH_GOERLI for Goerli testnet
};

const alchemy = new Alchemy(settings);

export default alchemy;
