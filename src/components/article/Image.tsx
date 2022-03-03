export type Props = {
	src: string
	alt: string
	hidden?: boolean
	classes?: string
}

/**
 * Universal image component.
 * @component
 * @subcategory Article
 */
const Image = ({ src, alt, hidden, classes }: Props) => {
	return (
		<img
			src={src}
			alt={alt}
			aria-label={alt}
			className={`${hidden ? 'invisible' : ''} ${classes || ''}
				rounded select-none`}
		/>
	)
}

export default Image
