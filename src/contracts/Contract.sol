// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract Defi {

    struct User {
        string name;
        address walletAddress;
    }

    mapping(address => User) public users;

    function registerUser(string memory name) public {
        require(users[msg.sender].walletAddress == address(0), "User already exists");
        users[msg.sender] = User(name, msg.sender);
    }
    function getUser(address walletAddress) public view returns(User memory){
        require(users[walletAddress].walletAddress != address(0), "User doesn't exist");
        return users[walletAddress];
    }


    using SafeERC20 for IERC20;

    IERC20 public usdt;
    address public constant USDT_ADDRESS = 0x466DD1e48570FAA2E7f69B75139813e4F8EF75c2;
                                           
    // Cask USDT - 0x466dd1e48570faa2e7f69b75139813e4f8ef75c2
    // 0x3B00eF4360238C8d13d3A23b44B1DA047E1eDdDf
    // 0x4987D9DDe3b2e059dB568fa26D7Eb38F40956013
    
    struct Loan {
        uint256 loanId;
        address borrower;
        address lender;
        uint256 loanAmount;
        uint256 repayDays;
        uint256 loanGrantedTime;
        uint256 payableDeadline;
        uint256 collateralAmount;
        bool loanApproved;
        bool loanRepayed;
    }

    Loan[] public loans;

    event CollateralProvided(uint256 indexed loanId, address indexed borrower, uint256 collateralAmount);
    event LoanApproved(uint256 indexed loanId, address indexed lender);
    event LoanRepaid(uint256 indexed loanId);

    constructor() {
    // constructor(address _usdtAddress) {
        // usdt = IERC20(_usdtAddress);

        // Hardcoded
        usdt = IERC20(USDT_ADDRESS);
    }

    // Repay duration in days
    // For 2 usdt -> createLoan(2 * 1000000, 5)
    function createLoan(uint256 _loanAmount, uint256 _repayDays) external payable {
        require(_loanAmount > 0, "Loan amount must be greater than zero");
        require(msg.value > 0, "Collateral amount must be greater than zero");

        // Transfer Ethereum collateral from borrower to the contract occurs by default by payable

        uint256 loanId = loans.length;
        loans.push(Loan({
            loanId: loanId,
            borrower: msg.sender,
            lender: address(0),
            loanAmount: _loanAmount,
            repayDays: _repayDays,
            loanGrantedTime: 0,
            payableDeadline: 0,
            collateralAmount: msg.value,
            loanApproved: false,
            loanRepayed: false
        }));
    }

    function getLoan(uint256 _loadId) public view returns (Loan memory) {
        require(_loadId < loans.length, "Out of bound !");
        return loans[_loadId];
    }
    function isLoanRepayed(uint256 _loadId) public view returns (bool) {
        require(_loadId < loans.length, "Out of bound !");
        return loans[_loadId].loanRepayed;
    }

    function approveLoan(uint256 _loanId) external {
        address _lender = msg.sender;

        require(loans[_loanId].borrower != address(0), "Loan does not exist");
        require(loans[_loanId].lender == address(0), "Loan already approved");
        require(msg.sender != loans[_loanId].borrower, "Borrower can't approve self loan");

        require(usdt.transferFrom(msg.sender, loans[_loanId].borrower, loans[_loanId].loanAmount), "Failed to transfer usdt");
        
        // Set loan data
        // uint256 _payableDeadline = block.timestamp + (loans[_loanId].repayDays * 86400);
        uint256 _payableDeadline = block.timestamp + (loans[_loanId].repayDays * 60);     // Days are minutes for now
        loans[_loanId].lender = _lender;
        loans[_loanId].loanApproved = true;
        loans[_loanId].payableDeadline = _payableDeadline;
        loans[_loanId].loanGrantedTime = block.timestamp;
        emit LoanApproved(_loanId, _lender);
    }

    // // For square off
    // // Transfer ETH collateral to lender
    // payable(_lender).transfer(loanas[_loanId].collateralAmount);

    uint256 public interestRate = 10; // 0.1 Percent

    function getInterestTillDate(uint256 _loanId) public view returns(uint256){
        uint256 timeDiff = block.timestamp - loans[_loanId].loanGrantedTime;
        // (60 * 10 * 200_000000) / 1000 000
        uint256 interest = (timeDiff * interestRate * loans[_loanId].loanAmount) / 1000000;
        return interest;
    }

    function payLoan(uint256 _loanId) external {
        require(loans[_loanId].loanApproved == true, "Loan not approved");
        require(loans[_loanId].borrower == msg.sender, "Only borrower can repay loan");

        // uint256 timeDiff = block.timestamp - loans[_loanId].loanGrantedTime;
        // uint256 interest = (timeDiff * interestRate * loans[_loanId].loanAmount) / 1000000;

        uint256 interest = getInterestTillDate(_loanId);
        uint256 repayAmount = loans[_loanId].loanAmount + interest;
        
        // Transfer USDT from borrower to lender
        require(usdt.transferFrom(msg.sender, loans[_loanId].lender, repayAmount), "Failed to repay usdt");

        // Transfer Ethereum collateral back to borrower
        payable(loans[_loanId].borrower).transfer(loans[_loanId].collateralAmount);

        loans[_loanId].loanRepayed = true;

        // Clear loan data
        // delete loans[_loanId];

        emit LoanRepaid(_loanId);
    }
}
