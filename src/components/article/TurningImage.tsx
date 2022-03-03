import React, { Component } from 'react'
import Image from './Image'
import { FaHandPointUp } from 'react-icons/fa'

type Props = {
	[index: string]: string
	front: string
	back: string
	alt: string
}

type State = { currentImage: string; changing: boolean; changed: boolean }

/**
 * Image which changes sides on click.
 * @component
 * @subcategory Article
 */
class TurningImage extends Component<Props, State> {
	state = {
		currentImage: 'front',
		changing: false,
		changed: false,
	}

	POSSIBLE: string[] = ['front', 'back']

	changeImage = () => {
		const possible = this.POSSIBLE

		const toSet = possible.find((side) => side !== this.state.currentImage)

		if (toSet) {
			// Changing state to control the animation
			this.setState(
				{
					changing: true,
				},
				() => {
					setTimeout(() => {
						this.setState(
							{
								currentImage: toSet,
								changed: true,
							},
							() => {
								this.setState({
									changing: false,
								})
							}
						)
					}, 400)
				}
			)
		}
	}

	render() {
		return (
			<div
				onClick={this.changeImage}
				className={`relative transform cursor-pointer ${
					this.state.changing ? 'opacity-0 scale-75' : ''
				}`}
				style={{ transition: 'opacity 400ms, transform 600ms' }}
			>
				{this.POSSIBLE.map((side) => {
					const isCurrent = this.state.currentImage !== side
					return (
						<Image
							src={this.props[side]}
							alt={this.props.alt}
							aria-label={
								side === this.POSSIBLE[0]
									? this.props.alt + ', передняя сторона'
									: ', задняя сторона'
							}
							hidden={isCurrent}
							classes={
								side === this.POSSIBLE[1]
									? 'absolute left-0 top-0 w-full max-h-full max-w-full'
									: ''
							}
							key={side}
						/>
					)
				})}
				<FaHandPointUp
					className={`drop-shadow-md top-2 left-2 absolute text-5xl text-white ${
						this.state.changed ? 'hidden' : ''
					}`}
				/>
			</div>
		)
	}
}

export default TurningImage
