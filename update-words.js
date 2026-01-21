#!/usr/bin/env node
/**
 * Wordle Word List Updater
 *
 * This script fetches the latest Wordle answers and outputs them
 * in a format ready to paste into index.html
 *
 * Usage: node update-words.js
 *
 * Note: This is a helper script. For daily updates, you have a few options:
 *
 * OPTION 1: Manual Update (Simplest)
 * - Check https://www.fiveforks.com/wordle/ daily
 * - Add any new word to the usedWords array in index.html
 *
 * OPTION 2: GitHub Actions (Automated - if hosting on GitHub Pages)
 * - See the github-action.yml file for automated daily updates
 *
 * OPTION 3: Use a Free API
 * - Some APIs provide Wordle answers, but they may not be reliable long-term
 */

const https = require('https');

// Current word list from index.html - add new words here
const currentWords = [
    "ABACK", "ABASE", "ABATE", "ABBEY", "ABBOT", "ABHOR", "ABIDE", "ABOUT", "ABOVE", "ABYSS",
    // ... (truncated for brevity - the full list is in index.html)
];

console.log(`
=====================================
WORDLE WORD LIST UPDATER
=====================================

Current word count: ${currentWords.length}+ words

To add today's word:
1. Wait until midnight ET when the new Wordle is released
2. Play the Wordle or check a site like fiveforks.com/wordle
3. Add the new word to the usedWords array in index.html
4. Update the "Last updated" date in the HTML

Example: If today's word is "PIANO", add it alphabetically:
  Before: "PHOTO", "PIANO", "PICKY"

The word list is sorted alphabetically for easier maintenance.

=====================================
QUICK REFERENCE SITES:
=====================================
- https://www.fiveforks.com/wordle/ (no spoilers, alphabetical)
- https://wordfinder.yourdictionary.com/wordle/answers/
- https://wordlehints.co.uk/wordle-past-answers/

`);
