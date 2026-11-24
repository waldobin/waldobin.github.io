# Waldo Ha — Senior Mobile & AI Engineer Portfolio

A clean, responsive, single-page personal portfolio website built with vanilla HTML5, CSS3, and modern JavaScript. Designed for high freelance conversion on Upwork, Fiverr, and GitHub.

## Features

- **Zero Build Step**: Pure static site (`index.html`, `styles.css`, `script.js`). No Node.js or bundlers needed.
- **Theme Support**: Seamless dark and light themes respecting `prefers-color-scheme` with manual toggle and `localStorage` persistence.
- **Engineered Aesthetic**: Confident, minimalist typography with an electric cyan/blue accent—no generic AI gradients.
- **Accessible & Fast**: Semantic markup, keyboard navigation, high-contrast ratios, and full `prefers-reduced-motion` compliance.
- **SEO & Social Ready**: Open Graph tags, Twitter cards, and structured JSON-LD `Person` schema.

---

## Local Development

Simply open `index.html` in any modern web browser:

```bash
open index.html
```

Or spin up a local preview server with Python:

```bash
python3 -m http.server 8000
# Then visit http://localhost:8000
```

---

## How to Deploy to GitHub Pages

Deploying takes under two minutes directly from your repository:

### Step 1: Push to GitHub
Commit and push all files to your GitHub repository:
```bash
git add .
git commit -m "Initial portfolio release"
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages
1. Navigate to your repository on GitHub.
2. Click **Settings** (top navigation tab).
3. In the left sidebar under the "Code and automation" section, click **Pages**.
4. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Choose `main` and set folder to `/ (root)`.
   - Click **Save**.

### Step 3: Access Live Site
Within 1–2 minutes, GitHub will display your site URL at the top of the Pages settings page:
`https://<your-github-username>.github.io/<repository-name>/`

*(Optional)* If using a custom domain (e.g. `hoatha.dev`), add your domain under **Custom domain** and configure your DNS `CNAME` or `A` records as prompted by GitHub.

---

## Customization Placeholders (`<!-- TODO -->`)

The codebase includes clear `TODO` comments for optional assets and external links:
1. **Profile Photo**: Add `avatar.jpg` to the `assets/` folder and update the avatar container in `index.html` (line 155).
2. **LinkedIn URL**: Replace the `#` placeholder in the Contact section with your LinkedIn URL (line 504).
3. **Demo / App Links**: Add live video or App Store links to the project cards in `index.html` as new releases become public.

---

## License

Open source under the [MIT License](LICENSE).
