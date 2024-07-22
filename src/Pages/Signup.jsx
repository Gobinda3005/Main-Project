import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { auth } from "../firebase"
import Button from "react-bootstrap/esm/Button"
import { clearError, setError, setLoading } from "../Redux/Store"
import { createUserWithEmailAndPassword } from "firebase/auth"

const Signup = () => {
    const [email, setEmail] = useState("")
    const [name,setName]= useState("")
	const [password, setPassword] = useState("")
	const dispatch = useDispatch()
	const error = useSelector((state) => state.products.error)
	function handleSignUp() {
		dispatch(setLoading(true))
		dispatch(clearError())
		try {
			createUserWithEmailAndPassword(auth, email, password).then((val) => {
				console.log(" signup successfull" + val)
				dispatch(setLoading(false))
			})
		} catch (error) {
			dispatch(setError(error))
		}
	}
	return (
		<div>
			<input
				type='text'
				placeholder="Enter Full Name"
				onChange={(e) => setEmail(e.target.value)}
				className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
			/>
			<input
				type='email'
				name=''
				id='email'
				placeholder="Email"
				onChange={(e) => setEmail(e.target.value)}
				className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
			/>
			<br />
			<input
				type='password'
				name=''
				id='pwd'
				placeholder="Password"
				onChange={(e) => setPassword(e.target.value)}
				className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
			/>
			<br />
			<br/>
			<Button variant="outline-info" onClick={handleSignUp}>Signup</Button>
			{error && <p>{error}</p>}
		</div>
	)
}

export default Signup