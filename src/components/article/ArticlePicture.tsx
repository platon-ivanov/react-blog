import React, { Component } from 'react'
import Image from './Image'
import TurningImage from './TurningImage'

type Props = { image: string | string[]; description: string }

/**
 * Image following the text.
 * @component
 * @subcategory Article
 */
const ArticlePicture = ({ image, description }: Props) => {
	return (
		<aside className='bg-white-transparent sm:float-right md:w-60 md:mx-2 my-2 rounded shadow-lg'>
			<figure className='p-2'>
				{Array.isArray(image) ? (
					<TurningImage front={image[0]} back={image[1]} alt={description} />
				) : (
					<Image src={image} alt={description} />
				)}
				<figcaption className='bg-white-transparent-less p-2 my-2 text-xl text-center rounded shadow-md'>
					{description}
				</figcaption>
			</figure>
		</aside>
	)
}

export default ArticlePicture
