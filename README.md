# Freelance Jordan — Rebuild No. 6... 7?

A ground-up rebuild of [FreelanceJordan.com](https://freelancejordan.com).

## Project Goals

Build a classy, fun freelancer website focused on design-to-build web services, with an emphasis on websites as complete SEO products.

The larger stretch goal is a custom CRM and project-management platform built around my own freelance workflow.

Planned functionality includes:

- Internal CRM and project-management dashboard
- Tailored AI integration
- Client-side login and project dashboard
- Project progress tracking
- Seamless client-facing project updates
- Automated project update emails
- Upsell visibility throughout the client experience
- Invoicing and payment tracking
- Client messaging
- Potential AI-assisted client chat

## Backend

The planned backend uses a Ruby on Rails API for CRUD operations and OpenAI integration.

The goal is to create an AI-assisted workflow where internal notes and project updates can be pushed seamlessly into the client-facing experience while keeping communication and project management centralized.

## Long-Term Direction

The long-term plan is to take the Ruby on Rails API and extend it directly into app production, allowing the web platform and future application to share the same backend architecture.

## Video Compression

FFmpeg command currently used to compress hero and web video assets:

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
