import React, { useRef } from "react";
import useStore from "../UserStorage/index";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BaseUI, { Buttons, CardContainer, Article, Description, ItemMembers, TextDiv, ThemeText, BaseUILog } from "../../Ui/BaseUI";
import Loading from "../Loading";
import { Celebridades } from "../Main";
import { Celebrity } from "../../Interfaces/interfaces";
import { useNavigate } from "react-router-dom";
const Celebrities: React.FC<Celebridades> = ({celebrities}) => {

  const {setPerson, person} = useStore();

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const handlerScrollLeft = () => { if (scrollContainerRef.current) {scrollContainerRef.current.scrollBy({ left: -1000, behavior: "smooth" });}}
  const handlerScrollRight = () => { if (scrollContainerRef.current) { scrollContainerRef.current.scrollBy({ left: 1000, behavior: "smooth" });}}

  const navigate = useNavigate();

  const handlerCelebrities = (celebritie: Celebrity, name: string) => {
    setPerson([celebritie])
    navigate(`/Actor=/${name}`);
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
        {celebrities.map((celebritie, index) => (
          <Article key={celebritie.id} onClick={() => handlerCelebrities(celebritie, celebritie.name)}>
            {/* <Link to={`/Actor=/${celebritie.name}`}> */}

              <ItemMembers>
                {celebritie.profile_path === null ? <Loading/> : <img src={`https://image.tmdb.org/t/p/original/${celebritie.profile_path}`} alt={celebritie.name} />}
                <TextDiv>
                  <ThemeText>
                    <p>{celebritie.name}</p>
                  </ThemeText>
                </TextDiv>
              </ItemMembers>
            {/* </Link> */}
          </Article>
        ))}
      </CardContainer>
    </BaseUI>
  )} else {
    celebriteLoading =  <BaseUILog><Loading/></BaseUILog> 
  };

  return (

    <>
      {celebriteLoading}
    </>
  )
}

export default Celebrities;



    // const personStore = localStorage.getItem("@celebrity");
    // let saveCelebrity = personStore ? JSON.parse(personStore) : [];
    // 
    // const hasCelebrity = saveCelebrity.some((saveCelebrity: { id: number; }) => {
      // return saveCelebrity.id === celebritie.id
    // });
// 
    // if (!hasCelebrity) {
      // saveCelebrity.push(celebritie);
      // localStorage.setItem("@celebrity", JSON.stringify(saveCelebrity));
      // setPerson([celebritie])
    // }