import { IoStarSharp } from "react-icons/io5";
import Loading from "../../Components/Loading";
import useStore from "../../Components/UserStorage";

import { Article, Description, ItemMembers, SpanTetx, StarsDiv, TextDiv, ThemeText } from "../../Ui/BaseUI";

const MovieInformation = () => {
    
    const { movie } = useStore();
    
    console.log(movie);
    console.log("MANGA");

    return(
        <>
             <h1 style={{color: 'white'}}>Ainda estou desenvolvendo melhor as pages de Filme</h1>
            {
                movie.map((item) => (
                  <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title}  key={item.id} style={{width: "30%"}} />
                ))
            }
        </>
    );
}
export default MovieInformation;


                      