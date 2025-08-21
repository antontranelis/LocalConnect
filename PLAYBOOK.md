# LokalConnect Modernization Playbook

This playbook outlines the complete transformation of the LokalConnect project from a single React app to a full-stack TypeScript application with Directus backend.

## 🎯 Project Goals

1. **Repository Restructure**: Split into `/app` (frontend) and `/backend` (Directus)
2. **TypeScript Migration**: Convert React app to TypeScript
3. **Backend Implementation**: Set up Directus with complete data model
4. **Data Seeding**: Use directus-sync for configuration and seed data
5. **API Integration**: Connect frontend to Directus via SDK
6. **Containerization**: Docker Compose for unified development environment

## 📋 Phase Overview

### Phase 1: Repository Restructuring
- Move current React app to `/app` directory
- Set up `/backend` directory structure
- Update build configurations and paths

### Phase 2: TypeScript Migration
- Configure TypeScript in the React app
- Migrate components from .jsx to .tsx
- Add type definitions for props and state
- Update build tools for TypeScript support

### Phase 3: Directus Backend Setup
- Initialize Directus project
- Design data schema for LokalConnect features
- Configure authentication and permissions
- Set up directus-sync for schema management

### Phase 4: Data Model & Seeding
- Create collections for users, events, marketplace, messages
- Define relationships between entities
- Generate seed data for development
- Export configuration with directus-sync

### Phase 5: Frontend-Backend Integration
- Install and configure Directus SDK
- Create API service layer
- Replace mock data with real API calls
- Implement authentication flow

### Phase 6: Docker Development Environment
- Create Dockerfiles for app and backend
- Configure docker-compose.yml
- Set up environment variables
- Database initialization and migrations

---

## 🔧 Detailed Implementation Plan

### Phase 1: Repository Restructuring

#### 1.1 Create New Directory Structure
```
LocalConnect/
├── app/                    # React TypeScript app
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
├── backend/               # Directus backend
│   ├── directus/
│   ├── sync/             # directus-sync configurations
│   ├── seeds/            # seed data
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml    # Development environment
├── .env.example
├── README.md
└── PLAYBOOK.md
```

#### 1.2 Move Current App
- Move all current `/src`, `/public`, `/plugins` to `/app`
- Update import paths and configurations
- Preserve visual editor functionality

#### 1.3 Update Root Configuration
- Move package.json to `/app/package.json`
- Update README.md for new structure
- Create root-level package.json for workspace management

### Phase 2: TypeScript Migration

#### 2.1 TypeScript Configuration
- Install TypeScript and types: `@types/react`, `@types/node`, etc.
- Create `tsconfig.json` with strict mode
- Configure path aliases for `@/` imports
- Update Vite config for TypeScript

#### 2.2 Component Migration Strategy
```
Priority Order:
1. Utility functions (/lib) → .ts
2. UI components (/components/ui) → .tsx  
3. Layout components → .tsx
4. Page components → .tsx
5. Main App.jsx → App.tsx
```

#### 2.3 Type Definitions
- Create interfaces for all data models
- Define component prop types
- Add API response types
- Implement form validation types

### Phase 3: Directus Backend Setup

#### 3.1 Directus Installation
```bash
cd backend
npx create-directus-project directus
cd directus
npm install
```

#### 3.2 Database Configuration
- PostgreSQL for production-ready setup
- Environment variables for database connection
- Admin user creation
- Basic security configuration

#### 3.3 Initial Schema Design
```
Collections:
- users (extend directus_users)
- events
- marketplace_items  
- messages
- groups
- friendships
- user_locations
- event_participants
```

### Phase 4: Data Model & Seeding

#### 4.1 Core Collections

**Users Collection (extend directus_users)**
```typescript
interface User {
  id: string
  email: string
  first_name: string
  last_name: string
  avatar?: string
  location?: UserLocation
  reputation: number
  bio?: string
  interests: string[]
  created_at: Date
  last_active: Date
}
```

**Events Collection**
```typescript
interface Event {
  id: string
  title: string
  description: string
  date_time: Date
  location: {
    address: string
    latitude: number
    longitude: number
  }
  organizer: User
  participants: User[]
  max_participants?: number
  category: string
  image?: string
  status: 'draft' | 'published' | 'cancelled'
}
```

**Marketplace Items**
```typescript
interface MarketplaceItem {
  id: string
  title: string
  description: string
  price: number
  currency: string
  seller: User
  category: string
  images: string[]
  condition: 'new' | 'like_new' | 'good' | 'fair' | 'poor'
  location: string
  status: 'available' | 'sold' | 'reserved'
  created_at: Date
}
```

**Messages Collection**
```typescript
interface Message {
  id: string
  sender: User
  recipient: User
  content: string
  thread_id: string
  read: boolean
  sent_at: Date
}
```

**Groups Collection**
```typescript
interface Group {
  id: string
  name: string
  description: string
  image?: string
  admin: User
  members: User[]
  location: string
  category: string
  privacy: 'public' | 'private'
  created_at: Date
}
```

#### 4.2 Directus-Sync Setup
```bash
npm install directus-sync
```

Create sync configuration for:
- Schema export/import
- Permissions and roles
- Initial data seeding
- Development vs production configurations

#### 4.3 Seed Data Generation
- Create realistic German test data
- Geographic data for local connections
- Sample events in various categories
- Marketplace items with images
- User relationships and interactions

### Phase 5: Frontend-Backend Integration

#### 5.1 Directus SDK Setup
```bash
cd app
npm install @directus/sdk
```

#### 5.2 API Service Layer
```typescript
// services/api.ts
import { createDirectus, rest, authentication } from '@directus/sdk'

interface Schema {
  users: User[]
  events: Event[]
  marketplace_items: MarketplaceItem[]
  messages: Message[]
  groups: Group[]
}

const client = createDirectus<Schema>('http://localhost:8055')
  .with(rest())
  .with(authentication())
```

#### 5.3 State Management
- Consider Zustand or Redux Toolkit for state
- Implement real-time updates with Directus subscriptions
- Cache management for offline-first experience

#### 5.4 Authentication Integration
- Implement login/register with Directus auth
- JWT token management
- Protected routes and role-based access
- Social login options (optional)

### Phase 6: Docker Development Environment

#### 6.1 Backend Dockerfile
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 8055
CMD ["npm", "start"]
```

#### 6.2 Frontend Dockerfile
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]
```

#### 6.3 Docker Compose Configuration
```yaml
version: '3.8'
services:
  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: lokalconnect
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  directus:
    build: ./backend
    ports:
      - "8055:8055"
    environment:
      KEY: replace-with-random-value
      SECRET: replace-with-random-value
      DB_CLIENT: pg
      DB_HOST: postgres
      DB_PORT: 5432
      DB_DATABASE: lokalconnect
      DB_USER: postgres
      DB_PASSWORD: password
      ADMIN_EMAIL: admin@example.com
      ADMIN_PASSWORD: password
    depends_on:
      - postgres

  app:
    build: ./app
    ports:
      - "5173:5173"
    environment:
      VITE_API_URL: http://localhost:8055
    depends_on:
      - directus
    volumes:
      - ./app:/app
      - /app/node_modules

volumes:
  postgres_data:
```

---

## 🚀 Execution Timeline

### Week 1: Foundation
- [ ] Repository restructuring
- [ ] TypeScript configuration
- [ ] Basic Directus setup

### Week 2: Data Model
- [ ] Design and implement Directus schema
- [ ] Create directus-sync configuration
- [ ] Generate seed data

### Week 3: Integration
- [ ] TypeScript migration of components
- [ ] API service layer implementation
- [ ] Authentication integration

### Week 4: Polish & Deploy
- [ ] Docker environment setup
- [ ] Testing and bug fixes
- [ ] Documentation updates
- [ ] Production deployment preparation

---

## 🔍 Testing Strategy

### Unit Tests
- Component testing with React Testing Library
- API service testing with MSW
- Utility function testing

### Integration Tests
- API endpoint testing
- Authentication flow testing
- Database operation testing

### E2E Tests
- User journey testing with Playwright
- Cross-browser compatibility
- Mobile responsiveness

---

## 📚 Documentation Updates

### Technical Documentation
- API documentation with Directus auto-generated docs
- Component storybook
- Development environment setup guide

### User Documentation  
- Feature documentation
- Admin panel usage guide
- Deployment instructions

---

## 🔧 Migration Checklist

### Pre-Migration
- [ ] Backup current codebase
- [ ] Document current functionality
- [ ] Set up development branches

### During Migration
- [ ] Test each phase independently
- [ ] Maintain functionality parity
- [ ] Document breaking changes

### Post-Migration
- [ ] Performance testing
- [ ] Security audit
- [ ] User acceptance testing
- [ ] Production deployment

---

## 🚨 Risk Mitigation

### Technical Risks
- **Data Loss**: Implement proper backup strategies
- **Breaking Changes**: Maintain feature branches
- **Performance Issues**: Monitor with proper tooling

### Timeline Risks
- **Scope Creep**: Stick to defined phases
- **Complexity**: Break down into smaller tasks
- **Dependencies**: Have fallback plans

### Quality Risks
- **Testing Coverage**: Implement comprehensive testing
- **Documentation**: Keep docs updated throughout
- **Code Quality**: Use linting and code review processes

---

This playbook provides a comprehensive roadmap for transforming LokalConnect into a modern, full-stack TypeScript application with Directus backend. Each phase builds upon the previous one, ensuring a smooth and systematic migration process.