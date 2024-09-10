import React, { useState } from "react";

const FilterFilms = () => {

    const [inputFilter, setInputFilter] = useState<string>('');

    return(
        <>
            <input type="text" value={inputFilter} onChange={(e) => setInputFilter(e.target.value)}  />
        </>
    )
}

export default FilterFilms;