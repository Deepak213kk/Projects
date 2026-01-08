import React from "react";
import "./home.css";
// import Todo from "../todo/Todo";

const Home=() => {
    return <div className="home d-flex justify-content-center align-Items-center">
        <div className="container d-flex justify-content-center align-items-center flex-column"><h1 className="text-center">
            Organize your <br/> work and life, finally.</h1>
            <p>
                Become focused, organized, and calm with<br/>
                todo app. The world's #1 task manager app</p>
                {/* <div class="home-btn p-2 container" onClick={<Todo />}> Make todo list </div> */}
                <a href="/todo">
  <button class="home-btn p-2">
    Make todo list
  </button>
</a>

                    </div>
                   
    </div>
};
export default Home;