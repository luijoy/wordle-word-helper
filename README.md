# Wordle Word Checker

A simple, ad-free website to check if a word has already been used in Wordle.

## How to Use

1. Open `index.html` in a browser
2. Type any 5-letter word
3. See instantly if it's been used before AND if it's a valid English word

## Quick Setup (GitHub Pages - Recommended)

This is the easiest way to host the site with automatic daily updates:

### Step 1: Create GitHub Repository
1. Go to [github.com](https://github.com) and sign in (or create a free account)
2. Click the **+** button → **New repository**
3. Name it `wordle-checker` (or anything you like)
4. Make it **Public**
5. Click **Create repository**

### Step 2: Upload Files
1. Click **uploading an existing file**
2. Drag and drop the entire `Wordle` folder contents (including the `.github` folder)
3. Click **Commit changes**

### Step 3: Enable GitHub Pages
1. Go to **Settings** → **Pages** (in the left sidebar)
2. Under "Source", select **GitHub Actions**
3. Your site will be live at `https://yourusername.github.io/wordle-checker`

### Step 4: Enable Auto-Updates (Already Configured!)
The `.github/workflows/update-words.yml` file automatically:
- Runs every day at 1:00 AM EST (after the new Wordle releases at midnight)
- Fetches the latest Wordle answer
- Adds it to the word list
- Commits the change

**That's it!** The site will stay up-to-date automatically.

To manually trigger an update:
1. Go to **Actions** tab
2. Click **Update Wordle Words Daily**
3. Click **Run workflow**

## Other Hosting Options

### Local Use Only
Just open `index.html` directly in your browser - no server needed!
You'll need to manually add new words each day.

### Netlify (No Auto-Updates)
1. Go to [netlify.com/drop](https://netlify.com/drop)
2. Drag and drop the folder
3. Your site is live instantly!

### Vercel
Connect your GitHub repo for automatic deployments.

## Manual Updates

If not using GitHub Actions, add new words manually:

1. Open `index.html` in a text editor
2. Find the `usedWords` array
3. Add the new word in alphabetical order: `"NEWWORD"`
4. Update the "Last updated" date
5. Save the file

### Where to Find Daily Answers
- https://www.fiveforks.com/wordle/ - Alphabetical, no spoilers
- https://wordfinder.yourdictionary.com/wordle/answers/ - By date

## Files

```
Wordle/
├── index.html          # The complete website
├── README.md           # This file
├── update-words.js     # Helper script (optional)
└── .github/
    └── workflows/
        └── update-words.yml  # GitHub Action for auto-updates
```

## Features

- **Word Validation**: Checks if words are real English words using a dictionary API
- **Used Word Check**: Shows if a word has already been a Wordle answer
- **Full Word List**: Browse all 1,290+ previously used words
- **Filter**: Search/filter the word list
- **No Ads**: Clean, fast, privacy-friendly
- **Auto-Updates**: Daily updates via GitHub Actions (if hosted on GitHub)

## Credits

Word data sourced from public Wordle answer archives.
Dictionary validation powered by [Free Dictionary API](https://dictionaryapi.dev/).
Built with love for Wordle-playing dads everywhere.
