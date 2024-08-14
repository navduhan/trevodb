// import React, { useState } from 'react'
// // import { useNavigate } from 'react-router-dom'
// import './Login.scss'
// import { Divider, Button } from 'antd'
// const Login = (props) => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [emailError, setEmailError] = useState('')
//   const [passwordError, setPasswordError] = useState('')

//   // const navigate = useNavigate()

//   const onButtonClick = () => {
//     // You'll update this function later...
//   }

//   return (
//     <div className='container'>
//       <div className='row justify-content-center my-3'>
//         <Divider />
//         <h4 className='my-3'> Client Login Portal</h4>
//         <Divider />
//       <div className='col-md-4'>
//         <input
//           value={email}
//           placeholder="Enter your email here"
//           onChange={(ev) => setEmail(ev.target.value)}
//           className='my-2 inputBox'
//         />
//         <label className="errorLabel">{emailError}</label>

//         <input
//           value={password}
//           placeholder="Enter your password here"
//           onChange={(ev) => setPassword(ev.target.value)}
//           className='my-2 inputBox'
//         />
//         <label className="errorLabel">{passwordError}</label>
    
//         <Button
//                 className="kbl-btn-1  mx-3"
//                 size="lg"
//                 onClick={onButtonClick}
//               >
//                 Sign In{" "}
//               </Button>

//               <Button
//                 className="kbl-btn-1  mx-3"
//                 size="lg"
//                 onClick={onButtonClick}
//               >
//                Sign Up{" "}
//               </Button>
//       </div>
//     </div>
//     <Divider />
//     </div>
//   )
// }

// export default Login