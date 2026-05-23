# 🌴 Bitcoin Blockchain Island Game 🪙

**An Interactive Educational Tool for Teaching Bitcoin Blockchain Concepts**

*Created by My First Bitcoin Node, BTC Curacao Institute, and Family Peter Kroll*

---

## 🎯 What This Game Teaches

This fun, colorful game helps students understand core Bitcoin concepts:

- **Hashing:** How SHA256 creates unique digital fingerprints
- **Transactions:** How Bitcoin payments get bundled into blocks
- **Nonce Mining:** Why miners need to guess numbers to create blocks
- **Blockchain:** How blocks link together to form an unbreakable chain
- **Security:** Why Bitcoin's chain is so secure

Perfect for classroom demonstrations and interactive learning!

---

## 🚀 Quick Start for Teachers (No Technical Experience Required!)

### Step 1: Download and Install Void Editor

1. Go to [voideditor.com](https://voideditor.com) and download Void Editor
2. Install it on your computer (Windows, Mac, or Linux)
3. Open Void Editor

### Step 2: Get This Game

**Option A - Download from GitHub:**
1. Go to the BTC Curacao GitHub repository
2. Click the green "Code" button
3. Select "Download ZIP"
4. Unzip the file on your desktop

**Option B - Clone with Git (if you know how):**
```bash
git clone https://github.com/BTCCuracao/bitcoin-blockchain-game.git
```

### Step 3: Open the Project in Void Editor

1. In Void Editor, click "File" → "Open Folder"
2. Navigate to the `bitcoin-blockchain-game` folder you downloaded
3. Select the folder and click "Open"

### Step 4: Install Required Components

1. In Void Editor, press `Ctrl+Shift+`` (or `Cmd+Shift+`` on Mac) to open the terminal
2. Type this command and press Enter:
   ```bash
   npm install
   ```
3. Wait for it to finish (you'll see some downloading messages)

### Step 5: Start the Game

1. In the same terminal, type:
   ```bash
   npm start
   ```
2. You'll see a message like "Bitcoin Blockchain Game running on http://localhost:3000"
3. Open your web browser (Chrome, Firefox, Safari, etc.)
4. Go to: `http://localhost:3000`

**🎉 That's it! The game is now running!**

---

## 🎮 How to Use in Your Classroom

### Game Structure - 5 Interactive Tabs:

#### 🔤 **Tab 1: Hash Text**
- Students type any text and see its SHA256 hash
- Perfect for showing how hashing creates unique "fingerprints"
- **Teaching Tip:** Have students type their names, then change one letter to see how the entire hash changes!

#### 💸 **Tab 2: Hash Transactions**  
- Shows real Bitcoin transactions getting hashed into a block
- Uses actual transaction data from Bitcoin examples
- **Teaching Tip:** Explain how multiple transactions get bundled together

#### 🎲 **Tab 3: Nonce Magic**
- Students click to increment the nonce and watch hashes change
- Demonstrates why miners need to try different numbers
- **Teaching Tip:** Show how changing just the nonce completely changes the hash

#### ⛏️ **Tab 4: Mine Block**
- Students click to mine until they find a hash starting with "0"
- Celebrates with "YES WE WON THE BLOCK!" when successful
- **Teaching Tip:** Explain this is much easier than real Bitcoin mining!

#### ⛓️ **Tab 5: Mine Blockchain**
- Students mine blocks one by one
- Each mined block's hash automatically links to the next block
- **Teaching Tip:** This shows how the blockchain is actually built step by step!

---

## 👩‍🏫 Teaching Suggestions

### **Class Activity Ideas:**

1. **Hash Competition:** Students race to type words that create the coolest looking hashes
2. **Mining Race:** Split class into teams to see who can mine blocks faster
3. **Chain Building:** Work together to build a complete 3-block blockchain
4. **Security Demo:** Show how changing an old block would require re-mining everything

### **Discussion Points:**

- "What happens if we change just one letter in our hash?"
- "Why do you think real Bitcoin uses more zeros in the target?"
- "How does linking blocks together make Bitcoin secure?"
- "What would happen if someone tried to cheat by changing an old block?"

### **Perfect for:**
- Ages 12+ (though younger kids enjoy the colors and clicking!)
- 15-45 minute classroom sessions
- Groups of 5-30 students
- Both technical and non-technical audiences

---

## 🛠 Troubleshooting for Teachers

### "Command not found" or "npm not found"
- You need to install Node.js first: go to [nodejs.org](https://nodejs.org) and download it
- Restart your computer after installing
- Try the steps again

### Game won't open in browser
- Make sure you see "running on http://localhost:3000" in the terminal
- Try typing `http://127.0.0.1:3000` instead
- Check that no other programs are using port 3000

### Terminal won't open in Void Editor
- Try pressing `Ctrl+`` (backtick) instead of `Ctrl+Shift+``
- Or look for "Terminal" in the top menu

### Still need help?
- Ask a tech-savvy colleague to help with the initial setup
- Once it's running, it's very easy to use!
- Contact the My First Bitcoin community for support

---

## 🎨 Customization for Advanced Users

Want to modify the game? Here's what you can change:

- **Colors:** Edit the CSS gradients in `public/index.html`
- **Difficulty:** Change the target from "0" to "00" in the JavaScript
- **Transactions:** Modify the transaction data in `public/script.js`
- **Mining Speed:** Adjust delays and animations

---

## 📚 Educational Standards Alignment

This game supports learning objectives in:

- **Computer Science:** Cryptography, algorithms, data structures
- **Mathematics:** Number systems, probability, patterns  
- **Economics:** Digital currencies, decentralized systems
- **Critical Thinking:** Security analysis, problem-solving

---

## 🤝 Contributing to Bitcoin Education

This game is open source and free for all educators! If you:

- Improve the game and want to share your changes
- Translate it to other languages
- Create lesson plans using it
- Have suggestions for improvements

Please share with the My First Bitcoin community!

---

## 📄 License & Credits

- **Created by:** My First Bitcoin Node, BTC Curacao Institute, Family Peter Kroll
- **License:** MIT (free for educational use)
- **Community:** Part of the My First Bitcoin educational initiative

**Help us spread Bitcoin education worldwide! 🌍**

---

## ❓ Frequently Asked Questions

**Q: Do I need internet to run this game?**  
A: Only for the initial setup. Once installed, it runs completely offline!

**Q: Is this safe for school computers?**  
A: Yes! It only runs locally on your computer and doesn't connect to the internet while playing.

**Q: How long does setup take?**  
A: Usually 5-10 minutes for first-time setup.

**Q: Can students install this at home?**  
A: Absolutely! Share these instructions with parents for home learning.

**Q: Does this teach real Bitcoin concepts?**  
A: Yes! All the hashing, mining, and blockchain mechanics are authentic (just simplified and gamified).

---

*Ready to teach Bitcoin the fun way? Let's go! 🚀*