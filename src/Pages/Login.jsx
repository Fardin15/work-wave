import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

const Login = () => {
  const { user, setUser, loginUser, googleSignIn, loading } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        setUser(result.user);
        Swal.fire({
          icon: "success",
          text: "logged in successfully !!",
        });
        e.target.reset();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          text: "Please give The right gmail and password",
        });
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      setUser(result.user);
      Swal.fire({
        icon: "success",
        text: "logged in successfully !!",
      });
    });
  };

  useEffect(() => {
    if (user) {
      navigate(location.state ? location.state : "/", { replace: true });
    }
  }, [user]);

  if (user || loading) return;
  return (
    <div className="hero bg-[#3F2182] text-black my-12">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">Login now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 px-5">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered w-full"
                  required
                />
                <span
                  className="absolute top-5 right-4"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                </span>
              </div>

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>

              <label className="label">
                <p href="#" className="label-text-alt link link-hover">
                  New here? Please{" "}
                  <NavLink to="/signup" className="text-blue-500">
                    SignUp
                  </NavLink>
                </p>
              </label>
            </div>
            <div className="form-control mt-4">
              <button className="btn bg-neutral text-white">Login</button>
            </div>
          </form>
          <div className="divider">OR</div>
          <div className="flex justify-center gap-3 items-center py-3">
            <button
              onClick={handleGoogleSignIn}
              className="btn bg-neutral text-white"
            >
              <FaGoogle />
              <span className="ml-2">Log In With Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
