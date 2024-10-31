// import React, { Children, ReactNode, useRef } from "react";
// import { Movies } from "../../Interfaces/interfaces";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { BaseUIComponent, Description, Buttons, CardContainer, Article, ItemMembers, TextDiv, StarsDiv, SpanTetx, ThemeText, BaseUILog } from "../../Ui/BaseUI";
// import { IoStarSharp } from "react-icons/io5";
// import Loading from "../Loading";
// import { Link, useNavigate } from "react-router-dom";

// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { IoStarSharp } from "react-icons/io5";
// import { BaseUIComponent, Description, Buttons, CardContainer, Article, ItemMembers, TextDiv, StarsDiv, SpanTetx, ThemeText } from "../../Ui/BaseUI";
// import { Movies } from "../../Interfaces/interfaces";
// import { useNavigate } from "react-router-dom";
// import { useRef } from "react";

import React, { useRef } from "react";
import { Movies } from "../../Interfaces/interfaces";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BaseUIComponent, Description, Buttons, CardContainer, Article, ItemMembers, TextDiv, StarsDiv, SpanTetx, ThemeText, BaseUILog } from "../../Ui/BaseUI";
import { IoStarSharp } from "react-icons/io5";
import Loading from "../Loading";
import { Link, useNavigate } from "react-router-dom";
import useStore from "../UserStorage";

interface LastMovies {
  films: Movies[];
  text: String;
}

const FilmesList = ({ films, text }: LastMovies) => {

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate(); 
  
    const {setMovie} = useStore();

    const handlerScrollLeft = () => { if (scrollContainerRef.current) { scrollContainerRef.current.scrollBy({ left: -1000, behavior: "smooth" })}};  
    const handlerScrollRight = () => { if (scrollContainerRef.current) { scrollContainerRef.current.scrollBy({ left: 1000, behavior: "smooth" })}};
  
    const handlerFilm = (slipont: String, filmes: Movies) => {
        setMovie([filmes]);
        navigate(`/info-movie=/${slipont}`);
    }

    return (
        <BaseUIComponent>
            <Description>
                {text}
            </Description>
            
            <Buttons>
              <ChevronLeft size={24} color="#EEEEEE" onClick={handlerScrollLeft} />
              <ChevronRight size={24} color="#EEEEEE" onClick={handlerScrollRight} />
            </Buttons>

            <CardContainer ref={scrollContainerRef}>
                {films.map((film) => (
                    <Article key={film.id} onClick={ () => handlerFilm(film.title, film)}>
                        <ItemMembers>
                            <TextDiv>
                                <StarsDiv>
                                    <strong><IoStarSharp size={'24'} color="yellow" /><p>{film.vote_average.toFixed(1)}</p></strong>
                                </StarsDiv>
                                <img src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt={film.title} />
                                
                                <SpanTetx>
                                    <p>{film.title.slice(0, 25)}</p>
                                </SpanTetx>
            
                                <ThemeText>
                                    <a 
                                      onClick={(e) => {e.stopPropagation()}}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      href={`https://youtube.com/results/?search_query=${film.title} Trailer`}
                                    >
                                        Assistir ao trailer
                                    </a>
                                </ThemeText>
                            </TextDiv>
                        </ItemMembers>
                    </Article>
                ))}
            </CardContainer>
        </BaseUIComponent>
    );
};

export default FilmesList;
