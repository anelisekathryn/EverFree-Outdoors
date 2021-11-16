import { useState } from 'react'
import './SignIn.css'
import { signIn } from '../../services/users'
import { Link, useNavigate } from 'react-router-dom'

const SignIn = (props) => {
  let navigate = useNavigate()

  const [form, setForm] = useState({
    email: '',
    password: '',
    isError: false,
    errorMsg: '',
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const onSignIn = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try {
      const user = await signIn(form)
      setUser(user)
      navigate("/")
    } catch (error) {
      console.error(error)
      setForm({
        isError: true,
        errorMsg: 'Invalid Credentials',
        email: '',
        password: '',
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
      return <button className="sign-in-button" type='submit'>let's go</button>
    }
  }

  const { email, password } = form

  return (
    <div className='form-container'>
      <form onSubmit={onSignIn}>
      <h2>We're so happy you're here!</h2>
      <h3>New to EverFree? That's ok! Sign up  
        <Link className="here-link" to="/sign-up"> here</Link>.</h3>  
        <input
          required
          type='text'
          name='email'
          value={email}
          placeholder='email'
          onChange={handleChange}
        />
        
        <input
          required
          name='password'
          value={password}
          type='password'
          placeholder='password'
          onChange={handleChange}
        />
        {renderError()}
      </form>
      <Link to="/"><button className="home-button">home</button></Link>
    </div>
  )
}


export default SignIn