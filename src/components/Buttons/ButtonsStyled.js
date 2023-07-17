import styled from 'styled-components' 

export const Section = styled.section`
width: 400px;
margin: 0 auto;
margin-top: 70px;
padding: 20px 0;
text-align:center

h2{
    margin: 0;
    font-size: 25px;
}

div{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 20px 0;
}

button {
    width: 100px;
    padding: 10px;
    border-radius: 30px;
    font-size: 15px;
    text-transform: capitalize;
    background-color:blue;
    &:hover{
        background-color: yellow;
    }
    cursor: pointer;
    }

`