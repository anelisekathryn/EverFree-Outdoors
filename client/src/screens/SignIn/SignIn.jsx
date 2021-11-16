import { useState } from 'react'
import './SignIn.css'
import { signIn } from '../../services/users'
// import { Navigate } from 'react-router-dom'

const SignIn = (props) => {
  // const history = useHistory()

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
      // history.push('/')
      // <Navigate to='/' />
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
      return <button type='submit'>Sign In</button>
    }
  }

  const { email, password } = form

  return (
    <div className='form-container'>
      <h3>We're so happy you're here!</h3>
      <h2>New to EverFree? That's ok! Sign up here</h2>
      <form onSubmit={onSignIn}>
        {/* <label>Email</label> */}
        <input
          required
          type='text'
          name='email'
          value={email}
          placeholder='Enter Email'
          onChange={handleChange}
        />
        {/* <label>Password</label> */}
        <input
          required
          name='password'
          value={password}
          type='password'
          placeholder='Enter Password'
          onChange={handleChange}
        />
        {renderError()}
      </form>
    </div>
  )
}


export default SignIn