'use client'

import { useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'

type ItemProps = {
	handleClick: () => void
	title: string
}

type DropdownProps = {
	title: string
	values: string[]
}

const Item = ({ handleClick, title }: ItemProps) => (
	<li onClick={handleClick}>
		<p className='block rounded px-4 py-2 hover:bg-green-500 dark:hover:text-white'>
			{title}
		</p>
	</li>
)

const Dropdown = ({ title, values }: DropdownProps) => {
	const [isOpenDropdown, setIsOpenDropdown] = useState(false)
	const [value, setValue] = useState<string>(title)
	const handleClick = (value: string) => {
		setIsOpenDropdown(false)
		setValue(value)
	}
	return (
		<div className='relative'>
			<button
				id='dropdownDefaultButton'
				data-dropdown-toggle='dropdown'
				className='text-white w-44 truncate bg-green-500 hover:bg-green-600 focus:outline-none active:bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between'
				type='button'
				onClick={() => setIsOpenDropdown((prev) => !prev)}>
				{value}
				{isOpenDropdown ? (
					<IoMdArrowDropup size={22} />
				) : (
					<IoMdArrowDropdown size={22} />
				)}
			</button>
			<div
				id='dropdown'
				className={`z-10 ${
					isOpenDropdown ? 'translate-y-0' : '-translate-y-[100vh]'
				} absolute top-[60px] left-0 bg-[#2c2f32] divide-y divide-gray-100 rounded-lg shadow w-full max-w-44 `}>
				<ul
					className='text-sm text-gray-700 dark:text-gray-200'
					aria-labelledby='dropdownDefaultButton'>
					{values.map((item) => (
						<Item
							key={item}
							title={item}
							handleClick={() => handleClick(item)}
						/>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Dropdown
