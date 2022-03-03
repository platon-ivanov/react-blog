import ArticlePictureFull from '../components/article/ArticlePictureFull'
import Video from '../components/article/Video'
import Фото from './images/Фото.jpg'
import МинутаМолчания from './images/Минута молчания.jpg'
import Участники from './images/Участники.jpg'
import Конференция from './images/Конференция.jpg'

export default {
	url: 'prezentatsia',
	header: 'Презентация',
	description: 'Первая презентация книги «Крутая ступень»',
	content: (
		<>
			<p>
				25-го февраля 2022 состоялась первая презентация книги Иосифа Кассиля
				«Крутая ступень».
			</p>
			<p>
				Статью “Внуки великих” можно почитать по{' '}
				<a className='link' href='http://imc-i.ru/news/25-02-2022'>
					данной ссылке
				</a>
				.
			</p>
			<p>Посмотреть запись презентации можно здесь:</p>
			<Video src='https://youtu.be/N9suFdmwazU' />
			<ArticlePictureFull image={Конференция} description='Конференция' />
			<ArticlePictureFull image={Фото} />
			<ArticlePictureFull
				image={МинутаМолчания}
				description='Минута молчания'
			/>
			<ArticlePictureFull
				image={Участники}
				description='Участники конференции'
			/>
		</>
	),
}
