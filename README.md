# NSPT - Modern Tech Company Website

A modern, responsive, and visually appealing company website built with React.js and Tailwind CSS. Features smooth animations, consistent color themes, and professional UI design suitable for a tech company.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, minimal, and professional design using Tailwind CSS
- **Smooth Animations**: Framer Motion for subtle animations and transitions
- **Interactive Components**: Hover effects, smooth scrolling, and dynamic forms
- **Complete Sections**: Home, About, Services, Projects, Contact, and Careers

## Sections Included

1. **Home Page** - Hero banner with gradient background, company introduction, and key features
2. **About Us** - Vision, mission, founder's message, and team member cards
3. **Services** - HR Software, Accounting App, AI Tools, and Drones with attractive cards
4. **Projects** - Portfolio showcase with hover effects and client logos
5. **Contact Us** - Inquiry form, company details, and social media links
6. **Careers** - Job listings, benefits, and application form
7. **Footer** - Quick links, contact info, and newsletter signup

## Technologies Used

- React.js 18
- Tailwind CSS 3
- Framer Motion
- React Icons
- Modern ES6+ JavaScript

## Installation & Setup

1. **Clone or download the project**
   ```bash
   cd website-NSPT
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── Navbar.js      # Navigation bar with smooth scrolling
│   ├── Hero.js        # Hero section with gradient background
│   ├── About.js       # About section with team cards
│   ├── Services.js    # Services showcase
│   ├── Projects.js    # Portfolio and client logos
│   ├── Contact.js     # Contact form and information
│   ├── Career.js      # Career opportunities
│   └── Footer.js      # Footer with links and newsletter
├── App.js             # Main app component
├── index.js           # React entry point
└── index.css          # Global styles with Tailwind
```

## Customization

### Colors
The website uses a primary blue color scheme. You can customize colors in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    // ... more shades
  }
}
```

### Content
Update the content in each component file:
- Company name, logo, and branding
- Team member information and photos
- Service descriptions and features
- Project portfolio items
- Contact information

### Images
Replace placeholder images with your actual company images:
- Team member photos in `About.js`
- Project screenshots in `Projects.js`
- Client logos in `Projects.js`

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.