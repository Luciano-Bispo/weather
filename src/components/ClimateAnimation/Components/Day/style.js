import styled from 'styled-components';

export const Wrapper = styled.div`

    /* limpo */
    /* #64b5ce */

    /* nublado */
    /* #b5c9ce */

    height: 100%;
    width: 100%;

    background: ${(props) => props.cloud ? '#b5c9ce' : '#64b5ce'}; 
    
    position: relative;

    overflow: hidden;

    .drop-big-1,.drop-big-2, .drop-big-3,.drop-big-4,
    .drop-big-5,.drop-big-6, .drop-big-7,.drop-big-8,
    .drop-big-9,.drop-big-10, .drop-big-11,.drop-big-12,
    .drop-big-13,.drop-big-14, .drop-big-15,.drop-big-16,
    .drop-big-17,.drop-big-18, .drop-big-19,.drop-big-20,
    .drop-big-21,.drop-big-22, .drop-big-23,.drop-big-24,
    .drop-big-25,.drop-big-26, .drop-big-27,.drop-big-28,
    .drop-big-29,.drop-big-30,
    .drop-medium-1,.drop-medium-2, .drop-medium-3,.drop-medium-4,
    .drop-medium-5,.drop-medium-6, .drop-medium-7,.drop-medium-8,
    .drop-medium-9,.drop-medium-10, .drop-medium-11,.drop-medium-12,
    .drop-medium-13,.drop-medium-14, .drop-medium-15,.drop-medium-16,
    .drop-medium-17,.drop-medium-18, .drop-medium-19,.drop-medium-20,
    .drop-medium-21,.drop-medium-22, .drop-medium-23,.drop-medium-24,
    .drop-medium-25,.drop-medium-26, .drop-medium-27,.drop-medium-28,
    .drop-medium-29,.drop-medium-30,
    .drop-small-1,.drop-small-2, .drop-small-3,.drop-small-4,
    .drop-small-5,.drop-small-6, .drop-small-7,.drop-small-8,
    .drop-small-9,.drop-small-10, .drop-small-11,.drop-small-12,
    .drop-small-13,.drop-small-14, .drop-small-15,.drop-small-16,
    .drop-small-17,.drop-small-18, .drop-small-19,.drop-small-20,
    .drop-small-21,.drop-small-22, .drop-small-23,.drop-small-24,
    .drop-small-25,.drop-small-26, .drop-small-27,.drop-small-28,
    .drop-small-29,.drop-small-30, .drop-small-30,.drop-small-31,
    .drop-small-32,.drop-small-33, .drop-small-34,.drop-small-35 {

        background: #629aad;
    }
`;

export const Sun = styled.div`
    width: 80px;
    height: 80px;

    position: absolute;
    left: 90px;
    top: 50px;

    border-radius: 50%;

    background: #ffe168;
    box-shadow: 0 0 10px 0 #ffe168;

    animation: rise 1s ease-out;
`;
