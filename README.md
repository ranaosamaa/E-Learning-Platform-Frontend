# E-Learning Platform Frontend

A modern, fully responsive frontend web application for an E-Learning platform, designed to cater to both Students and Professors. Built with vanilla HTML, CSS, and JavaScript.

## 🚀 Features

### Student Experience
- **Interactive Dashboard:** View enrolled courses, progress tracking, and key analytics.
- **Course Discovery:** Browse and enroll in new courses from the catalog.
- **Course Content Viewer:** Access syllabus, modules, video links, and download materials with interactive accordions.
- **Assignments Center:** View upcoming deadlines and submit assignments via a drag-and-drop interface.
- **Grades & Reports:** Comprehensive view of current GPA, course grades, and detailed feedback from instructors.

### Professor Experience
- **Instructor Dashboard:** Overview of active courses, total enrolled students, and pending grading items.
- **Course Management:** Create and organize modules, draft assignments, and upload materials.
- **Grading Interface:** Side-by-side view with a student list, document viewer mockup, and grading/feedback sidebar.
- **Student Progress:** Roster table tracking student engagement and course averages.

### Technical & UI Highlights
- **No External Frameworks:** Built entirely with vanilla HTML, CSS3 variables, Flexbox/Grid.
- **Modern Aesthetic:** Features "glassmorphism" components, smooth animations, and a cohesive color palette (Indigo & Emerald).
- **Custom Toast Notifications:** Custom notification system replaces native browser alerts for a seamless user experience.
- **Phosphor Icons:** Clean and modern iconography.
- **Fully Responsive:** Optimized for desktop, tablet, and mobile views with a togglable sidebar.

## 🛠 Setup & Installation

This project consists entirely of static client-side files and does not require a complex build process. It is perfectly suited to run on local servers like **XAMPP Apache** or any simple HTTP server.

1. **Clone or Download** this repository.
2. **Move to XAMPP Directory:** Place the `E-Learning-Platform-Frontend` folder into your `C:\xampp\htdocs\` directory (or the equivalent web root for your server setup).
3. **Start Apache:** Open the XAMPP Control Panel and start the Apache module.
4. **View in Browser:** Navigate to:
   ```text
   http://localhost/E-Learning-Platform-Frontend/index.html
   ```

## 📂 Project Structure

```text
E-Learning-Platform-Frontend/
├── css/
│   ├── style.css         # Base styles, variables, typography, and utility classes
│   └── dashboard.css     # Layout styles specific to dashboard pages (sidebar, grids)
├── js/
│   └── app.js            # Interactive logic (tabs, accordions, toast notifications)
├── index.html            # Entry point / Login Page
├── student-dashboard.html
├── courses-catalog.html
├── course-view.html
├── assignments.html
├── grades.html
├── professor-dashboard.html
├── course-management.html
├── grading.html
└── student-progress.html
```

## 👤 Usage Demo

1. Open `index.html`.
2. To view the student flow, leave the default role as "Student" and click **Sign In**.
3. To view the instructor flow, change the dropdown role to "Professor" and click **Sign In**.

*Note: As this is a frontend-only project, data is currently hardcoded for demonstration purposes, and form submissions/uploads trigger mock UI responses.*
