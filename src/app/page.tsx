"use client"

import { UseGlobalContext } from "@/app/Context/store";

import * as S from "./components/Form/styles";
import Form from "./components/Form";
import Result from "./Result";

export default function Home() {
  const { result } = UseGlobalContext()
  return (
    <S.Main>
          { result.Marca ? (
            <Result></Result>
          ) : (
            <>
            <S.Title>Tabela Fipe</S.Title>
          <S.Subtitle>
            Consulte o valor de um veículo de forma gratuita
          </S.Subtitle>
          <S.Container>
            <Form></Form>
          </S.Container>
          </>
          )}
    </S.Main>
  );
}
