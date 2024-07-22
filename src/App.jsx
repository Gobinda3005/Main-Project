import React from "react"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./Pages/Home"
import NoPage from "./Pages/NoPage"
import Cart from "./Pages/Cart"
import ProductDetails from "./Pages/ProductDetails"
import ProductList from "./Pages/ProductsList"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Dashboard from "./Pages/Dashboard"
import Contact from "./Pages/Contact"
import About from "./Pages/About"

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route
					path='/Home'
					Component={Home}
				/>
				<Route
					path='/Products'
					Component={ProductList}
				/>
				<Route
					path='/Contact'
					Component={Contact}
				/>
				<Route
					path='login'
					Component={Login}
				/>
				<Route
					path='About'
					Component={About}
				/>
				<Route
					path='signup'
					Component={Signup}
				/>
				<Route
					path='dashboard'
					Component={Dashboard}
				/>
				<Route
					path='/Product/:id'
					Component={ProductDetails}
				/>
				<Route
					path='/cart'
					Component={Cart}
				/>
				<Route
					path='*'
					Component={NoPage}
				/>
			</Routes>
			<Footer />
		</>
	)
}

export default App