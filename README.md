# FloppersBlop

**Ideas that flop, get fixed, and sometimes ship.**

The website of **FloppersBlop**, an independent creative technology project by [Yash Arya](https://www.linkedin.com/in/yash29xd/). It collects the Minecraft modpacks, texture packs, software experiments and notes behind them, plus a printable portfolio and CV.

**Live site:** https://yash29xd.github.io/floppersblop/

---

## About the project

FloppersBlop is a one-person workshop: a place for ideas that flop, get rebuilt, and sometimes turn into something worth sharing. The site is a plain, hand-built static site with a brutalist-maximalist look: flat colour slabs, thick black borders, hard shadows, huge condensed type and the mascot stickers. A blob cursor and a quick page wipe run on desktop only.

| Project | What it is |
|---|---|
| [OptiBoostCraft](https://modrinth.com/modpack/optiboostcraft) | Performance-focused Minecraft modpack on Modrinth. 30 mods, Fabric, still maintained. |
| Growing Channel | YouTube channel about Minecraft, gaming and PC optimisation. [@GrowingChannel](https://www.youtube.com/@GrowingChannel) |
| Discord community | The FloppersBlop server. [Join](https://discord.gg/QXB922G5W5) |
| RTX Textures | A 2021 compilation resource pack. Archived and not offered. |

## Pages

| Page | File |
|---|---|
| Home | `index.html` |
| About and milestones | `about.html` |
| Projects | `projects.html` |
| Portfolio & CV (prints cleanly in black and white) | `cv.html` |
| Services | `services.html` |
| FAQ | `faq.html` |
| Contact | `contact.html` |
| Terms, Privacy, Copyright & IP, Disclaimer | `terms.html`, `privacy.html`, `copyright.html`, `disclaimer.html` |

## Tech

Plain HTML, CSS and JavaScript. No framework, no build step, no dependencies.

- Three Google Fonts: Big Shoulders Display (headlines), Pixelify Sans (labels) and Bricolage Grotesque (text).
- Responsive layout for phones, tablets and desktops: Explore tiles become a two-column grid on phones, the three projects become a swipe row, and the long legal pages collapse into tap-to-open sections.
- Built to stay fast on low-end phones: flat colours and hard shadows (no blur, blend or filter effects), no continuous animation on phones, resized images and a total weight of about 2.6 MB. Desktop-only effects and animations also switch off for `prefers-reduced-motion`.
- The CV page has its own print stylesheet: use **Print / save as PDF** on the page.

## Folder layout

```
.
├── index.html, about.html, projects.html, cv.html, …   one file per page
├── styles.css      all styling (colours are variables at the top)
├── app.js          cursor, page transitions, scroll effects, stat counters
├── config.js       numbers and dates for the Home page stat stickers
├── assets/
│   ├── logo.png, wordmark.png      brand images
│   ├── img1.png … img13.png        project tiles and page pictures (see assets/IMAGES.md)
│   ├── icons/                      mascot stickers shown on the content boxes
│   ├── nav/                        banners for the Home page "Explore the site" grid
│   └── IMAGES.md                   where each picture appears
├── .nojekyll
└── README.md
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
# visit http://localhost:8000
```

## Editing

- **Stats on the Home page:** edit `config.js`. Put a date in `asOf` and the sticker shows "as of …". Leave it empty and it says "as previously reported".
- **Pictures:** replace any image in `assets/` (for example `img1.png`, a file in `icons/` or `nav/`) with your own, keeping the file name. `assets/IMAGES.md` lists where each one appears.
- **Text:** edit the page's `.html` file. Unfinished text shows as a yellow dashed tag (`<mark class="ph">`); search for `class="ph"` to find them all.
- **Colours:** change the variables at the top of `styles.css`.

## Updating the live site

The site is served by GitHub Pages from the `main` branch.

**On github.com:** open the repository, choose **Add file → Upload files**, drag in the new files (replace the old ones), then **Commit changes**.

**With Git:**

```bash
git clone https://github.com/Yash29xd/floppersblop.git
cd floppersblop
# copy the new files over the old ones, then:
git add -A
git commit -m "Update site"
git push
```

GitHub Pages rebuilds in a minute or two. If it isn't switched on yet: **Settings → Pages → Deploy from a branch → main → / (root) → Save**.

## Before sharing widely

- The site has no unfinished placeholders. If you ever see a yellow dashed tag, fill it in or remove it.
- Terms, Privacy, Copyright and Disclaimer are drafts, not legal advice. A legal professional's review is a good idea. The Privacy Policy already names GitHub Pages as the host and Google Fonts as a third-party service.
- Click every link once, and re-check the numbers in `config.js`.

## Credits and notices

- OptiBoostCraft includes mods by many authors, each under its own licence. Authors and licences are on each mod's Modrinth page.
- RTX Textures was compiled from other creators' texture packs, which belong to their authors. It is archived and not distributed from this site.
- Minecraft is a trademark of Mojang Studios and Microsoft. FloppersBlop's Minecraft projects are unofficial and are not approved by or associated with Mojang or Microsoft.

## Rights

© 2026 Yash Arya. All rights reserved unless a file says otherwise. To reuse anything, ask first: [29aryash@gmail.com](mailto:29aryash@gmail.com).

## Contact

[Email](mailto:29aryash@gmail.com) · [LinkedIn](https://www.linkedin.com/in/yash29xd/) · [Instagram](https://www.instagram.com/floppersblop/) · [GitHub](https://github.com/Yash29xd) · [YouTube](https://www.youtube.com/@GrowingChannel) · [Modrinth](https://modrinth.com/user/OptiBoostCraft) · [Discord](https://discord.gg/QXB922G5W5) · gamer tag @yash29xd
