import * as React from 'react'
import { FaTheaterMasks } from 'react-icons/fa'
import ДианаКассильИванова from '../../images/ДианаКассиль-Иванова.png'
/**
 * The website header.
 * @component
 * @subcategory General
 */
const Header = () => {
	return (
		<header
			className='bg-tertiary relative z-10 flex flex-col gap-8 p-4 pb-0 overflow-hidden rounded select-none'
			style={{
				minHeight: 'min(40rem, calc(100vh - 2rem))',
			}}
		>
			<div className='grow relative z-10 flex flex-col justify-center'>
				<div className='cover-text-container'>
					<h1
						style={{
							fontSize: 'clamp(1rem, 8vw, 3.5rem)',
							fontWeight: '1000',
						}}
						className='font-header flex flex-col'
					>
						<span>Диана</span>
						<span>Кассиль-Иванова </span>
					</h1>
					<h2
						style={{
							fontSize: 'clamp(0.7rem, 5vw, 2.5rem)',
						}}
						className='w-fit max-w-full'
					>
						Актриса, режиссёр, театральный педагог, внучка Иосифа Кассиля
					</h2>
				</div>
			</div>

			<div className='shrink flex justify-end'>
				<img
					src={ДианаКассильИванова}
					alt='Диана Кассиль-Иванова'
					aria-label='Диана Кассиль-Иванова'
					className='md:absolute bottom-0 right-0 max-h-full'
				/>
			</div>
			<FaTheaterMasks
				className='-left-0 -top-16 -z-10 text-secondary opacity-10 absolute'
				style={{
					fontSize: '50vw',
					transform: 'rotate(-20deg)',
				}}
			/>
		</header>
	)
}

export default Header
