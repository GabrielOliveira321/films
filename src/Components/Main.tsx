import Celebrities from "./Celebrites/Celebrities";
import { Movies, Celebrity } from "../Interfaces/interfaces";
import RecommendedMovies from "./Films/RecommendedMovies";
import LastRecommendMovies from "./Films/LastRecommendMovies";
import styled from "styled-components";
import useStore from "./UserStorage";
import { useEffect, useState } from "react";
import { fetchCelebritiesTEST } from "../Api/ApiCelebrities";
import { fetchFilms, fetchLatest } from "../Api/ApiMovies";
import CelebrityPerson from "../Pages/Celebrity/Celebrity";
import { fetchMovies } from "../Api/ApiPesquisarFILMES";


export interface MainProps {
    films: Movies[];
}

export interface Celebridades {
    celebrities: Celebrity[];
}

const MainStyled = styled.main `
    width: 100%;
    padding: 20px 10px 20px 10px;
    gap: 32px;
    border-radius: 24px;
    opacity: 0px;
    box-sizing: border-box;
`

const Main = () => {
    
    const { films, celebrities, latest, setFilms, setCelebrities, setLatest, person } = useStore();
    const [openActor, setOpenActor]  = useState<boolean>(false);
    
    useEffect(() => {
        // const getFilms = async () => { const filmData = await fetchMovies(); setFilms(filmData) };
        const getFilms = async () => { const filmData = await fetchFilms(); setFilms(filmData) };
        const getCelebrities = async () => { const celebritiesData = await fetchCelebritiesTEST(); setCelebrities(celebritiesData)};
        const getLatest = async () => { const latestData = await fetchLatest(); setLatest(latestData) };
    
        getLatest(); getFilms(); getCelebrities();
    }, [setFilms, setCelebrities, setLatest]);
    
    return (
        <MainStyled>
            <button onClick={() => setOpenActor(!openActor)}></button>
           {
                openActor ? <CelebrityPerson person={person} /> 
                    :
                <>
                    <LastRecommendMovies films={films} />
                    <RecommendedMovies latest={latest} />
                    <Celebrities celebrities={celebrities}/>
                </> 
           }
        </MainStyled>
    )
}

export default Main;