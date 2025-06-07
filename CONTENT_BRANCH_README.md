# 🔒 Personal Content Branch

**Purpose**: This branch is for Backend AI to add personal information, real project data, and sensitive content.

## 🛡️ **Privacy Protected Content**

**This branch contains real personal information:**
- ✅ Real email addresses and contact info
- ✅ Personal photos and professional headshots
- ✅ Actual Tableau dashboard URLs and embed codes
- ✅ Real LinkedIn/GitHub profile links
- ✅ Specific project details and descriptions
- ✅ Resume content and professional history

## 🎯 **What Backend AI Manages**

### ✅ **Content Files (Real Data)**
```
src/data/
├── projects.ts         # Real project information
├── contact.ts          # Personal contact details
├── resume.ts           # Professional experience
└── social-links.ts     # Real social media profiles

src/assets/
├── images/personal/    # Personal photos
├── images/projects/    # Project screenshots
└── documents/          # Resume PDFs, etc.
```

### ✅ **Backend Configuration**
- Firebase deployment settings
- GitHub Actions workflows
- Environment configurations
- Security and privacy settings

### ❌ **DO NOT MODIFY (UI Territory)**
- React component structure
- Tailwind styling classes
- Layout and design elements
- Animation and interaction code

## 🔄 **Workflow for Personal Content**

### **Adding Personal Information**
1. **User provides real data** in private session
2. **Backend AI updates content files** with real information
3. **Commits to content-updates branch**
4. **Creates Pull Request** for user review
5. **User merges** after verifying content

### **Example Updates**
```typescript
// src/data/contact.ts
export const contactInfo = {
  email: "diego.real@email.com",          // Real email
  phone: "+1 (416) 555-0123",            // Real phone
  location: "Toronto, ON, Canada",        // Real location
  linkedIn: "https://linkedin.com/in/diego-tejada-cardenas"
}

// src/data/projects.ts  
export const projects = [
  {
    title: "The New Torontonian Parking Lesson",
    tableauUrl: "https://public.tableau.com/views/TheNewTorontonianaparkinglesson/Dashboard1",
    description: "Real project description with actual insights..."
  }
]
```

## 🚀 **Testing Personal Content**

```bash
# Test with real data locally
npm run dev

# Build with personal content
npm run build

# Deploy to staging for review
firebase hosting:channel:deploy preview
```

## 🔐 **Security Considerations**

- **Never commit**: API keys, passwords, private keys
- **Use environment variables**: For sensitive configurations
- **Review before merge**: Always check what's being made public
- **Separate staging**: Test with real data before production

---

*This branch maintains personal content separate from UI design for enhanced privacy and security control.* 