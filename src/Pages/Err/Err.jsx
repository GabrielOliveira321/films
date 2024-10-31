import { Link } from "react-router-dom";

const Err = () => {

    return (
        <>
                <h1>Não encontrado...</h1>
                <Link to="/" style={{color: 'white'}}>
                    Voltar ao inicio
                </Link>
        </>
    )
}

export default Err;