import { signOut } from '../../services/users'
import { useNavigate } from 'react-router-dom'

const SignOut = (props) => {
  const { setUser } = props
  const navigate = useNavigate()

  const signOutUser = async () => {
    await signOut()
    // setUser(null)
    navigate('/')
  }

  return (
    <div>
      <button
        onClick={() => signOutUser()}
      >Sign Out</button>
    </div>
  )
}
  
export default SignOut