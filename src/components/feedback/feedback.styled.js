import styled from '@emotion/styled';

export const BoxButton = styled.ul`
    list-style: none;
    width: 100%;
    margin-top: 20px;
    display: flex;
    gap: 20px;
    padding: 0;
`;

export const Elements = styled.li`
    flex-basis: calc(100% / 3);
    &:first-child Button:hover{
        color: #5db45d;
    }
    &:nth-child(2) Button:hover{
        color: #ffd900;
    }
`;

export const Button = styled.button`
    background: rgba(0, 0, 0, 0);
    border-bottom: 1px solid;
    color: white;
    padding: 0.25em;
    text-decoration: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
    line-height: 2.81;
    margin: 0 0 2em;
    max-width: 160px;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    width: 100%;
    border: 0 solid;
    border-radius: 8px;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
    outline: 1px solid;
    outline-color: rgba(255, 255, 255, 0.5);
    outline-offset: 0px;
    text-shadow: none;
    &:hover {
        position: absolute;
        color: #ff0000;
        border: 1px solid;
        box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
            0 0 20px rgba(255, 255, 255, 0.2);
        outline-color: rgba(255, 255, 255, 0);
        outline-offset: 15px;
    }
`;

export const SectionContainer = styled.div`
    font-size: 20px;
`;

export const Title = styled.h2`
    font-size: 40px;
`;

export const Box = styled.ul`
    list-style: none;
    margin-top: 20px;
`;

export const BoxItem = styled.li`
`;