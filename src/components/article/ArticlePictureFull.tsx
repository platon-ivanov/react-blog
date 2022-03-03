import Image from './Image'
import TurningImage from './TurningImage'

type Props = {
	image: string[] | string
	description?: string | null | undefined
}

/**
 * Bigger picture inside of article.
 * @component
 * @subcategory Article
 */
const ArticlePictureFull = ({ image, description }: Props) => {
	return (
		<figure className='bg-white-transparent relative self-center object-contain h-full max-w-2xl p-4 mx-auto my-2 overflow-hidden rounded shadow-md'>
			<div
				className='w-full'
				style={{
					height: 'calc(100% - 3rem)',
				}}
			>
				{Array.isArray(image) ? (
					<TurningImage
						front={image[0]}
						back={image[1]}
						alt={description || 'Фото'}
					/>
				) : (
					<Image src={image} alt={description || 'Фото'} classes='w-full' />
				)}
			</div>
			{description ? (
				<figcaption className='bg-white-transparent-less p-2 mt-4 text-xl text-center rounded shadow-md'>
					{description}
				</figcaption>
			) : null}
		</figure>
	)
}

export default ArticlePictureFull
