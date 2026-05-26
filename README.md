# LAB8 - Personal Portfolio with Next.js

This project was developed for the course **Tecnologias y Sistemas Web** and corresponds to **Laboratory 8**.

The objective of this laboratory was to build a public personal portfolio using **Next.js**, **React**, and **TypeScript**, with a clean structure, responsive design, project pages, repository links, and screenshot galleries for course projects.

The portfolio presents the academic profile of **Jose Miguel Rosas Guerra**, selected laboratories, both course projects, contact links, and a layout prepared for deployment on **Vercel**.

---

## Project Description

This application allows visitors to:

- View a professional landing page with student information
- Learn about the student's academic profile and web development interests
- Explore selected laboratories and projects from the course
- Open individual detail pages for each project
- View technologies used in every project
- Open repository links from GitHub
- Contact the student through email, GitHub, or LinkedIn
- Browse project screenshots inside a clean gallery layout

The project is organized with reusable components and centralized project data.

---

## Portfolio Structure

The application includes the following routes:

| Route | Description |
|------|-------------|
| `/` | Home page with profile summary and featured projects |
| `/about` | About page with academic background and skills |
| `/projects` | Project listing page |
| `/projects/[slug]` | Individual page for each project |
| `/contact` | Contact page with links and visual contact form |

---

## Projects Included

The portfolio includes:

- **LAB2_STW** - Interactive story styled with CSS
- **LAB4_STW** - Habit and mission tracker with XP progress
- **Proyecto1_STW** - Blog-style web app with API consumption
- **LAB_REPOSICION_STW** - Store simulation with React, Vite, and Next.js
- **Not-Balatro** - Interactive web project inspired by a card game experience

Repository links:

| Project | Repository |
|--------|------------|
| LAB2_STW | https://github.com/MiguelRosas11/LAB2_STW |
| LAB4_STW | https://github.com/MiguelRosas11/LAB4_STW |
| Proyecto1_STW | https://github.com/MiguelRosas11/Proyecto1_STW |
| LAB_REPOSICION_STW | https://github.com/MiguelRosas11/LAB_REPOSICION_STW |
| Not-Balatro | https://github.com/MiguelRosas11/Not-Balatro |

Important note:

- Proyecto1_STW mentions that it comes from a previous mini blog practice with APIs.
- That previous practice is not included as a separate project in this portfolio.

---

## Features Implemented

The following features were implemented:

- Next.js App Router structure
- Responsive layout for desktop, tablet, and mobile
- Dark, minimal, professional visual style
- Reusable UI components
- Centralized project data in `src/data/projects.ts`
- Dynamic project detail pages using `/projects/[slug]`
- Project cards with descriptions, technologies, images, and repository links
- Image gallery for every project
- Clean placeholder fallback when an image is missing
- Contact page with email, GitHub, LinkedIn, and visual form
- Metadata prepared for deployment
- Build ready for Vercel

---

## Visual Features Implemented

The following UI/UX features were implemented:

- Dark background with subtle grid texture
- Clear navigation bar
- Large home hero section with academic profile
- Profile information panel styled like a technical card
- Soft hover states and microinteractions
- Rounded project cards with image sections
- Technology badges for quick scanning
- Responsive grids for project listings and galleries
- Mobile navigation adjusted to avoid horizontal overflow
- Consistent spacing, typography, and color accents

---

## Screenshot Requirements

Images must be placed inside `public/assets`.

### LAB2_STW

Quantity: 2 screenshots

```txt
public/assets/LAB2_STW/LAB2_STW1.png
public/assets/LAB2_STW/LAB2_STW2.png
```

Suggested screenshots:

1. Story start screen
2. Intermediate decision screen or ending screen

### LAB4_STW

Quantity: 2 screenshots

```txt
public/assets/LAB4_STW/LAB4_STW1.png
public/assets/LAB4_STW/LAB4_STW2.png
```

Suggested screenshots:

1. Main view with form and mission list
2. View showing completed missions, global XP, and rank

### Proyecto1_STW

Quantity: 4 screenshots

```txt
public/assets/Proyecto1_STW/Proyecto1_STW1.png
public/assets/Proyecto1_STW/Proyecto1_STW2.png
public/assets/Proyecto1_STW/Proyecto1_STW3.png
public/assets/Proyecto1_STW/Proyecto1_STW4.png
```

Suggested screenshots:

1. Main post listing
2. Post detail view
3. Search or filter view
4. Create or edit post form

### LAB_REPOSICION_STW

Quantity: 5 screenshots

```txt
public/assets/LAB_REPOSICION_STW/LAB_REPOSICION_STW1.png
public/assets/LAB_REPOSICION_STW/LAB_REPOSICION_STW2.png
public/assets/LAB_REPOSICION_STW/LAB_REPOSICION_STW3.png
public/assets/LAB_REPOSICION_STW/LAB_REPOSICION_STW4.png
public/assets/LAB_REPOSICION_STW/LAB_REPOSICION_STW5.png
```

Suggested screenshots:

1. Main product catalog
2. Shopping cart with products
3. Search, filter, or sorting view
4. Checkout form or purchase summary
5. Secondary landing page in Next.js

### Not-Balatro

Quantity: 3 screenshots

```txt
public/assets/Not-Balatro/Not-Balatro1.png
public/assets/Not-Balatro/Not-Balatro2.png
public/assets/Not-Balatro/Not-Balatro3.png
```

Suggested screenshots:

1. Main screen
2. Interaction or gameplay view
3. Result, advanced state, or relevant game section

Total recommended: **16 screenshots**.

---

## Project File Structure

```txt
src/
  app/
    about/page.tsx
    contact/page.tsx
    projects/page.tsx
    projects/[slug]/page.tsx
    globals.css
    layout.tsx
    page.tsx
  components/
    Button.tsx
    ContactCard.tsx
    Footer.tsx
    Navbar.tsx
    ProjectCard.tsx
    ProjectGallery.tsx
    ProjectImage.tsx
    SectionTitle.tsx
    TechBadge.tsx
  data/
    projects.ts
public/
  assets/
```

---

## How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/MiguelRosas11/LAB8_STW.git
```

2. Navigate to the project folder:

```bash
cd LAB8_STW
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the application in your browser:

```txt
http://localhost:3000
```

---

## Build

To generate a production build:

```bash
npm run build
```

To run the production version locally:

```bash
npm run start
```

---

## Deployment

This project is prepared for deployment on **Vercel**.

Recommended Vercel settings:

| Setting | Value |
|--------|-------|
| Framework Preset | Next.js |
| Install Command | npm install |
| Build Command | npm run build |
| Output Directory | Leave empty |

No environment variables are required.

---

## Technologies Used

- Next.js
- React
- TypeScript
- CSS
- Lucide React
- Git
- GitHub
- Vercel

---

## Author

- Student: Jose Miguel Rosas Guerra - 241274
- Course: Tecnologias y Sistemas Web
- University: Universidad del Valle de Guatemala
- Year: 2026
- GitHub: https://github.com/MiguelRosas11
- LinkedIn: https://www.linkedin.com/in/miguel-rosas-502489380/?skipRedirect=true
- Email: roguemijose@gmail.com
