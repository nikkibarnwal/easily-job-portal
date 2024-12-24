# Job Portal

A **Job Portal** website for recruiters to post jobs and manage applications and for job seeker to check and apply available jobs. 
Built with Express.js and EJS templates for dynamic server-side rendering.

---

## Features

- **Job Management**:  
  Recruiters can post and update job listings with detailed descriptions.  
  Authentication is required to add or update a job.  

- **Search Functionality**:  
  Users can search jobs by **location** and **designation**.  

- **Applicant Management**:  
  View the list of applicants for a particular job, including details like name, contact, and resume.

- **Dynamic Templating**:  
  User-friendly UI built with EJS for dynamic server-side rendering.

- **Middleware Support**:  
  File uploads (resumes), session management, and validation implemented using middleware.

---

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Scripts](#scripts)
4. [Dependencies](#dependencies)
5. [Author](#author)

---

## Installation

Clone the repository and install dependencies:
```bash
git clone https://github.com/nikkibarnwal/easily-job-portal.git
cd job-portal
npm install
```

---

## Usage

### Development Server
Start the development server with hot reload:
```bash
npm start
```

Access the server at `http://localhost:3000`.

---

## Scripts

- **`start`**: Start the server using `nodemon`.
- **`test`**: Run the default test script (currently not defined).

---

## Features in Detail

1. **Search Jobs**:  
   - Users can filter jobs based on **location** and **designation** using the search bar.  

2. **Post/Update Job Listings**:  
   - Authenticated recruiters can create new job postings or update existing ones.  

3. **Applicant List**:  
   - Recruiters can view the list of applicants for a specific job, including contact details and resume downloads.  

4. **Authentication**:  
   - Secure authentication to ensure only authorized users can add or update job postings.

---

## Dependencies

The following npm packages are required to run the project:

| Package               | Version    | Description                                 |
|-----------------------|------------|---------------------------------------------|
| `cookie-parser`       | `^1.4.7`   | Parse cookies in HTTP requests              |
| `ejs`                 | `^3.1.10`  | Embedded JavaScript templates               |
| `express`             | `^4.21.2`  | Web application framework                   |
| `express-ejs-layouts` | `^2.5.1`   | Layout support for EJS                      |
| `express-session`     | `^1.18.1`  | Session middleware                          |
| `express-validator`   | `^7.2.0`   | Validation middleware for Express.js        |
| `multer`              | `^1.4.5-lts.1` | File upload handling library            |
| `nodemailer`          | `^6.9.16`  | Send emails easily from Node.js             |

---

## Contributing

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push to the branch and create a pull request.

---

## Author

**Nikki Burnwal**  
[[GitHub Profile](https://github.com/)](https://github.com/nikkibarnwal/easily-job-portal.git)
