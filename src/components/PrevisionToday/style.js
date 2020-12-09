import styled from 'styled-components';

export const Section = styled.section`
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;

    background: whitesmoke;
`;

export const Informations = styled.div`
    width: 80%;
    height: 150px;
    display: flex;
    justify-content: space-between;

    @media(max-width: 575px){
        width: 95%;
    }
`;

export const Container = styled.div`
    width: 70%;
    
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const City = styled.span`
    font-size: 3rem;

    @media(max-width: 515px){
        font-size: 2.4rem;
    }
    
    @media(max-width: 330px){
        font-size: 2.1rem;

    }
`;

export const Description = styled.span`
    font-size: 1.6rem;
    
    @media(max-width: 515px){
        font-size: 1.4rem;
    }

    @media(max-width: 315px){
        font-size: 1.3rem;
    }
`;

export const Conditions = styled.div`
    display: flex;
    margin-top: 20px;
    font-size: 1.15rem;
    
    & > div:first-child{
        margin-right: 15px;
    }
    
    @media(max-width: 515px){
        font-size: 1.05rem;
        flex-direction: column;
        justify-content: flex-start;
        margin-right: 0;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const Title = styled.span`
    margin-right: 5px;
`;

export const Temperature = styled.span`
    font-size: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 515px){
        font-size: 2.8rem;
    }
   
    @media(max-width: 390px){
        font-size: 2.8rem;
        align-items: flex-start;
    }
  
    @media(max-width: 380px){
        font-size: 2rem;
        align-items: flex-start;
        padding: 10px 0 0 0;
    }
`;