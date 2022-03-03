import * as React from 'react'
import ArticleSmall from '../article/ArticleSmall'
import ArticleFull from '../article/ArticleFull'

type Props = {
	currentArticle: string | null
	changeArticle: Function
	articles: {
		header: string
		content: React.ReactNode
		url: string
		description: string
		cover?: string | null | undefined
	}[]
}

/**
 * Main body displaying articles in grid or full view.
 * @component
 * @subcategory General
 */
const Main = ({ currentArticle, changeArticle, articles }: Props) => {
	const article =
		articles.find(
			(article) => '/' + article.url === window.location.pathname
		) || null

	return (
		<main className='bg-tertiary w-full p-4 mx-auto overflow-hidden'>
			<nav
				className={`${
					currentArticle ? 'hidden' : ''
				} sm:grid-cols-2 basis-full shrink-0 grow h-max  grid gap-4`}
			>
				{articles.map(({ header, url, description, cover }) => (
					<ArticleSmall
						article={{ header, url, description, cover }}
						changeArticle={() => changeArticle(url)}
						key={header}
					/>
				))}
			</nav>
			<section className=''>
				<ArticleFull
					article={article}
					changeArticle={() => changeArticle('')}
				/>
			</section>
		</main>
	)
}

export default Main
