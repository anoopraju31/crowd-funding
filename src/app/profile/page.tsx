import React from 'react'

const ProfilePage = () => {
	return (
		<main className='my-8 md:md-14'>
			<h1 className='font-epilogue font-semibold text-[18px] text-white text-left'>
				{' '}
				All Campaigns by the user{' '}
			</h1>

			{/* All Campaigns */}
			<section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[20px] gap-[26px]'></section>
		</main>
	)
}

export default ProfilePage
