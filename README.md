# Freelance Jordan — Rebuild No. 6... 7?

A ground-up rebuild of [FreelanceJordan.com](https://freelancejordan.com) using Next.js App Router, TypeScript, and CSS Modules.

## Project Goals

Build a classy, fun freelancer website focused on design-to-build web services, with an emphasis on websites as complete SEO products.

## What’s in This Build

- A project portfolio featuring custom websites, brand identities, and mobile app concepts.
- Dedicated service pages for website design and development, branding, SEO strategy, and mobile app design.
- Five SEO case studies comparing organic clicks, search impressions, and average position before and after the work.
- A project journal covering the decisions behind the numbers, plus client testimonials and a project inquiry form.
- Page-specific metadata, canonical URLs, JSON-LD, a sitemap, and `robots.txt`. The Client Space entry page is marked `noindex` and excluded from the sitemap.

## Planned CRM & Client Space

The larger stretch goal is a custom CRM and project-management platform built around my own freelance workflow. The current build includes the Client Space entry page and its six-digit project-code form. The dashboard and automation are planned work.

- Internal CRM and project-management dashboard
- Client login, project dashboard, and progress tracking
- Client-facing project updates and automated update emails
- Invoicing, payment tracking, and client messaging
- Relevant add-on services throughout the client experience
- Tailored AI integration and potential AI-assisted client chat

## Backend & Long-Term Direction

The planned backend uses a Ruby on Rails API for CRUD operations and OpenAI integration. The goal is to turn internal notes into clear client-facing updates and keep project communication in one place.

Long term, the web platform and a future mobile app can share the same Rails API.

## Video Compression

Run this command from the project root to compress the homepage hero video. It removes the audio track and moves the MP4 metadata to the start of the file for web playback.

```bash
ffmpeg -i public/hero.mp4 \
  -c:v libx264 \
  -preset slow \
  -b:v 6000k \
  -maxrate 7000k \
  -bufsize 12000k \
  -an \
  -movflags +faststart \
  public/hero-web-20mb.mp4
```
