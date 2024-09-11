import React from "react";
import useStore from "../UserStorage/index";

import { SearchFilter, SearchArticle, CamponentText, Vote, DivSearchFilter, SearchNone } from "../../Ui/BaseFilter";
import { IoStarSharp } from "react-icons/io5";

const SearchField = () => {

    const { completeSearch, searchFilms } = useStore();
    
    let userSearch = completeSearch.filter((e) => { return e.original_title.toLowerCase().includes(searchFilms.toLowerCase()) })  
    let completeSearchFilter;

    if(userSearch.length == 0 || searchFilms === "") {
        completeSearchFilter = (  
            <SearchNone>
                <h1>Nenhum filmes pesquisado...</h1>
            </SearchNone>)
    } else if (userSearch) {
        completeSearchFilter = completeSearch.map((search) => (
            <SearchArticle key={search.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${search.poster_path}`}
                  alt={search.title}
                />
                <Vote><IoStarSharp size={'15'} color="yellow" /><h4>{search.vote_average.toFixed(1)}</h4></Vote>
    
                <CamponentText>
                    <p>{search.release_date}</p>
                    <h1>{search.title}</h1>
                </CamponentText>
            </SearchArticle>
        ));
    } 

    return (
        <DivSearchFilter>
            <SearchFilter>
               {completeSearchFilter}
            </SearchFilter>
        </DivSearchFilter>
    )

}

export default SearchField;



{/* <SearchFilter> */}
{/* {completeSearchFilter} */}
{/* </SearchFilter> */}
// const igual = completeSearch.map((movie) => movie.title);