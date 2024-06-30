import './about.css';
import CourseCard from '../courses/components/course-card';
import '../courses/courses.css';
import { courses } from '../courses/mock';
import { Link, useLocation, useMatch } from "react-router-dom";




function  AboutPage() {
  const location = useLocation();
    console.log(location);

  const getIsActive = (href) => {
    return location.pathname.includes(href);
  }
  return (<>
    <div className="about-page">
      <div className="about-page_content">
      <div className="about-page_container">
      <h1>Узнавай больше в сфере ИБ</h1> 
      <p className="explane">Будь всегда в курсе последних инноваций и технологий в сфере ИБ и применяй их на практике с бесплатными курсами</p>
      </div>
      </div>
    </div>

    <div className="content-page">
      <div className="content-page_content">
      <div className="content-page_container">
      <h1>Получи актуальную информацию в сфере ИБ</h1> 
      <p className="explane-page">Курсы CoonProtect — это бесплатные образовательные программы по различным темам информационной безопасности: социальная инженерия, информационная гигиена, кибербезопасность и другим современным направлениям. 
      Обучение подойдёт всем, кто хочет повысить свои знания в этой области. После регистрации доступны все курсы с онлайн лекциями, заданиями и обратной связью.</p>
      </div>
      </div>
    </div>

    
    <div className="courses-page-container">
            <div className="courses-page__title">
            <h1>Каталог курсов</h1>
            </div>


            <div className='courses-page-container_'>
              <div className='courses-page-container_'>
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
                      </div>
                      ))}
              </div>
            </div>
    </div>
  

    </>
  );
}

export default  AboutPage;
