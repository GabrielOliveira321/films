// import React, { useRef } from "react";
import useStore from "../../Components/UserStorage/index";

const CelebrityPerson = () => {

    const { person } = useStore();
    
    console.log(person);

    return (
        <div>
            {/* {person.map((item) => (
                <article key={item.id}>
                    <h1 color="white">{item.name}</h1>
                </article>
            ))} */}
        </div>
    )
}

export default CelebrityPerson;