import CourseCard from './components/course-card';
import { CourseProgressCard } from './components/CourseProgressCard';
import './courses.css';
import { courses } from './mock';

function CoursesPage() {
    return (
      <div className="courses-page">
          {courses.map(course => (
            <div className="courses-page-card__row" key={course.id}>
                <CourseCard
                  title={course.title}
                  description={course.description}
                  progress={course.progress}
                  inProccess={course.progress < 100}
                  disabled={course.disabled}
                  type={course.type}
                  onClick={() => console.log('click')}
                />
                <CourseProgressCard
                  title='Основные показатели'
                  akHours={course.akHours}
                  lessons={course.lessons}
                  modules={course.modules}
                />
            </div>
          ))}
          <div className="courses-page-card__row">
              <CourseCard
                onAddCourse={() => console.log('add course')}
                isTemplate
                templateText='Добавить курс'
              />
              <CourseProgressCard
                isTemplate
                templateText='У вас больше нет курсов, если хотите пройти еще один, выберете из каталога'
              />
          </div>
      </div>
    );
}

export default CoursesPage;
