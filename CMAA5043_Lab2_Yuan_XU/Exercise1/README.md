# HKUST(GZ) Course Platform

A React-based course management platform for HKUST(GZ) that demonstrates fundamental React concepts including JSX syntax, component-based architecture, and state management.

## 📋 Project Overview

This project is a web application built as part of the CMAA5043 Lab 2 coursework. It showcases a simple yet functional course platform where users can view featured courses, track student enrollment numbers, and access system notices.

## ✨ Features

- **Real-time Clock**: Displays current service time that updates dynamically
- **Course Information Display**: Shows detailed course information including:
  - Course title
  - Duration
  - Instructor name
  - Classroom location
- **Student Enrollment Tracking**: Interactive counter to track the number of students choosing each course
  - Increment/decrement buttons with validation (prevents negative values)
  - Real-time state updates
- **System Notices**: Important announcements and reminders for students
- **Component-based Architecture**: Modular and reusable React components

## 🛠️ Technologies Used

- **React** 18.2.0 - JavaScript library for building user interfaces
- **React DOM** 18.2.0 - React package for DOM manipulation
- **React Scripts** 5.0.1 - Scripts and configuration for Create React App
- **CSS** - Custom styling

## 📁 Project Structure

```
Exercise1/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── App.js              # Main application component
│   ├── App.css             # Styles for App component
│   ├── course.js           # Reusable Course component with state management
│   ├── index.js            # Application entry point
│   └── index.css           # Global styles
├── package.json            # Project dependencies and scripts
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone or download this repository

2. Navigate to the project directory:
   ```bash
   cd Exercise1
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:
```bash
npm start
```

The application will automatically open in your default browser at [http://localhost:3000](http://localhost:3000).

### Other Available Scripts

- **Build for production**:
  ```bash
  npm run build
  ```
  Creates an optimized production build in the `build` folder.

- **Run tests**:
  ```bash
  npm test
  ```
  Launches the test runner in interactive watch mode.

## 📚 Learning Objectives

This project demonstrates three key React concepts:

### 1. **JSX Syntax**
- Using JSX to create HTML-like structures in JavaScript
- Embedding JavaScript expressions within JSX using curly braces `{}`
- Proper component structure with divs, headings, and paragraphs

### 2. **Component-based Thinking**
- Creating reusable `Course` component in a separate file
- Using props to pass data to components
- Importing and exporting components across files
- Component composition and modularity

### 3. **State Management**
- Using React Hooks (`useState`) to manage component state
- Updating state based on user interactions (button clicks)
- Conditional state updates (preventing negative student counts)
- Re-rendering components when state changes

## 💡 Key Components

### App Component
The main application component that:
- Displays the platform title and current time
- Renders the Course component with course details
- Shows system notices and important information

### Course Component
A reusable component that:
- Accepts course details via props (title, duration, instructor, classroom)
- Manages student enrollment count using `useState` hook
- Provides increment and decrement buttons for enrollment tracking
- Prevents the count from going below zero

## 🎓 Course Example

The platform currently features:
- **Course**: Creative Prototyping
- **Duration**: 24 Hours
- **Instructor**: Prof. Tong
- **Classroom**: E3-201
- **Initial Enrollment**: 29 students

## 🔧 Customization

To add more courses, simply add more `<Course />` components in `App.js`:

```jsx
<Course
    title="Your Course Name"
    duration="XX Hours"
    instructor="Prof. Name"
    classroom="Room Number"
/>
```

## 📝 Notes

- The student count starts at 29 and can be adjusted using the +/- buttons
- The decrement button includes validation to prevent negative values
- The service time updates automatically based on the system clock

## 👤 Author

Yuan XU  
CMAA5043 - Lab 2 - Exercise 1

## 📄 License

This project is created for educational purposes as part of the CMAA5043 coursework at HKUST(GZ).
