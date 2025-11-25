# CSS Style Guide - Eterna Luxe Hotel

## 📋 Overview
Proyek ini menggunakan **satu file CSS terpusat** (`style.css`) untuk menghindari konflik class dan memudahkan maintenance.

## 🎨 Color Scheme
```css
Primary Color: #f4a89e (Coral/Salmon)
Primary Dark: #b95d3f
Primary Darker: #704828
Secondary Color: #d1837c
```

## 📐 CSS Structure

### 1. **Reset & Global Styles** (Lines 1-60)
- Box model reset
- Font definitions
- Root color variables

### 2. **Bootstrap Overrides** (Lines 61-100)
- Color overrides untuk konsistensi dengan brand
- Button styling

### 3. **Navbar & Header** (Lines 101-190)
- Navigation bar styling
- Logo styling
- Mobile responsive menu

### 4. **Hero Section** (Lines 191-230)
- Full-height hero dengan background video
- Hero content positioning
- Hero buttons

### 5. **Booking Bar** (Lines 231-310)
- Booking form styling
- Form inputs
- Responsive behavior

### 6. **Main Content Sections** (Lines 311-700)
- About Us
- Milestones
- Rooms
- Testimonials
- Facilities
- Events

### 7. **Contact Page** (Lines 701-790)
- Contact form styling
- Contact info display
- Map embedding

### 8. **Services Page** (Lines 791-820)
- Service card grid

### 9. **Gallery Page** (Lines 821-860)
- Gallery grid layout
- Carousel styling

### 10. **Utilities** (Lines 861-920)
- Helper classes
- Bootstrap utilities

### 11. **Fixes & Conflict Resolution** (Lines 921-950)
- CSS conflict fixes
- Specificity corrections

## 🔧 How to Add New Styles

### **Jika ingin menambah styling baru:**

1. **Identifikasi section yang sesuai** di file CSS
2. **Tambahkan class baru SETELAH section yang relevan**
3. **Gunakan naming convention yang konsisten:**
   - camelCase untuk custom classes
   - Hindari class names yang terlalu generic

### **Contoh Menambah Class Baru:**

```css
/* ============================================
   CONTOH SECTION
   ============================================ */
.my-new-component {
  padding: 20px;
  background: white;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.my-new-component:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .my-new-component {
    padding: 15px;
  }
}
```

## ⚠️ Common Issues & Solutions

### **Masalah: Class tidak bekerja**
**Solusi:** 
- Pastikan CSS selector spesifik dan tidak conflict dengan Bootstrap
- Gunakan `!important` hanya jika sangat perlu
- Periksa urutan file HTML (CSS harus di-load sebelum JS)

### **Masalah: Style tidak konsisten di halaman berbeda**
**Solusi:**
- Semua HTML file menggunakan file CSS yang sama (`style.css`)
- Pastikan tidak ada inline style yang override
- Cek Bootstrap classes yang mungkin conflict

### **Masalah: Mobile view tidak responsive**
**Solusi:**
- Media query sudah ada di CSS (768px breakpoint)
- Gunakan flexbox/grid untuk layout yang responsive
- Test dengan DevTools mobile emulator

## 🎯 Best Practices

### ✅ DO:
- Gunakan class names yang deskriptif
- Group related styles bersama
- Gunakan shorthand CSS properties
- Implement mobile-first design
- Use CSS variables for colors

### ❌ DON'T:
- Jangan menggunakan inline styles di HTML
- Jangan buat CSS file terpisah untuk halaman berbeda
- Jangan override Bootstrap tanpa alasan
- Jangan gunakan `!important` secara berlebihan

## 📱 Responsive Breakpoints
- **Mobile**: max-width: 600px
- **Tablet**: max-width: 992px
- **Desktop**: 1200px+

## 🔗 File Reference

| File | Purpose |
|------|---------|
| `style.css` | Main stylesheet (terpusat) |
| `scriptall.js` | General scripts |
| `mnt.js` | Milestone counter & nav toggle |

## 📝 Notes
- Jangan mengedit file CSS lama (sudah dihapus)
- Semua styling harus di `style.css`
- Gunakan Chrome DevTools untuk debugging CSS

---

**Last Updated**: November 25, 2025
