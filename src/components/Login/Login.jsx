import React, { useState } from 'react'
import axios from 'axios'
import "./Login.css"
import { useNavigate } from 'react-router-dom'

const Login = () => {
	const [values, setValues] = useState({
		designation: '',
		number: '',
		password: ''
	})
	const [error, setError] = useState(null);
	const navigate = useNavigate();
	axios.defaults.withCredentials = true;
	function handleSubmit(event) {
		event.preventDefault();

		axios.post("https://eeedatabase.onrender.com//auth/adminlogin", values)
			.then(result => {
				console.log()
				if (result.data.loginStatus) {
					console.log(result.data.Result[0].designation,result.data.Result[0].id )
					if (result.data.Result[0].designation === 'faculty') {
						navigate('/dashboard/'+result.data.Result[0].designation)
					}
					else if(result.data.Result[0].designation === 'HOD'){
						navigate('/dashboard/'+result.data.Result[0].designation)
					}
					
					else{
						navigate('/studentDs/'+result.data.Result[0].id)
					}
				} else {
					setError(result.data.Error)
				}

			})
			.catch(err => console.log(err, 'error'))
	}




	return (
		<div>
			<div className='body'>
				<h1 className='wel' >Welcome To Login Page</h1>
				<form className='form' onSubmit={handleSubmit}>
					<h1>Login</h1>
					<div className='textDanger'>
						{error && error}
					</div>
					
					<label htmlFor='number'>Id</label>
					<input type="text" name='number' autoComplete='off' placeholder='Enter Id'
						onChange={e => setValues({ ...values, number: e.target.value })} />
					<label htmlFor='password'>Password</label>
					<input type='password' name='password' placeholder='Enter Password'
						onChange={e => setValues({ ...values, password: e.target.value })} />
						<select className='selector' name="designation" id="" placeholder='Select your option' 
						onChange={e => setValues({ ...values, designation: e.target.value })}>
						<option value=''> Select Your Position</option>
						<option value={'HOD'}>HOD</option>
						<option value={'student'}>Student</option>
						<option value={'faculty'}> Faculty</option>
					</select>
					<button className='button1'>Submit</button>
					{/* <input type="checkbox" name='tick' id='tick' className='tick'/>
				<label htmlFor="password" >You are Agree with terms& condition</label>  */}
				</form>
			</div>
		</div>
	);
}

export default Login;
