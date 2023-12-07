import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.5em;
    margin: 0.5em 0;
    border: 1px solid #ccc;
    border-radius: 3px;
`;

export const Textarea = styled.textarea`
    width: 100%;
    padding: 0.5em;
    margin: 0.5em 0;
    border: 1px solid #ccc;
    border-radius: 3px;
`;

export const Select = styled.select`
    width: 100%;
    padding: 0.5em;
    margin: 0.5em 0;
    border: 1px solid #ccc;
    border-radius: 3px;
`;

export const Button = styled.button`
    padding: 0.5em;
    margin: 0.5em 0;
    border: 1px solid #ccc;
    border-radius: 3px;
    cursor: pointer;
    background: #F5F5F5;
    color: black;
    width: 100%;
`;

export const Line = styled.hr`
    width: 250px;
    background: #F5F5F5;
    margin: 20px 0px 20px;
`;

export const Entries = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 10px;
    margin: 10px;
    background: #FFFEAD;
`;

export const CardItem = styled.div`
    & > label {
        font-weight: bold;
    }
    & > span {
        margin-left: 5px;
        margin-right: 5px;
    }
`;