import История from './История'
import Премьера from './Премьера'
import Биография from './Биография'

export type Article = {
	url: string
	header: string
	content: React.ReactNode
	description: string
}

const articles: Article[] = [Премьера, История, Биография]

export default articles
