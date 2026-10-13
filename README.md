# Yachid

> Only One of Our Kind

Personal portfolio and brand site for **Jamgbadi Eneye Tehillah**, Full Stack Developer and Computer Engineering student.

- **Live site:** https://yachid.vercel.app/
- **Repository:** https://github.com/uknicTjstyles/yachid-portfolio

## Features

- **Hero, About, Skills, Experience & Education, and Contact** sections
- **Auto-discovered projects**: any public GitHub repo tagged with the `portfolio` topic appears automatically, with its description, tech-stack tags, and live link pulled straight from GitHub, no manual data entry
- **Pagination**: the homepage shows up to 6 featured projects; a dedicated `/projects` page lists everything, 6 per page, with numbered pagination
- **Light/dark theme toggle**, dark by default, remembered across visits
- **Animated floating navbar**: a centered pill nav with a sliding active-section indicator on desktop, and a full-screen animated menu on mobile
- **Working contact form**: validated with Zod, sends real email via Resend, built with shadcn/ui
- Smooth scroll-reveal animations throughout, powered by Framer Motion

## Tech stack

| Area | Technology |
|---|---|
| Framework | Next.js (App Router), React, TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | lucide-react, react-icons (Simple Icons for tech logos) |
| Theme | next-themes |
| Forms | shadcn/ui, react-hook-form, Zod |
| Email | Resend |
| Hosting | Vercel |

## Getting started

### Prerequisites
- Node.js 20.9 or newer
- A free [Resend](https://resend.com) account for the contact form

### Setup

```bash
git clone https://github.com/uknicTjstyles/yachid-portfolio.git
cd yachid-portfolio
npm install
