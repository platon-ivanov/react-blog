export type Props = {
	src: string
}

/**
 * Styled YouTube player.
 * @component
 * @subcategory Article
 */
const Video = ({ src }: Props) => {
	return (
		<div>
			<div className='bg-white-transparent max-w-4xl p-4 mx-auto my-2 overflow-hidden rounded shadow-md'>
				<div className='aspect16-9 rounded'>
					<iframe
						src={src}
						title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
					></iframe>
				</div>
			</div>
		</div>
	)
}

export default Video
