// Global variables
let currentNonce = 0;
let mineNonce = 0;
let chainNonce = 0;
let minedBlocks = [];
let currentBlockIndex = 0;

// Block data templates
const blockTemplates = [
    {
        number: 1,
        previous: "Genesis",
        transactions: "Runy → Student 1: 50 BTC (fee: 0.5 BTC)<br>Student 2 → Student 6: 40 BTC (fee: 0.8 BTC)<br>Miner reward: 3.125 BTC"
    },
    {
        number: 2,
        previous: "", // Will be filled with previous block hash
        transactions: "Student 3 → Student 4: 70 BTC (fee: 0.9 BTC)<br>Student 4 → Student 5: 25 BTC (fee: 0.1 BTC)<br>Miner reward: 3.125 BTC"
    },
    {
        number: 3,
        previous: "", // Will be filled with previous block hash
        transactions: "Student 2 → Teacher: 300 BTC (fee: 0.1 BTC)<br>Student 5 → Student 6: 20 BTC (fee: 0.8 BTC)<br>Miner reward: 3.125 BTC"
    }
];

// Tab switching functionality
function showTab(tabNumber) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Show selected tab
    tabs[tabNumber - 1].classList.add('active');
    document.getElementById(`tab${tabNumber}`).classList.add('active');
}

// SHA256 hashing function (simplified for browser)
async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

// Tab 1: Hash text functionality
async function hashText() {
    const input = document.getElementById('textInput').value;
    const hashDisplay = document.getElementById('textHash');
    
    if (input.trim() === '') {
        hashDisplay.textContent = 'Type something above to see the magic happen!';
        return;
    }
    
    const hash = await sha256(input);
    hashDisplay.textContent = hash;
}

// Tab 2: Hash transactions
async function hashTransactions() {
    const blockData = `Block: 1
Previous Block: Genesis
Transactions:
Runy -> Student 1: 50 BTC, Transaction fee: 0.5 BTC
Student 2 -> Student 6: 40 BTC, Transaction fee: 0.8 BTC
Miner reward: 3.125 BTC`;
    
    document.getElementById('transactionData').textContent = blockData;
    
    const hash = await sha256(blockData);
    document.getElementById('transactionHash').textContent = hash;
}

// Tab 3: Nonce functionality
async function incrementNonce() {
    currentNonce++;
    document.getElementById('currentNonce').textContent = currentNonce;
    
    const blockData = `Block: 2
Previous Block: 082be7c9bbcd99fbc50625eaa3e7e39a34b150de49bd3bb25c4defbd10902613
Transactions:
Student 3 -> Student 4: 70 BTC, Transaction fee: 0.9 BTC
Student 4 -> Student 5: 25 BTC, Transaction fee: 0.1 BTC
Miner reward: 3.125 BTC
Nonce: ${currentNonce}`;
    
    const hash = await sha256(blockData);
    document.getElementById('nonceHash').textContent = hash;
}

function resetNonce() {
    currentNonce = 0;
    document.getElementById('currentNonce').textContent = currentNonce;
    document.getElementById('nonceHash').textContent = 'Click "Change Nonce" to see different hashes!';
}

// Tab 4: Mining functionality
async function tryMining() {
    mineNonce++;
    document.getElementById('mineNonce').textContent = mineNonce;
    
    const blockData = `Block: 3
Previous Block: def456789abc123def456789abc123def456789abc123def456789abc123def4
Transactions:
Student 2 -> Teacher: 300 BTC, Transaction fee: 0.1 BTC
Student 5 -> Student 6: 20 BTC, Transaction fee: 0.8 BTC
Miner reward: 3.125 BTC
Nonce: ${mineNonce}`;
    
    const hash = await sha256(blockData);
    document.getElementById('miningHash').textContent = hash;
    
    // Check if hash starts with "0" (our easy target)
    if (hash.startsWith('0')) {
        document.getElementById('winnerMessage').classList.add('show');
        // Add celebration effect
        setTimeout(() => {
            alert('🎉 Congratulations! You successfully mined a Bitcoin block! 🎉');
        }, 500);
    } else {
        document.getElementById('winnerMessage').classList.remove('show');
    }
}

function resetMining() {
    mineNonce = 0;
    document.getElementById('mineNonce').textContent = mineNonce;
    document.getElementById('miningHash').textContent = 'Start mining to see the hash!';
    document.getElementById('winnerMessage').classList.remove('show');
}

// Tab 5: Sequential Blockchain Mining
async function mineChainBlock() {
    chainNonce++;
    document.getElementById('chainNonce').textContent = chainNonce;
    
    const currentTemplate = blockTemplates[currentBlockIndex];
    const previousHash = minedBlocks.length > 0 ? minedBlocks[minedBlocks.length - 1].hash : currentTemplate.previous;
    
    const blockData = `Block: ${currentTemplate.number}
Previous Block: ${previousHash}
Transactions:
${currentTemplate.transactions.replace(/<br>/g, '\n')}
Nonce: ${chainNonce}`;
    
    const hash = await sha256(blockData);
    document.getElementById('chainHash').textContent = hash;
    
    // Check if hash starts with "0" (our target)
    if (hash.startsWith('0')) {
        // Block successfully mined!
        const minedBlock = {
            number: currentTemplate.number,
            hash: hash,
            previousHash: previousHash,
            transactions: currentTemplate.transactions,
            nonce: chainNonce
        };
        
        minedBlocks.push(minedBlock);
        
        // Show celebration
        document.getElementById('chainWinnerMessage').classList.add('show');
        setTimeout(() => {
            document.getElementById('chainWinnerMessage').classList.remove('show');
        }, 2000);
        
        // Update blockchain display
        updateBlockchainDisplay();
        
        // Move to next block
        currentBlockIndex++;
        chainNonce = 0;
        document.getElementById('chainNonce').textContent = chainNonce;
        document.getElementById('chainHash').textContent = 'Mine the current block!';
        
        if (currentBlockIndex < blockTemplates.length) {
            // Setup next block
            updateCurrentBlockDisplay();
        } else {
            // All blocks mined!
            document.getElementById('currentBlockData').innerHTML = 
                '<div style="text-align: center; color: #4CAF50; font-weight: bold;">🎉 BLOCKCHAIN COMPLETE! 🎉</div>';
            document.getElementById('currentBlockNumber').textContent = 'All Done!';
        }
        
        setTimeout(() => {
            alert('🎉 Block mined successfully! The hash now links to the next block! 🎉');
        }, 500);
    }
}

function updateCurrentBlockDisplay() {
    if (currentBlockIndex < blockTemplates.length) {
        const template = blockTemplates[currentBlockIndex];
        const previousHash = minedBlocks.length > 0 ? 
            minedBlocks[minedBlocks.length - 1].hash.substring(0, 16) + '...' : 
            template.previous;
            
        document.getElementById('currentBlockNumber').textContent = `Block ${template.number}`;
        document.getElementById('currentBlockData').innerHTML = 
            `Previous Block: ${previousHash}<br>${template.transactions}`;
    }
}

function updateBlockchainDisplay() {
    const display = document.getElementById('blockchainDisplay');
    let html = '';
    
    minedBlocks.forEach((block, index) => {
        const shortHash = block.hash.substring(0, 8) + '...';
        const shortPrevious = block.previousHash === 'Genesis' ? 
            'Genesis' : block.previousHash.substring(0, 8) + '...';
            
        html += `
            <div class="block" style="animation: fadeIn 0.5s ease;">
                <h4>📦 Block ${block.number}</h4>
                <div>Hash: ${shortHash}</div>
                <div>Previous: ${shortPrevious}</div>
                <div>Nonce: ${block.nonce}</div>
            </div>`;
            
        if (index < minedBlocks.length - 1) {
            html += '<div class="arrow">→</div>';
        }
    });
    
    display.innerHTML = html;
}

function resetChain() {
    minedBlocks = [];
    currentBlockIndex = 0;
    chainNonce = 0;
    
    document.getElementById('chainNonce').textContent = chainNonce;
    document.getElementById('chainHash').textContent = 'Start mining to see the hash!';
    document.getElementById('chainWinnerMessage').classList.remove('show');
    document.getElementById('blockchainDisplay').innerHTML = '';
    
    updateCurrentBlockDisplay();
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Add some welcome animations
    setTimeout(() => {
        document.querySelector('.header').style.animation = 'fadeIn 1s ease';
    }, 100);
    
    // Initialize the blockchain tab
    updateCurrentBlockDisplay();
});