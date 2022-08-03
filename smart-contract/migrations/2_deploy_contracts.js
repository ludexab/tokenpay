const Pai = artifacts.require("Pai.sol");
const PaymentProcessor = artifacts.require("PaymentProcessor.sol");

let paiAddress;

module.exports = async function (deployer, network, accounts) {
    await deployer.deploy(Pai);
    const pai = await Pai.deployed();
    await pai.transfer("0xD7926488dBB8c8AF9eae42F8c86e7CdDA41ffB0d", web3.utils.toWei("150","ether"))
    paiAddress = pai.address;

    const [merchant, _] = accounts;
    console.log(`merchant address is ====> ${merchant}`)

    await deployer.deploy(PaymentProcessor, merchant, paiAddress );


}