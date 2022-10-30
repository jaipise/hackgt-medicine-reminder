import { Link } from "react-router-dom";

const PatientCard = ({ name, age, medicines }) => {
  return (
    <div id="patient-card">
      <div className="flex flex-col gap-2 rounded-lg bg-white p-2 drop-shadow-lg">
        <div>
          <p className="my-2 text-center font-serif text-3xl font-bold italic">
            {name}, {age}
          </p>
        </div>
        {medicines.map((medicine) => {
          return (
            <div className="rounded-lg bg-slate-100 p-2">
              <p className="mt-2 mb-4 text-center text-xl font-bold">
                {medicine.currMed}, until {medicine.endDate}
              </p>
              <p className="mt-2 mb-4 text-center text-xl font-bold">
                {medicine.currMedDose}
              </p>
              <ul className="flex flex-wrap gap-2">
                {medicine.currDays.map((day) => {
                  DayInfo(day, medicine.currTimes)
                })}
                {/* 
                {medicine.timing.monday.length > 0 &&
                  DayInfo("Monday", medicine.timing.monday)}
                {medicine.timing.tuesday.length > 0 &&
                  DayInfo("Tuesday", medicine.timing.tuesday)}
                {medicine.timing.wednesday.length > 0 &&
                  DayInfo("Wednesday", medicine.timing.wednesday)}
                {medicine.timing.thursday.length > 0 &&
                  DayInfo("Thursday", medicine.timing.thursday)}
                {medicine.timing.friday.length > 0 &&
                  DayInfo("Friday", medicine.timing.friday)}
                {medicine.timing.saturday.length > 0 &&
                  DayInfo("Saturday", medicine.timing.saturday)}
                {medicine.timing.sunday.length > 0 &&
                  DayInfo("Sunday", medicine.timing.sunday)} */}
              </ul>
            </div>
          );
        })}
        <li className="flex justify-between gap-6">
          <button className="rounded bg-slate-500 px-2 py-1 font-bold text-white hover:bg-slate-600 active:bg-slate-700">
            Edit
          </button>
          <button className="rounded bg-sky-500 px-2 py-1 font-bold text-white hover:bg-sky-600 active:bg-sky-700">
            QR Code
          </button>
        </li>
      </div>
    </div>
  );
};

const DayInfo = (day, hours) => {
  return (
    <div className="flex flex-grow flex-col gap-2">
      <p className="rounded bg-slate-300 px-2 py-1 font-bold uppercase">
        {day}
      </p>
      <li className="flex gap-2">
        {hours.map((hour) => {
          return <p className="rounded bg-slate-200 px-2 py-0.5">{hour}</p>;
        })}
      </li>
    </div>
  );
};

export default PatientCard;