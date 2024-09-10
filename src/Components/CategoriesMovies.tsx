import React, { useState } from "react";
import styled from "styled-components";
import useStore from "./UserStorage";
import { SearchFilter } from "../Ui/BaseFilter";
import SearchField from "./SearchField/SearchField";

const Menu = styled.menu `
    width: 420px;
    height: 420px;
    padding: 12px;
    gap: 12px;
    border-radius: 24px;
    opacity: 0px;
    background: #121212;
    z-index: 100000;
    right: 391px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 101px;
    position: absolute;
    flex-direction: column;

    ul {
        display: flex;
    }

    li {
        text-decoretion: none;
        width: 31px;
        height: 16px;
        gap: 0px;
        opacity: 0px;
        font-family: Inter;
        font-size: 12px;
        font-weight: 400;
        line-height: 14.52px;
        text-align: left;
        border: 1 px slod width:Hug (119px)px;
        padding: 4.5px 12px 4.5px 12px;
        gap: 0px;
        border-radius: 99px;
        flex-direction: column;
        list-style: none;
        background-color: gray;
        cursor: pointer;
    }
`

const DivDate = styled.div `
    // width: 100%;
    height:71px;
    gap: 8px;
    position: absolute;
    top: 75%;
    opacity: 0px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    label {
        display:flex;
        width: 353px;
        height: 15px;
        gap: 0px;
        opacity: 0px;
        font-family: Inter;
        font-size: 12px;
        font-weight: 500;
        line-height: 14.52px;
        // text-align: left;
    }

    input {
        width: 164.5px;
        height: 48px;
        gap: 4px;
        opacity: 0px;
        background: #313131;
        border: none;
        border-radius: 12px;
        margin: 0 5px;
        
    }
`

const CategoriesMovies = () => {

    const [newDate, setNewDate] = useState<string>("");
    const { completeSearch } = useStore();
    console.log(completeSearch);

    let MyMovies;   

    // if() {
        // MyMovies = <SearchField />
    // }

    return (
        <div>
            {MyMovies}
        </div>
    );
}

export default CategoriesMovies;










    // <Menu style={{display: "flex", justifyContent: "center"}}>
    //     <div style={{width: '100%', display: "flex"}}>
    //         <ul>
    //             <li onClick={() => alert('oi')}>Ação</li>
    //             <li onClick={() => alert('oi')}>Aventura</li>
    //             <li onClick={() => alert('oi')}>Comédia</li>
    //             <li onClick={() => alert('oi')}>Drama</li>
    //             <li onClick={() => alert('oi')}>Terror</li>
    //             <li onClick={() => alert('oi')}>Ficção Científica</li>
    //         </ul>
    //     </div>

    //     <DivDate>
    //         <label htmlFor="date-input">Data de lançamento</label>
    //         <input 
    //             type="date" 
    //             id="date-input" 
    //             value={newDate} 
    //             onChange={(e) => setNewDate(e.target.value)} 
    //         />

    //         a

    //         <input 
    //             type="date" 
    //             id="date-input" 
    //             value={newDate} 
    //             onChange={(e) => setNewDate(e.target.value)} 
    //         />
    //     </DivDate>
    // </Menu>
