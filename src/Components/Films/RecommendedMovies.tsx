import { useRef } from "react";
import { LaststMovies } from "../../Interfaces/interfaces";
import { Article, BaseUIComponent, BaseUILog, Buttons, CardContainer, Description, ItemMembers, SpanTetx, StarsDiv, TextDiv, ThemeText } from "../../Ui/BaseUI";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IoStarSharp } from "react-icons/io5";
import Loading from "../Loading";

interface Recommended {
  latest: LaststMovies[];
}

const RecommendedMovies = ({latest}: Recommended) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handlerScrollLeft = () => { if (scrollContainerRef.current) {scrollContainerRef.current.scrollBy({ left: -1000, behavior: "smooth" });}}
    const handlerScrollRight = () => { if (scrollContainerRef.current) { scrollContainerRef.current.scrollBy({ left: 1000, behavior: "smooth" });}}

    // const [latestMovies, setLatestMovies] = useState<any>();

    let latestMovies;
    const handlerFilm = () => { alert("OI") }

    if (latest.length > 0) {
      latestMovies = (
        <BaseUIComponent>
          <Description>
            Recomendados
          </Description>

          <Buttons>
            <ChevronLeft size={24} color="#EEEEEE"  onClick={handlerScrollLeft}/>
            <ChevronRight size={24} color="#EEEEEE" onClick={handlerScrollRight} />
          </Buttons>
              {latest.length < 1 ? latestMovies : <CardContainer ref={scrollContainerRef}>
                {latest.map((recent) => (
                  <Article key={recent.id} onClick={handlerFilm}>
                    <ItemMembers>
                      <TextDiv>
                        <StarsDiv>
                          <strong><IoStarSharp size={'24'} color="yellow" /><p>{recent.vote_average.toFixed(1)}</p></strong>
                        </StarsDiv>
                          <img src={`https://image.tmdb.org/t/p/original/${recent.poster_path}`} alt={recent.title} />
                        <SpanTetx>
                          <p>{recent.title.slice(0, 25)}</p>
                        </SpanTetx>
                
                        <ThemeText>
                          <a 
                            onClick={(e) => {e.stopPropagation()}}
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`https://youtube.com/results/?search_query=${recent.title} Trailer`}
                          >
                            Assistir ao trailer
                          </a>
                        </ThemeText>
                      </TextDiv>
                    </ItemMembers>
                  </Article>
                ))}
            </CardContainer>}
        </BaseUIComponent>
      )
    } else {
      latestMovies = <BaseUILog><Loading/></BaseUILog>
    }

  return (
    latestMovies
  );
};

export default RecommendedMovies;
