import styled from '@emotion/styled';

export const MainSection = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(87, 81, 47, 0.89);
    color: white;
`;

export const VisuallyHidden = styled.h1`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    overflow: hidden;
`;

export const Container = styled.div`
    width: 600px;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 0px 25px 4px rgba(255, 255, 255, 0.89);
    background-color: #0056b8;
`;