import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";

const Modal = ({ name }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = "/shop";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        alert("Login Successful");
        document.getElementById(name).close();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const googleSignUp = () => {
    signUpWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert("Google SingUp Successfully");
        document.getElementById("login").close();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog
        id={name}
        className="modal modal-bottom sm:modal-middle text-black"
      >
        <div className="modal-box">
          <div className="modal-action mt-0 flex flex-col justify-center">
            <h3 className="font-semibold text-3xl text-center text-red">
              เข้าสู่ระบบ
            </h3>

            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">ชื่อผู้ใช้</span>
                </label>
                <input
                  type="string"
                  placeholder="Username"
                  className="input input-bordered"
                  required
                  {...register("username")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">รหัสผ่าน</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                  {...register("password")}
                />
                <label className="label justify-end">
                  <a
                    href="#"
                    className="label-text-alt text-sm link link-hover"
                  >
                    ลืมรหัสผ่าน?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 ">
                <input
                  type="submit"
                  value="เข้าสู่ระบบ"
                  className="btn bg-red text-white "
                />
              </div>

              <button
                htmlFor={name}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById(name).close()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-red "
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
