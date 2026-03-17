# FocusFlow

**FocusFlow** is a privacy-first, offline-capable productivity hub designed as a Progressive Web App (PWA) to supercharge your workflow. It brings together Kanban task management, a dual-mode Pomodoro timer, rich-text note-taking, and secure peer-to-peer data syncing seamlessly.

## 🌟 Key Features

### 📋 Intelligent Task Management
- **Kanban Board:** Organize tasks into To Do, Active, and Done columns.
- **Nested Subtasks:** Break complex tasks down with completion tracking.

### ⏱️ Time Tracking & Pomodoro
- **Dual Flow:** Switch between manual continuous timing or strict Pomodoro sessions (25m Focus / 5m Break).
- **Persistent Stats:** All accumulated work is logged automatically against individual tasks.

### 📝 Rich Note-Taking & Attachments
- **Inline Media Support:** Drag and drop files and images directly into task descriptions or global notes. 
- **Immersive Lightbox:** Double-click images or attachments to zoom, pan, and manage them via a custom overlay UI.
- **IndexedDB Powered:** Store large images locally in your browser with zero data loss. 

### 📡 100% Secure WebRTC Live Sync
No backend servers. No cloud storage. 
- **Two-Way Smart Merge:** Securely link devices using a direct peer-to-peer WebRTC connection. FocusFlow intelligently merges modifications without overwriting data, utilizing tracking IDs and modified timestamps. 
- **QR Deep-Linking:** Automatically link your laptop and smartphone just by scanning a generated QR code from the Control Center.

### 💾 Complete Data Portability
- **Offline First PWA:** Install directly to your device and use it without Wi-Fi.
- **Save/Restore:** Instantly export your entire workspace to a JSON backup, or restore to start fresh anywhere.
- **One-Click Wipe:** Dedicated "Clear Database" utility hidden safely in the Control Center.

## 🚀 Getting Started

1. Go to the live PWA deployment.
2. If on mobile, select **"Add to Home Screen"** for the native app experience.
3. Start adding tasks, dragging files, and taking control of your focus!

*Built with HTML5, Alpine.js, Tailwind CSS, and PeerJS.*

---

## 🤖 Development Philosophy
This project is an exploration into fully **"vibe coding"** an entire functional web application. It was built with heavy AI assistance, focusing intensely on achieving a flow state, experimenting with rapid iteration, and translating ideas directly into live features without being bogged down by traditional scaffolding. It stands as a testament to how fast an idea can go from a single prompt to a fully deployed Progressive Web App with complex offline peer-to-peer data synchronization!
