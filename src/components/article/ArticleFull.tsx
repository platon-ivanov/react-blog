import React, { Component } from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import { Article } from '../../articles'
import PropTypes from 'prop-types'

type Props = {
	article: {
		header: string
		content: React.ReactNode
	} | null
	changeArticle: Function
}

/**
 * A full article with its title and content.
 * @component
 * @subcategory Article
 */
const ArticleFull = ({ article, changeArticle }: Props) => {
	const isRendered = article !== null

	return (
		<article
			className={`${
				isRendered ? '' : 'hidden'
			} animate-appear-top bg-white-transparent-less p-4 rounded shadow-2xl relative article`}
		>
			<div className='flex'>
				<button
					onClick={() => changeArticle()}
					className='group hover:opacity-100 relative flex items-center gap-1 transition-opacity opacity-50'
				>
					<FaAngleLeft className='bg-white-transparent rounded-3xl group-hover:bg-white-transparent-less text-2xl transition-colors' />
					<span className='before:absolute before:-bottom-1 before:left-0 before:w-full before:bg-text before:h-1 before:rounded-3xl before:group-hover:scale-x-100 before:origin-left before:scale-x-0 before:transition-transform relative text-xl'>
						Вернуться
					</span>
				</button>
			</div>
			<h3 className='my-4 text-4xl font-bold'>{article?.header}</h3>

			{article?.content}
		</article>
	)
}

export default ArticleFull
