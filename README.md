# SchoolApp - README

SchoolApp is an app designed for students, parents, teachers, and administrators to manage various school-related tasks and information. It offers functionalities similar to popular platforms like Canvas. The project consists of a backend and a frontend, developed using Java Spring Boot and ReactJS, respectively.

## Backend

### Technologies Used
- Java Spring Boot
- JPA Repositories

### Local Deployment
The backend is currently hosted on a local machine. To run the backend, ensure you have Java 17 installed, along with the necessary development environment set up. Open the project in your preferred IDE and execute the application.

### Database
The backend interacts with a MySQL database, which contains 11 tables to store various data related to students, teachers, courses, sections, and more.

### Main Functionalities
The backend provides essential functionalities to interact with the database, including storing, updating, and deleting data. It offers several API endpoints to manage different entities such as students, teachers, courses, and sections. Examples of API endpoints include:
- `/school/student`: View, create, update, or remove student data.
- `/school/teacher`: Perform operations on teacher data.
- `/school/course`: Manage course information.
- `/school/section`: Handle sections of courses.

### Security
To ensure security, the backend uses a table in the database to store login information. This table helps manage user authentication and permissions effectively.

## Frontend

### Technologies Used
- ReactJS
- React Router

### User Interface
The frontend offers a responsive and user-friendly design, allowing users to access the app from various devices. The landing pages, such as `StudentHomeComponent` and `TeacherHomeComponent`, are based on the user's role. For unauthenticated users, there is a landing login page where they can log in as an admin, teacher, student, or parent.

### Role-Based Access Control
The app implements role-based access control to restrict specific functionalities based on user roles. Admins have wide-ranging access, while teachers, students, and parents have limited permissions. For example, teachers cannot log in as students, and students cannot edit courses or sections.

### Performance Optimization
To minimize unnecessary server calls, the frontend uses useEffect and useState hooks, ensuring that components call the server only when necessary. Additionally, the app utilizes cookies to store user information, such as ID, password, email, and role.

## Project Structure

The SchoolApp project has the following structure:
```
SchoolApp-Project/
|-- backend/
| |-- src/
| |-- pom.xml
|-- frontend/
| |-- src/
| |-- public/
| |-- package.json
|-- README.md
```

The backend folder contains the Java Spring Boot application, and the frontend folder holds the ReactJS application. Necessary resources are kept within their respective folders.

## Functionalities

### Students and Parents
- View and edit their own profile.
- Access a list of courses and sections.
- View teachers and staff information.
- Check their current courses and sections details.
- Request to take a course.
- Access announcements, assignments, syllabus, and grades for their specific course section.
- View assignment information and grades.
- Check their class schedule.
- View their report card.

### Teachers and Administrators
- View and edit their profile.
- Access a list of courses and sections.
- View teachers and staff information.
- Access a list of students.
- Check the current courses and sections they are teaching.
- View and edit announcements, assignments, syllabus, and grades in their respective sections.
- View and edit assignment information and grades.
- Check their teaching schedule.

## Known Limitations

The current version of SchoolApp has some areas that can be further improved. Additional testing and optimization can enhance the app's overall performance and user experience.

## How to Deploy Locally

1. Ensure you have Java 17 installed.
2. Set up the necessary development environment.
3. Open the backend and frontend projects using separate editors.
4. To run the backend, execute the application.
5. To run the frontend, open the project directory and use `npm run start`.

## Contribution

To contribute to SchoolApp, follow these steps:
1. Fork the repository on GitHub.
2. Create a new branch for your changes.
3. Make your modifications and commit them.
4. Push the changes to your fork.
5. Create a pull request detailing your changes.

## License

This project is licensed under the MIT License(LICENCE).
