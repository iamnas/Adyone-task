
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;


import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Address.sol";

interface IToken {
    function transfer(address to, uint256 tokens)
        external
        returns (bool success);

    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);

    function burn(uint256 _amount) external;

    function balanceOf(address tokenOwner)
        external
        view
        returns (uint256 balance);

    function decimals() external view returns (uint256);
}



contract TokenExhange is Ownable{
    using SafeMath for uint256;

    address public admin;
    address public recipient;

    address public tokenAddress;
    address public BUSDAddress;
    uint256 public tokenDecimals;
    uint256 public BUSDdecimals;

    uint256 public totalBUSDAmount = 0;
    uint256 public tokenSold = 0;

    mapping(address => uint256) public usersInvestmentsBUSD ;
    mapping(address => uint256) public userPurchased;

     modifier onlyOwnerAndAdmin()   {
        require(
            owner() == _msgSender() || _msgSender() == admin,
            "Ownable: caller is not the owner or admin"
        );
        _;
    }

    constructor(
        address _token,
        address _recipient,
        address _BUSDAddress
    ) {
        tokenAddress = _token;
        tokenDecimals = IToken(_token).decimals();
        recipient = _recipient;
        BUSDAddress = _BUSDAddress;
        BUSDdecimals = IToken(BUSDAddress).decimals();
        admin = _msgSender();      
        
    }


    function setAdmin(address account) external  onlyOwnerAndAdmin{
        require(account != address(0),"Invalid Address, Address should not be zero");
        admin = account;
    }


    function setRecipient(address _recipient) external onlyOwnerAndAdmin {
        require(_recipient != address(0),"Invalid Address, Address should not be zero");

        recipient = _recipient;
    }


    function setTokenAddress(address token) external onlyOwnerAndAdmin {
        require(token != address(0), "Token address zero not allowed.");
        tokenAddress = token;
        tokenDecimals = IToken(token).decimals();
    }

    function setBUSDToken(address token) external onlyOwnerAndAdmin {
        require(token != address(0), "Token address zero not allowed.");
        
        BUSDAddress = token;
        BUSDdecimals = IToken(BUSDAddress).decimals();
    }

    receive() external payable {}


    function buyToken(uint _amount) public {

        // require(IToken(tokenAddress).balanceOf(address(this))<_amount, "Insufficient balance");
    
        tokenSold += _amount;

        totalBUSDAmount +=  _amount ;

        usersInvestmentsBUSD[_msgSender()] =usersInvestmentsBUSD[_msgSender()].add(_amount);
        userPurchased[_msgSender()] = userPurchased[_msgSender()].add(_amount);

        IToken(BUSDAddress).transferFrom(_msgSender(),recipient,_amount);

        require(IToken(tokenAddress).transfer(_msgSender(), _amount),"Insufficient balance!");

    }

    //Recover eth accidentally sent to the contract
    function removeEth(address payable destination) public onlyOwnerAndAdmin {
        require(
            destination != address(0),
            "Invalid Address, Address should not be zero"
        );
        destination.transfer(address(this).balance);
    }

    function removeERC20(address _owner) public onlyOwnerAndAdmin {
        IToken(tokenAddress).transfer(_owner, IToken(tokenAddress).balanceOf(address(this)));
    }



}
