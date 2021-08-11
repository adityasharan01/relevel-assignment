import styled from "styled-components"
import React from "react";

const UserCard = ({eachUser}) => {
    return ( 
        <Container >
            <h3>{eachUser.name}</h3>
            <p>{eachUser.email}</p>
        </Container>
        
     );
}
 
export default UserCard;


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