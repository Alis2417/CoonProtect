import { Flask } from "../Icons";
import './course-progress-card.css'

export function CourseProgressCard (props) {
	const { modules, title, lessons, akHours, isTemplate, templateText } = props
	const time = `${lessons} занятий / ${akHours} ак. часов`
	if (isTemplate) {
		return (
			<div className='course-progress-card course-progress-card__template'>
				<Flask />
				<span>{templateText}</span>
			</div>
		)
	}

	return (
		<div className='course-progress-card'>
			<div className='course-progress-card__container'>
				<div className='course-progress-card__title'>{title}</div>
				<div className='course-progress-card__time'>{time}</div>
				<div className="course-progress-card__modules">
					{modules.map(module => (
						<div className='course-progress-card__module' key={module.id}>
							<div className={[
									"course-progress-card__module-progress",
									module.progress === 100 ? 'course-progress-card__module-progress_completed' : '',
									(module.progress > 0 && module.progress < 100) ? 'course-progress-card__module-progress_progressing' : '',
								].join(' ')}
							>{module.progress}%</div>
							<div className='course-progress-card__module-name'>{module.name}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
