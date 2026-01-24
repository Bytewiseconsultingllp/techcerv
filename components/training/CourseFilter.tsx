'use client';

import { useState } from 'react';
import Image from 'next/image';
import { courses } from '@/data/courses';
import styles from './CourseFilter.module.css';

interface Category {
  id: string;
  label: string;
}

interface Subcategory {
  id: string;
  label: string;
}

export default function CourseFilter() {
  const [activeCategory, setActiveCategory] = useState('aws');
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);

  const categories: Category[] = [
    { id: 'aws', label: 'AWS' },
    { id: 'gcp', label: 'Google Cloud' },
    { id: 'm365', label: 'Microsoft 365' },
    { id: 'ai', label: 'Artificial Intelligence' },
  ];

  const subcategories: Record<string, Subcategory[]> = {
    aws: [
      { id: 'aBeginner', label: 'Beginner' },
      { id: 'aAssociate', label: 'Associate Level' },
      { id: 'aProfessional', label: 'Professional Level' },
      { id: 'aSpecialty', label: 'Specialty Certifications' },
    ],
    gcp: [
      { id: 'gFoundational', label: 'Foundational Level' },
      { id: 'gAssociate', label: 'Associate Level' },
      { id: 'gProfessional', label: 'Professional Level' },
    ],
    m365: [
      { id: 'mFundamentals', label: 'Fundamentals' },
      { id: 'mAssociate', label: 'Associate Level' },
      { id: 'mExpert', label: 'Expert Level' },
      { id: 'mSpecialty', label: 'Specialty Certifications' },
      { id: 'mCopilot', label: 'Copilot & AI' },
    ],
    ai: [
      { id: 'aiFoundational', label: 'Foundational' },
      { id: 'aiIntermediate', label: 'Intermediate Level' },
      { id: 'aiAdvanced', label: 'Advanced Level' },
      { id: 'aiRole', label: 'Role-Based Certifications' },
    ],
  };

  const filteredCourses = courses.filter(
    (course) =>
      course.category === activeCategory &&
      (!activeSubcategory || course.subcategory === activeSubcategory)
  );

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    setActiveSubcategory(null);
  };

  const handleSubcategoryClick = (subcategoryId: string) => {
    setActiveSubcategory(subcategoryId);
  };

  return (
    <section className={styles.card1} id="courses">
      <div className={styles.sectionTitle}>
        <p className={styles.subtitle}>Find the Course Right for Your Goals</p>
        <h2 className={styles.title}>Explore From Over 400+ Courses</h2>
      </div>

      <div className={styles.container}>
        {/* Sidebar */}
        <div className={styles.sidebar}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.categoryBtn} ${activeCategory === cat.id ? styles.active : ''}`}
              onClick={() => handleCategoryClick(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className={styles.content}>
          {/* Tabs */}
          <div className={styles.tabs}>
            {subcategories[activeCategory]?.map((sub) => (
              <button
                key={sub.id}
                className={`${styles.tabBtn} ${activeSubcategory === sub.id ? styles.active : ''}`}
                onClick={() => handleSubcategoryClick(sub.id)}
              >
                {sub.label}
              </button>
            ))}
          </div>

          {/* Course Cards */}
          <div className="row g-3">
            {filteredCourses.map((course) => (
              <div key={course.id} className="col-md-4">
                <div className="card shadow-lg border-0 rounded-3 overflow-hidden">
                  <Image 
                    src={course.image} 
                    alt={course.title}
                    width={400}
                    height={250}
                    className="card-img-top"
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <div className="card-body">
                    <h6 className={styles.cardTitle}>{course.title}</h6>
                    <p className={styles.par12}>
                      <i className="fa-solid fa-user me-1"></i>
                      {course.enrolled} Enrolled
                    </p>
                    <p className={styles.par12}>
                      <i className="fa-solid fa-clock me-1"></i>
                      {course.duration}
                    </p>
                    <h6 className={styles.par13}>{course.price}</h6>
                    <button className={styles.explorebtn}>
                      Explore Now <i className="fa-solid fa-arrow-right ms-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
