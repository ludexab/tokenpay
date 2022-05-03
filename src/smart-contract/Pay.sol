pragma solidity ^0.8.0;

// For ease and speed, the remix IDE has been used to deploy this contract to the rinkeby network

contract Pay{
    address merchant = 0x49Df6596D72973EF711e8b61F6b74660302cf86E;
    mapping(address => uint256) worth;

    event payEvent(address from, address to, uint256 amount);

    function pay(uint256 _amount) public payable returns(bool){
        worth[merchant] += _amount;
        emit payEvent(msg.sender, merchant, _amount);
        return true;        
    }

    function getWorth() public view returns(uint256){
        require(msg.sender == merchant);
        return worth[merchant];
    }

    function setMerchant(address _newMerchant) public {
        require(msg.sender == merchant);
        merchant = _newMerchant;
    }
}