# TWIRL° — AI Image Prompts & File Names

## How to use this document

1. Generate each image from its prompt (Midjourney, DALL·E, Ideogram, Leonardo, Flux, etc.).
2. **Rename the file to the exact `File name` shown** (lowercase, same extension).
3. Upload it to **`assets/images/`** in the repo.
4. That's it. The site loads each image automatically when it finds the file. Until a file exists, the placeholder stays, so you can upload them one at a time.

```
twirl-site/
├── index.html … (all pages)
└── assets/
    ├── style.css
    ├── main.js
    └── images/        ← put every file from this document here
```

**File rules:**

- `.jpg` = photo. Use 80% quality and keep it under 400 KB (compress at squoosh.app or tinypng.com).
- `.png` = transparent background (dish plates, packs, favicon, app screen).
- `.svg` = vector logo.

---

## Global style (add to the end of every photo prompt)

> Editorial food and lifestyle photography, bold direct flash, high contrast, saturated warm reds and mustard yellows, cream accents, playful retro diner mood, sharp focus, 35mm film look, ultra detailed. Brand colours: brick red #C8302F, cream #F4F1EA, mustard #E8A83A, charcoal #151515.
> **Negative:** text, words, watermark, logos, brand names, extra fingers, deformed hands, blurry, plastic-looking food.

---

## 1. Brand files (6 files)

| # | File name | Size | Used on |
|---|---|---|---|
| 1 | `logo.webp` | ~1200 wide, transparent | Header, all pages |
| 2 | `logo-white.webp` | ~1200 wide, transparent | Footer |
| 3 | `favicon.webp` | 512×512 | Browser tab |
| 4 | `og-image.jpg` | 1200×630 | Link previews (WhatsApp, Facebook) |
| 5 | `app-screen.webp` | 560×1140 | Phone mockup, home "Saucy Club" section |
| 6 | `qr-code.webp` | 400×400 | Home "Saucy Club" section |

**`logo.webp`**: Minimal wordmark logo reading "TWIRL°", tall condensed bold sans-serif, all caps, brick red #C8302F, transparent background, small degree symbol top right, the W subtly shaped like a fork twirling a pasta strand, flat vector, no gradients. *(Export as WebP with a transparent background.)*

**`logo-white.webp`**: Same wordmark as `logo.webp`, but in pure white on a transparent background.

**`favicon.webp`**: Square app icon, brick red #C8302F background, a white fork twirling a single pasta strand into a circle, flat vector, bold, readable at 32px.

**`og-image.jpg`**: Wide banner, cream #F4F1EA background, a large plate of tomato spaghetti on the right, big empty space on the left for a logo, overhead flash, playful.

**`app-screen.webp`**: Mobile app UI screenshot for a pasta loyalty app, red header with a greeting, a white card showing "120 points", a grid of four food tiles with pasta photos, rounded corners, cream background, clean modern UI, portrait 9:19.5. *(Or take a screenshot of your real app later.)*

**`qr-code.webp`**: Create this with a free QR generator (for example qr-code-generator.com) pointing to your app or website. Red code on a white background. **Do not use AI for this one.**

---

## 2. Home page photos (9 files)

| Code | File name | Size | Section |
|---|---|---|---|
| IMG-01 | `hero-portrait.jpg` | 1800×1080 | Hero oval |
| VID-01 | `story-gold-bowl-1.jpg` | 750×1320 | Gold-bowl section, left card |
| VID-02 | `story-gold-bowl-2.jpg` | 750×1320 | Gold-bowl section, right card |
| IMG-20 | `delivery-bag.jpg` | 1200×1200 | Delivery circle (also on menu & locations) |
| IMG-21 | `jobs-crew-portrait.jpg` | 1200×1500 | "Join the crew" card |
| IMG-22 | `blog-twirl-kids.jpg` | 1200×800 | Journal card 1 |
| IMG-23 | `blog-chef-lasagne.jpg` | 1200×800 | Journal card 2 |
| IMG-24 | `blog-match-night.jpg` | 1200×800 | Journal card 3 |
| IMG-25 | `newsletter-mailbox.jpg` | 1200×1500 | Newsletter card (on 5 pages) |

**`hero-portrait.jpg`**: A cheerful young man with curly dark hair sprawled in a mustard-yellow damask velvet armchair, wearing a yellow-and-white striped t-shirt and a white paper bib, slurping one long strand of spaghetti from a fork, holding a white scalloped plate of tomato pasta, glossy red tiled wall behind, overhead flash, cheeky expression. Subject centred with generous space around the edges for an oval crop. Landscape 5:3.

**`story-gold-bowl-1.jpg`**: Vertical phone-video style frame, a group of friends at a restaurant table cheering and pointing at a pasta bowl with a shiny gold base, candid, motion energy, warm interior light. Portrait 9:16.

**`story-gold-bowl-2.jpg`**: Vertical phone-video style frame, a young man in a red sweater laughing in surprise while holding up an empty bowl with a gold base, restaurant background softly blurred. Portrait 9:16.

**`delivery-bag.jpg`**: Top-down photo of a brown kraft paper takeaway bag with a red sticker seal, a folded receipt tucked in, on dark grey concrete, hard flash, centred so it works inside a circle crop. Square 1:1.

**`jobs-crew-portrait.jpg`**: Funny portrait of a young woman restaurant worker in a green apron balancing an upside-down plate of spaghetti and meatballs on her head, a strand of spaghetti hanging down her face, cross-eyed playful expression, plain cream background, flash. Portrait 4:5.

**`blog-twirl-kids.jpg`**: Two happy kids peeking over a restaurant table at big bowls of pasta, bright colourful diner interior, playful. Landscape 3:2.

**`blog-chef-lasagne.jpg`**: Chef in a busy stainless-steel kitchen lifting a bubbling tray of lasagne from the oven, steam, moody light. Landscape 3:2.

**`blog-match-night.jpg`**: Friends in a restaurant cheering at a big screen showing a football match (no logos), holding forks of pasta, dim warm light. Landscape 3:2.

**`newsletter-mailbox.jpg`**: Surreal still life: a white vintage metal mailbox bursting open with uncooked spaghetti and pasta flying out, red flag raised, bright solid red background, hard studio flash. Portrait 4:5.

---

## 3. Location slider photos (6 files)

Used in the dark rounded slider on home, menu and about.

| Code | File name | Size |
|---|---|---|
| IMG-07 | `location-interior.jpg` | 900×1400 |
| IMG-08 | `location-storefront.jpg` | 2000×1400 |
| IMG-09 | `location-booth.jpg` | 900×1400 |
| IMG-10 | `location-crowd.jpg` | 2000×1400 |
| IMG-18 | `location-open-kitchen.jpg` | 900×1400 |
| IMG-19 | `location-terrace.jpg` | 2000×1400 |

**`location-interior.jpg`**: Corner of a modern pasta restaurant, warm wooden slat bench, bentwood chairs, red tabletop, a glass of water, potted plant, soft daylight. Portrait.

**`location-storefront.jpg`**: Restaurant facade on a city street at blue hour, big glass windows reflecting buildings, a glowing white neon sign reading "TWIRL", warm light spilling out, people dining inside. Landscape.

**`location-booth.jpg`**: Cosy red leather booth with mustard cushions, retro framed posters, brass pendant lamps, table set with plates and forks. Portrait.

**`location-crowd.jpg`**: Lively evening crowd of friends laughing and talking in a buzzing pasta restaurant, slight motion blur, warm tungsten light, candid. Landscape.

**`location-open-kitchen.jpg`**: Open kitchen counter with chefs plating pasta under warm lights, steam rising, red tiles. Portrait.

**`location-terrace.jpg`**: Outdoor restaurant terrace at night with string lights, small tables full of people eating pasta, warm glow. Landscape.

---

## 4. Locations page cards (9 files)

All 1400×1000, landscape. Prompt template, changing only the bracketed part:

> Exterior or interior of a modern casual pasta restaurant in **[CITY / AREA]**, red and cream colour scheme, warm inviting lights, people dining, architectural photography, golden hour. *(+ global style)*

| Code | File name | City / area to put in the prompt |
|---|---|---|
| LOC-01 | `loc-lahore-gulberg.jpg` | Lahore, busy upscale shopping street |
| LOC-02 | `loc-lahore-dha.jpg` | Lahore, modern boulevard with palm trees |
| LOC-03 | `loc-karachi-clifton.jpg` | Karachi, near the seaside |
| LOC-04 | `loc-karachi-dha.jpg` | Karachi, modern commercial street at night |
| LOC-05 | `loc-islamabad-f7.jpg` | Islamabad, leafy market with Margalla hills behind |
| LOC-06 | `loc-islamabad-centaurus.jpg` | Islamabad, mall food court, interior |
| LOC-07 | `loc-dubai-jbr.jpg` | Dubai, beachfront walkway with towers |
| LOC-08 | `loc-doha-westbay.jpg` | Doha, glass skyline, mall ground floor |
| LOC-09 | `loc-london-soho.jpg` | London, narrow Soho street with brick buildings |

*(Change cities and file names together if your real locations differ. Tell Claude the new names and it will update `main.js` and `locations.html`.)*

---

## 5. Jobs & About pages (2 files)

| Code | File name | Size | Page |
|---|---|---|---|
| IMG-26 | `jobs-hero-crew.jpg` | 1800×1080 | Jobs, hero oval |
| IMG-27 | `about-founders.jpg` | 1200×1500 | About, story card |

**`jobs-hero-crew.jpg`**: Group of six smiling restaurant staff in red t-shirts and aprons posing together in a pasta restaurant, a few holding plates of spaghetti, one doing a silly pose, flash, centred with space around for an oval crop. Landscape 5:3.

**`about-founders.jpg`**: Two friends in their late twenties standing in a small restaurant kitchen, one stirring a huge pot of tomato sauce, the other laughing with a wooden spoon, warm nostalgic light. Portrait 4:5.

---

## 6. Dish plates: transparent PNG (12 files)

Used on the home floating plates and the menu cards. **Must have a transparent background.** Use the "remove background" option, or run the image through remove.bg.

**Base prompt for all dishes:**

> Top-down overhead photo of an antique white embossed porcelain plate with a thin burgundy rim, filled with **[DISH]**, isolated on a pure white background (for background removal), perfectly centred, entire plate visible, soft shadow, studio food photography, ultra detailed. Square 1:1, 1200×1200.

| File name | [DISH] description to insert |
|---|---|
| `dish-the-twirl.png` | spaghetti bolognese with rich slow-cooked beef sauce, grated parmesan, a basil leaf |
| `dish-smoky-bolo.png` | spaghetti with dark smoky beef ragù, crispy pancetta crumbs, parmesan, thyme |
| `dish-twirl-special.png` | spaghetti half bolognese, half creamy four-cheese sauce, mixed together |
| `dish-cheesy-does-it.png` | spaghetti in silky creamy four-cheese sauce, cracked black pepper |
| `dish-garden-party.png` | spaghetti with roasted cherry tomatoes, zucchini, red peppers and basil oil |
| `dish-chicken-smash.png` | spaghetti in creamy tomato sauce with pulled chicken and sliced spring onion |
| `dish-red-hot-lover.png` | spicy arrabbiata spaghetti with chili flakes, roasted peppers and jalapeño slices |
| `dish-the-golden-fork.png` | spaghetti in truffle cream with wild mushrooms, shaved truffle and a parmesan crisp |
| `dish-holy-meatballs.png` | spaghetti in bright marinara with three golden beef meatballs and rocket leaves |
| `dish-combo-deluxe.png` | plate split in two: bolognese spaghetti on one side, cheesy cream spaghetti on the other |
| `dish-burrata-bomb.png` | spicy arrabbiata spaghetti topped with a whole torn burrata, basil and chili |
| `dish-pink-vodka.png` | spaghetti in pink tomato-vodka cream sauce, fresh basil and a spoon of ricotta |

---

## 7. Twirl To Go packs: transparent PNG (4 files)

Used on the menu page and the Twirl To Go page.

**Base prompt:**

> Product photo of a sausage-shaped plastic sauce pouch with metal clips at both ends, colour **[COLOUR]**, a white rectangular label in the middle reading "TWIRL°", lying horizontally, isolated on pure white background for background removal, studio lighting, packaging design render. Landscape 2:1, 1400×700.

| File name | [COLOUR] |
|---|---|
| `pack-the-twirl.png` | deep tomato red |
| `pack-cheesy-does-it.png` | creamy pale yellow |
| `pack-smoky-bolo.png` | dark brick brown-red |
| `pack-garden-party.png` | olive green |

*(AI tools often misspell text on labels. If that happens, generate the pack without text and add the logo in Canva.)*

---

## 8. Optional animated loops

These need a video tool (Runway, Kling, Pika, Luma). Export as **MP4** (and GIF if you want). They are not wired into the site yet. Upload them and ask Claude to add them.

| File name | Prompt |
|---|---|
| `loop-fork-twirl.mp4` | Seamless 3-second loop, top-down, a fork twirling spaghetti on a white plate, cream background, smooth motion |
| `loop-sauce-drip.mp4` | Slow-motion loop of red tomato sauce dripping off a spaghetti nest lifted on a fork, solid red background |
| `loop-steam.mp4` | Gentle steam rising from a fresh bowl of pasta, dark background, loopable |
| `story-gold-bowl-1.mp4` | Animate `story-gold-bowl-1.jpg`: friends cheering, 5 seconds |
| `story-gold-bowl-2.mp4` | Animate `story-gold-bowl-2.jpg`: man laughing and lifting the bowl, 5 seconds |

---

## Do NOT generate with AI

- **Delivery app buttons** (Foodpanda, Careem): use each company's official logo from their partner/brand kit, and only once you're an official partner.
- **Map**: replace with a Google Maps embed (ask Claude).
- **QR code**: use a QR generator (see section 1).

---

## Checklist: 48 image files

**Brand (6):** logo.webp · logo-white.webp · favicon.webp · og-image.jpg · app-screen.webp · qr-code.webp

**Home (9):** hero-portrait.jpg · story-gold-bowl-1.jpg · story-gold-bowl-2.jpg · delivery-bag.jpg · jobs-crew-portrait.jpg · blog-twirl-kids.jpg · blog-chef-lasagne.jpg · blog-match-night.jpg · newsletter-mailbox.jpg

**Slider (6):** location-interior.jpg · location-storefront.jpg · location-booth.jpg · location-crowd.jpg · location-open-kitchen.jpg · location-terrace.jpg

**Location cards (9):** loc-lahore-gulberg.jpg · loc-lahore-dha.jpg · loc-karachi-clifton.jpg · loc-karachi-dha.jpg · loc-islamabad-f7.jpg · loc-islamabad-centaurus.jpg · loc-dubai-jbr.jpg · loc-doha-westbay.jpg · loc-london-soho.jpg

**Jobs/About (2):** jobs-hero-crew.jpg · about-founders.jpg

**Dishes (12):** dish-the-twirl.png · dish-smoky-bolo.png · dish-twirl-special.png · dish-cheesy-does-it.png · dish-garden-party.png · dish-chicken-smash.png · dish-red-hot-lover.png · dish-the-golden-fork.png · dish-holy-meatballs.png · dish-combo-deluxe.png · dish-burrata-bomb.png · dish-pink-vodka.png

**Packs (4):** pack-the-twirl.png · pack-cheesy-does-it.png · pack-smoky-bolo.png · pack-garden-party.png

---

### Message to give Claude after uploading

> "I've uploaded the images to `assets/images/` in my repo [link]. Check every file name against IMAGE-PROMPTS.md, tell me which are missing or misnamed, and fix anything that doesn't display."
