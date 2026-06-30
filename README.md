# ArtHub

ArtHub is a modern online artwork marketplace where artists can showcase and sell their artwork, while users can discover, purchase, and manage their favorite pieces. The platform provides a clean, responsive, and interactive experience with secure authentication, artwork management, user dashboards, and subscription-based purchase limits.

---

## Live Website

https://arthub-client-mocha.vercel.app

---

## Project Purpose

The goal of ArtHub is to connect artists with potential buyers through an elegant digital marketplace. Artists can upload and manage their artwork, while users can browse collections, purchase paintings, and keep track of their purchase history. The platform also introduces subscription plans that unlock higher purchasing limits.

---

## Key Features

- Secure authentication using Better Auth
- Artists can upload, edit, and delete artworks
- Browse artworks with detailed information
- Purchase artworks with Stripe payment integration
- Separate dashboards for artists and users
- Dashboard statistics and analytics
- Subscription plans (Free, Pro, Premium)
- Purchase history management
- Fully responsive design
- Modern UI with dark mode support
- Smooth animations powered by Framer Motion
- Search and filter artworks
- Image upload and cloud storage support
- Purchase limits based on user subscription plans

---

## Tech Stack

### Frontend

- Next.js
- React
- Tailwind CSS
- HeroUI
- Framer Motion
- Gravity UI Icons
- Axios

### Backend

- Next.js API Routes
- MongoDB
- Better Auth

### Payments

- Stripe

---

## NPM Packages Used

```bash
@heroui/react
@gravity-ui/icons
framer-motion
axios
better-auth
mongodb
stripe
react-hook-form
react-hot-toast
next
react
tailwindcss
```

> Additional packages may have been used depending on the final implementation.

---

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/arthub.git
```

Go to the project directory:

```bash
cd arthub
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file and add your environment variables.

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Environment Variables

Create a `.env.local` file and configure the following variables:

```env
MONGODB_URI=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

Adjust these variables according to your project configuration.

---

## License

This project is developed for educational and assignment purposes.