//SPDX-License-Identifier: UNLICENCED
pragma solidity ^0.8.0;

import "./IPai.sol";

contract PaymentProcessor {

    IPai public pai;
    address public merchant;

    constructor (address _merchant, address _paiAddress) public {
        pai = IPai(_paiAddress);
        merchant = _merchant;
    }

    function setNewMerchant(address _merchant) public returns(bool){
        require(msg.sender == merchant);
        merchant = _merchant;
        return true;
    }

    function makePayment(uint _amount) public returns(bool){
        pai.transferFrom(msg.sender, merchant, _amount);
        return true;
    }

}