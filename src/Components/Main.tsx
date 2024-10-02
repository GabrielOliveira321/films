import Celebrities from "./Celebrites/Celebrities";
import { Movies, LaststMovies, Celebrity, Person } from "../Interfaces/interfaces";
import RecommendedMovies from "./Films/RecommendedMovies";
import LastRecommendMovies from "./Films/LastRecommendMovies";
import styled from "styled-components";
import useStore from "./UserStorage";
import { useEffect, useState } from "react";
import { fetchCelebrities } from "../Api/Celebrities";
import { fetchFilms, fetchLatest } from "../Api/Movies";
import CelebrityPerson from "../Pages/Celebrity/Celebrity";


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
        const getFilms = async () => { const filmData = await fetchFilms(); setFilms(filmData) };
        const getCelebrities = async () => { const celebritiesData = await fetchCelebrities(); setCelebrities(celebritiesData)};
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