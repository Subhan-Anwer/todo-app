'use client'
import Header from "@/components/header";
import { useState, FormEvent } from "react";
export default function Home() {
  const [title, settitle] = useState<string>('');
  // const [mainTask, setMainTask] = useState<Task[]>([]);

  let listContainer = document.getElementById('list-container');

  const addTask = () => {
    if (title === '') {
      alert('PLease enter a task'); 
    } else {
      let li = document.createElement("li");
      li.innerHTML = `${title} <span></span>`; 
      listContainer?.appendChild(li);   
    }
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();                                  // Preventing the page from refreshing
    // setMainTask([...mainTask, { title }]);
    settitle('');                                        // Clearing the input field
    addTask();
  }

  listContainer?.addEventListener('click', (e: any) => {
    const target = e.target as HTMLElement;
    if (target.tagName === "LI") {
      target.classList.add("checked");
    } else if (target.tagName === "LI" && target.classList.contains("checked")) {
      target.classList.remove("checked");
    } else if (target.tagName === "SPAN") {
      target.parentElement?.remove();
    }    
  })

  


  
  return (
    <div>
      <Header/>
      <div className="flex flex-col w-full max-w-[540px] bg-[#212121] text-[#b8b8b8] mt-[100px] mx-auto mb-[20px] pt-[40px] px-[30px] pb-[70px] rounded-[15px]">

        
        <form onSubmit={submitHandler} className="flex justify-center w-[90%] mx-auto mb-[50px]">
          <input type="text" id="input-box" placeholder="Write your task here" className="h-[50px] w-[400px] rounded-[60px] rounded-r-[0px] border-[3px] border-r-0 border-solid border-[#303030] bg-[#161616] px-[20px] active:bg-outline-none focus:outline-none" value={title} onChange={(e) => {
            settitle(e.target.value)
          }}/>
          <button className="h-[50px] w-[80px] bg-[#303030] rounded-r-[50px] z-[1] active:bg-outline-none focus:outline-none">Add</button>
        </form>



        <ul id="list-container">
          <li className="checked">Task 1 Task 1 Task 1 Task 1 Task 1 Tas ka s s <span></span></li>
        </ul>


      </div>
    </div>
  );








}
