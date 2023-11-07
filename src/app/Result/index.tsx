"use client"

import { UseGlobalContext } from "../Context/store"
import * as S from './styles'

export default function Result() {
    const { result } = UseGlobalContext()
    return (
        <S.Content>
            <S.Title>Tabela Fipe: Preço {result.Marca} {result.Modelo} {result.AnoModelo}</S.Title>
            <S.Price>{result.Valor}</S.Price>
            <S.Paragraph>Este é o preço de compra do veículo</S.Paragraph>
        </S.Content>
    )
}