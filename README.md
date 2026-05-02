# The WORDle

A Daily Devotional for the Discerning Mind.

## Setup

### Run locally
```bash
npm install
npm run dev
```

### Deploy to GitHub Pages

1. Create a new GitHub repo (e.g. `thewordle`)
2. Open `vite.config.js` and change the `base` value to match your repo name:
   ```js
   base: '/your-repo-name/',
   ```
3. Push this folder to your repo
4. In your GitHub repo, go to **Settings → Pages → Source** and select **GitHub Actions**
5. The site will automatically build and deploy on every push to `main`

Your live URL will be: `https://your-username.github.io/your-repo-name/`
