import React, { useState } from "react";
import { Container } from "./styles";

const Search = (props) => {
    const { onSearch } = props
    const [search, setSearch] = useState("")

    const onChangeHandler = (e) => {
        setSearch(e.target.value)
        if (e.target.value.length === 0) {
            onSearch(undefined)
        }
    }

    const onButtonClickHandler = () => {
        onSearch(search)
    }

    return (
        <Container>
            <input placeholder="Search pokemon" onChange={onChangeHandler} />
            <button onClick={onButtonClickHandler} >Search</button>
        </Container>
    )
}

export default Search;