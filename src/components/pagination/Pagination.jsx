import React from "react";
import { Container } from "./styles";

const Pagination = (props) => {
    const {page, totalPages, nextPage, proviousPage} = props
    return (
        <Container >
            <button onClick={proviousPage}>◀️</button>
            <div>{page} of {totalPages}</div>
            <button onClick={nextPage}>▶️</button>
        </Container>
    )
}

export default Pagination;