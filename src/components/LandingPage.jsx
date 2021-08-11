import styled from "styled-components"
import React, { useEffect, useState } from "react";

// import {AiFillHome} from "react-icons/ai"
// import {AiOutlineUser} from "react-icons/ai"
// import {FaCog} from "react-icons/fa"

import axios from "axios";
import JobCard from "./JobCard";

import { Link } from "react-router-dom";


const LandingPage = () => {

    const [jobs, setJobs] = useState([]);
    const url = '/jobs.json'

    useEffect(()=> {
        axios.get(url)
        .then(data => setJobs(data.data))
    }, [url])
 

    return ( 
        <Container>
            {/* <Dashboard>
                <AiFillHome />
                <AiOutlineUser />
                <FaCog />
            </Dashboard> */}
            <Screen>
                <div className="screen-container">
                    <Link to="/auth">
                    <button className="btn-login">Login & Get Started</button>
                    </Link>
                   
                    <form>
                        <input type="text" name="textInput" value="" placeholder="Search for jobs and hit enter .." />
                        <button type="submit" className="btn-submit">SEARCH</button>
                    </form>
                    <div className="job-listing__container">
                        {jobs && jobs.map(item => <JobCard eachJob={item}/>)}
                    </div>
                </div>

            </Screen>


        </Container>
     );
}
 
export default LandingPage;

/* ---------------------------- styled components --------------------------- */

const Container = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    background-color: hsl(226, 94%, 94%);

    display: flex;


`;

const Dashboard = styled.nav`
    min-height: 100vh;
    width: 5vw;
    background-color: #fff;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
        margin: 1rem;
        cursor: pointer;
    }
`;

const Screen = styled.div`
    width: 100%;
    padding: 4rem 10rem;

    .screen-container {
    }

    .job-listing__container {
        padding-top: 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

        gap: 1rem;
    }


    .btn-login {
        margin-bottom: 2rem;
        background-color: hsl(213, 74%, 65%);
        padding: 0.4rem;
        border-radius: 2px;
        border: none;
        cursor: pointer;

    }

    form {
        input {
            width: 70%;
            padding: 0.4rem;
        }

        .btn-submit {
            width: 20%;
            padding: 0.4rem;
            border: none;
            cursor: pointer;
            background-color: hsl(213, 74%, 65%);
            padding: 0.4rem;
            border-radius: 2px;
        }
    }

`;