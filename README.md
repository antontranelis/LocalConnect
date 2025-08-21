# LokalConnect

**Local Networking Platform** - A modern React application for local community building and networking.

LokalConnect connects people in their immediate area, enabling them to discover local events, trade on the marketplace, and build genuine connections.

## ✨ Features

- **🗺️ Interactive Map** - Discover events and activities near you
- **📅 Event Calendar** - Plan and manage local events  
- **💬 Messaging System** - Communicate directly with other users
- **🏪 Marketplace** - Buy and sell items within your community
- **👥 Friends & Groups** - Build your local network
- **📱 Responsive Design** - Optimized for desktop and mobile
- **🎨 Modern UI** - Elegant interface with Framer Motion animations

## 🚀 Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS + Radix UI
- **Routing**: React Router DOM  
- **Maps**: Leaflet + React Leaflet
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Development**: Custom Visual Editor Plugins

## 📦 Installation

### Prerequisites

- Node.js (Version 16+)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd LocalConnect
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   
   The application runs at `http://localhost:5173`

## 🛠️ Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable components
│   ├── ui/             # Design system components
│   ├── Header.jsx      # App header
│   ├── Layout.jsx      # Main layout
│   └── Sidebar.jsx     # Navigation
├── pages/              # Main pages
│   ├── Dashboard.jsx   # Home page
│   ├── Map.jsx         # Map view
│   ├── Calendar.jsx    # Event calendar
│   ├── Marketplace.jsx # Marketplace
│   ├── Messages.jsx    # Messages
│   ├── Friends.jsx     # Friends management
│   ├── Groups.jsx      # Groups feature
│   ├── Profile.jsx     # User profile
│   └── Settings.jsx    # Settings
├── lib/                # Utility functions
└── main.jsx           # App entry point
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