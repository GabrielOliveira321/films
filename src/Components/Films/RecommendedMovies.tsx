import { useRef } from "react";
import { LaststMovies } from "../../Interfaces/interfaces";
import { Article, BaseUIComponent, Buttons, CardContainer, Description, ItemMembers, SpanTetx, StarsDiv, TextDiv, ThemeText } from "../../Ui/BaseUI";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IoStarSharp } from "react-icons/io5";

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

    if (latest.length < 1) {
        latestMovies = <BaseUIComponent>
          <div>
            <h1 style={{color: "white"}}>Ops!</h1>
            <p style={{color: "white"}}>Carregando filmes</p>
          </div>
        </BaseUIComponent>
    } 

  return (
    <BaseUIComponent>
        
      <Description>
        Recomendados
      </Description>
        
      <Buttons>
        <ChevronLeft size={24} color="#EEEEEE"  onClick={handlerScrollLeft}/>
        <ChevronRight size={24} color="#EEEEEE" onClick={handlerScrollRight} />
      </Buttons>

          {latest.length > 1 ? latestMovies : <CardContainer ref={scrollContainerRef}>
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
  );
};

export default RecommendedMovies;

// completeSearchFilter = completeSearch.map((search) => (
//   <SearchArticle key={search.id}>
//       <img
//         src={`https://image.tmdb.org/t/p/original/${search.poster_path}`}
//         alt={search.title}
//       />
//       <Vote><IoStarSharp size={'15'} color="yellow" /><h4>{search.vote_average.toFixed(1)}</h4></Vote>

//       <CamponentText>
//           <p>{search.release_date}</p>
//           <h1>{search.title}</h1>
//       </CamponentText>
//   </SearchArticle>

{/* <CardContainer ref={scrollContainerRef}> */}
{/* {latest.map((recent) => ( */}
  // <Article key={recent.id} onClick={handlerFilm}>
    {/* <ItemMembers> */}
      {/* <TextDiv> */}
        {/* <StarsDiv> */}
          {/* <strong><IoStarSharp size={'24'} color="yellow" /><p>{recent.vote_average.toFixed(1)}</p></strong> */}
        {/* </StarsDiv> */}
          {/* <img src={`https://image.tmdb.org/t/p/original/${recent.poster_path}`} alt={recent.title} /> */}
        {/* <SpanTetx> */}
          {/* <p>{recent.title.slice(0, 25)}</p> */}
        {/* </SpanTetx> */}
{/*  */}
        {/* <ThemeText> */}
          {/* <a  */}
            // onClick={(e) => {e.stopPropagation()}}
            // target="_blank"
            // rel="noopener noreferrer"
            // href={`https://youtube.com/results/?search_query=${recent.title} Trailer`}
          // >
            {/* Assistir ao trailer */}
          {/* </a> */}
        {/* </ThemeText> */}
        {/* </TextDiv> */}
      {/* </ItemMembers> */}
    {/* </Article> */}
// ))}
{/* </CardContainer> */}