import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import showPasswordIcon from "../../public/icons/show-password-icon-19.jpg";
import hidePasswordIcon from "../../public/icons/show-password-icon-18.jpg";

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
      setShowPassword(!showPassword);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
      if (!e.target.value) {
          setEmailError('Email is required');
      } else {
          setEmailError('');
          if (!e.target.value) {
              setPasswordError('Password is required');
          } else {
              setPasswordError('');
          }
      }
  };
  
  const handlePasswordChange = (e) => {
      setPassword(e.target.value);
  };
  const data = { email, password }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
    axios.post(`https://backend.ap.loclx.io/api/login`, data)
    .then(res => {
        if (res.data.status === "201" ) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Successfully Logged In',
                showConfirmButton: false,
                timer: 1500
            });
            if(res.data?.user?.role === "2"){
              localStorage.setItem('user', JSON.stringify(res.data))
              navigate('/studentDetails');
            }else{
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "You are not eligible for this page",
              });
            }
  localStorage.setItem('token', res.data.token);
  // localStorage.setItem('user', JSON.stringify(res.data));
  //           navigate('/studentDetails');
        }
        else if (res.data.status === "403") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Invalid Password",
              });
        }
        
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: "Access Denied",
            });
        }
    })
  };


  

    return (
        <div className="relative flex items-center justify-center min-h-screen">
        <div className="absolute inset-0 bg-gray-700 opacity-70" />
        <div className="w-full max-w-md relative">

  
          {/* form section  */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-100 drop-shadow-2xl rounded-xl px-8 pt-6 pb-8 mb-4"
          >
            <h1 className="font-semibold text-center mb-3">Please Login Here</h1>
  
  {/* Email section  */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Enter Email
              </label>
              <input
              required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name='email'
                placeholder="Your Email"
                value={email}
                onChange={handleEmailChange}
              />
              <span className="text-red-600">{emailError}</span>
            </div>
            {/* password section  */}
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                <span
                  onClick={handleShowPassword}
                  className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                >
                  {showPassword ? (
                    <img
                      className="w-[20px] h-[20px]"
                      src={showPasswordIcon}
                      alt=""
                    />
                  ) : (
                    <img
                      className="w-[20px] h-[20px]"
                      src={hidePasswordIcon}
                      alt=""
                    />
                  )}
                </span>
              </div>
              <span className="text-red-600">{passwordError}</span>
            </div>
            {/* login button  */}
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-300 hover:bg-blue-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                Login
              </button>
            </div>
            {/* extra paragraph -------------  */}
  
            <p className='mt-3 text-sm'>If you are a student and do not have an account yet, please
              <div className='flex items-center'>
                register here : <button
                  className="bg-blue-300 hover:bg-blue-600 font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                ><a href="/registration">Registration</a></button> <span className='ms-2 me-2'>or</span>
                <button
                  className="bg-blue-300 hover:bg-blue-600 font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"><a href="/">Return home</a></button>
              </div>
            </p>
            <hr className='my-5 border border-blue-300' />
          </form>
  
        </div>
      </div>
    );
};

export default Login;