import React, { useState,useEffect } from "react";
import Button from "./componants/Button";
import CandidateCard from "./componants/CandidateCard";
import axios from 'axios';

// import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoding] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [salary, setSalary] = useState("asc");

  useEffect(()=>{
    fetchData({
      page,
      salary
    })
  },[page,salary])

    const fetchData =  async ({page})=>{
      setLoding(true);
      axios({
        method: 'get',
        url : " http://localhost:3000/candidates",
        params:{
          _page: page,
          _limit : 5,
          _sort :  "salary"
        }
    })
    .then(res=>{
      setData(res.data);
      setLoding(false);
    })
    .catch(err=>{
      setError(true);
      setLoding(false);
    })
  
  console.log(data)
    }
    
   

  return (
    <div className="App">
      <div>
        
        {loading &&<div id="loading-container">...Loading</div>}
        <Button  id="SORT_BUTTON" title={`Sort by Ascending Salary`} onClick={()=>setSalary("asc")} />
        {/* <Button disabled={page===1} onClick={()=>setPage(page-1)} title="PREV" id="PREV" /> */}
        {/* <Button onClick={()=> setPage(page+1)} id="NEXT" title="NEXT" /> */}
        <PaginationComponent  currentPage= {page} lastPage= {5} onPageChange={setPage}/>
      </div>
      {
      data.map((item) => 
       <CandidateCard key={item.id} {...item} />)
      }
    </div>
  );
}

const PaginationComponent = ({
  currentPage,
  lastPage,
  onPageChange
})=>{
  const arr = new Array (lastPage).fill(0);
  return(
    <div>
      {
        arr.map((item,page)=><button onClick={()=>onPageChange(page+1)} disabled={(page+1)===currentPage}>{page+1}</button>)
      }
    </div>
  )
}

