import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'
import { Button } from '~/shared/UI/Button'
import { Section } from '~/shared/UI/Section'
import { ContactForm } from '~/widgets/ContactForm'
import Contacts from '~/widgets/Contacts/ui/Contacts'
import { Courses } from '~/widgets/Courses'
import { MainPhotoCollage } from '~/widgets/MainPhotoCollage'
import { Projects } from '~/widgets/Projects'
import { Skills } from '~/widgets/Skills'

const AllSections = ({ mode }) => {
	const { t } = useTranslation()
	return (
		<>
			<Section size="big" mode={mode} id="about">
				<div className="section-about-text-block">
					<h1>{t('main-header')}</h1>
					<p>
						{t('main-p1')}
						<br />
						<br />
						{t('main-p2')}
					</p>
					<div className="button-container">
						<Link
							hashSpy={true}
							smooth={true}
							offset={-50}
							duration={500}
							to="contact"
						>
							<Button color="pink">{t('contact-btn')}</Button>
						</Link>
						<a
							href="Anastasia-Zhuravleva-CV-eng.pdf"
							target="_blank"
							download="Anastasia-Zhuravleva-CV-eng.pdf"
						>
							<Button color="green">{t('cv-btn')}</Button>
						</a>
					</div>
				</div>
				<MainPhotoCollage />
			</Section>
			<Section size="small" mode={mode} title={t('title-skills')}>
				<div>
					<Skills />
				</div>
			</Section>
			<Section mode={mode} title={t('title-projects')} id="projects">
				<Projects mode={mode} />
			</Section>
			<Section mode={mode} title={t('title-courses')} size="small">
				<Courses mode={mode} />
			</Section>
			<Section mode={mode} title={t('title-contact')} id="contact">
				<div className="section-contacts">
					<div className="section-contact-links">
						<p>{t('contact-p')}</p>
						<div className="button-container">
							<a
								href="Anastasia-Zhuravleva-CV-eng.pdf"
								target="_blank"
								download="Anastasia-Zhuravleva-CV-eng.pdf"
							>
								<Button color="green">CV ENG</Button>
							</a>
							<a
								href="Anastasia-Zhuravleva-CV-RUS.pdf"
								target="_blank"
								download="Anastasia-Zhuravleva-CV-RUS.pdf"
							>
								<Button color="pink">CV RUS</Button>
							</a>
						</div>
						<Contacts />
					</div>
					<ContactForm mode={mode} />
				</div>
			</Section>
		</>
	)
}

export default AllSections
