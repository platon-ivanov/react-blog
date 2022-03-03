import { ReactNode } from 'react'

type Props = {
	children: string[] | ReactNode[]
}

/**
 * A blockquote.
 * @component
 * @subcategory Article
 */
const Quote = ({ children }: Props) => (
	<blockquote className='blockquote'>{children}</blockquote>
)

export default Quote
