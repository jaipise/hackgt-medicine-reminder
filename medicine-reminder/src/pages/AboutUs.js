import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div>
      <li className="absolute right-6 top-6 flex gap-6">
        <Link to={"/register"}>
          <a>
            <p className="rounded bg-slate-500 px-2 py-1 font-bold text-white hover:bg-slate-600 active:bg-slate-700">
              Create account
            </p>
          </a>
        </Link>
        <Link to={"/"}>
          <a>
            <p className="rounded bg-sky-500 px-2 py-1 font-bold text-white hover:bg-sky-600 active:bg-sky-700">
              Login
            </p>
          </a>
        </Link>
      </li>
      <section className="flex h-[20vh] flex-col place-content-center">
        <h1 className="text-center font-serif text-7xl font-bold italic">
          Rox
        </h1>
        <h2 className="text-center text-lg">simplifying medicine intake</h2>
      </section>
      <section className="grid h-[80vh] gap-6 p-8 lg:grid-cols-3">
        <div className="rounded-lg bg-white p-8 drop-shadow-lg">
          <p className="text-center text-3xl font-bold">Fast for the doctor</p>
          <hr className="my-6" />
          <div className="flex flex-col gap-6">
            <p className="text-center text-lg">
              Rox provides an intuitive and hassle-free experience.
            </p>
            <p className="text-center text-lg">
              If you're a doctor, all you need is an account and you'll be ready
              to organize your patients' medicine schedules in minutes.
            </p>
            <p className="text-center text-lg">
              Organize medicine intake per day, time, and even set up automatic
              end dates.
            </p>
            <p className="text-center text-lg">
              Ensure your patients don't forget to take their meds!
            </p>
          </div>
        </div>
        <div className="rounded-lg bg-slate-700 p-8 text-white drop-shadow-lg">
          <p className="text-center text-3xl font-bold">Our mission</p>
          <hr className="my-6" />
          <div className="flex flex-col gap-6">
            <p className="text-center text-lg">
              Correctly taking meds isn't as easy as it seems.
            </p>
            <p className="text-center text-lg font-bold">
              According to a 2003 report published by the WHO, adherence rates
              in developed countries average only about 50%!
            </p>
            <p className="text-center text-lg">
              This means that, for every two patients, one of them isn't
              correctly following the schedule and instructions prescribed by
              their doctor.
            </p>
            <p className="text-center text-lg">
              This decreases the efficiency of the meds, possibly even worsening
              the patient's condition.
            </p>
            <p className="text-center text-lg">
              One of the reasons why this happens is poor communication. The
              patients either lack medical literacy and can't properly follow
              the prescription, or simply just forget when it's time to take
              them.
            </p>
            <p className="text-center text-lg font-bold">
              That's where we come in. Rox is a tool developed to help both
              groups: the doctors and the patients.
            </p>
          </div>
        </div>
        <div className="rounded-lg bg-white p-8 drop-shadow-lg">
          <p className="text-center text-3xl font-bold">Easy for the patient</p>
          <hr className="my-6" />
          <div className="flex flex-col gap-6">
            <p className="text-center text-lg">
              If you're a patient, all you need to do is enable the calendar on
              your Google Calendar.
            </p>
            <p className="text-center text-lg">
              Your phone will now serve as a reminder to all of your meds. It'll
              automatically update whenever your schedule changes, and notify
              you whenever it's time.
            </p>
            <p className="text-center text-lg">
              No need to download third-party apps, create an account, or even
              know what Rox is! It's as easy as it gets.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
