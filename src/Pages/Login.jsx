import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useSelector, useDispatch } from 'react-redux'
import { auth } from '../firebase';
import { clearError, setError, setLoading } from '../Redux/Store';
import { signInWithEmailAndPassword } from "firebase/auth"
import {useNavigate} from 'react-router-dom'

const Login = () =>
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate= useNavigate()
    const error = useSelector(state => state.products.error)
    function handleLogin ()
    {
        dispatch(clearError())
        try
        {
            signInWithEmailAndPassword(auth, email, password)
                .then((val) =>
                {
                    console.log("successfull" + val)
                    navigate('/dashboard')
            })
        }
        catch (error)
        {
            dispatch(setError(error))
        }
    }
  return (
		<div>
			<input
				type='email'
				name=''
				id='eml'
                placeholder='Email'
				onChange={(e) => setEmail(e.target.value)}
				className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
			/>
			<br />
			<input
				type='password'
				name=''
				id='pwd'
                placeholder='Password'
				className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
				onChange={(e) => setPassword(e.target.value)}
			/>
            <br />
			<br />
			<Button variant="outline-info" onClick={handleLogin}>Login</Button>
			{error && <p>{error}</p>}
		</div>
	)
}

export default Login