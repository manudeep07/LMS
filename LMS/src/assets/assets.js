import logo from './logo.png'
import logo1 from './logo1.png'
import logo_dark from './logo_dark.svg'
import search_icon from './search_icon.svg'
import cross_icon from './cross_icon.svg'
import upload_area from './upload_area.svg'
import sketch from './sktech.svg'
import microsoft_logo from './microsoft_logo.svg'
import walmart_logo from './walmart_logo.svg'
import accenture_logo from './accenture_logo.svg'
import adobe_logo from './adobe_logo.svg'
import paypal_logo from './paypal_logo.svg'
import course_1_thumbnail from './course_1.png'
import course_2_thumbnail from './course_2.png'
import course_3_thumbnail from './course_3.png'
import course_4_thumbnail from './course_4.png'
import star from './rating_star.svg'
import star_blank from './star_dull_icon.svg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'
import arrow_icon from './arrow_icon.svg'
import down_arrow_icon from './down_arrow_icon.svg'
import time_left_clock_icon from './time_left_clock_icon.svg'
import time_clock_icon from './time_clock_icon.svg'
import user_icon from './user_icon.svg'
import home_icon from './home_icon.svg'
import add_icon from './add_icon.svg'
import my_course_icon from './my_course_icon.svg'
import person_tick_icon from './person_tick_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import file_upload_icon from './file_upload_icon.svg'
import appointments_icon from './appointments_icon.svg'
import earning_icon from './earning_icon.svg'
import dropdown_icon from './dropdown_icon.svg'
import patients_icon from './patients_icon.svg'
import play_icon from './play_icon.svg'
import blue_tick_icon from './blue_tick_icon.svg'
import course_4 from './course_4.png'
import profile_img from './profile_img.png'
import profile_img2 from './profile_img2.png'
import profile_img3 from './profile_img3.png'
import lesson_icon from './lesson_icon.svg'


export const assets = {
    logo1,
    logo,
    search_icon,
    sketch,
    microsoft_logo,
    walmart_logo,
    accenture_logo,
    adobe_logo,
    paypal_logo,
    course_1_thumbnail,
    course_2_thumbnail,
    course_3_thumbnail,
    course_4_thumbnail,
    star,
    star_blank,
    profile_img_1,
    profile_img_2,
    profile_img_3,
    arrow_icon,
    dropdown_icon,
    cross_icon,
    upload_area,
    logo_dark,
    down_arrow_icon,
    time_left_clock_icon,
    time_clock_icon,
    user_icon,
    home_icon,
    add_icon,
    my_course_icon,
    person_tick_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    course_4,
    file_upload_icon,
    appointments_icon,
    earning_icon,
    patients_icon,
    profile_img,
    profile_img2,
    profile_img3,
    play_icon,
    blue_tick_icon,
    lesson_icon
}


export const dummyEducatorData = {
    "_id": "675ac1512100b91a6d9b8b24",
    "name": "GreatStack",
    "email": "user.greatstack@gmail.com",
    "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yclFkaDBOMmFqWnBoTTRBOXZUanZxVlo0aXYifQ",
    "createdAt": "2024-12-12T10:56:17.930Z",
    "updatedAt": "2024-12-12T10:56:17.930Z",
    "__v": 0
}

export const dummyTestimonial = [
    {
        name: 'Donald Jackman',
        role: 'SWE 1 @ Amazon',
        image: assets.profile_img_1,
        rating: 5,
        feedback: 'I\'ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.',
    },
    {
        name: 'Richard Nelson',
        role: 'SWE 2 @ Samsung',
        image: assets.profile_img_2,
        rating: 4,
        feedback: 'I\'ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.',
    },
    {
        name: 'James Washington',
        role: 'SWE 2 @ Google',
        image: assets.profile_img_3,
        rating: 4.5,
        feedback: 'I\'ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.',
    },
];

export const dummyDashboardData = {
    "totalEarnings": 707.38,
    "enrolledStudentsData": [
        {
            "courseTitle": "Introduction to JavaScript",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Great Stack",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        },
        {
            "courseTitle": "Advanced Python Programming",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Great Stack",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        },
        {
            "courseTitle": "Web Development Bootcamp",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Great Stack",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        },
        {
            "courseTitle": "Data Science with Python",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Great Stack",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        },
        {
            "courseTitle": "Cybersecurity Basics",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Great Stack",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        }
    ],
    "totalCourses": 8
}

export const dummyStudentEnrolled = [
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "GreatStack",
            "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
        },
        "courseTitle": "Introduction to JavaScript",
        "purchaseDate": "2024-12-20T08:39:55.509Z"
    },
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "GreatStack",
            "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
        },
        "courseTitle": "Introduction to JavaScript",
        "purchaseDate": "2024-12-20T08:59:49.964Z"
    },
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "GreatStack",
            "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
        },
        "courseTitle": "Advanced Python Programming",
        "purchaseDate": "2024-12-20T11:03:42.931Z"
    },
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "GreatStack",
            "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
        },
        "courseTitle": "Web Development Bootcamp",
        "purchaseDate": "2024-12-20T11:04:48.798Z"
    }
]

export const dummyCourses = [
    {
        "_id": "605c72efb3f1c2b1f8e4e1a1",
        "courseTitle": "Introduction to JavaScript",
        "courseDescription": "<h2>Learn the Basics of JavaScript</h2><p>JavaScript is a versatile programming language that powers the web. In this course, you will learn the fundamentals of JavaScript, including syntax, data types, and control structures.</p><p>This course is perfect for beginners who want to start their journey in web development. By the end of this course, you will be able to create interactive web pages and understand the core concepts of JavaScript.</p><ul><li>Understand the basics of programming</li><li>Learn how to manipulate the DOM</li><li>Create dynamic web applications</li></ul>",
        "coursePrice": 49.99,
        "isPublished": true,
        "discount": 20,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Getting Started with JavaScript",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "What is JavaScript?",
                        "lectureDuration": 16,
                        "lectureUrl": "https://youtu.be/CBWnBi-awSA",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Setting Up Your Environment",
                        "lectureDuration": 19,
                        "lectureUrl": "https://youtu.be/4l87c2aeB4I",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Variables and Data Types",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Understanding Variables",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/pZQeBJsGoDQ",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Data Types in JavaScript",
                        "lectureDuration": 10,
                        "lectureUrl": "https://youtu.be/ufHT2WEkkC4",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": {"id":"675ac1512100b91a6d9b8b24",
            "name":"jhon doe",},
        "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 5,
                "_id": "6773e37360cb0ab974342314"
            }
        ],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T04:47:44.701Z",
        "__v": 4,
        "courseThumbnail": "https://img.youtube.com/vi/CBWnBi-awSA/maxresdefault.jpg"
    },
    {
        "_id": "675ac1512100b91a6d9b8b24",
        "courseTitle": "Advanced Python Programming",
        "courseDescription": "<h2>Deep Dive into Python Programming</h2><p>This course is designed for those who have a basic understanding of Python and want to take their skills to the next level. You will explore advanced topics such as decorators, generators, and context managers.</p><p>By the end of this course, you will be able to write efficient and clean Python code, and understand how to leverage Python's powerful features for real-world applications.</p><ul><li>Master advanced data structures</li><li>Implement object-oriented programming concepts</li><li>Work with libraries and frameworks</li></ul>",
        "coursePrice": 79.99,
        "isPublished": true,
        "discount": 15,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Advanced Data Structures",
                "chapterContent": [
                    {
                        "lectureId": " lecture1",
                        "lectureTitle": "Lists and Tuples",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Dictionaries and Sets",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Object-Oriented Programming",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Classes and Objects",
                        "lectureDuration": 900,
                        "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Inheritance and Polymorphism",
                        "lectureDuration": 950,
                        "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 5,
                "_id": "6776369244daad0f313d81a9"
            }
        ],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T06:47:54.446Z",
        "__v": 3,
        "courseThumbnail": "https://img.youtube.com/vi/HdLIMoQkXFA/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1ae",
        "courseTitle": "Cybersecurity Basics",
        "courseDescription": "<h2>Protect Systems and Networks</h2><p>Cybersecurity is critical in today's digital age. This course introduces the fundamentals of cybersecurity, including threat analysis, ethical hacking, and secure programming practices.</p><p>By the end of this course, you will understand how to identify vulnerabilities and implement security measures effectively.</p><ul><li>Understand security protocols</li><li>Learn about encryption techniques</li><li>Conduct basic penetration testing</li></ul>",
        "coursePrice": 69.99,
        "isPublished": true,
        "discount": 15,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Introduction to Cybersecurity",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "What is Cybersecurity?",
                        "lectureDuration": 10,
                        "lectureUrl": "https://youtu.be/samplelink5",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Types of Cyber Threats",
                        "lectureDuration": 18,
                        "lectureUrl": "https://youtu.be/samplelink6",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Basic Security Practices",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Password Management",
                        "lectureDuration": 15,
                        "lectureUrl": "https://youtu.be/samplelink7",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Network Security Essentials",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/samplelink8",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [],
        "createdAt": "2024-12-27T11:30:00.000Z",
        "updatedAt": "2024-12-31T04:14:49.773Z",
        "__v": 2,
        "courseThumbnail": "https://img.youtube.com/vi/jZFaMEqEqEQ/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1a7",
        "courseTitle": "Web Development Bootcamp",
        "courseDescription": "<h2>Become a Full-Stack Web Developer</h2><p>This comprehensive bootcamp covers everything you need to know to become a full-stack web developer. From HTML and CSS to JavaScript and backend technologies, this course is designed to take you from beginner to job-ready.</p><p>Throughout the course, you will work on real-world projects, build a portfolio, and gain the skills necessary to succeed in the tech industry.</p><ul><li>Learn front-end and back-end development</li><li>Build responsive and dynamic web applications</li><li>Understand databases and server-side programming</li></ul>",
        "coursePrice": 99.99,
        "isPublished": true,
        "discount": 25,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "HTML & CSS Basics",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Introduction to HTML",
                        "lectureDuration": 600,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Styling with CSS",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "JavaScript Fundamentals",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "JavaScript Basics",
                        "lectureDuration": 800,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "DOM Manipulation",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2024-12-31T05:31:27.290Z",
        "__v": 2,
        "courseThumbnail": "https://img.youtube.com/vi/lpx2zFkapIk/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1ac",
        "courseTitle": "Cloud Computing Essentials",
        "courseDescription": "<h2>Master Cloud Fundamentals</h2><p>Learn the foundations of cloud computing and explore popular cloud platforms like AWS, Azure, and Google Cloud. This course is ideal for IT professionals and developers looking to transition to cloud-based solutions.</p><p>By the end of this course, you will understand cloud services, deployment models, and best practices for using cloud resources efficiently.</p><ul><li>Understand cloud architecture</li><li>Learn to work with AWS, Azure, and GCP</li><li>Explore serverless computing and storage solutions</li></ul>",
        "coursePrice": 69.99,
        "isPublished": true,
        "discount": 20,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Cloud Fundamentals",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "What is Cloud Computing?",
                        "lectureDuration": 600,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Cloud Service Models",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Exploring Cloud Platforms",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "AWS Basics",
                        "lectureDuration": 800,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Introduction to Google Cloud",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2024-12-31T05:32:55.357Z",
        "__v": 1,
        "courseThumbnail": "https://img.youtube.com/vi/0yboGn8errU/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1ad",
        "courseTitle": "Data Science with Python",
        "courseDescription": "<h2>Start Your Data Science Journey</h2><p>Data Science is one of the most in-demand fields in the world. This course teaches you the essentials of data analysis, visualization, and machine learning using Python. Learn libraries like Pandas, NumPy, Matplotlib, and Scikit-learn.</p><p>By the end of this course, you will be equipped to work on real-world data projects and gain insights from data.</p><ul><li>Data cleaning and preprocessing</li><li>Exploratory Data Analysis (EDA)</li><li>Build predictive models</li></ul>",
        "coursePrice": 89.99,
        "isPublished": true,
        "discount": 20,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Python for Data Science",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Python Basics",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink1",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Working with NumPy",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink2",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Data Visualization",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Introduction to Matplotlib",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/samplelink3",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Advanced Visualizations with Seaborn",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink4",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 5,
                "_id": "6773acf160cb0ab974342248"
            }
        ],
        "createdAt": "2024-12-27T10:00:00.000Z",
        "updatedAt": "2024-12-31T09:57:48.992Z",
        "__v": 3,
        "courseThumbnail": "https://img.youtube.com/vi/E4znbZgUWzA/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1aa",
        "courseTitle": "Data Science and Machine Learning",
        "courseDescription": "<h2>Unlock the Power of Data</h2><p>This course provides a comprehensive introduction to data science and machine learning. You will learn how to analyze data, build predictive models, and apply machine learning algorithms to real-world problems.</p><p>By the end of this course, you will have a solid understanding of data manipulation, visualization, and machine learning techniques, enabling you to make data-driven decisions.</p><ul><li>Understand data analysis and visualization</li><li>Learn machine learning algorithms and their applications</li><li>Work with popular data science libraries like Pandas and Scikit-Learn</li></ul>",
        "coursePrice": 89.99,
        "isPublished": true,
        "discount": 30,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Introduction to Data Science",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "What is Data Science?",
                        "lectureDuration": 600,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Data Collection and Cleaning",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Machine Learning Basics",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Supervised vs Unsupervised Learning",
                        "lectureDuration": 800,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Building Your First Model",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T06:53:59.753Z",
        "__v": 1,
        "courseThumbnail": "https://img.youtube.com/vi/631lFJdQvoo/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1ab",
        "courseTitle": "Introduction to Cybersecurity",
        "courseDescription": "<h2>Protect the Digital World</h2><p>This course covers the essentials of cybersecurity, including understanding threats, vulnerabilities, and how to secure systems against cyber-attacks. Ideal for beginners, this course will prepare you for a career in cybersecurity.</p><p>By the end of this course, you will be able to identify and mitigate risks, implement security best practices, and understand the fundamentals of encryption and network security.</p><ul><li>Understand common cybersecurity threats</li><li>Learn about encryption and secure communication</li><li>Explore tools for penetration testing</li></ul>",
        "coursePrice": 59.99,
        "isPublished": true,
        "discount": 15,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Cybersecurity Basics",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Introduction to Cybersecurity",
                        "lectureDuration": 700,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Understanding Cyber Threats",
                        "lectureDuration": 750,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Network Security Fundamentals",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Securing Networks",
                        "lectureDuration": 800,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Firewalls and VPNs",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T06:56:13.208Z",
        "__v": 1,
    "courseThumbnail": "https://img.youtube.com/vi/WbV3zRgpw_E/maxresdefault.jpg"
    },
    

    {
    "_id": "605c72efb3f1c2b1f8e4e1b1",
    "courseTitle": "React.js - The Complete Guide 2025",
    "courseDescription": "<h2>Master Modern React with Hooks & Next.js</h2><p>Learn React from scratch and build production-ready applications. This course covers everything: Components, State, Hooks, Context API, Redux, Next.js 14, App Router, Server Components, and deployment.</p><p>Includes 5 real-world projects including a full-stack e-commerce app.</p><ul><li>Master React Hooks & Context</li><li>Build with Next.js 14 (App Router)</li><li>State Management with Redux Toolkit</li></ul>",
    "coursePrice": 119.99,
    "isPublished": true,
    "discount": 35,
    "courseContent": [
        {
            "chapterId": "chapter1",
            "chapterOrder": 1,
            "chapterTitle": "React Fundamentals",
            "chapterContent": [
                {
                    "lectureId": "lecture1",
                    "lectureTitle": "Why React? Component-Based Architecture",
                    "lectureDuration": 18,
                    "lectureUrl": "https://youtu.be/SqcY0GlETPk",
                    "isPreviewFree": true,
                    "lectureOrder": 1
                },
                {
                    "lectureId": "lecture2",
                    "lectureTitle": "Setting Up the Development Environment",
                    "lectureDuration": 12,
                    "lectureUrl": "https://youtu.be/SqcY0GlETPk",
                    "isPreviewFree": false,
                    "lectureOrder": 2
                }
            ]
        },
        {
            "chapterId": "chapter2",
            "chapterOrder": 2,
            "chapterTitle": "Hooks in Depth",
            "chapterContent": [
                {
                    "lectureId": "lecture3",
                    "lectureTitle": "useState & useEffect Deep Dive",
                    "lectureDuration": 28,
                    "lectureUrl": "https://youtu.be/SqcY0GlETPk",
                    "isPreviewFree": true,
                    "lectureOrder": 1
                },
                {
                    "lectureId": "lecture4",
                    "lectureTitle": "Custom Hooks & Performance",
                    "lectureDuration": 32,
                    "lectureUrl": "https://youtu.be/SqcY0GlETPk",
                    "isPreviewFree": false,
                    "lectureOrder": 2
                }
            ]
        }
    ],
    "educator": {"id": "675ac1512100b91a6d9b8b25", "name": "Sarah Mitchell"},
    "enrolledStudents": ["user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V", "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"],
    "courseRatings": [],
    "createdAt": "2025-01-15T10:22:11.123Z",
    "updatedAt": "2025-02-28T14:30:22.890Z",
    "__v": 5,
    "courseThumbnail": "https://img.youtube.com/vi/SqcY0GlETPk/maxresdefault.jpg"
},
{
    "_id": "605c72efb3f1c2b1f8e4e1b2",
    "courseTitle": "Node.js & Express - Build REST APIs",
    "courseDescription": "<h2>Backend Development with Node.js</h2><p>Build fast, scalable server-side applications using Node.js and Express. Learn authentication (JWT), MongoDB/Mongoose, file uploads, error handling, and deployment.</p><p>Build a complete Blog API + Social Media backend from scratch.</p><ul><li>Express middleware & routing</li><li>JWT & OAuth authentication</li><li>MongoDB + Mongoose ODM</li></ul>",
    "coursePrice": 94.99,
    "isPublished": true,
    "discount": 40,
    "courseContent": [
        {
            "chapterId": "chapter1",
            "chapterOrder": 1,
            "chapterTitle": "Node.js Fundamentals",
            "chapterContent": [
                {
                    "lectureId": "lecture1",
                    "lectureTitle": "The Node.js Runtime Explained",
                    "lectureDuration": 22,
                    "lectureUrl": "https://youtu.be/TlB_eWDSMt4",
                    "isPreviewFree": true,
                    "lectureOrder": 1
                },
                {
                    "lectureId": "lecture2",
                    "lectureTitle": "NPM & Project Structure",
                    "lectureDuration": 15,
                    "lectureUrl": "https://youtu.be/TlB_eWDSMt4",
                    "isPreviewFree": false,
                    "lectureOrder": 2
                }
            ]
        }
    ],
    "educator": {"id": "675ac1512100b91a6d9b8b26", "name": "Alex Rivera"},
    "enrolledStudents": [],
    "courseRatings": [],
    "createdAt": "2025-02-01T09:15:33.445Z",
    "updatedAt": "2025-03-01T11:20:10.112Z",
    "__v": 2,
    "courseThumbnail": "https://img.youtube.com/vi/TlB_eWDSMt4/maxresdefault.jpg"
},
{
    "_id": "605c72efb3f1c2b1f8e4e1b3",
    "courseTitle": "UI/UX Design Masterclass with Figma",
    "courseDescription": "<h2>Design Beautiful & User-Friendly Interfaces</h2><p>Go from beginner to pro UI/UX designer using Figma. Learn design principles, wireframing, prototyping, user research, and how to create design systems.</p><p>Portfolio-ready projects included.</p><ul><li>User Research & Personas</li><li>Wireframing & Prototyping</li><li>Design Systems & Component Libraries</li></ul>",
    "coursePrice": 79.99,
    "isPublished": true,
    "discount": 25,
    "courseContent": [
        {
            "chapterId": "chapter1",
            "chapterOrder": 1,
            "chapterTitle": "Foundations of Great Design",
            "chapterContent": [
                {
                    "lectureId": "lecture1",
                    "lectureTitle": "Principles of Design",
                    "lectureDuration": 25,
                    "lectureUrl": "https://youtu.be/ZmP_3D0ECew",
                    "isPreviewFree": true,
                    "lectureOrder": 1
                },
                {
                    "lectureId": "lecture2",
                    "lectureTitle": "Color Theory & Typography",
                    "lectureDuration": 30,
                    "lectureUrl": "https://youtu.be/ZmP_3D0ECew",
                    "isPreviewFree": false,
                    "lectureOrder": 2
                }
            ]
        }
    ],
    "educator": {"id": "675ac1512100b91a6d9b8b27", "name": "Emma Chen"},
    "enrolledStudents": ["user_2qjlgkAqIMpiR2flWIRzvWKtE0w"],
    "courseRatings": [{ "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w", "rating": 5 }],
    "createdAt": "2025-01-20T14:44:22.001Z",
    "updatedAt": "2025-03-02T08:12:55.667Z",
    "__v": 4,
    "courseThumbnail": "https://img.youtube.com/vi/ZmP_3D0ECew/maxresdefault.jpg"
},
{
    "_id": "605c72efb3f1c2b1f8e4e1b4",
    "courseTitle": "Docker & Kubernetes - Zero to Hero",
    "courseDescription": "<h2>Containerization and Orchestration</h2><p>Master Docker and Kubernetes from scratch. Learn to containerize apps, write Dockerfiles, manage multi-container apps with Docker Compose, and deploy to Kubernetes clusters.</p><ul><li>Docker Deep Dive</li><li>Kubernetes Architecture</li><li>CI/CD with GitHub Actions</li></ul>",
    "coursePrice": 109.99,
    "isPublished": true,
    "discount": 30,
    "courseContent": [
        {
            "chapterId": "chapter1",
            "chapterOrder": 1,
            "chapterTitle": "Docker Essentials",
            "chapterContent": [
                {
                    "lectureId": "lecture1",
                    "lectureTitle": "Containers vs Virtual Machines",
                    "lectureDuration": 20,
                    "lectureUrl": "https://youtu.be/8fi7uSYlOdc",
                    "isPreviewFree": true,
                    "lectureOrder": 1
                }
            ]
        }
    ],
    "educator": {"id": "675ac1512100b91a6d9b8b28", "name": "Michael Torres"},
    "enrolledStudents": [],
    "courseRatings": [],
    "createdAt": "2025-02-10T11:11:11.111Z",
    "updatedAt": "2025-02-25T16:40:33.890Z",
    "__v": 1,
    "courseThumbnail": "https://img.youtube.com/vi/8fi7uSYlOdc/maxresdefault.jpg"
},
{
    "_id": "605c72efb3f1c2b1f8e4e1b5",
    "courseTitle": "Graphic Design Bootcamp",
    "courseDescription": "<h2>From Beginner to Professional Designer</h2><p>Learn Adobe Photoshop, Illustrator, and InDesign. Master logo design, branding, poster design, and digital illustration.</p><p>Build a complete professional portfolio.</p><ul><li>Logo & Brand Identity</li><li>Poster & Flyer Design</li><li>Social Media Graphics</li></ul>",
    "coursePrice": 69.99,
    "isPublished": true,
    "discount": 20,
    "courseContent": [
        {
            "chapterId": "chapter1",
            "chapterOrder": 1,
            "chapterTitle": "Photoshop Mastery",
            "chapterContent": [
                {
                    "lectureId": "lecture1",
                    "lectureTitle": "Photoshop Interface & Tools",
                    "lectureDuration": 35,
                    "lectureUrl": "https://youtu.be/0pThn8wOr5k",
                    "isPreviewFree": true,
                    "lectureOrder": 1
                }
            ]
        }
    ],
    "educator": {"id": "675ac1512100b91a6d9b8b27", "name": "Emma Chen"},
    "enrolledStudents": ["user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V"],
    "courseRatings": [],
    "createdAt": "2025-01-05T07:30:45.223Z",
    "updatedAt": "2025-02-20T09:55:12.445Z",
    "__v": 3,
    "courseThumbnail": "https://img.youtube.com/vi/0pThn8wOr5k/maxresdefault.jpg"
},
{
    "_id": "605c72efb3f1c2b1f8e4e1b6",
    "courseTitle": "Flutter & Dart - Build iOS & Android Apps",
    "courseDescription": "<h2>Cross-Platform Mobile Development</h2><p>Build beautiful native apps for iOS and Android using Flutter and Dart. Learn widgets, state management (Provider, Riverpod), Firebase integration, and app deployment.</p>",
    "coursePrice": 99.99,
    "isPublished": true,
    "discount": 25,
    "courseContent": [
        {
            "chapterId": "chapter1",
            "chapterOrder": 1,
            "chapterTitle": "Dart Programming Language",
            "chapterContent": [
                {
                    "lectureId": "lecture1",
                    "lectureTitle": "Dart Syntax & Features",
                    "lectureDuration": 28,
                    "lectureUrl": "https://youtu.be/Ej-PcrGr5PA",
                    "isPreviewFree": true,
                    "lectureOrder": 1
                }
            ]
        }
    ],
    "educator": {"id": "675ac1512100b91a6d9b8b29", "name": "Priya Sharma"},
    "enrolledStudents": [],
    "courseRatings": [],
    "createdAt": "2025-02-18T13:20:10.556Z",
    "updatedAt": "2025-03-01T10:15:44.778Z",
    "__v": 1,
    "courseThumbnail": "https://img.youtube.com/vi/Ej-PcrGr5PA/maxresdefault.jpg"
},
{
    "_id": "605c72efb3f1c2b1f8e4e1b7",
    "courseTitle": "Ethical Hacking & Penetration Testing",
    "courseDescription": "<h2>Learn to Think Like a Hacker</h2><p>Master ethical hacking tools and techniques: Kali Linux, Metasploit, Burp Suite, Nmap, Wireshark. Includes real lab environments and CTF challenges.</p>",
    "coursePrice": 129.99,
    "isPublished": true,
    "discount": 15,
    "courseContent": [
        {
            "chapterId": "chapter1",
            "chapterOrder": 1,
            "chapterTitle": "Setting Up Your Lab",
            "chapterContent": [
                {
                    "lectureId": "lecture1",
                    "lectureTitle": "Installing Kali Linux & Virtual Machines",
                    "lectureDuration": 30,
                    "lectureUrl": "https://youtu.be/inN8f1gC3Lw",
                    "isPreviewFree": true,
                    "lectureOrder": 1
                }
            ]
        }
    ],
    "educator": {"id": "675ac1512100b91a6d9b8b30", "name": "Omar Khalil"},
    "enrolledStudents": [],
    "courseRatings": [],
    "createdAt": "2025-01-25T16:44:12.890Z",
    "updatedAt": "2025-02-28T12:33:21.556Z",
    "__v": 2,
    "courseThumbnail": "https://img.youtube.com/vi/inN8f1gC3Lw/maxresdefault.jpg"
},
{
    "_id": "605c72efb3f1c2b1f8e4e1b8",
    "courseTitle": "AWS Certified Solutions Architect",
    "courseDescription": "<h2>Pass the AWS SAA-C03 Exam</h2><p>Complete preparation course for the AWS Certified Solutions Architect – Associate exam. Covers all services, best practices, and includes hands-on labs.</p>",
    "coursePrice": 149.99,
    "isPublished": true,
    "discount": 40,
    "courseContent": [
        {
            "chapterId": "chapter1",
            "chapterOrder": 1,
            "chapterTitle": "AWS Global Infrastructure",
            "chapterContent": [
                {
                    "lectureId": "lecture1",
                    "lectureTitle": "Regions, AZs, and Edge Locations",
                    "lectureDuration": 22,
                    "lectureUrl": "https://youtu.be/3hLmDsXKzN4",
                    "isPreviewFree": true,
                    "lectureOrder": 1
                }
            ]
        }
    ],
    "educator": {"id": "675ac1512100b91a6d9b8b28", "name": "Michael Torres"},
    "enrolledStudents": ["user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V"],
    "courseRatings": [{ "userId": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V", "rating": 5 }],
    "createdAt": "2024-12-10T08:00:00.000Z",
    "updatedAt": "2025-03-03T09:44:11.223Z",
    "__v": 7,
    "courseThumbnail": "https://img.youtube.com/vi/3hLmDsXKzN4/maxresdefault.jpg"
},
{
    "_id": "605c72efb3f1c2b1f8e4e1b9",
    "courseTitle": "Digital Marketing Mastery 2025",
    "courseDescription": "<h2>Grow Any Business Online</h2><p>Master SEO, Google Ads, Facebook Ads, Email Marketing, Content Strategy, Analytics, and Social Media Marketing. Includes real campaign setup.</p>",
    "coursePrice": 89.99,
    "isPublished": true,
    "discount": 50,
    "courseContent": [
        {
            "chapterId": "chapter1",
            "chapterOrder": 1,
            "chapterTitle": "Digital Marketing Fundamentals",
            "chapterContent": [
                {
                    "lectureId": "lecture1",
                    "lectureTitle": "The Marketing Funnel Explained",
                    "lectureDuration": 25,
                    "lectureUrl": "https://youtu.be/0Q1b8sNRpdM",
                    "isPreviewFree": true,
                    "lectureOrder": 1
                }
            ]
        }
    ],
    "educator": {"id": "675ac1512100b91a6d9b8b31", "name": "Laura Benson"},
    "enrolledStudents": ["user_2qjlgkAqIMpiR2flWIRzvWKtE0w"],
    "courseRatings": [],
    "createdAt": "2025-01-08T11:22:33.445Z",
    "updatedAt": "2025-02-15T13:55:22.778Z",
    "__v": 3,
    "courseThumbnail": "https://img.youtube.com/vi/0Q1b8sNRpdM/maxresdefault.jpg"
},
{
    "_id": "605c72efb3f1c2b1f8e4e1ba",
    "courseTitle": "TypeScript for Beginners to Advanced",
    "courseDescription": "<h2>Type-Safe JavaScript Development</h2><p>Learn TypeScript from scratch: types, interfaces, generics, decorators, integration with React/Node, and advanced patterns.</p>",
    "coursePrice": 74.99,
    "isPublished": true,
    "discount": 30,
    "courseContent": [
        {
            "chapterId": "chapter1",
            "chapterOrder": 1,
            "chapterTitle": "TypeScript Basics",
            "chapterContent": [
                {
                    "lectureId": "lecture1",
                    "lectureTitle": "Why TypeScript? Setup & Configuration",
                    "lectureDuration": 20,
                    "lectureUrl": "https://youtu.be/zQnBQ4tB3ZA",
                    "isPreviewFree": true,
                    "lectureOrder": 1
                }
            ]
        }
    ],
    "educator": {"id": "675ac1512100b91a6d9b8b25", "name": "Sarah Mitchell"},
    "enrolledStudents": [],
    "courseRatings": [],
    "createdAt": "2025-02-05T15:30:22.890Z",
    "updatedAt": "2025-03-01T17:22:11.556Z",
    "__v": 2,
    "courseThumbnail": "https://img.youtube.com/vi/zQnBQ4tB3ZA/maxresdefault.jpg"
}
]
