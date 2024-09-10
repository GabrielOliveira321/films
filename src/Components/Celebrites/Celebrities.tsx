import { useRef } from "react";
import { Celebrity } from "../../Interfaces/interfaces";
import BaseUI, { Buttons, CardContainer, Article, Description, ItemMembers, TextDiv, ThemeText } from "../../Ui/BaseUI";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useStore from "../UserStorage/index";

interface Actors {
  celebrities: Celebrity[];
}

const Celebrities = ({celebrities}: Actors) => {

  const {setPerson, person} = useStore();

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const handlerScrollLeft = () => { if (scrollContainerRef.current) {scrollContainerRef.current.scrollBy({ left: -1000, behavior: "smooth" });}}
    const handlerScrollRight = () => { if (scrollContainerRef.current) { scrollContainerRef.current.scrollBy({ left: 1000, behavior: "smooth" });}}

    const handlerCelebrities = (celebritie: any) => { 
        
    }

    return (
      <BaseUI>
        <Description>
          Celebridades
        </Description>

        <Buttons>
          <ChevronLeft size={24} color="#EEEEEE" onClick={handlerScrollLeft} />
          <ChevronRight size={24} color="#EEEEEE" onClick={handlerScrollRight} />
        </Buttons>

        <CardContainer ref={scrollContainerRef}>
          {celebrities.map((celebritie) => (
            <Article key={celebritie.id} onClick={() => handlerCelebrities(celebritie)}>
              <ItemMembers>
                <img src={`https://image.tmdb.org/t/p/original/${celebritie.profile_path}`} style={{height: ''}}  alt={celebritie.name} />
                <TextDiv>
                  <ThemeText>
                    <p>{celebritie.name}</p>
                  </ThemeText>
                </TextDiv>
              </ItemMembers>

            </Article>
          ))}
        </CardContainer>
      </BaseUI>
    )
}

export default Celebrities;