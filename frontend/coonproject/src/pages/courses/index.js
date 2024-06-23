import CourseCard from './components/course-card';

function CoursesPage() {
    return (
        <div className="courses-page">
            <CourseCard
                title="Пример курса"
                text="Узнай о том, какими способами могут обмануть мошенники и как этому противостоять, а также прокачай свои навыки в финансовой грамотности"
                percent={50}
                inProccess={true}
                disable={false}
            />
            
        </div>
    );
}

export default CoursesPage;
