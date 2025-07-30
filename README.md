# 🚛 Voice-based Parking Finder (Cargovibe Case Study)

This is a **React Native (TypeScript)** prototype built for the Cargovibe case study.  
It simulates a **voice-based parking finder** for truck drivers, focusing on **fast discovery and reservation** of parking spots within their remaining rest driving time — and now also highlights **future options farther along the route**.

---

## ✨ Features

- **Voice Input Simulation**: Press the mic button to simulate a spoken command like  
  _“Find me a parking spot on the way to Munich in 30 minutes”_.
- **Text Input**: Manually enter commands for quick testing.
- **Smart Parsing**: Extracts time constraints (e.g., “30 minutes”) using simple regex.
- **Smart Parking Suggestions**:
  - Calculates **distance using the Haversine formula**
  - Flags parking spots as:
    - **Reachable Now** (within the remaining driving time)
    - **Farther on Route** (not reachable now, but still on the way)
    - **Off Route** (not on the main path)
- **Reservation Action**: Reserve a spot with one tap (shows success toast)
- **Modern UI Enhancements**:
  - Pulse animation on voice input button
  - Fade-in animation for parking cards
  - Badges for route relevance (green, orange, red)
  - Rounded-pill buttons and improved typography

---

## 🛠 Tech Stack

- **React Native CLI** (no Expo)
- **TypeScript**
- **react-native-vector-icons** (icons)
- **react-native-animatable** (animations)
- **ToastAndroid** (Android quick feedback)

---

## 📂 Project Structure

```

.
├── app/index.tsx                # Main entry point
├── app/components
├── app/screens
├── app/navigation
├── app/utils
├── app/types
├── package.json
├── tsconfig.json
├── android/ / ios/              # Native projects
└── README.md
 

## 📦 Installation & Running

### Prerequisites
- React Native CLI environment setup ([guide](https://reactnative.dev/docs/environment-setup))
- Node.js & npm/yarn
- Android Studio or Xcode for simulator

### Steps
```bash
# 1. Clone repo
git clone <your_repo_url>
cd ParkingFinder

# 2. Install dependencies
npm install

# 3. Install native dependencies
npm install react-native-vector-icons react-native-animatable

# 4. (Only if RN <0.71)
npx react-native link react-native-vector-icons

# 5. Run
npx react-native run-android   # or run-ios
````

---

## 🖼 Screenshots & Demo

![App Demo](./assets/demo.gif)
- **Input simulation** (text or voice)
- **Parking suggestions** (Reachable Now + Farther on Route)
- **Reserve action** with confirmation toast

 

---

## 🚀 Approach

1. **MVP Flow**:

   * Simulate voice → extract time → filter spots by distance → categorize results → reserve.

2. **Decision Logic**:

   * Used **Haversine formula** to calculate distance (earth curvature).
   * Spots classified as **Reachable Now** (within time limit), **Farther on Route**, or **Off Route**.
   * Used a vector angle check to determine if a spot is along the route.

3. **UI/UX**:

   * Added **badges (green, orange, )** for clarity.
   * Used **animations** to make the experience visually appealing within limited time.

---

## ✅ What Worked Well

* Distance and route classification improved realism while staying lightweight (no real API needed).
* Animations and badges helped present data in an intuitive way.
* TypeScript provided type safety and cleaner structure.

---

## ⚠️ Challenges

* No actual routing API (mocked "along route" check with vector math).
* Voice input is simulated instead of fully integrated (for speed).

---

## 🔮 Improvements (With More Time)

* Integrate **real voice input** (e.g., [`react-native-voice`](https://github.com/react-native-voice/voice))
* Use **Google Maps or HERE Routing API** for actual route filtering.
* Fetch **live parking availability** and pricing.
* Add **user authentication & reservation history**.

---

## 👨‍💻 Author

**Hafiz Muhammad Ali Saeed**

* GitHub: [AliSaeed090](https://github.com/AliSaeed090)
* Email: [saeedali090@gmail.com](mailto:saeedali090@gmail.com)

---

**Thanks for the opportunity! Excited to discuss this in our follow-up session.**

```

---
 
