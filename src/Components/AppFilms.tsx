import Header from "./Header";
import Main from "./Main";
import { FilmsComponent, Footer, Copiringth } from "./Styleds/styledAppFilms";

const AppFilms = () => {

  return (
    <FilmsComponent>
      <Header />
      <Main/>
      <Footer>
        <Copiringth>© 2024 Rader. All rights reserved</Copiringth>
      </Footer>
    </FilmsComponent>
  );
};

export default AppFilms;