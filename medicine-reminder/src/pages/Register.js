import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="grid min-h-screen items-center justify-items-center lg:grid-cols-2">
      <div id="login">
        <div className="flex flex-col gap-6 rounded-lg bg-white p-8 drop-shadow-lg">
          <div className="">
            <h1 className="mb-1 text-center font-serif text-5xl font-bold italic">
              Rox
            </h1>
            <h3 className="text-center">simplifying medicine intake</h3>
            <hr className="mt-6" />
          </div>
          <p className="text-center text-xl font-bold">Register</p>
          <ul className="flex flex-col items-center gap-2">
            <li className="w-full">
              <input
                placeholder="Email"
                className="w-full rounded bg-slate-100 px-2 py-1 outline-none focus:bg-sky-100"
              ></input>
            </li>
            <li className="mb-4 w-full">
              <input
                placeholder="Confirm email"
                className="w-full rounded bg-slate-100 px-2 py-1 outline-none focus:bg-sky-100"
              ></input>
            </li>
            <li className="w-full">
              <input
                placeholder="Password"
                className="w-full rounded bg-slate-100 px-2 py-1 outline-none focus:bg-sky-100"
              ></input>
            </li>
            <li className="w-full">
              <input
                placeholder="Confirm password"
                className="w-full rounded bg-slate-100 px-2 py-1 outline-none focus:bg-sky-100"
              ></input>
            </li>
            <li className="mt-4 flex justify-between gap-6">
              <Link to={"/"}>
                <a>
                  <p className="rounded bg-slate-500 px-2 py-1 font-bold text-white hover:bg-slate-600 active:bg-slate-700">
                    Already have an account?
                  </p>
                </a>
              </Link>
              <button className="rounded bg-sky-500 px-2 py-1 font-bold text-white hover:bg-sky-600 active:bg-sky-700">
                Next
              </button>
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <ul className="flex justify-center gap-6">
            <li>
              <Link to={"/about-us"}>
                <a>
                  <p className="underline">About us</p>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div id="image" className="hidden lg:block">
        <img
          src="../../images/doc.jpg"
          className="h-screen w-screen object-cover object-top"
        />
      </div>
    </div>
  );
}
