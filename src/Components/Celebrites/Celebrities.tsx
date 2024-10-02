import React, { useRef } from "react";
import useStore from "../UserStorage/index";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BaseUI, { Buttons, CardContainer, Article, Description, ItemMembers, TextDiv, ThemeText, BaseUILog } from "../../Ui/BaseUI";
import Loading from "../Loading";
import { Celebridades } from "../Main";
import { Celebrity } from "../../Interfaces/interfaces";

const Celebrities: React.FC<Celebridades> = ({celebrities}) => {

  const {setPerson, person} = useStore();

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const handlerScrollLeft = () => { if (scrollContainerRef.current) {scrollContainerRef.current.scrollBy({ left: -1000, behavior: "smooth" });}}
  const handlerScrollRight = () => { if (scrollContainerRef.current) { scrollContainerRef.current.scrollBy({ left: 1000, behavior: "smooth" });}}

  const handlerCelebrities = (celebritie: Celebrity) => {
    setPerson([celebritie])
  }

  let celebriteLoading;

  if(celebrities.length > 0) {
    celebriteLoading = (
    <BaseUI>
      <Description>
        Celebridades
      </Description>
      <Buttons >
        <ChevronLeft  size={24} color="#EEEEEE" onClick={handlerScrollLeft} />
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
  )} else {
    celebriteLoading =  <BaseUILog><Loading/></BaseUILog> 
  };

  return (
    celebriteLoading
  )
}

export default Celebrities;