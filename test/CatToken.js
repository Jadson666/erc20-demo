const { ethers } = require('hardhat');
const { expect } = require('chai');

describe('CatToken contract', function () {
  it('Deployment should assign the total supply of tokens to the owner', async function () {
    const [owner, addr1, addr2] = await ethers.getSigners();

    const CatToken = await ethers.getContractFactory('CatToken');

    const hardhatToken = await CatToken.deploy(1000000);

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);

    await hardhatToken.transfer(addr1.address, 50);
    expect(await hardhatToken.balanceOf(addr1.address)).to.equal(50);

    // Transfer 50 tokens from addr1 to addr2
    await hardhatToken.connect(addr1).transfer(addr2.address, 50);
    expect(await hardhatToken.balanceOf(addr2.address)).to.equal(50);
  });
});
