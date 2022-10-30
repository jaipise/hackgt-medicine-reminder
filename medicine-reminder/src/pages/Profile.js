import { useEffect, useState } from "react"
import PatientCard from "../components/PatientCard"
import {db} from '../firebase'
import { ref, set, get, update, remove, child, onValue, push } from 'firebase/database'

const Profile = () => {
  const [patientName, setPatientName] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientAge, setPatientAge] = useState(0);
  const [medicines, setMedicines] = useState([]);
  const [currMed, setCurrMed] = useState("");
  const [currMedDose, setCurrMedDose] = useState("");
  const [currDays, setCurrDays] = useState([]);
  const [currTimes, setCurrTimes] = useState([]);
  const [endDate, setEndDate] = useState("");
  const [loaded, setLoaded] = useState(false);

  const [patients, setPatients] = useState([])

  let a = []
  function getData () {
      
    const dbRef = ref(db, 'patients')
    onValue(dbRef, (snapshot) => {
      let data = snapshot.val()

      if (data != null) {
        let keys = Object.keys(data)
        for(let i = 0; i < keys.length; i++) {
          a.push(data[keys[i]])          
        }
        a = a.slice(0, keys.length)
        console.log(a);
        setPatients(a);
        setLoaded(true);
      }
      
    })
  }


  useEffect(() => {
    getData()
    console.log(patients)
  }, [])
  

  const patientsTemp = [
    {
      name: "John Doe",
      age: "24",
      medicines: [
        {
          name: "Medicine 1",
          timing: {
            monday: [9, 21],
            tuesday: [],
            wednesday: [9, 12, 21],
            thursday: [],
            friday: [9, 12, 21],
            saturday: [],
            sunday: [],
            until: 25,
          },
        },
        {
          name: "Medicine 2",
          timing: {
            monday: [9, 12],
            tuesday: [],
            wednesday: [10, 21],
            thursday: [],
            friday: [],
            saturday: [],
            sunday: [],
            until: 15,
          },
        },
      ],
    },
    {
      name: "Mario",
      age: "24",
      medicines: [
        {
          name: "Medicine 1",
          timing: {
            monday: [9, 21],
            tuesday: [],
            wednesday: [9, 12, 21],
            thursday: [],
            friday: [9, 12, 21],
            saturday: [],
            sunday: [],
            until: 25,
          },
        },
        {
          name: "Medicine 2",
          timing: {
            monday: [9, 12],
            tuesday: [],
            wednesday: [10, 21],
            thursday: [],
            friday: [],
            saturday: [],
            sunday: [],
            until: 15,
          },
        },
        {
          name: "Medicine 2",
          timing: {
            monday: [9, 12],
            tuesday: [9, 12],
            wednesday: [9, 12],
            thursday: [9, 12],
            friday: [9, 12],
            saturday: [9, 12],
            sunday: [9, 12],
            until: 15,
          },
        },
      ],
    },
  ];

  return (
    <>
      <h1 class="text-lg">Doctor's profile</h1>
      
      <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <h2>Enter a new patient:</h2>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
              Name
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Jane Doe" onChange={e => setPatientName(e.target.value)} required/>
          </div>
          
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
              Age
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="age" type="number" placeholder="25" onChange={e => setPatientAge(e.target.value)}/>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
              Email
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="johndoe@gmail.com" onChange={e => setPatientEmail(e.target.value)}/>
          </div>

          <div class="mb-4">
          <h1>Add a medicine</h1>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="medicine" >
              Medicine's name
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="medicine" type="text" value={currMed} placeholder="Tylenol" onChange={e => {
              setCurrMed(e.target.value);
            }}/>
            
            <label class="block text-gray-700 text-sm font-bold mb-2" for="medicine-dose">
              Medicine's dose/amount
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="medicine-dose" value={currMedDose} type="text" placeholder="1 caplet" onChange={e => {
              setCurrMedDose(e.target.value);
            }}/>

            <label class="block text-gray-700 text-sm font-bold mb-2" for="medicine" >
              Frequency (can select multiple days)
            </label>
            <select required class="form-multiselect block w-full mt-1"  multiple onChange={e => {
              let options = e.target.options;
              let value = [];
              for (let i = 0; i < options.length; i++) {
                if (options[i].selected) {
                  value.push(options[i].value);
                }
              }

              setCurrDays(value)
            }}>
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
              <option>Sunday</option>
            </select>


            <label class="block text-gray-700 text-sm font-bold mb-2" for="medicine" >
              Time of day (can select multiple times)
            </label>
            <select required class="form-multiselect block w-full mt-1"  multiple onChange={e => {
              let options = e.target.options;
              let value = [];
              for (let i = 0; i < options.length; i++) {
                if (options[i].selected) {
                  value.push(options[i].value);
                }
              }

              setCurrTimes(value)
            }}>
              <option>Morning (9 am)</option>
              <option>Afternoon (1 pm)</option>
              <option>Evening (9 pm)</option>
            </select>

            <label htmlFor="end-date">End Date</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="datetime-local" id="end-date" onChange={e => setEndDate(e.target.value.slice(0, 10))} />

            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2" onClick={e => {
              e.preventDefault()
              setMedicines(arr => [...arr, {currMed, currMedDose, currDays, currTimes, endDate, patientEmail}])
              setCurrMed("")
              setCurrMedDose("")
            }}>Add</button>

            {/* <button onClick={e => {
              e.preventDefault()
              console.log(patientAge)
            }}>test</button> */}

          </div>
          {medicines.length > 0 && medicines.map((medicine) => {
                return(
                  <>
                    <p>{medicine.currMed}, {medicine.currMedDose}</p>
                    {medicine.currDays.map((day) => {
                      return (
                        <p>{day}</p>
                      )
                    })}
                    {medicine.currTimes.map((times) => {
                      return (
                        <p>{times}</p>
                      )
                    })}
                    <p>{medicine.endDate}</p>
                  </>
                )
              })
          }

          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={e => {
              push(ref(db, 'patients'), {
                name: patientName,
                age: patientAge,
                email: patientEmail,
                medicines,
              })

            }}>
              Create
            </button>
          </div>
      </form>
    </div>


    <div className="m-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        
        {loaded && patients.map((patient) => {
          return (
          <PatientCard
            name={patient.name}
            age={patient.age}
            medicines={patient.medicines}              
          />
        );
      })}
    </div>
      
    </>
  )
}

export default Profile