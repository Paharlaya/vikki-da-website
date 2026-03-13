# IMPLEMENTATION PLAN - Depemblim Tours & Travels Website

## Project Overview
Build a **super minimalist static travel website** for Depemblim Tours & Travels using only HTML, CSS, and vanilla JavaScript. The design should flow like a river with 95% white space and minimal color accents.

## Current Assets Analysis

### Existing Files to Replace/Modify:
- `index.html` - Current site (will be completely replaced)
- `assets/css/styles.css` - Current styles (will be replaced with minimal CSS)
- `assets/js/main.js` - Current JS (will be replaced with simple scroll + WhatsApp logic)

### Available Images (6 images to use strategically):
1. **mt.kunchenjunga.jpg** - Perfect for intro section (mountain view)
2. **Batasia-Loop-Darjeeling (1).jpg** - Iconic Darjeeling landmark
3. **lamahatta 6 (1).jpg** - Scenic location
4. **teagarden.jpg** - Tea garden view
5. **nightwithclouds.jpg** - Evening/night scene
6. **a-red-panda-balancing-on-a-tree.jpg** - Wildlife

### Data Sources:
- `website-docs/aboutus.md` - Company information and contact details
- `website-docs/itenary-complete.md` - 15 tour packages with full details

## Design Specifications

### Color Palette:
- Background: Pure white (#FFFFFF) - 95% of design
- Primary text: Navy blue (#0B1F3A)
- Accent red: #D62828 (hover states only)
- Accent yellow: #F4B400 (thin divider lines)
- Light gray: #F3F4F6 (subtle card borders)

### Typography:
- Font: Inter or Poppins (Google Fonts)
- Logo: Letter-spaced, thin weight
- Headers: Light weight, ample spacing
- Body: 16px, line-height: 1.8

### WhatsApp Integration:
- Phone: 9564827858 (from aboutus.md)
- Format: `https://wa.me/919564827858?text=`
- Message template: "Interested in {CODE} - {NAME}"

## File Structure to Create

```
/
├── index.html (replace existing)
├── assets/
│   ├── css/
│   │   └── style.css (new minimal CSS)
│   ├── js/
│   │   └── script.js (new simple JS)
│   └── images/ (existing images)
└── itineraries/
    ├── queen-of-hills.html
    ├── lagoon-splendour-01.html
    ├── lagoon-splendour-02.html
    ├── darjeeling-hills-charm.html
    ├── earthly-bliss.html
    ├── himalayan-glory.html
    ├── green-impression.html
    ├── himalayan-ecstasy.html
    ├── himalayan-odyssey.html
    ├── himalayan-journey.html
    ├── mountain-fragrance.html
    ├── heavenly-bouquet.html
    ├── highland-sojourn.html
    ├── mountain-tranquility.html
    └── magical-nights.html
```

## 15 Tour Packages (from itenary-complete.md)

| Code | Name | Duration | Route |
|------|------|----------|-------|
| DPTT01 | Queen of Hills | 2N/3D | Airport → Darjeeling → Airport |
| DPTT02 | Lagoon Splendour 01 | 2N/3D | Airport → Darjeeling via Mirik → Airport |
| DPTT03 | Lagoon Splendour 02 | 2N/3D | Airport → Darjeeling → Airport via Mirik |
| DPTT04 | Darjeeling Hills Charm | 3N/4D | Airport → Darjeeling + Mirik → Airport |
| DPTT05 | Earthly Bliss | 4N/5D | Airport → Darjeeling + Mirik + Kalimpong → Airport |
| DPTT06 | Himalayan Glory | 3N/4D | Airport → Darjeeling + Toy Train → Airport |
| DPTT07 | Green Impression | 5N/6D | Full Darjeeling + Kalimpong + Mirik |
| DPTT08 | Himalayan Ecstasy | 2N/3D | Airport → Darjeeling via Mirik → Gangtok |
| DPTT09 | Himalayan Odyssey | 2N/3D | Airport → Darjeeling → Gangtok |
| DPTT10 | Himalayan Journey | 2N/3D | Airport → Darjeeling → Gangtok via Kalimpong |
| DPTT11 | Mountain Fragrance | 3N/4D | Airport → Darjeeling + Mirik → Gangtok via Kalimpong |
| DPTT12 | Heavenly Bouquet | 4N/5D | Airport → Darjeeling + Toy Train + Mirik → Gangtok |
| DPTT13 | Highland Sojourn | 2N/3D | Airport → Darjeeling via Mirik → Pelling |
| DPTT14 | Mountain Tranquility | 3N/4D | Airport → Darjeeling + Mirik → Pelling |
| DPTT15 | Magical Nights | 4N/5D | Airport → Darjeeling + Mirik + Kalimpong → Pelling |

## Implementation Steps

### STEP 1: Create New index.html
- Remove all existing content
- Build ultra-minimal single-page layout
- Text-based logo: "DEPEMBLIM" with subtitle "tours & travels"
- Navbar: Transparent initially, white on scroll
- Intro section: Centered text + mt.kunchenjunga.jpg (small, 350px height)
- Tours grid: 15 cards in 3-2-1 responsive columns
- About section: Minimal text from aboutus.md
- Footer: Simple copyright

### STEP 2: Create style.css
- Reset styles for consistency
- Define minimal color variables
- Typography: Inter font, light weights
- Grid system: CSS Grid for cards
- Card styles: Float effect with subtle borders
- Responsive breakpoints: 768px, 1024px
- Micro-interactions: Subtle hover states only
- WhatsApp button: Navy blue, turns red on hover

### STEP 3: Create script.js
- Smooth scroll navigation
- Dynamic card generation from data
- WhatsApp button click handler
- Navbar background on scroll
- No heavy libraries or animations

### STEP 4: Generate 15 Itinerary Pages
Each page will have:
- Minimal header with back navigation
- Package name and code
- Full itinerary details (day-wise)
- Inclusions/Exclusions
- Terms & Conditions
- WhatsApp inquiry button with pre-filled message
- Use appropriate image for each tour

### STEP 5: Image Assignment Strategy
- **Intro section**: mt.kunchenjunga.jpg (hero landscape)
- **Queen of Hills**: Batasia-Loop-Darjeeling.jpg
- **Lagoon Splendour packages**: teagarden.jpg
- **Hills Charm/Earthly Bliss**: lamahatta 6.jpg
- **Glory/Impression packages**: nightwithclouds.jpg
- **Wildlife tours**: a-red-panda-balancing-on-a-tree.jpg
- Reuse images across similar packages

### STEP 6: WhatsApp Integration
```javascript
// Button HTML structure
<button class="whatsapp-btn"
        data-code="DPTT01"
        data-name="Queen of Hills">
  Inquire on WhatsApp
</button>

// JavaScript handler
function openWhatsApp(code, name) {
  const phone = "919564827858";
  const message = `Interested in ${code} - ${name}`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}
```

### STEP 7: Testing Checklist
- [ ] Smooth scrolling works
- [ ] All 15 cards display correctly
- [ ] Responsive design (mobile/tablet/desktop)
- [ ] All itinerary pages load
- [ ] WhatsApp buttons generate correct messages
- [ ] Images load and display properly
- [ ] Navigation works smoothly
- [ ] Contact information is correct

## Key Minimalist Principles
1. **White space is king** - Let everything breathe
2. **Typography leads** - Text does the heavy lifting
3. **Minimal color** - Only for essential accents
4. **No decorations** - Clean lines only
5. **Subtle interactions** - Gentle hover effects
6. **Content first** - Information clearly presented

## Company Information (from aboutus.md)
- **Name**: De'Pemblin Tour & Travel (stylized as DEPEMBLIM)
- **Established**: December 9, 2016
- **Services**: Customized tours in Darjeeling, Kalimpong, Kurseong, Mirik
- **Phone**: 9564827858 / 7001588400
- **Email**: depemblin@gmail.com
- **Address**: Vallima Cottage, Hooker Road, Darjeeling – 734101

## Next Steps
1. Backup current files
2. Start with index.html replacement
3. Build CSS incrementally
4. Add JavaScript functionality
5. Create itinerary pages one by one
6. Test WhatsApp integration
7. Final testing and optimization

---

**Ready to proceed with implementation following this plan.**