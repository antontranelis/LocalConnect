# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is LokalConnect, a German local networking platform built with React and Vite. The application helps users connect locally with people in their area through events, marketplace, messaging, and social features.

## Development Commands

- `npm run dev` - Start development server with Vite
- `npm run build` - Build for production (includes LLM generation)
- `npm run preview` - Preview production build

## Architecture

### Core Stack
- **Frontend**: React 18 + Vite
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives + custom components
- **Animation**: Framer Motion
- **Maps**: Leaflet with React Leaflet

### Project Structure
- `src/pages/` - Main application pages (Dashboard, Map, Calendar, Marketplace, Messages, Friends, Groups, Profile, Settings)
- `src/components/` - Reusable components including Layout, Header, Sidebar
- `src/components/ui/` - Design system components (Button, Card, Input, etc.)
- `src/lib/` - Utility functions
- `plugins/visual-editor/` - Custom Vite plugins for inline editing functionality
- `tools/` - Build-time utilities including LLM content generation

### Key Features
- **Visual Editor Integration**: Custom Vite plugins enable inline editing of JSX elements in development
- **Responsive Layout**: Sidebar collapses on mobile, persistent on desktop
- **Route-based Page Generation**: Automated LLM content generation from React Helmet data
- **German Localization**: UI and content primarily in German

### Configuration Files
- `vite.config.js` - Contains visual editor plugins, error handling, and build configuration
- `tailwind.config.js` - Custom design system with CSS variables for theming
- Path aliases: `@/` points to `src/`

### Visual Editor System
The application includes a sophisticated visual editing system:
- Editable HTML tags: a, Button, button, p, span, h1-h6, label, Label, img
- Custom Babel-based AST manipulation for live editing
- Development-only plugins that inject editing capabilities

### Build Process
The build command runs `generate-llms.js` which:
- Extracts route information from App.jsx
- Parses React Helmet data from page components
- Generates `public/llms.txt` with page metadata

## Development Notes

- Uses ES modules throughout
- Custom error handling and logging in development
- CORS and embedding support configured
- External dependencies excluded from build (Babel packages)
- Responsive design with mobile-first approach