const ethers = require('ethers');
const abi = require('./metadata.json');
const express = require('express');
const app = express();
const { env } = require('../production.env');
require('dotenv').config(env);


const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
const contractABI = abi;
const contractAddress = contract_Address;
const address = Public_key;

const contract = new ethers.Contract(contractAddress, contractABI, provider);

app.get('/getbalance/:address', async (req, res) => {
    try {
        const balance = await contract.balanceOf(address);
        res.json({ balance: balance.toString() });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching balance' });
    }
});

app.listen(3000, () => console.log(`Server running on http://localhost:3000/getbalance/${address} `));