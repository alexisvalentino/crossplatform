# CrossPlatform App

A cross-platform starter for building high-performance iOS, Android, and Progressive Web Apps with a single codebase.

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run in the Browser (Development)
```bash
npm run dev
```
Visualise at: [http://localhost:3000](http://localhost:3000)

### 3. Build & Sync for Mobile
Before running on a device, you must build the web project and sync it with Capacitor:
```bash
npm run build
npm run sync
```

### 4. Run on Mobile Devices
*   **Android**: `npm run android` (Requires Android Studio)
*   **iOS**: `npm run ios` (Requires Xcode on macOS)

## 🛠 Tech Stack
*   **Frontend**: Next.js & React
*   **UI Components**: Ionic Framework
*   **Styling**: Tailwind CSS
*   **Native Bridge**: Capacitor

## 📝 Notes
*   **Static Export**: This project is configured for static export (`output: 'export'`) to ensure compatibility with native mobile shells.
*   **No SSR**: Since the app runs client-side on mobile, Server-Side Rendering (SSR) is not supported in this specific starter.
