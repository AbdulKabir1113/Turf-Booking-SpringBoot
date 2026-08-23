# 🏟️ TurfHub – Turf Booking & Management System

TurfHub is a full-stack turf booking and management system that allows users to browse, search, and book sports turfs, while turf owners can manage their turfs, bookings, and revenue through a dedicated dashboard.

The application provides separate experiences for Users and Owners using role-based authentication and protected routes.

---

## 🚀 Features

### 👤 User Module

- User Registration
- User Login
- Role-Based Authentication
- Browse Available Turfs
- Search Turfs
- View Turf Details
- View Turf Images
- Select Booking Date
- Slot-Based Booking
- Booking Confirmation
- View Booking History
- User Profile
- Edit Profile
- Change Password

---

### 🏟️ Owner Module

- Owner Login
- Owner Dashboard
- View Total Turfs
- View Today's Bookings
- View Upcoming Bookings
- View Revenue
- View Recent Bookings
- Add Turf
- View My Turfs
- Edit Turf
- Manage Turf Information
- Owner Profile
- View Customer Bookings

---

## 🔐 Authentication & Authorization

TurfHub uses credential-based authentication with role-based access control.

```text
                         Login
                           │
                           ▼
                    Authenticate User
                           │
                  ┌────────┴────────┐
                  │                 │
                USER              OWNER
                  │                 │
                  ▼                 ▼
              User Home       Owner Dashboard
```

Protected routes prevent unauthorized users from accessing User and Owner-specific pages.

---

# 🛠️ Technologies Used

## Frontend

- React.js
- JavaScript (ES6)
- HTML5
- CSS3
- Tailwind CSS
- React Router DOM
- Axios
- Lucide React
- Vite

## Backend

- Java
- Spring Boot
- Spring Data JPA
- Hibernate
- MySQL
- Maven

## Tools

- Eclipse IDE
- Visual Studio Code
- MySQL Workbench
- Git
- GitHub

---

# 🏗️ Architecture

The application follows a layered full-stack architecture.

```text
┌──────────────────────────────┐
│        React.js Frontend     │
│                              │
│ Pages → Components → Routes  │
└──────────────┬───────────────┘
               │
               │ HTTP Requests
               ▼
┌──────────────────────────────┐
│        Spring Boot API       │
│                              │
│       Controller Layer       │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│         Service Layer        │
│        Business Logic        │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│       Repository Layer       │
│       Spring Data JPA        │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│       Hibernate / JPA        │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│         MySQL Database       │
└──────────────────────────────┘
```

---

# 📂 Project Structure

```text
TurfBooking Spring
│
├── Frontend
│   │
│   ├── public
│   │
│   ├── src
│   │   ├── assets
│   │   │
│   │   ├── components
│   │   │   ├── booking
│   │   │   ├── owner
│   │   │   └── turfDetails
│   │   │
│   │   ├── context
│   │   │
│   │   ├── layouts
│   │   │
│   │   ├── pages
│   │   │   └── owner
│   │   │
│   │   ├── routes
│   │   │
│   │   ├── services
│   │   │
│   │   └── utils
│   │
│   ├── package.json
│   └── vite.config.js
│
├── Backend
│   │
│   └── TurfBooking-SpringBoot
│       │
│       └── turfbooking-spring
│           │
│           ├── src
│           │   ├── main
│           │   │   ├── java
│           │   │   │   └── com.turfbooking
│           │   │   │       ├── config
│           │   │   │       ├── controller
│           │   │   │       ├── dto
│           │   │   │       ├── entity
│           │   │   │       ├── repository
│           │   │   │       └── service
│           │   │   │
│           │   │   └── resources
│           │   │       └── application.properties
│           │
│           └── pom.xml
│
├── .gitignore
└── README.md
```

---

# 🗄️ Database

The application uses **MySQL** for persistent data storage.

### Main Tables

```text
users
turfs
turf_images
turf_sports
bookings
```

The backend uses **Spring Data JPA and Hibernate** for database operations.

---

# 🔄 User Application Flow

```text
User
  │
  ▼
Register / Login
  │
  ▼
Home Page
  │
  ▼
Browse Turfs
  │
  ▼
Search Turf
  │
  ▼
View Turf Details
  │
  ▼
Select Date
  │
  ▼
Select Available Slot
  │
  ▼
Booking Confirmation
  │
  ▼
My Bookings
```

---

# 🔄 Owner Application Flow

```text
Owner
  │
  ▼
Login
  │
  ▼
Owner Dashboard
  │
  ▼
View Dashboard Statistics
  │
  ▼
Manage Turfs
  │
  ├── Add Turf
  │
  └── Edit Turf
  │
  ▼
View Customer Bookings
  │
  ▼
View Revenue
  │
  ▼
Owner Profile
```

---

# 📊 Owner Dashboard

The Owner Dashboard provides information such as:

- Total Turfs
- Today's Bookings
- Upcoming Bookings
- Total Revenue
- Recent Customer Bookings

### Dashboard Flow

```text
Owner Dashboard
       │
       ├── Total Turfs
       │
       ├── Today's Bookings
       │
       ├── Upcoming Bookings
       │
       ├── Total Revenue
       │
       └── Recent Bookings
```

---

# 🔒 Protected Routes

The React frontend contains separate protected routes for Users and Owners.

### User Protected Routes

```text
User
 │
 ├── Profile
 ├── Edit Profile
 ├── Change Password
 ├── My Bookings
 ├── Booking
 └── Payment / Confirmation
```

### Owner Protected Routes

```text
Owner
 │
 ├── Dashboard
 ├── My Turfs
 ├── Add Turf
 ├── Edit Turf
 ├── Bookings
 └── Owner Profile
```

Role-based routing ensures that unauthorized users cannot directly access protected User or Owner pages.

---

# 🌐 Backend API

The Spring Boot backend exposes HTTP endpoints for communication with the React frontend.

### Main Backend Modules

```text
Authentication
      │
      ▼
AuthController


Turf Management
      │
      ▼
TurfController


Booking Management
      │
      ▼
BookingController


Owner Management
      │
      ▼
OwnerController


Image Handling
      │
      ▼
ImageController
```

---

# ⚙️ Installation & Setup

## 1. Clone the Repository

```bash
git clone https://github.com/AbdulKabir1113/Turf-Booking-SpringBoot.git
```

Navigate to the project:

```bash
cd Turf-Booking-SpringBoot
```

---

# 💻 Frontend Setup

Navigate to the frontend directory:

```bash
cd Frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will run on:

```text
http://localhost:5173
```

---

# ☕ Backend Setup

Open the backend project:

```text
Backend/TurfBooking-SpringBoot/turfbooking-spring
```

Import the project into **Eclipse IDE** as an existing Maven project.

### Required

- Java
- Maven
- MySQL
- Eclipse IDE

Run:

```text
TurfBookingApplication.java
```

as:

```text
Run As → Spring Boot App
```

The backend will run on:

```text
http://localhost:8080/TurfBooking
```

---

# 🗃️ Database Configuration

Create the MySQL database:

```sql
CREATE DATABASE turf_booking_db;
```

The backend uses the following datasource configuration:

```text
spring.datasource.url
spring.datasource.username
spring.datasource.password
```

Database credentials can be provided through environment variables:

```text
DB_USERNAME
DB_PASSWORD
```

The application also supports a configurable file upload directory:

```text
UPLOAD_DIR
```

---

# 🔗 Frontend & Backend Communication

The React frontend communicates with the Spring Boot backend through HTTP requests.

```text
React Frontend
localhost:5173
       │
       │ HTTP Requests
       ▼
Spring Boot Backend
localhost:8080/TurfBooking
       │
       ▼
Spring Data JPA
       │
       ▼
Hibernate
       │
       ▼
MySQL
```

---

# 📸 Application Screens

## User

- Home Page
- Login
- Signup
- Turf Listing
- Turf Details
- Booking
- Booking Confirmation
- My Bookings
- Profile
- Edit Profile
- Change Password

## Owner

- Owner Dashboard
- My Turfs
- Add Turf
- Edit Turf
- Owner Bookings
- Owner Profile

---

# ✨ Key Highlights

- Full-stack React and Spring Boot application
- Role-based authentication
- Protected User and Owner routes
- Turf management
- Slot-based booking
- Booking history
- Owner dashboard
- Revenue tracking
- CRUD operations
- MySQL database integration
- Spring Data JPA and Hibernate
- Responsive React UI
- Layered backend architecture

---

# 🚀 Future Enhancements

The following features can be implemented in future versions:

- City-based turf filtering
- Advanced search and filtering
- Admin panel
- Reviews and ratings
- Online payment gateway
- Booking notifications
- Advanced booking analytics
- AI-based turf recommendations
- Mobile application

---

# 👨‍💻 Author

**Momin Mohammed Rehan**

Java Full Stack Developer

```text
Java | Spring Boot | Hibernate | React.js | MySQL | JDBC | SQL
```

---

# ⭐ Project

If you find this project useful, consider giving the repository a ⭐ on GitHub.