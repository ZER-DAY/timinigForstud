Лабораторная работа №2
Технологии разработки программно-информационных систем Ф.И.О. Алхабил Бахаа А.М.
Группа Прин 368
Преподаватель Денисов
Дата сдачи
Оценка

![aa](https://github.com/user-attachments/assets/35ebeb6d-d035-4574-a257-1101d2f97ceb)


( (Software Requirements Specification ) )

• Revision History
• Introduction
o 1.1 Purpose
o 1.2 Document Conventions
o 1.3 Intended Audience and Reading Suggestions
o 1.4 Product Scope
o 1.5 References
• Overall Description
o 2.1 Product Perspective
o 2.2 Product Functions
o 2.3 User Classes and Characteristics
o 2.4 Operating Environment
o 2.5 Design and Implementation Constraints
o 2.6 User Documentation
o 2.7 Assumptions and Dependencies
• External Interface Requirements
o 3.1 User Interfaces
o 3.2 Hardware Interfaces
o 3.3 Software Interfaces
o 3.4 Communications Interfaces
• System Features
o 4.1 System Feature 1
o 4.2 System Feature 2 (and so on)
• Other Nonfunctional Requirements
o 5.1 Performance Requirements
o 5.2 Safety Requirements
o 5.3 Security Requirements
o 5.4 Software Quality Attributes
o 5.5 Business Rules
• other requirements
• appendix a: glossary
• appendix b: analysis models
• appendix c: to be determined list

Version Date Description Author
1.0

    2024-11-21

    Initial Draft

    Bahaa

1.  Introduction
    1.1 Purpose
    The purpose of this document is to specify the requirements for a Lecture Management System that allows users to fetch and display lecture information based on a specified group. The system interacts with a PostgreSQL database to retrieve lecture details such as the lecture name, date, time slot, room number, and associated group. This document ensures all stakeholders have a clear understanding of the system’s functionality and objectives.
    1.2 Document Conventions
    • Programming Languages: JavaScript, TypeScript, and SQL
    • Frameworks: Next.js for front-end development
    • Date Format: YYYY-MM-DD, unless otherwise specified
    • Time Format: 24-hour notation (e.g., 08:00 - 11:50)
    1.3 Intended Audience and Reading Suggestions
    This document is intended for:
    • Developers: To understand system requirements and architecture.
    • Project Managers: To track development progress and ensure alignment with goals.
    • End Users: To gain insight into the system’s functionality.
    Suggested reading:
1.  Section 2: For detailed functional and non-functional requirements.
1.  Appendix: For technical and database schema details.
    1.4 Product Scope
    The Lecture Management System is designed to simplify the retrieval and display of lecture schedules for educational institutions. By allowing users to filter lectures by group, the system improves usability and reduces manual effort. Key features include:
    • Querying PostgreSQL to fetch lecture details.
    • Displaying results in a user-friendly interface with accurate formatting.
    • Scalability to handle large datasets and additional features in the future.
    1.5 References
1.  PostgreSQL Documentation: https://www.postgresql.org/docs/
1.  Next.js Documentation: https://nextjs.org/docs
1.  Tailwind CSS Documentation: https://tailwindcss.com/docs

        2. Overall Description

    2.1 Product Perspective
    The Lecture Management System is a stand-alone web application built using modern web technologies such as Next.js and Tailwind CSS, with a PostgreSQL database backend. It is designed to streamline access to lecture schedules by allowing users to query a database for specific group-related lectures.
    The system integrates seamlessly with institutional databases and can be deployed on any platform that supports Node.js and PostgreSQL.
    Key characteristics:
    • Built using Next.js for server-side rendering and optimized performance.
    • Uses Tailwind CSS for a responsive and accessible user interface.
    • Supports real-time querying of PostgreSQL databases.
    2.2 Product Functions
    The system provides the following core functionalities:

1.  Database Integration: Retrieves lecture information (e.g., name, date, time slot, room number) for a specified group.
1.  User Interface: Displays lecture details in a formatted and easy-to-read layout.
1.  Search Capabilities: Users can filter results based on group names.
1.  Error Handling: Alerts users if a query fails or returns no results.
1.  Scalability: Supports additional filters, such as by teacher name or room, in future versions.
    2.3 User Classes and Characteristics
1.  Students:
    o Use the system to view lecture schedules for their group.
    o Require a simple and intuitive interface.
1.  Teachers:
    o May use the system to confirm their lecture times and assigned rooms.
    o Require accurate and up-to-date information.
1.  Administrators:
    o Manage the database and maintain the system.
    o Require administrative access to troubleshoot and update data.
    2.4 Operating Environment
    • Server:
    o Node.js runtime environment (v18 or later).
    o PostgreSQL (v13 or later).
    • Client:
    o Modern web browser (Chrome, Firefox, Edge, Safari).
    o Device compatibility: Desktop, tablet, and mobile.
    2.5 Design and Implementation Constraints
1.  Database Access: The system relies on a PostgreSQL database. Any unavailability or incorrect configuration of the database may limit functionality.
1.  Performance: Optimized for small to medium-sized datasets but may require scaling solutions for large datasets.
1.  Frameworks: The system must adhere to Next.js conventions, such as proper use of server and client components.
1.  Language Support: The system assumes input data (e.g., group names, dates) conforms to supported formats.
    2.6 User Documentation
1.  Quick Start Guide: Covers how to access the application and retrieve lecture schedules.
1.  Administrator Manual: Provides instructions for managing the database and troubleshooting common issues.
1.  Online Help: Accessible through the application, with FAQs and examples.
    2.7 Assumptions and Dependencies
1.  Assumptions:
    o Users have access to a device with internet connectivity and a modern browser.
    o Data in the database is accurate and regularly updated.
1.  Dependencies:
    o PostgreSQL for data storage and retrieval.
    o Next.js and Tailwind CSS for web application development.
    o Node.js runtime for server-side execution.

1.  External Interface Requirements
    3.1 User Interfaces
    The system provides a web-based user interface designed to ensure ease of use and accessibility across devices:
1.  Main Page:
    o Search bar for entering group names to retrieve lecture schedules.
    o Table displaying lecture details (e.g., lecture name, date, time, room).
    o Error messages for invalid group names or failed searches.
1.  Responsive Design:
    o Layout adapts to different screen sizes, including desktops, tablets, and mobile devices.
1.  Accessible Features:
    o Keyboard navigable.
    o High-contrast mode for visually impaired users.
    o Support for screen readers using ARIA roles.
    3.2 Hardware Interfaces
    The system does not rely on specialized hardware and can be accessed on standard consumer devices:
    • Client Devices:
    o Desktop or laptop computers.
    o Smartphones and tablets.
    • Server Requirements:
    o A server with sufficient resources to host Node.js and PostgreSQL. Recommended configuration:
     Processor: Dual-core 2.5 GHz or higher.
     Memory: 4 GB RAM or higher.
     Storage: 20 GB free space.
    3.3 Software Interfaces
1.  Frontend:
    o Framework: Next.js for server-rendered React components.
    o Styling: Tailwind CSS for responsive design.
    o APIs: Fetch requests to internal endpoints (e.g., /api/lectures).
1.  Backend:
    o Database: PostgreSQL stores and retrieves lecture schedules.
    o API Endpoint:
     /api/lectures processes requests and returns filtered results.
     Follows RESTful conventions using JSON for communication.
1.  External Dependencies:
    o NPM packages such as pg for database interaction and utility libraries for date formatting.
1.  Supported Formats:
    o Inputs: Group names (alphanumeric strings).
    o Outputs: JSON objects containing lecture details.
    3.4 Communications Interfaces
    The system uses standard HTTP/HTTPS protocols to communicate between the frontend and backend:
1.  Protocols:
    o HTTP/1.1 for local development.
    o HTTPS in production environments for secure communication.
1.  Endpoints:
    o POST /api/lectures: Accepts a JSON payload containing the group name to retrieve lecture details.
1.  Error Handling:
    o Returns appropriate HTTP status codes (e.g., 200 for success, 404 for not found, 500 for server errors).
    o Provides descriptive error messages in JSON format for debugging.
1.  Performance Considerations:
    o Lightweight responses for faster loading.
    o Caching mechanisms for repeated queries.

1.  System Features  
    4.1 Feature 1: Lecture Schedule Retrieval
    Description
    Allows users to search for and retrieve lecture schedules for a specific group from the database.
    Functional Requirements
    • Users can input a group name in the search field.
    • The system validates the input and sends a request to the /api/lectures endpoint.
    • The backend fetches relevant lecture details from the PostgreSQL database.
    • The retrieved data includes:
    o Lecture name
    o Date (formatted in numbers)
    o Room number
    o Time (start and end)
    Technical Details
    • Frontend: Implements an intuitive search bar and a results table using React components.
    • Backend: Processes requests and queries the database efficiently.
    • Output: Displays results in a tabular format on the page.

---

4.2 Feature 2: Responsive Design
Description
Ensures that the application provides an optimal viewing and interaction experience across all devices.
Functional Requirements
• Automatically adjusts the layout and design based on screen size.
• Supports multiple devices, including desktops, tablets, and mobile phones.
• Maintains readability and usability, such as properly scaled tables and input fields.
Technical Details
• Utilizes Tailwind CSS for flexible and responsive styling.
• Implements media queries for fine-tuned design changes.

---

4.3 Feature 3: Input Validation and Error Handling
Description
Ensures that only valid inputs are processed and provides user feedback for errors.
Functional Requirements
• Validates group names to ensure they meet expected formats.
• Provides error messages for:
o Missing or incorrect group names.
o Database connection failures.
o No results found for the search.
Technical Details
• Input validation performed on the frontend before sending requests.
• Backend error responses include HTTP status codes (e.g., 404 or 500) and descriptive JSON error messages.

---

4.4 Feature 4: Data Storage and Management
Description
Stores lecture schedules securely in a PostgreSQL database and allows efficient retrieval.
Functional Requirements
• Maintains structured data with the following fields:
o Lecture name
o Group name
o Date
o Time
o Room number
o Teacher name
• Allows the addition, modification, and deletion of lecture records through database scripts or admin tools.
Technical Details
• Tables optimized with proper indexing for fast queries.
• Uses the pg library for database connectivity in the backend.

5. Other Nonfunctional Requirements
   5.1 Performance Requirements
   • The application must respond to user input within 2 seconds under normal operating conditions.
   • The backend API endpoints should handle up to 100 concurrent requests with minimal performance degradation.
   • Database queries must return results within 500 milliseconds for typical search operations.
   • The website must load in less than 3 seconds on a standard broadband connection.
   5.2 Safety Requirements
   • The system must prevent data loss during unexpected failures (e.g., power outages) through periodic database backups.
   • Input validation and sanitization must be implemented to prevent data corruption in the database.
   • Error handling mechanisms must ensure the system remains functional and accessible, even during failures.
   5.3 Security Requirements
   • All communication between the frontend and backend must use HTTPS to ensure secure data transmission.
   • User input must be validated and sanitized to prevent SQL injection or other malicious attacks.
   • Access to the database must require strong authentication credentials.
   • Sensitive information, such as database credentials, should never be exposed in the frontend code.
   5.4 Software Quality Attributes
   • Reliability: The system must maintain 99.9% uptime during regular operation.
   • Scalability: The application should scale horizontally to support a growing user base and database size.
   • Usability: The interface must be intuitive, with clear instructions and feedback for user actions.
   • Maintainability: The codebase must adhere to modern coding standards and include comprehensive documentation for ease of future updates.
   • Portability: The application must be deployable on cloud platforms (e.g., AWS, Azure) and local servers without significant modifications.
   5.5 Business Rules
   • Only authorized administrators can modify the database (e.g., add, update, or delete lecture records).
   • The system must prioritize user privacy by not logging or sharing personal data without consent.
   • Lecture schedules must be updated and verified at least once per semester to ensure accuracy.

6. Other Requirements
   This section contains any additional requirements that do not fall under the previous sections but are necessary for the project’s success.
   • Legal Requirements: The system must comply with the GDPR (General Data Protection Regulation) for handling user data within European Union member states.
   • Compliance: The application must adhere to industry standards and regulations related to data security, including ISO/IEC 27001 for information security management systems.
   • Localization: The system must support localization for multiple languages, including English and Russian, with the ability to expand to other languages in the future.
   • User Accessibility: The system must comply with WCAG 2.1 AA (Web Content Accessibility Guidelines) to ensure accessibility for users with disabilities.

---

Appendices
Appendix A: Glossary
• Lecture: A session in which a teacher or instructor delivers a scheduled class to students.
• API (Application Programming Interface): A set of functions that allows the application to interact with the backend system.
• Backend: The server-side of the application that handles business logic, database interactions, and API responses.
• Frontend: The client-side of the application that users interact with, typically through a web browser.
• Database: The structured collection of data where information about lectures, schedules, users, etc., is stored.
Appendix B: Analysis Models
• Use Case Diagram: Describes the functionality provided by the system from the perspective of users.
• Entity-Relationship Diagram (ERD): Visual representation of the system’s database structure, showing the relationships between entities like lectures, users, and schedules.



![Class Diagram0](https://github.com/user-attachments/assets/92a2a578-93b5-4b7d-8851-ccaa76048a22)



• Sequence Diagrams: Illustrates the interactions between the system’s components during key operations like fetching lecture data or user authentication.
Appendix C: To Be Determined List
• Third-party Integrations: The project may require integration with third-party systems for authentication, payment, or data validation. The specific services and APIs to be used will be determined during the implementation phase.
• Advanced Search Features: Features such as filtering or advanced search options (e.g., by subject, teacher, date) will need further analysis to define the exact requirements.
• User Role Management: The system needs further planning to define user roles (e.g., student, administrator) and the permissions for each role in detail.
