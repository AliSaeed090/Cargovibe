
markdown
# 🚛 Voice-based Parking Finder (Cargovibe Case Study)

This is a **React Native (TypeScript)** prototype built for the Cargovibe case study.  
It simulates a **voice-based parking finder** for truck drivers, focusing on **fast discovery and reservation** of parking spots within their remaining rest driving time.

---

## ✨ Features

- **Voice Input Simulation**: Press the mic button to simulate a spoken command like  
  _“Find me a parking spot on the way to Munich in 30 minutes”_.
- **Text Input**: Manually enter commands for quick testing.
- **Smart Parsing**: Extracts time constraints (e.g., “30 minutes”) using simple regex.
- **Mock Parking Suggestions**:
  - Shows parking spot name, location, drive time, and price
  - Filters results to match time constraints and availability
- **Reservation Action**: Reserve a spot with one tap (shows success toast)
- **Modern UI Enhancements**:
  - Pulse animation on voice input button
  - Fade-in animation for parking cards
  - Vector icons for better visual hierarchy
  - Rounded-pill buttons and improved typography

---

## 🛠 Tech Stack

- **React Native** (no Expo)
- **TypeScript**
- **react-native-vector-icons** (icons)
- **react-native-animatable** (animations)
- **ToastAndroid** (Android quick feedback)

---

## 📂 Project Structure

```

.
├── app/index.tsx                # Main entry point
├──app/components
├──app/screens
├──app/navigation
├── package.json
├── tsconfig.json
├── android/ / ios/        # Native projects
└── README.md

````

*(For a larger project, we would split into `components/`, `types/`, and `screens/`.)*

---

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

## 🖼 Screenshots (Example)
[App Demo](app/assets/demo.gif)
*(You can add actual screenshots after running on your device)*

* **Home screen:** Input + mic button
* **Results:** Filtered parking cards with fade-in animation
* **Reserve confirmation:** Toast success message

---

## 🚀 Approach

1. **MVP Flow**:

   * Simulate voice → extract time → show parking results → reserve.

2. **Simplified NLP**:

   * Used regex to parse time (`/(\d+)\s*minutes?/i`).
   * For production, would integrate proper NLP or a service like **Whisper**.

3. **UI/UX**:

   * Used **icons**, **rounded buttons**, **animations** to make it presentable within 2 hours.

---

## ✅ What Worked Well

* React Native CLI with TypeScript provided quick setup & type safety.
* Animations and icons drastically improved look & feel without heavy effort.

---

## ⚠️ Challenges

* Full voice-to-text integration requires extra time (used simulation instead).
* No real map/routing APIs (mocked data instead).

---

## 🔮 Improvements (With More Time)

* Integrate **actual voice input** using [`react-native-voice`](https://github.com/react-native-voice/voice).
* Use **real routing API** (Google Maps or HERE) for accurate distance filtering.
* Integrate **live parking availability API**.
* Add **driver authentication** and **persistent reservations**.

---

 
---

## 👨‍💻 Author

**Hafiz Muhammad Ali Saeed**

* GitHub: \AliSaeed090
* Email: [saeedali090@gmail.com](mailto:saeedali090@gmail.com)

---

**Thanks for the opportunity! Excited to discuss in our follow-up session.**

```

---


```
