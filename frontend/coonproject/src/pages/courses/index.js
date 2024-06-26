import CourseCard from './components/course-card';
import { CourseProgressCard } from './components/CourseProgressCard';
import './courses.css';
import { courses } from './mock';
import { Link, useLocation, useMatch } from "react-router-dom";

const tabs = [
  {
    href: 'courses',
    label: 'Мои курсы',
  },
  {
    href: 'i_don_know',
    label: 'Мои достижения',
  },
]

function CoursesPage() {
    const location = useLocation();
    console.log(location);

    const getIsActive = (href) => {
      return location.pathname.includes(href);
    }
    return (
        <div className="courses-page">
            <div className="courses-page__tabs">
                {tabs.map((tab) => (
                    <div className={["courses-page__tab", getIsActive(tab.href) ? "courses-page__tab-active" : ''].join(' ')}>
                       <Link to={tab.href}>{tab.label}</Link>
                    </div>
                ))}
            </div>
            {courses.map(course => (
                <div className="courses-page-card__row" key={course.id}>
                    <CourseCard
                      title={course.title}
                      description={course.description}
                      progress={course.progress}
                      inProccess={course.progress < 100}
                      disabled={course.disabled}
                      type={course.type}
                      visibility={course.visibility}
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
