import styled from 'styled-components';

const Section = styled.section`
    min-height: 320px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Slider = styled.div`
    height: 200px;
    width: 80%;

    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar{
        height: 6px;

        background: #FEFCFD;
        border-radius: 20px;
    }

    &::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 20px;
    }

`;

const Card = styled.div`
    height: 140px;
    width: 130px;
 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
 
    border-radius: 3px;
    flex: 0 0 auto;
    
    background: #FEFCFD;
`;

const Weekday = styled.span`
    display: block;
    padding: 2px 0;
`; 

const Sun = styled.img`
    height: 60px;
    width: 65px;
    /* border-radius: 50%;
    background: #ffe168; */
`; 

const Rain = styled.div`
    height: 50px;
    width: 50px;
    background: blue;
`; 

const Cloud = styled.img`
    height: 20px;
    width: 50px;
    background: #ccc;

`; 

const Temperature = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;

    font-weight: 600;

    & span{
        color: #ccc;
    }
`;

export { Section, Slider, Card, Weekday, Sun, Cloud, Rain, Temperature };