import * as React from 'react'

type Props = {
	changeArticle: Function
	article: {
		header: string
		url: string
		description: string
		cover: string | null | undefined
	}
}

/**
 * Article preview in grid.
 * @component
 * @subcategory Article
 */
const ArticleSmall = ({
	article: { header, url, description, cover },
	changeArticle,
}: Props) => {
	return (
		<article
			className='animate-appear-top text-quartiary hover:z-20 group hover:bg-white-transparent-less bg-white-transparent hover:scale-105 relative z-10 h-full p-4 pb-0 transform rounded shadow-xl cursor-pointer select-none'
			style={{
				transition: 'transform 200ms, background-color 200ms',
				minHeight: '12rem',
			}}
			onClick={() => changeArticle(url)}
		>
			<div className='top-8 sm:top-auto md:w-3/4 relative z-20 w-full'>
				<h3 className='group-hover:before:translate-x-0 group-hover:before:translate-y-0 before:transition-transform w-fit before:top-0 before:left-0 before:absolute before:w-full before:-z-10 before:h-full before:translate-x-4 before:translate-y-4 before:bg-white-transparent relative z-10 p-1 my-4 text-3xl font-bold transform'>
					{header}
				</h3>
				<p>{description}</p>
			</div>

			{cover ? (
				<img
					src={cover}
					alt={header + ' фото'}
					aria-label={header}
					className='group-hover:scale-110 sm:absolute max-w-1/2 sm:max-w-1/3 relative bottom-0 right-0 z-10 object-contain w-full max-h-full ml-auto text-transparent transition-transform origin-bottom-right'
				/>
			) : null}
		</article>
	)
}

export default ArticleSmall
