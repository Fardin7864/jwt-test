import { useContext } from 'react';
import {Link} from 'react-router-dom'
import { Authcontext } from '../../providers/Authprovider/Authprovider';
import SocialLogin from '../../sheared/SocialLogin/SocialLogin';


const Signup = () => {
    const {createUser} = useContext(Authcontext);
    const handleSubmit=(e) => { 
        e.preventDefault();
        const user = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        console.log(user)
        createUser(user.email, user.password)
        .then(res => {console.log(res)})
        .catch(err => {console.log(err)})
     }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col w-2/4">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up!</h1>
          
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name='name'
                placeholder="name"
                className="input input-bordered"
                
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name='email'
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name='password'
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type='submit' className="btn btn-primary">Sign Up</button>
            </div>
            <p>Already have account? <Link to='/login'><span className=' text-blue-700'>Login</span></Link></p>
          </form>
        <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Signup;
