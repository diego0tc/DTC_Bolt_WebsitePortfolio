# 🌳 Professional Git Branching Workflow

## 📋 **Branch Strategy Overview**

This project uses a **professional multi-branch strategy** that separates UI design work from personal content for maximum privacy and efficiency.

### **Branch Structure:**
```
main                    # 🚀 Production (auto-deploys to live site)
├── bolt-ui            # 🎨 Bolt AI UI/design changes  
├── content-updates    # 🔒 Personal content (Backend AI)
├── development        # 🧪 Integration testing
└── feature/*          # 📄 Specific features
```

---

## 🎨 **Bolt AI Workflow (UI/Design)**

### **Purpose**: Design improvements without accessing personal data

### **Bolt AI Instructions:**
```
"Work on the bolt-ui branch only. Focus on:
- Layout and design improvements
- Color schemes and animations  
- Component styling and responsiveness
- UI/UX enhancements

Use only placeholder data:
- Email: contact@example.com
- Name: Your Name Here
- Tableau: https://public.tableau.com/views/SampleDashboard
"
```

### **Bolt AI Commands:**
```bash
# 1. Switch to UI branch
git checkout bolt-ui

# 2. Make design changes to components
# Edit: src/components/, tailwind.config.js, etc.

# 3. Test changes
npm run dev

# 4. Commit and push
git add .
git commit -m "Improve hero section design"
git push origin bolt-ui

# 5. Create Pull Request
# Go to GitHub → Compare & pull request → target: main
```

---

## 🔒 **Backend AI Workflow (Personal Content)**

### **Purpose**: Add real personal information and sensitive data

### **Backend AI Commands:**
```bash
# 1. Switch to content branch  
git checkout content-updates

# 2. Add personal information
# Edit: src/data/, src/assets/images/, etc.

# 3. Test with real data
npm run dev

# 4. Commit and push  
git add .
git commit -m "Add real contact info and professional photo"
git push origin content-updates

# 5. Create Pull Request
# Go to GitHub → Compare & pull request → target: main
```

### **Personal Content Examples:**
```typescript
// Real contact information
export const contact = {
  email: "diego.real@gmail.com",
  phone: "+1 (416) 555-0123", 
  linkedIn: "https://linkedin.com/in/diego-tejada-cardenas"
}

// Real Tableau dashboards
export const projects = [
  {
    title: "The New Torontonian Parking Lesson",
    tableauUrl: "https://public.tableau.com/views/TheNewTorontonianaparkinglesson/Dashboard1"
  }
]
```

---

## 🧪 **Integration & Testing Workflow**

### **Development Branch (Optional)**
```bash
# Merge both UI and content changes for testing
git checkout development
git merge bolt-ui           # Add UI changes
git merge content-updates   # Add personal content  
git push origin development

# Test integrated version
npm run dev
npm run build
```

---

## 🚀 **Production Deployment**

### **Manual Review & Merge:**
```bash
# 1. Review Pull Requests
# Check bolt-ui PR: UI changes look good?
# Check content-updates PR: Personal info correct?

# 2. Merge to main (triggers auto-deployment)
git checkout main
git merge bolt-ui           # Merge UI changes
git merge content-updates   # Merge personal content
git push origin main        # Deploy to production

# 3. Live site updates automatically
# https://website-portfolio-dtc.web.app
```

---

## 🔄 **Complete Workflow Example**

### **Scenario**: Update design + add personal photo

#### **Step 1: Bolt AI (UI)**
```bash
# Bolt AI improves hero section design
git checkout bolt-ui
# Edit components, improve layout
git commit -m "Enhance hero section with better animations"
git push origin bolt-ui
# Creates PR: bolt-ui → main
```

#### **Step 2: Backend AI (Content)**  
```bash
# Backend AI adds real photo and info
git checkout content-updates  
# Add personal photo, update contact info
git commit -m "Add professional headshot and real email"
git push origin content-updates
# Creates PR: content-updates → main
```

#### **Step 3: User (Review & Deploy)**
```bash
# User reviews both PRs on GitHub
# Merges both to main
# GitHub Actions auto-deploys to production
# Result: Better design + real personal content
```

---

## 🛡️ **Privacy & Security Benefits**

### **Separation of Concerns:**
- ✅ **Bolt AI**: Never sees personal emails, photos, or real contact info
- ✅ **Backend AI**: Handles sensitive data in private sessions
- ✅ **User**: Full control over what gets merged to production
- ✅ **GitHub**: Maintains complete history and rollback capability

### **Professional Development Practices:**
- ✅ **Code Review**: All changes reviewed before production
- ✅ **Rollback Capability**: Easy to revert problematic changes
- ✅ **Parallel Development**: UI and content work simultaneously
- ✅ **Conflict Resolution**: Git handles merging different types of changes

---

## 📊 **Branch Management Commands**

### **View All Branches:**
```bash
git branch -a
```

### **Switch Between Branches:**
```bash
git checkout main              # Production branch
git checkout bolt-ui           # UI design work
git checkout content-updates   # Personal content
git checkout development       # Integration testing
```

### **Sync with Remote:**
```bash
git pull origin main           # Get latest production
git pull origin bolt-ui        # Get latest UI changes
git pull origin content-updates # Get latest content
```

### **Create Feature Branch:**
```bash
git checkout -b feature/new-resume-page
# Work on specific feature
git push origin feature/new-resume-page
```

---

## 🚦 **GitHub Actions Deployment**

### **Current Setup:**
- **main**: Auto-deploys to production (live site)
- **bolt-ui**: Creates preview deployment  
- **content-updates**: Creates preview deployment
- **development**: Creates staging deployment

### **Deployment URLs:**
```
Production:  https://website-portfolio-dtc.web.app
Staging:     https://website-portfolio-dtc--dev.web.app
UI Preview:  https://website-portfolio-dtc--bolt-ui.web.app
Content Preview: https://website-portfolio-dtc--content.web.app
```

---

## 🎯 **Quick Reference**

### **For UI Changes (Bolt AI):**
1. `git checkout bolt-ui`
2. Make design improvements
3. `git push origin bolt-ui`
4. Create PR to main

### **For Personal Content (Backend AI):**
1. `git checkout content-updates`
2. Add real information
3. `git push origin content-updates` 
4. Create PR to main

### **For Production Deployment:**
1. Review PRs on GitHub
2. Merge approved changes to main
3. Automatic deployment to live site

---

*This workflow provides professional-grade development practices while maintaining complete privacy control over personal information.* 