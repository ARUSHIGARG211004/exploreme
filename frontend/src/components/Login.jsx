// // // // src/components/Login.jsx
// // // import React, { useState } from 'react';

// // // const Login = () => {
// // //   const [username, setUsername] = useState('');
// // //   const [password, setPassword] = useState('');

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const response = await fetch('/login', {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify({ username, password }),
// // //       });
// // //       const data = await response.json();
// // //       if (data.success) {
// // //         // Login successful, redirect to dashboard or home page
// // //         window.location.href = '/';
// // //       } else {
// // //         alert('Invalid username or password');
// // //       }
// // //     } catch (error) {
// // //       console.error(error);
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>Login</h2>
// // //       <form onSubmit={handleSubmit}>
// // //         <label>Username:</label>
// // //         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
// // //         <br />
// // //         <label>Password:</label>
// // //         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
// // //         <br />
// // //         <button type="submit">Login</button>
// // //       </form>
// // //     </div>
// // //   );
// // // };
// // // export default Login;



// // // src/components/Login.jsx
// // import React, { useState } from 'react';

// // const Login = ({ onLoginSuccess }) => {
// //   const [username, setUsername] = useState('');
// //   const [password, setPassword] = useState('');

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await fetch('/login', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ username, password }),
// //       });
// //       const data = await response.json();
// //       if (data.success) {
// //         // Login successful, call onLoginSuccess prop
// //         onLoginSuccess();
// //       } else {
// //         alert('Invalid username or password');
// //       }
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Login</h2>
// //       <form onSubmit={handleSubmit}>
// //         <label>Username:</label>
// //         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
// //         <br />
// //         <label>Password:</label>
// //         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
// //         <br />
// //         <button type="submit">Login</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;



// // import React, { useState } from 'react';
// // import "../login.css";



// // const Login = ({ onLoginSuccess }) => {
// //   const [username, setUsername] = useState('');
// //   const [password, setPassword] = useState('');

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await fetch('/login', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ username, password }),
// //       });
// //       const data = await response.json();
// //       if (data.success) {
// //         // Login successful, call onLoginSuccess prop
// //         onLoginSuccess();
// //       } else {
// //         alert('Invalid username or password');
// //       }
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

  


// //   return (
// //     <div className="container">
// //       <div className="left-side"></div>
// //       <div className="right-side">
// //         <div className="App">
// //           <h2>Login</h2>
// //           <form onSubmit={handleSubmit}>
// //             <div className="input-container">
// //               <input
// //                 type="text"
// //                 placeholder="Username"
// //                 value={username}
// //                 onChange={(e) => setUsername(e.target.value)}
// //                 required
// //               />
// //             </div>
// //             <div className="input-container">
// //               <input
// //                 type="password"
// //                 placeholder="Password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 required
// //               />
// //             </div>
// //             <div className="footer">
// //               <button type="submit" className="btn">Login</button>
// //               <div className="login-wrapper">
// //                 <p>Don't have an account?</p>
// //                 <button type="button" className="btn">Sign Up</button>
// //               </div>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;






// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import "../login.css";

// const Login = ({ onLoginSuccess }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });
//       const data = await response.json();
//       if (data.success) {
//         // Login successful, call onLoginSuccess prop
//         onLoginSuccess();
//       } else {
//         alert('Invalid username or password');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSignupClick = () => {
//     navigate('/');
//   };

//   return (
//     <div className="container">
//       <div className="left-side"></div>
//       <div className="right-side">
//         <div className="App">
//           <h2>Login</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="input-container">
//               <input
//                 type="text"
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="input-container">
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="footer">
//               <button type="submit" className="btn">Login</button>
//               <div className="login-wrapper">
//                 <p>Don't have an account?</p>
//                 <button type="button" className="btn" onClick={handleSignupClick}>Sign Up</button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../login.css";

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(username, password);
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (data.success) {
        // Login successful, call onLoginSuccess prop
        onLoginSuccess();
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <div className="container">
      <div className="left-side"></div>
      <div className="right-side">
        <div className="App">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="footer">
              <button type="submit" className="btn">Login</button>
              <div className="login-wrapper">
                <p>Don't have an account?</p>
                <button type="button" className="btn" onClick={handleSignupClick}>Sign Up</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

