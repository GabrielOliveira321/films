import { BaseUILog } from "../../Ui/BaseUI";
import Loading from "../Loading";
import { Recommended } from "../Main";
import FilmesList from "./Films";

const RecommendedMovies = ({latest}: Recommended) => {

    let latestMovies;

    if (latest.length > 0) {
        latestMovies = <FilmesList films={latest} text={"Recomendados"} />;
    } else {
        latestMovies = (
            <BaseUILog>
                <Loading />
            </BaseUILog>
        );
    }

    return latestMovies; 
};

export default RecommendedMovies;




















// const RecommendedMovies = ({latest}: Recommended) => {
// 
    // let latestMovies;
// 
    // if (latest.length > 0) {
      // latestMovies = (
        // <FilmesList films={latest} />
      // )
    // } else {
      // latestMovies = <BaseUILog><Loading/></BaseUILog>
    // }
// 
  // return (
    // {latestMovies}
        // <FilmesList films={latest} />
  // );
// };
// 
// export default RecommendedMovies;
// 