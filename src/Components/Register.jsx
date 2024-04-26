import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import showPasswordIcon from "../../public/icons/show-password-icon-19.jpg";
import hidePasswordIcon from "../../public/icons/show-password-icon-18.jpg";

const Register = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");  
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
      setShowPassword(!showPassword);
    };
  

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };

  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    // handle button section ----------------
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const data = new FormData();
      data.append("name", name);
      data.append("email", email);
      data.append("password", password);
      console.log(data);
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
  
      axios.post('http://127.0.0.1:8000/api/user-reg', data,{
        headers: headers,
      })
        .then((res) => {
          console.log('Data:', res.data);
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/');
        })
        .catch((error) => {
          console.error('An error occurred:', error);
        });
      // setName('');
      // setfatherName('');
      // setmotherName('');
      // setBirthDate('');
      // setEmail('');
      // setPassword('');
      // setName('');
      // setImage('');
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen">
        <div className="absolute inset-0 bg-gray-700 opacity-70" />
        <div className="w-full max-w-lg relative">
  
          {/* form section  */}
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="bg-gray-100 drop-shadow-2xl rounded-xl px-8 pt-6 pb-8 mb-4"
          >
            <h1 className="font-semibold text-center mb-3">
              Please Register Here
            </h1>
  
            {/* Phone section  */}
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Name"
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
  
            {/* email and password section  */}
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Email"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
            <div>
              <label htmlFor="password" >
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
            </div>

  
            <button
              className="bg-blue-300 hover:bg-blue-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-3"
              type="submit"
            >
              Submit
            </button>
  
            {/* extra paragraph -------------  */}
  
            <p className="mt-3 text-sm">
              already have an account? ,please
              <div className="flex items-center">
                register here :{" "}
                <button className="bg-blue-300 hover:bg-blue-600 font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline">
                  <a href="/login">Login</a>
                </button>{" "}
                <span className="ms-2 me-2">or</span>
                <button className="bg-blue-300 hover:bg-blue-600 font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline">
                  <a href="/">Return Home</a>
                </button>
              </div>
            </p>
            <hr className="my-5 border border-blue-300" />
          </form>
        </div>
      </div>
    );
};

export default Register;