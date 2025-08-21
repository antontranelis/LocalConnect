# LokalConnect

**Local Networking Platform** - A modern full-stack TypeScript application for local community building and networking.

LokalConnect connects people in their immediate area, enabling them to discover local events, trade on the marketplace, and build genuine connections.

## 🏗️ Architecture

This is a monorepo containing:
- **`/app`** - React TypeScript frontend with Vite
- **`/backend`** - Directus headless CMS backend
- **Docker Compose** - Unified development environment

## ✨ Features

- **🗺️ Interactive Map** - Discover events and activities near you
- **📅 Event Calendar** - Plan and manage local events  
- **💬 Messaging System** - Communicate directly with other users
- **🏪 Marketplace** - Buy and sell items within your community
- **👥 Friends & Groups** - Build your local network
- **📱 Responsive Design** - Optimized for desktop and mobile
- **🎨 Modern UI** - Elegant interface with Framer Motion animations

## 🚀 Tech Stack

### Frontend (`/app`)
- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Radix UI
- **Routing**: React Router DOM  
- **Maps**: Leaflet + React Leaflet
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **API Client**: Directus SDK

### Backend (`/backend`)
- **CMS**: Directus (Headless CMS)
- **Database**: PostgreSQL
- **API**: Auto-generated REST + GraphQL
- **Auth**: JWT + Role-based permissions
- **Schema Management**: directus-sync

### DevOps
- **Containerization**: Docker + Docker Compose
- **Development**: Hot reload for both frontend and backend
- **Database**: PostgreSQL with automatic migrations

## 📦 Installation

### Prerequisites

- Node.js (Version 18+)
- Docker & Docker Compose
- npm (Version 9+)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd LocalConnect
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your preferred settings
   ```

3. **Start the full development environment**
   ```bash
   npm run dev
   ```

   This will start:
   - **Frontend**: http://localhost:5173
   - **Backend API**: http://localhost:8055
   - **Directus Admin**: http://localhost:8055/admin
   - **PostgreSQL**: localhost:5432

### Manual Setup (Alternative)

1. **Install all dependencies**
   ```bash
   npm run install:all
   ```

2. **Start backend only**
   ```bash
   npm run dev:backend
   ```

3. **Start frontend only** (in another terminal)
   ```bash
   npm run dev:app
   ```

## 🛠️ Available Scripts

```bash
# Full development environment (Docker Compose)
npm run dev

# Frontend development only
npm run dev:app

# Backend development only  
npm run dev:backend

# Build frontend for production
npm run build

# Install all workspace dependencies
npm run install:all

# Clean Docker containers and images
npm run clean
```

## 🏗️ Project Structure

```
LocalConnect/
├── app/                        # Frontend React TypeScript app
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   │   ├── ui/            # Design system components
│   │   │   ├── Header.tsx     # App header
│   │   │   ├── Layout.tsx     # Main layout
│   │   │   └── Sidebar.tsx    # Navigation
│   │   ├── pages/             # Main pages
│   │   │   ├── Dashboard.tsx  # Home page
│   │   │   ├── Map.tsx        # Map view
│   │   │   ├── Calendar.tsx   # Event calendar
│   │   │   ├── Marketplace.tsx # Marketplace
│   │   │   └── ...
│   │   ├── services/          # API services (Directus SDK)
│   │   ├── types/             # TypeScript type definitions
│   │   ├── lib/               # Utility functions
│   │   └── main.tsx           # App entry point
│   ├── public/                # Static assets
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
├── backend/                   # Directus backend
│   ├── directus/             # Directus instance
│   ├── sync/                 # directus-sync configurations
│   ├── seeds/                # Seed data
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml        # Development environment
├── .env.example             # Environment variables template
└── package.json            # Workspace configuration
```

## 🎨 Design System

The project uses a consistent design system based on:

- **Tailwind CSS** for styling
- **Radix UI** for accessible UI components  
- **CSS Custom Properties** for theming
- **Framer Motion** for animations

### UI Components

- Button, Card, Input, Label
- Avatar, Badge, Tabs, Toast
- Dialog, Dropdown Menu, Slider

## 🔧 Development

### Visual Editor

The project includes a unique visual editor system:

- **Live editing** of JSX elements in the browser
- **Babel-based** AST manipulation
- **Development-specific** plugins

### Configuration

- **Vite Config**: `vite.config.js` - Plugins and build settings
- **Tailwind Config**: `tailwind.config.js` - Design system
- **Path Aliases**: `@/` points to `src/`

### Build Process

The build process automatically generates:
- **LLM content** from React Helmet data
- **Route information** for SEO
- **Optimized assets** for production

## 🌍 Localization

The application is primarily designed for German users:
- German UI text
- Local date/time formats
- Regional content adaptations

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For questions or issues, please create an issue in this repository.

---

**Built with ❤️ for local communities**