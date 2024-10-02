import React, { useRef } from "react";
import useStore from "../../Components/UserStorage/index";
import { Person } from "../../Interfaces/interfaces";
import { CelebrityArticle, CelebrityIMG, CelebrityId } from "../../Components/Styleds/styledCelebrity";

interface Pessoa {
    person: Person[];
}

const CelebrityPerson = ({person}: Pessoa) => {

    console.log(person);

    return (
        <div>
            {
                person.map((item) => (
                    <CelebrityArticle key={item.id}>
                        <div>
                            <h3>{item.name}</h3>
                            <CelebrityId>{item.popularity.toFixed(0)}</CelebrityId>
                            <CelebrityIMG src={`https://image.tmdb.org/t/p/original/${item.profile_path}`} alt={item.name}></CelebrityIMG>
                        </div>
                    </CelebrityArticle>
                ))
            }
        </div>
    )
}

export default CelebrityPerson;