
import '../styles/registration.css'

function Registraion() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2 className="heading">NetFlip Registraion Form</h2>
      <form className='form'>
        <label className='labelOne'>Username:</label>
        <input
          type="text"
          name="username"
          className='inputOne'
          required
        />

        <label className='labelOne'>Email:</label>
        <input
          type="email"
          name="email"
          className='inputOne'
          required
        />

        <label className='labelOne'>Password:</label>
        <input
          type="password"
          name="password"
          className='inputOne'
          required
        />

        <button
          type="submit"
          className='button'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Registraion