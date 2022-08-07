const Pai = artifacts.require("Pai.sol");
const PaymentProcessor = artifacts.require("PaymentProcessor.sol");

let paiAddress;

module.exports = async function (deployer, network, accounts) {
    await deployer.deploy(Pai);
    const pai = await Pai.deployed();
    await pai.transfer("0xaC47Ef21De155b2fCce8Ef4e2Eb281729cE99Ab8", web3.utils.toWei("500","ether"));
    paiAddress = pai.address;

    const [merchant, _] = accounts;
    console.log(`merchant address is ====> ${merchant}`);

    await deployer.deploy(PaymentProcessor, merchant, paiAddress );


}