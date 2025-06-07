# 🎨 Bolt AI UI Branch

**Purpose**: This branch is specifically for Bolt AI to work on UI/UX improvements and design changes.

## ⚠️ **Important: NO Personal Information**

**Bolt AI should only work with placeholder data:**
- Email: `contact@example.com`
- Phone: `(555) 123-4567`
- Name: `Your Name`
- Photos: Use placeholder images
- Tableau URLs: `https://public.tableau.com/views/SampleDashboard`

## 🎯 **What Bolt AI Can Modify**

### ✅ **Safe to Change (UI/Design Only)**
- `src/components/` - React components
- `src/styles/` - CSS and styling
- `tailwind.config.js` - Design tokens
- Layout and navigation
- Color schemes and animations
- Responsive design improvements

### ❌ **DO NOT MODIFY (Personal Content)**
- `src/data/projects.ts` - Contains real project information
- `src/assets/images/` - Personal photos
- Any files with real contact information
- Production deployment configurations

## 🔄 **Workflow**

1. **Bolt AI makes UI changes** on this branch
2. **Commits and pushes** to `bolt-ui` branch
3. **Creates Pull Request** to merge into `main`
4. **User reviews** before merging to production

## 🚀 **Testing Changes**

```bash
# Test locally before pushing
npm run dev

# Build to ensure no errors
npm run build
```

---

*This branch maintains design changes separate from personal content for privacy and security.* 