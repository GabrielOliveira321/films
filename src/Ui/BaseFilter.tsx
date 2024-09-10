import styled from "styled-components";

export const SearchNone = styled.div `
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 12px;
    // margin: auto;
    // margin: 0 auto;
    align-items: center;
`

export const DivSearchFilter = styled.div ``

export const SearchFilter = styled.div `
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 400px;
    height: 270px;
    padding: 12px;
    gap: 12px;
    border-radius: 24px;
    opacity: 1;
    z-index: 100;
    background: #232323;
    position: absolute;
    top: 100px;
    left: 49%;
    transform: translateX(-50%);
    overflow: auto;
`
export const SearchArticle = styled.article `
    display: flex;
    background: #484848;
    margin: 10px;
    border-radius: 10px;
    align-items: center;
    padding: 3px 10px;

    img {
        width: 64px;
        height: 86px;
        gap: 0px;
        border-radius: 12px;
        border: 2px;
        opacity: 0px;
        
    }

    h1 {
        font-size: 18px;
        margin-top: 30px;
    }

    p {
        font-size: 14px;
        width: 50%;
        position: absolute;
        margin-bottom: 60px;
    }
`
export const CamponentText = styled.div `
    display: contents;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0px 15px;
    height: 100px;
`
export const Vote = styled.div `
    display: flex;
    align-items: center;
    height: 12px;
    position: absolute;
    right: 34px;
    margin-bottom: 75px;

    h4 {
        font-size: 14px;
    }

` 