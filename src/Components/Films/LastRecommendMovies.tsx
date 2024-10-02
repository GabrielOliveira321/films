import React, { useRef } from "react";
import { Movies } from "../../Interfaces/interfaces";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BaseUIComponent, Description, Buttons, CardContainer, Article, ItemMembers, TextDiv, StarsDiv, SpanTetx, ThemeText, BaseUILog } from "../../Ui/BaseUI";
import { IoStarSharp } from "react-icons/io5";
import Loading from "../Loading";

interface LastMovies {
  films: Movies[];
}

const LastRecommendMovies = ({ films }: LastMovies) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handlerScrollLeft = () => { if (scrollContainerRef.current) { scrollContainerRef.current.scrollBy({ left: -1000, behavior: "smooth" })}};

  const handlerScrollRight = () => { if (scrollContainerRef.current) { scrollContainerRef.current.scrollBy({ left: 1000, behavior: "smooth" })}};

  const handlerFilm = () => {
    alert("OI")
  }

  let filmsLoading;

  if (films.length > 0) {
    filmsLoading = (
        <BaseUIComponent>
            <Description>
                Ultimos lançamentos
            </Description>
          <Buttons>
            <ChevronLeft size={24} color="#EEEEEE" onClick={handlerScrollLeft} />
            <ChevronRight size={24} color="#EEEEEE" onClick={handlerScrollRight} />
          </Buttons>

          <CardContainer ref={scrollContainerRef}>
            {films.map((film) => (
              <Article key={film.id} onClick={handlerFilm}>
                <ItemMembers>
                  <TextDiv>
                    <StarsDiv>
                        <strong><IoStarSharp size={'24'} color="yellow" /><p>{film.vote_average.toFixed(1)}</p></strong>
                    </StarsDiv>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
                      alt={film.title}
                      style={{ width: "100%" }}
                    />
                    <SpanTetx>
                      <p>{film.title.slice(0, 25)}</p>
                    </SpanTetx>
            
                    <ThemeText>
                      <a
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="external"
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
    )


  } else {
    filmsLoading = <BaseUILog><Loading/></BaseUILog>
  }

  return (
    filmsLoading
  );
};

export default LastRecommendMovies;