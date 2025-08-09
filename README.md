# The Ivy Ascent Platform

A comprehensive, personalized, and multilingual digital platform designed to demystify elite college admissions. Built with Next.js and optimized for Azure Static Web Apps.

## 🎯 Features

- **Personalized Four-Year Blueprint**: Customized roadmaps for each year of high school
- **Interactive Checklists**: Track progress across academics, extracurriculars, and testing
- **University-Specific Hubs**: Deep insights into Ivy League schools and top universities
- **Expert Coaching**: Work with former admissions officers
- **Multilingual Support**: Available in English, Mandarin, and Cantonese
- **Responsive Design**: Modern, accessible, and mobile-friendly

## 🚀 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Hosting**: Azure Static Web Apps
- **Database**: Azure SQL Database
- **Authentication**: Azure AD B2C
- **Payments**: Stripe
- **Analytics**: Azure Application Insights

## 📋 Prerequisites

- Node.js 18 or later
- npm or yarn
- Azure account (for deployment)

## 🛠 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ivy-coach-website.git
   cd ivy-coach-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update the environment variables in `.env.local`:
   ```
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key
   DATABASE_URL=your_database_connection_string
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── providers.tsx      # Context providers
├── components/            # Reusable components
│   ├── layout/           # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/         # Page sections
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Blueprint.tsx
│   │   ├── Universities.tsx
│   │   ├── Pricing.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTA.tsx
│   └── ui/               # UI components
├── lib/                  # Utility functions
├── types/                # TypeScript types
└── styles/               # Additional styles
```

## 🎨 Design System

The platform uses a modern design system with:

- **Primary Colors**: Blue gradient (#3b82f6 to #2563eb)
- **Secondary Colors**: Purple gradient (#d946ef to #c026d3)
- **Accent Colors**: Yellow (#eab308)
- **Typography**: Inter (sans-serif), Playfair Display (serif)
- **Components**: Card-based layouts with hover effects and animations

## 🌐 Deployment

### Azure Static Web Apps

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy using GitHub Actions**
   The project includes a GitHub Actions workflow for automatic deployment to Azure Static Web Apps.

3. **Environment Variables**
   Set the following secrets in your GitHub repository:
   - `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`

## 📱 Responsive Design

The platform is fully responsive and optimized for:
- **Desktop**: Full-featured dashboard and detailed content
- **Tablet**: Optimized layouts with touch-friendly interactions
- **Mobile**: Streamlined interface with easy navigation

## 🔒 Security

- **HTTPS**: All communications encrypted
- **Data Protection**: GDPR and CCPA compliant
- **Authentication**: Secure user authentication with Azure AD B2C
- **Payment Security**: PCI DSS compliant with Stripe

## 🌍 Internationalization

The platform supports multiple languages:
- **English**: Primary language
- **Mandarin Chinese (简体中文)**: Simplified Chinese
- **Traditional Chinese (繁體中文)**: Traditional Chinese for Hong Kong/Taiwan

## 📊 Analytics

Track user engagement and success metrics:
- **User Journey**: From signup to college acceptance
- **Feature Usage**: Most popular tools and resources
- **Success Rates**: Application success tracking
- **Performance**: Page load times and user satisfaction

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- **Email**: hello@ivyascent.com
- **Phone**: +1 (555) IVY-PREP
- **Documentation**: [docs.ivyascent.com](https://docs.ivyascent.com)

## 🗺 Roadmap

- [ ] **Phase 1**: Core platform features (✅ Complete)
- [ ] **Phase 2**: AI-powered recommendations
- [ ] **Phase 3**: Mobile app development
- [ ] **Phase 4**: Advanced analytics dashboard
- [ ] **Phase 5**: Community features and peer connections

---

Built with ❤️ by The Ivy Ascent Team
