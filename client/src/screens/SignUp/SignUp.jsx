import { useState } from 'react'
import './SignUp.css'
import { signUp } from '../../services/users.js'
import { Link, useNavigate } from 'react-router-dom'


const SignUp = (props) => {
    let navigate = useNavigate()

    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        isError: false,
        errorMsg: '',
  })
  
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }
  
  const onSignUp = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try {
      const user = await signUp(form)
      setUser(user)
      navigate("/")
    } catch (error) {
      console.error(error)
      setForm({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        isError: true,
        errorMsg: 'Sign Up Details Invalid',
      })
    }
  }

  const renderError = () => {
    const toggleForm = form.isError ? 'danger' : ''
    if (form.isError) {
      return (
        <button type='submit' className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return <button className="submit" type='submit'>let's go</button>
    }
  }

  const { username, email, password, passwordConfirmation } = form
    
  return (
    <div className='form-container'>
    
    <form onSubmit={onSignUp}>
    <h2>Ready for an adventure?</h2>
      
      <input
        required
        type='text'
        name='username'
        value={username}
        placeholder='Enter Username'
        onChange={handleChange}
      />
      
      <input
        required
        type='email'
        name='email'
        value={email}
        placeholder='Enter Email'
        onChange={handleChange}
      />
      
      <input
        required
        name='password'
        value={password}
        type='password'
        placeholder='Enter a New Password'
        onChange={handleChange}
      />
      
      <input
        required
        name='passwordConfirmation'
        value={passwordConfirmation}
        type='password'
        placeholder='Confirm Your Password'
        onChange={handleChange}
      />
      
      {renderError()}
    </form>
    <Link to="/"><button className="home-button">home</button></Link>
  </div>
  )
}

export default SignUp;