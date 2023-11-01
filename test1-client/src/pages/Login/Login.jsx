import {Link} from 'react-router-dom'



const Login = () => {


    const handleSubmit=(e) => { 
        e.preventDefault();
        const user = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        console.log(user)
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
                <button type='submit' className="btn btn-primary">Login</button>
              </div>
              <p>Do not have account? <Link to='/signup'><span className=' text-blue-700'>SignUp</span></Link></p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;