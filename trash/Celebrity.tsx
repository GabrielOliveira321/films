import { Person } from "../src/Interfaces/interfaces";
import { CelebrityArticle, CelebrityDiv, CelebrityIMG, CelebrityId, NameH3 } from "../src/Components/Styleds/styledCelebrity";
import Loading from "../src/Components/Loading";
// import { useStore } from "zustand";
import useStore from "../src/Components/UserStorage";

interface Pessoa {
    person: Person[];
}

const CelebrityPerson = ({person}: Pessoa) => {

    console.log(person);

    return (
        <CelebrityDiv>
          {/* <h1 style={{color: 'white'}}>Ainda estou desenvolvendo as rotas para receber as celebridades e serem apenas uma pagina delas com as informações pessoais delas</h1> */}

            {
                person.map((item) => (
                    <CelebrityArticle key={item.id}>
                        <CelebrityId>{item.popularity.toFixed(0)}</CelebrityId>
                        <NameH3>{item.name}</NameH3>
                        {item.profile_path === null ? <Loading/> :<CelebrityIMG src={`https://image.tmdb.org/t/p/original/${item.profile_path}`} alt={item.name}></CelebrityIMG>}
                    </CelebrityArticle>
                ))
            }
        </CelebrityDiv>
    )
}

export default CelebrityPerson;
