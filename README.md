# Swami Vivekanand Seva Trust Website

A modern, premium, accessible, and SEO-friendly Next.js website for Swami Vivekanand Seva Trust (svstmh.com) with Light and Dark modes, green-accent theme, advanced UI, animations, and clean typography.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for utility-first styling
- **Dark/Light Mode** with smooth transitions (next-themes)
- **Framer Motion** for animations and micro-interactions
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Metadata, sitemap, robots.txt
- **Accessibility** - WCAG AA compliant, keyboard navigable
- **Performance** - Optimized images, fonts, and code splitting
- **Form Handling** - React Hook Form with Zod validation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Fonts**: Poppins (Headings), Inter (Body)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd SVST
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
SVST/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog page
│   ├── contact/           # Contact page
│   ├── donate/            # Donation page
│   ├── events/            # Events page
│   ├── gallery/           # Gallery page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── globals.css       # Global styles
│   ├── sitemap.ts        # Sitemap generation
│   └── robots.ts         # Robots.txt
├── components/            # React components
│   ├── layout/           # Layout components (Header, Footer)
│   ├── sections/         # Page sections
│   ├── ui/               # Reusable UI components
│   └── forms/            # Form components
├── lib/                  # Utility functions
└── public/               # Static assets
```

## 🎨 Design System

### Colors
- **Primary**: #1FAA59 (Green)
- **Accent**: Emerald (#10b981) & Teal (#14b8a6)
- **Dark Mode**: Slate color palette

### Typography
- **Headings**: Poppins (Variable)
- **Body**: Inter (Variable)

### Components
- Glassmorphism effects
- Rounded cards (2xl border radius)
- Soft shadows
- Smooth transitions

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
NEXT_PUBLIC_SITE_URL=https://www.svstmh.com
```

### Payment Integration

To integrate payment gateways (Razorpay/Stripe), update the donation form component with your API keys and payment logic.

## 📱 Pages

- **Home** (`/`) - Hero, Mission, Services, Events, Testimonials, Gallery, Donation CTA, Contact
- **About** (`/about`) - History, Founder's Message, Team
- **Events** (`/events`) - All events listing
- **Donate** (`/donate`) - Donation form with impact meter
- **Blog** (`/blog`) - News and updates
- **Gallery** (`/gallery`) - Photo gallery
- **Contact** (`/contact`) - Contact form

## ♿ Accessibility

- Skip to main content link
- Proper heading hierarchy
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators
- Color contrast ratio >= 4.5:1

## 🔍 SEO

- Metadata for all pages
- OpenGraph tags
- Twitter Card tags
- Sitemap.xml
- Robots.txt
- Semantic HTML

## 📄 License

This project is proprietary and belongs to Swami Vivekanand Seva Trust.

## 🤝 Contributing

This is a private project. For contributions, please contact the organization.

## 📞 Contact

- **Email**: svsthingoli@gmail.com
- **Phone**: +91 9552521646
- **Address**: Sukli, Taluka: Sengaon, District: Hingoli, State: Maharashtra (India), Pin Code: 431542

---

Built with ❤️ for Swami Vivekanand Seva Trust

