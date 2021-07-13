import Web3 from "web3";

const address = process.env.REACT_APP_CONTRACT_ADRESS;
const providerUrl = process.env.REACT_APP_PROVIDER_URL;
const abi = [
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    constant: true,
    inputs: [],
    name: "getGroupIds",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "uint256", name: "_groupId", type: "uint256" }],
    name: "getGroup",
    outputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "uint256[]", name: "indexes", type: "uint256[]" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "uint256", name: "_indexId", type: "uint256" }],
    name: "getIndex",
    outputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "uint256", name: "ethPriceInWei", type: "uint256" },
      { internalType: "uint256", name: "usdPriceInCents", type: "uint256" },
      { internalType: "uint256", name: "usdCapitalization", type: "uint256" },
      { internalType: "int256", name: "percentageChange", type: "int256" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];
var web3 = new Web3(new Web3.providers.HttpProvider(providerUrl));
const contract = new web3.eth.Contract(abi, address);

export const getGroupIds = () => {
  return contract.methods.getGroupIds().call();
};

export const getGroup = (id) => {
  return contract.methods.getGroup(id).call();
};

export const getIndex = (indexId) => {
  return contract.methods.getIndex(indexId).call();
};
