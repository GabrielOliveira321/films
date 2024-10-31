import { BaseUILog } from "../../Ui/BaseUI";
import Loading from "../Loading";
import { LastMovies } from "../Main";
import FilmesList from "./Films";

const LastRecommendMovies = ({ films }: LastMovies) => {

  let latestMovies;

  if (films.length > 0) {
      latestMovies = <FilmesList films={films} text={"Ultimos lançamentos"} />;
  } else {
      latestMovies = (
          <BaseUILog>
              <Loading />
          </BaseUILog>
      );
  }

  return (
    latestMovies
  );
};

export default LastRecommendMovies;