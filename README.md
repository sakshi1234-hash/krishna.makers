# Mithai Mahal - Luxury Sweet Packaging

A premium website for **Krishna Box Makers**, specializing in luxury sweet packing boxes.

## Features

- **16 Premium Sections**: Hero, Marquee, Colour Psychology, Product Catalogue, Features, Gallery, Size Guide, Timeline, Enquiry Form, Occasions Strip, Testimonials, Map & Location, Bulk Calculator, Newsletter, Footer.
- **Inquiry-Based Ordering**: No online payment system. Customers submit enquiries and pay offline.
- **React + Supabase**: Built using React (via CDN) and Supabase for all data storage.
- **Luxury Aesthetic**: Custom gold and saffron theme inspired by Indian artisan heritage.
- **AI-Designed Motifs**: Displays AI-curated motifs with holographic badges.

## Setup Instructions

### 1. Supabase Setup
1. Go to [Supabase](https://supabase.com/) and create a new project.
2. Open the **SQL Editor** and run the contents of [`supabase-schema.sql`](./supabase-schema.sql).
3. Go to **Project Settings > API** and copy your `Project URL` and `anon public key`.

### 2. Website Configuration
1. Open `index.html`.
2. Locate the Supabase initialization lines:
   ```javascript
   const SUPABASE_URL = 'YOUR_SUPABASE_PROJECT_URL'
   const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY'
   ```
3. Replace the placeholders with your actual Supabase credentials.

### 3. Google Maps Integration
1. The map is set to Jodhpur (Ashok Colony). No API key is required for the iframe embed, but you can customize the `src` if needed.

### 4. Customization
- Replace the WhatsApp number `+91 9828995897` with your business number.
- Replace the email `hello@mithaimahal.com` with your business email.

## Deployment
1. Drag and drop `index.html` into [Netlify Drop](https://app.netlify.com/drop) or deploy via GitHub.
2. Ensure your Supabase RLS policies are enabled (the script handles this).

---
**Owner:** Manmohan ji Joshi
**Factory:** KRISHNA BOX MAKERS
**Location:** Jodhpur, Rajasthan
