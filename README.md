# Purpose
this demo aim to deploy a ERC-20 token with minimum code

more details can be found in the [Hardhat tutorial](https://hardhat.org/tutorial)
# Init your project
1. 
    ```
    mkdir erc20-demo
    cd erc20-demo
    yarn init
    yarn add --dev hardhat
    ```

2. run `npx hardhat` and select `Create an empty hardhat.config.js`

3. 
    ```
    yarn add --dev @nomicfoundation/hardhat-toolbox @nomicfoundation/hardhat-network-helpers @nomicfoundation/hardhat-chai-matchers @nomiclabs/hardhat-ethers @nomiclabs/hardhat-etherscan chai ethers hardhat-gas-reporter solidity-coverage @typechain/hardhat typechain @typechain/ethers-v5 @ethersproject/abi @ethersproject/providers
    ```
4. add following code to first line of `hardhat.config.js`
    ```
    require("@nomicfoundation/hardhat-toolbox");
    ```
# Compile
`npx hardhat compile`
# Test
`npx hardhat test`
# Deployment

