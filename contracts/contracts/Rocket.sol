// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Rocket {
    string public namaToken;
    string public symbolToken;

    constructor(string memory _namaToken, string memory _symbolToke) {
        namaToken = _namaToken;
        symbolToken = _symbolToke;
    }

    function halo() public view returns (string memory, string memory) {
        return (namaToken, symbolToken);
    }
}
