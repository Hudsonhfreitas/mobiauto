"use client";

import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 530px;
  padding: 40px 80px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0,0,0,0.3);
  margin-top: 20px;
`;

export const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 32px;
    line-height: 120%;
    color: #000;
    text-align: center;
`

export const Subtitle = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    line-height: 120%;
    color: #000;
    text-align: center;
    display: block;
    margin-top: 10px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Result = styled.div`
  width: 100vw;
  height: 100vh;
`
