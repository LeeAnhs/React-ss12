import React from 'react';
import '../styles/PTIT_CNTT1_Session12_Bai01_ListCourse.css';

const ListCourse: React.FC = () => {
  const courses = [
    { id: 1, name: 'HTML' },
    { id: 2, name: 'CSS' },
    { id: 3, name: 'JavaScript' },
    { id: 4, name: 'ReactJS' }
  ];

  return (
    <div className="course-container">
      <h1 className="course-title">Danh sách khóa học(Bài 1)</h1>
      <ol className="course-list">
        {courses.map(course => (
          <li key={course.id} className="course-item">
            {course.name}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ListCourse;