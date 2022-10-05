const totalSupply = 1000000

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log('Deploying contracts with the account:', deployer.address);

  console.log('Account balance:', (await deployer.getBalance()).toString());

  const CatToken = await ethers.getContractFactory('CatToken');
  const token = await CatToken.deploy(totalSupply);

  console.log('CatToken address:', token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
