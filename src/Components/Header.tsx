import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import useStore from "./UserStorage/index";
import SearchField from "./SearchField/SearchField";
import CategoriesMovies from "./CategoriesMovies";
import { TiThMenuOutline } from "react-icons/ti";
import { Search, HeaderConfi, SerachButton, InputSerach, OptionsFilter, Title } from "./Styleds/styledHeader";
import { CloseSection } from "../Ui/BaseFilter";

const Header = () => {

    const [searchMovies, setSearchMovies] = useState<boolean>(false);
    const [menuFilter, setMenuFilter] = useState<boolean>(false);
    
    const { searchFilms, setSearchFilms, films, setCompleteSearch} = useStore();

    const filteredItems = films.filter(movie => {
        return (
            movie.title.toLowerCase().includes(searchFilms.toLowerCase())
        );
    });
    
    function handlerSearch() {
        setSearchFilms(searchFilms);
        setCompleteSearch(filteredItems);
        setSearchMovies(true);
    }

    function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
        if(event.key === 'Enter') {
            setSearchFilms(searchFilms);
            setSearchMovies(true);
            setCompleteSearch(filteredItems);
        } else {
            return;
        }
    }

    return (
        <HeaderConfi>
                <Title onClick={() => setSearchMovies(false)}>RATER</Title>
                
                <Search>
                    <SerachButton onClick={handlerSearch}><CiSearch /></SerachButton><InputSerach type="text" placeholder="pesquisar" value={searchFilms} onChange={(e: { target: { value: string; }; }) => setSearchFilms(e.target.value)} onKeyPress={handleKeyPress}></InputSerach>
                    <OptionsFilter onClick={() => setMenuFilter(!menuFilter)}>
                        <TiThMenuOutline style={{fontSize: "20px"}}/>
                        {/* <CloseSection onClick={() => alert("IU")}>x</CloseSection> */}

                        {searchMovies ? <SearchField /> : <span></span>}
                        {/* {menuFilter === true && <CategoriesMovies  />} */}
                    </OptionsFilter>
                </Search>
        </HeaderConfi>
    )
}

export default Header;