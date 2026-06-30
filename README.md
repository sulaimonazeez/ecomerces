# E-Commerce Storefront

A modern e-commerce frontend built with React 19, Vite, and Tailwind CSS v4. Connects to a separate REST API backend for products, authentication, and orders.

## Features

- 🏪 Product browsing with category navigation, hero banner, flash sales, and best-selling sections
- 🛒 Cart management via React Context (add/remove items)
- 🔐 JWT-based authentication (login/signup) with token persistence and auto-attached auth headers via Axios interceptors
- 🔒 Protected routes for authenticated-only pages (profile, checkout flow)
- ⭐ Star ratings and product cards with a reusable, composable UI layer
- 🎬 Animated UI with Framer Motion
- 📱 Responsive design with Tailwind CSS v4

## Tech stack

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v4
- **Routing:** React Router v7
- **HTTP/API:** Axios (with request/response interceptors for auth and error handling)
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **State:** React Context API (auth, cart)

## Project structure

```
src/
├── api/             # Axios instance + API utilities
├── components/ui/   # Reusable UI (product cards, header, footer, banners, ratings)
├── context/          # Auth & cart context, private route guard
├── pages/            # Route-level pages (home, login, signup, profile, preview)
```

## Getting started

```bash
npm install
npm run dev
```

Set your backend API URL via the `.env.development` / `.env.production` files (the app reads `baseURL` for API requests).

## Backend

Pairs with a separate Node.js/Express (or similar) REST API handling products, auth, and orders — not included in this repo.
