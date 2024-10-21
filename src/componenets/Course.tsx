import React from 'react';
import { Link } from 'react-router-dom';

interface Course {
  id: number;
  title: string;
  description: string;
 
}

const courses: Course[] = [
  { id: 1, title: 'JAVA', description: 'intermediate' },
  { id: 2, title: 'JavaScript', description: 'basic' },
  { id: 3, title: 'TypeScript ', description: 'intermediate' },
];

const Courses: React.FC = () => {
  return (
    <main>
      <section>
        <h1>Technologies worked with</h1>
        <ul>
          {courses.map(course => (
            <li key={course.id}>
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Courses;
