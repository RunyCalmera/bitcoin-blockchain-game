const express = require('express');
const crypto = require('crypto');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static('public'));
app.use(express.json());

// API endpoint for hashing
app.post('/hash', (req, res) => {
    const { text } = req.body;
    const hash = crypto.createHash('sha256').update(text).digest('hex');
    res.json({ hash });
});

// API endpoint for mining (checking if hash meets target)
app.post('/mine', (req, res) => {
    const { blockData, nonce, target } = req.body;
    const dataWithNonce = blockData + nonce;
    const hash = crypto.createHash('sha256').update(dataWithNonce).digest('hex');
    const meetsTarget = hash.startsWith(target);
    res.json({ hash, meetsTarget });
});

app.listen(PORT, () => {
    console.log(`🌴🪙 Bitcoin Blockchain Game running on http://localhost:${PORT}`);
    console.log('🎮 Ready to teach the world about Bitcoin!');
});