import React from "react";
import '../styles/app.css';
import LandingPage from "./LandingPage";
import styled from "styled-components";
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Login from "./Login.js";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FaCog } from "react-icons/fa";
import Home from "./Home";
import { Link } from "react-router-dom";
import User from "./User";

function App() {
  return (
    <BrowserRouter>
      <Main>
        <Dashboard>
          <Link to="/home">
            <AiFillHome />
          </Link>
          <Link to="/users">
            <AiOutlineUser />
          </Link>
          <FaCog />
        </Dashboard>
        <Switch>
          <Route path="/" exact>
            <div className="App">
              <LandingPage />
            </div>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/auth">
            <Login />
          </Route>
          <Route path="/users">
            <User />
          </Route>
        </Switch>
      </Main>
    </BrowserRouter>
  );
}

export default App;


const Main = styled.div`
display:flex;
`

const Dashboard = styled.nav`
  min-height: 100vh;
  width: 5vw;
  background-color: #fff;
  position:fixed;
  left:0px;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    margin: 1rem;
    cursor: pointer;
  }
`;