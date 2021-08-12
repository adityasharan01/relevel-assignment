import styled from "styled-components"
import React from "react";

const JobCard = ({eachJob }) => {
    return ( 
        <Container>
            <h3>{eachJob.title}</h3>
            <p>{eachJob.description}</p>
        </Container>
        
     );
}
 
export default JobCard;


/* ---------------------------- styled components --------------------------- */

const Container = styled.div`
    height: 10rem;
    background-color: #fff;
    padding: 1rem;

    h3 {
        padding-bottom: 3px;
        border-bottom: 1px solid #ccc;
    }


`;
