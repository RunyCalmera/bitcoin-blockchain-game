# New Features Backlog

Planned features for the Bitcoin Blockchain Game. Not yet implemented.

---

## 1. Adjustable Mining Difficulty (Number of Leading Zeros)

**Tab:** ⛏️ Mine Block (Tab 4)

### Description
On the Mining tab, add a control that lets the user choose how many leading zeros the winning hash must have.

- **Default:** 1 zero (current behavior)
- **Allowed values:** 1, 2, 3, or more leading zeros
- The chosen difficulty must be used inside the hash-checking function — a higher number of zeros means it is harder to find a winning block.

### Why
This teaches students the concept of **mining difficulty** in Bitcoin. In the real network, the protocol adjusts the required number of leading zeros so that a block is found roughly every 10 minutes. Letting the user crank the difficulty up lets them *feel* how exponentially harder mining becomes with each extra zero.

### How it should behave
- User can change the difficulty before or during a mining session.
- The "🎯 Target" text on the tab should update to reflect the chosen difficulty (e.g. "Hash must start with `000`").
- The mining check (`hash.startsWith(...)`) should use a string of N zeros built from the chosen difficulty, instead of the hard-coded `"0"`.
- The winning message and nonce counter still behave the same way.

### Suggested UI
- A small `+` / `−` stepper or a number input next to the "Mining Nonce" display.
- Optional: a short note explaining "Each extra zero makes mining ~16x harder."

### Scope
- Applies to Tab 4 (Mine Block) at minimum.
- Consider applying the same idea to Tab 5 (Block Chain) so the whole chain can be mined at a chosen difficulty.

---

## 2. "About this Game" Tab

**Tab:** ℹ️ About (new tab — to be added to the existing tab bar in both desktop and mobile)

### Description
Add a new tab that explains what the game is, where it comes from, and who made it possible. It should be the first or last tab in the bar (recommend last, so it doesn't interrupt the learning flow).

### Content (suggested copy)

**🌴 What is this game?**
The Bitcoin Blockchain Island Game is a hands-on, interactive way to learn how the Bitcoin blockchain works. Through five playful tabs — hashing text, hashing transactions, playing with the nonce, mining a block, and building a full blockchain — students experience the core mechanics of Bitcoin instead of just reading about them.

**📚 Background — My First Bitcoin, Lesson 9**
This game was built as a teaching resource for **Lesson 9** of the [My First Bitcoin](https://myfirstbitcoin.org) curriculum, which covers the blockchain: how blocks are linked through hashes, what a nonce does, and why mining secures the network. The game turns the lesson's diagrams into something students can click, type into, and mine themselves.

**🙏 Thanks**
A huge thank-you to the **[BTC Curaçao Institute](https://btccuracao.com)** for bringing the My First Bitcoin education program to Curaçao and making lessons like this possible for our community of students and teachers.

### Suggested UI
- A simple readable layout: short paragraphs, no input fields, no buttons.
- Keep the same card/section styling already used in other tabs (purple `.card`, orange header accents).
- Make the two links (`myfirstbitcoin.org`, `btccuracao.com`) open in a new tab (`target="_blank" rel="noopener"`).

### Scope
- Add to **both** `public/index.html` (desktop) and `public/mobile/index.html` (mobile).
- Add a corresponding tab button to the tab bar in each.
- No new JavaScript needed — the existing `showTab()` function already handles new tabs as long as the numbering is consistent.
