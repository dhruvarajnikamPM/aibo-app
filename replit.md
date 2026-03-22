# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Contains the Aibo AI Learning App (Expo mobile) with an Express API server.

## Aibo - AI Learning App

A premium mobile-first AI learning app for Indian students (Classes 5-10). Duolingo-inspired engagement with a snake-style learning path, XP, streaks, and quizzes.

### Brand
- Color: Aibo Green (#22C55E)
- Fonts: Inter (400, 500, 600, 700)
- Style: Friendly, modern, motivating

### App Flow
1. Splash screen → Language Selection → Grade Selection → Dashboard
2. Dashboard with snake-path learning journey
3. Lesson flow (hook → concept → example → interaction → deeper → challenge)
4. Quiz flow (MCQ, Swipe classification)
5. Reward screen with XP and streak updates

### Content (Seed data in `artifacts/mobile/data/curriculum.ts`)
- Class 5: AI basics (What is AI, AI vs Humans, Types of AI)
- Class 6: Data and computers (Binary, Data and Patterns)
- Class 7: Decision Trees + ML Basics
- Class 8: Natural Language Processing
- Class 9: Algorithms + Neural Networks
- Class 10: AI Bias + AI Ethics

### Languages Supported
English, Hindi, Marathi, Gujarati, Tamil, Telugu, Bengali, Kannada

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Structure

```text
artifacts-monorepo/
├── artifacts/
│   ├── api-server/         # Express API server
│   └── mobile/             # Aibo Expo mobile app
│       ├── app/            # Expo Router screens
│       │   ├── index.tsx            # Splash screen
│       │   ├── onboarding/          # Language + Grade selection
│       │   ├── (home)/              # Dashboard
│       │   ├── lesson/[id].tsx      # Lesson flow
│       │   ├── quiz/[id].tsx        # Quiz flow
│       │   ├── reward/[id].tsx      # Reward screen
│       │   └── settings.tsx         # Settings
│       ├── components/     # Reusable UI components
│       ├── context/        # AppContext (user profile, XP, streak)
│       ├── data/           # Curriculum seed data
│       ├── types/          # TypeScript types
│       └── constants/      # Colors
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts
├── pnpm-workspace.yaml
├── tsconfig.base.json
└── package.json
```
