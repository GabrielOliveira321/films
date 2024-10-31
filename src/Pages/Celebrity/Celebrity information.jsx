import { CelebrityArticle, CelebrityDiv, CelebrityIMG, CelebrityId, NameH3 } from "../../Components/Styleds/styledCelebrity";
import Loading from "../../Components/Loading";
import { useEffect, useMemo, useState } from "react";
import useStore from "../../Components/UserStorage";

const CelebrityInformation = () => {

    const { person } = useStore();

    useMemo(() => {}, [person]);

    return (
        <CelebrityDiv>
          <h1 style={{color: 'white'}}>Ainda estou desenvolvendo melhor a rota celebridades</h1>
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

export default CelebrityInformation;
