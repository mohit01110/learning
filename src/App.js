import './App.css';
import Registraion from './components/Registraion';
import Header from './components/Header'
import Subheader from './components/Subheader';
import Registration from './components/Registraion';
import Body from './components/Body';
import FashionOption from './components/FashionOption'

function App() {
  return (
    // <div style={{ textAlign: 'center', marginTop: '50px' }}>
    //   <h2>NetFlip Registraion Form</h2>
    //   <form
    //     style={{
    //       display: 'flex',
    //       flexDirection: 'column',
    //       maxWidth: '300px',
    //       margin: 'auto',
    //     }}
        
    //   >
    //     <label style={{ marginBottom: '10px' }}>Username:</label>
    //     <input
    //       type="text"
    //       name="username"
    //       style={{ marginBottom: '15px', padding: '8px' }}
    //       required
    //     />

    //     <label style={{ marginBottom: '10px' }}>Email:</label>
    //     <input
    //       type="email"
    //       name="email"
    //       style={{ marginBottom: '15px', padding: '8px' }}
    //       required
    //     />

    //     <label style={{ marginBottom: '10px' }}>Password:</label>
    //     <input
    //       type="password"
    //       name="password"
    //       style={{ marginBottom: '15px', padding: '8px' }}
    //       required
    //     />

    //     <button
    //       type="submit"
    //       style={{
    //         backgroundColor: '#4CAF50',
    //         color: 'white',
    //         padding: '10px 15px',
    //         border: 'none',
    //         borderRadius: '5px',
    //         cursor: 'pointer',
    //       }}
    //     >
    //       Submit
    //     </button>
    //   </form>
    // </div>
    <>
    <Header/>
    <Subheader/>
    <Registration/>
    <Body/>
    <FashionOption/>
    </>
  );
    

}

export default App;
