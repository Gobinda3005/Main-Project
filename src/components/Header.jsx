import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';

const Header = () =>
{
  const cart = useSelector((state) => state.products.cart)
  return (
		<header className='text-gray-900 body-font'>
			<div className='bg-gray-300'>
			<div className='container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center'>
				<a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
					{/* <a href='https://notionpress.com/author/321668'><span className='ml-3 text-xl'>BFB</span></a> */}
					<Link
						className='ml-3 text-xl'
						Link='/Products'>
						<span className='ml-3 text-xl'>BFB</span>
					</Link>
				</a>
				<nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
					<Link
						className='mr-5 hover:text-gray-900'
						to='/Home'>
						Home
					</Link>
					<Link
						className='mr-5 hover:text-gray-900'
						to='/about'>
						About
					</Link>
					<Link
						className='mr-5 hover:text-gray-900'
						to='/Products'>
						Products
					</Link>
					<Link
						className='mr-5 hover:text-gray-900'
						to='/Contact'>
						Contact
					</Link>
				</nav>
                <Button className=' rounded-lg p-0.5' variant="secondary">
				<Link
						className='mr-5 hover:text-gray-900'
						to='/Login'>
						Login
					</Link>
				</Button>
				<Link to='/cart'>
					<Button variant="secondary" className="fa fa-shopping-cart">
						Cart
						<span className=' rounded-lg p-2'> {cart.length}</span>
					</Button>
				</Link>
			</div>
			</div>
		</header>
	)
}

export default Header