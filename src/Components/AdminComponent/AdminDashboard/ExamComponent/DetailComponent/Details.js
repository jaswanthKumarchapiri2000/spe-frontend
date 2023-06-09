
   import style from "../../SubjectComponent/Subject.module.css";

   import axios from "axios";

   import {useEffect , useState} from "react";
   import {useHistory , useLocation} from "react-router-dom";

   import baseUrl from "../../../../baseUrl";

   let token="";

    
    function Details(){
        
      const id = new URLSearchParams(useLocation().search).get("id");

        const [exam  , setExam] = useState({
            name:"",
            desc:"",
            level:"",
            passMarks:"",
            totalQuestion:"",
            marks:"",
            date: "",
            time: "",
        });

        useEffect(() => {
          
             async function getExamDetails(){
               token=window.localStorage.getItem("token")
                const value = await axios.get(`${baseUrl}/exam/${id}`,{
                  headers: {
                     'Content-Type': 'application/json',
                     'Authorization': `Bearer ${token}`,  
                 }
                });
                setExam(value.data);
             }
             getExamDetails();
        },[id])

   // -------------------------Go back function---------------------------------------
     
      let history = useHistory();
    
      function handleGoBack(){
          history.push("/AdminDashboard/Exam");
      }


        return (
            <>
                <div id={style.displayHeadingBox}> 
                     <h2>Exam Details</h2>     
                 </div>

                 <div id={style.tableBox}>
                     <table >
                         <thead >
                              <tr>
                                <th id={style.center}>Exam Name</th>
                                <td id={style.center}> {exam.name.name} </td>
                             </tr>

                              <tr>
                                <th id={style.center}>Exam Description</th>
                                <td id={style.center}> {exam.desc} </td>
                              </tr>

                               <tr>
                                  <th id={style.center}>Exam Creation Date</th>
                                  <td id={style.center}> {exam.date} </td>
                               </tr>

                               <tr>
                                  <th id={style.center}>Exam TotalMarks</th>
                                  <td id={style.center}> {exam.marks} </td>
                               </tr>

                               <tr>
                                  <th id={style.center}>Exam TotalQuestion</th>
                                  <td id={style.center}> {exam.totalQuestion} </td>
                               </tr>

                               <tr>
                                  <th id={style.center}>Exam PassMarks</th>
                                  <td id={style.center}> {exam.passMarks} </td>
                               </tr>

                               <tr>
                                  <th id={style.center}>Exam Level</th>
                                  <td id={style.center}> {exam.level} </td>
                               </tr>

                               <tr>
                                  <th id={style.center}>Exam Time</th>
                                  <td id={style.center}> {exam.time} min </td>
                               </tr>



                            </thead>
                         </table>
                     </div>

                    <div id={style.addSubjectBox}>
                       <button onClick={handleGoBack}>Go Back</button>
                   </div>
            </>
        );
    }

    export default Details;