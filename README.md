# Diego TC Analytics Portfolio


Professional portfolio website showcasing data analytics expertise, Tableau dashboards, and economics research.

## 🎯 Project Overview

- **Frontend**: Bolt AI generated Vite + React + TypeScript
- **Backend**: Firebase Hosting with automated deployment
- **Content**: File-based project management
- **Deployment**: GitHub Actions with Firebase integration

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- Firebase CLI: `npm install -g firebase-tools`
- Git

### Local Development
```bash
# Clone the repository
git clone https://github.com/diego0tc/DTC_Bolt_WebsitePortfolio.git
cd DTC_Bolt_WebsitePortfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Deployment

#### Option 1: Automatic (Recommended)
Push to main branch and GitHub Actions will automatically deploy.

#### Option 2: Manual
```bash
# Make sure you're logged into Firebase
firebase login

# Build and deploy
./deploy.sh
```

## 📁 Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── TableauEmbed.tsx # Tableau dashboard embedding
│   │   ├── ProjectCard.tsx  # Project display cards
│   │   └── ...             # Other UI components
│   ├── data/
│   │   └── projects.ts      # Project data and configuration
│   └── types.ts            # TypeScript type definitions
├── .github/workflows/      # GitHub Actions CI/CD
├── firebase.json          # Firebase hosting configuration
├── .firebaserc           # Firebase project settings
└── deploy.sh             # Manual deployment script
```

## 🎨 Frontend (Bolt AI Generated)

The frontend is created and maintained by **Bolt AI** with the following features:

- **React Router**: Multi-page navigation
- **Responsive Design**: Mobile-first Tailwind CSS
- **Component Architecture**: Modular, reusable components
- **TypeScript**: Full type safety
- **Professional UI**: Modern, clean design

### Key Components
- `TableauEmbed`: Real Tableau Public dashboard integration
- `ProjectCard`: Project showcase with filtering
- `Header/Footer`: Navigation and branding
- `Hero/About/Contact`: Landing page sections

## 🔧 Backend (AI Assistant Managed)

The backend infrastructure handles:

### Firebase Hosting
- **Static Site Hosting**: Optimized for Vite builds
- **Custom Domain**: diego-tc.com (when ready)
- **Global CDN**: Fast worldwide access
- **HTTPS**: Automatic SSL certificates

### GitHub Actions CI/CD
- **Automatic Deployment**: On push to main branch
- **Build Process**: Vite production build
- **Environment Management**: Firebase project integration
- **Error Handling**: Build failure notifications

### Content Management
- **File-Based**: Projects defined in `/src/data/projects.ts`
- **TypeScript Types**: Structured data validation
- **Easy Updates**: Add/edit projects by modifying data file

## 📊 Tableau Integration

### Current Dashboards
1. **The New Torontonian Parking Lesson**
   - URL: [Tableau Public Link](https://public.tableau.com/views/TheNewTorontonianaparkinglesson/Dashboard1)
   - Focus: Urban planning and parking analytics

### Adding New Dashboards
1. Publish dashboard to Tableau Public
2. Add entry to `/src/data/projects.ts`:
```typescript
{
  id: 'dashboard-id',
  title: 'Dashboard Title',
  description: 'Brief description...',
  type: 'tableau',
  link: 'https://public.tableau.com/views/YourDashboard/Sheet1',
  tools: ['Tableau', 'Analysis Type'],
  color: '#HEX_COLOR',
  contrastColor: '#HEX_COLOR'
}
```

## 🛠 Maintenance

### Adding New Projects
1. Edit `/src/data/projects.ts`
2. Commit and push to GitHub
3. Automatic deployment via GitHub Actions

### Updating Content
- **Bolt AI**: Handles UI/UX changes and component updates
- **Backend AI**: Manages infrastructure, deployment, and data structure

### Dependencies
- Monthly: Review and merge Dependabot PRs
- Quarterly: Check Firebase usage and costs

## 🔐 Security & Configuration

### Firebase Project
- **Project ID**: `website-portfolio-dtc`
- **Hosting**: Static site hosting
- **Authentication**: Not required (public portfolio)

### GitHub Secrets (Required)
- `FIREBASE_SERVICE_ACCOUNT_WEBSITE_PORTFOLIO_DTC`: Firebase service account key

### Environment Variables
- None required for static site

## 📈 Performance

### Optimization Features
- **Static Generation**: Pre-built HTML/CSS/JS
- **Image Optimization**: Compressed assets
- **CDN Distribution**: Global edge caching
- **Lazy Loading**: Tableau dashboards load on demand

### Monitoring
- Firebase Analytics integration available
- Lighthouse performance monitoring
- Core Web Vitals tracking

## 🌐 Deployment URLs

- **Production**: https://website-portfolio-dtc.web.app
- **Custom Domain**: diego-tc.com (when configured)
- **Development**: http://localhost:5173

## 📞 Support

### Frontend Issues (Bolt AI Territory)
- UI/UX problems
- Component functionality
- Design inconsistencies
- React/TypeScript errors

### Backend Issues (Backend AI Territory)
- Deployment failures
- Firebase configuration
- GitHub Actions problems
- Performance optimization
- Tableau integration issues

## 🎓 Learning Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Firebase Hosting Guide](https://firebase.google.com/docs/hosting)
- [Tableau Public](https://public.tableau.com/)

---

## 📋 Quick Commands

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run preview         # Preview production build

# Deployment
./deploy.sh             # Manual deployment
firebase deploy         # Direct Firebase deployment
firebase serve          # Local Firebase testing
```

---

*Last Updated: January 2025*  
*Project Status: Production Ready*
