
  
  
   import style from "./Dashboard.module.css";

   import {useState  , useEffect} from "react";
   import { useHistory } from "react-router-dom";
   import axios from "axios";

   import baseUrl from "../../../baseUrl";
   let token="";

     function Dashboard()
     {

          const [exam , setExam] = useState("Updating...");
          const [question , setQuestion] = useState("Updating...");
          const [user , setUser] = useState("Updating...");

            useEffect(() => {

                async function getAllExam() {
                    token = window.localStorage.getItem("token");
                    console.log("inside getallexam");
                    console.log(token);
                    try {
                      let value = await axios.get(`${baseUrl}/exam`, {
                        headers: {
                          // 'Content-Type': 'application/json',
                          Authorization: `Bearer ${token}`,
                        },
                      });
                      setExam("We have total " + value.data.length + " exam");
                    } catch (error) {
                      console.log(error);
                    }
                  }

                // async function getAllExam(){
                //     token=window.localStorage.getItem("token")
                //     console.log("inside getallexam")
                //     console.log(token)
                //     let value  = await axios.get(`${baseUrl}/exam`,{
                //         headers: {
                //                     // 'Content-Type': 'application/json',
                //                     'Authorization': `Bearer ${token}`,  
                //                 }
                //       });
                //     setExam("We have total " +value.data.length + " exam");
                // }
                getAllExam();


                async function getAllQuestions(){
                    token=window.localStorage.getItem("token")
                    console.log("inside get all questions")
                    let value  = await axios.get(`${baseUrl}/question`,{
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,  
                        }
                    }

                    );
                    setQuestion("We have total " +value.data.length + " question");
                }
                getAllQuestions();


                async function getAllUsers(){
                    token=window.localStorage.getItem("token")
                    let value  = await axios.get(`${baseUrl}/user`,{
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,  
                        }
                    });
                    setUser("We have total " +value.data.length + " user");
                }
                getAllUsers();
            })

 
             let history = useHistory();

            function showExam(){
                 history.push("/AdminDashboard/Exam");
            }

            function showQuestions(){
                history.push("/AdminDashboard/Question");
            }

            function showUsers(){
                history.push("/AdminDashboard/StudentList");
            }


         return(
             <>
                           <div id={style.displayHeadingBox}> 
                               <h1>Dashboard</h1>     
                           </div>

                            <div id={style.box1}>
                               <p id={style.countOfExam}>{exam}</p>
                                   <button onClick={showExam}>View Details</button>
                            </div>

                              <div id={style.box2}>
                                  <p  id={style.countOfQuestion}>{question}</p>
                                   <button onClick={showQuestions}>View Details</button> 
                              </div>

                              <div id={style.box3}>
                                  <p id={style.countOfUser}>{user}</p>
                                    <button onClick={showUsers} >View Details</button>
                              </div>
                             
             </>
         );
     }

     export default Dashboard;