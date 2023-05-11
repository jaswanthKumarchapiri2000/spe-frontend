import style from "../StudentDashboard.module.css";

import { useState, useEffect } from "react";
import axios from "axios";

import { NavLink } from "react-router-dom";

import baseUrl from "../../../baseUrl";
let token="";


function Subject() {
  const [allSubject, setAllSubject] = useState([]);

  useEffect(() => {
    async function getAllSubject() {
      token=window.localStorage.getItem("token")
      let value = await axios.get(`${baseUrl}/subject`,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,  
      }
      });
      setAllSubject(value.data);
    }
    getAllSubject();
  }, []);

  return (
    <>
      <div id={style.displayBoxHeadingBox}>
        <h1>Choose Subjects</h1>
      </div>

      {allSubject.map((data, i) => {
        return (
          <div id={style.displayBoxSubjectBox} key={i}>
            <div id={style.subjectText}>
              <span>{data.name}</span>
            </div>

            <div id={style.subjectButton}>
              <NavLink exact to={`/StudentDashboard/Exam/${data.name}`}>
                <button>Go to Exam</button>
              </NavLink>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Subject;
