"use client";
import { useEffect, useState } from "react";
import * as S from "./styles";
import { getData } from "@/app/utils/getData";

import { IBrand } from "./types";
import SelectInput from "../SelectInput";
import { Button } from "@mui/material";
import { UseGlobalContext } from "@/app/Context/store";

export default function Form() {
  const { form, setResult } = UseGlobalContext()
  const [brands, setBrands] = useState<IBrand[]>([]);
  const [models, setModels] = useState<IBrand[]>([]);
  const [years, setYears] = useState<IBrand[]>([]);

  useEffect(() => {
    getBrands();
  }, []);

  useEffect(() => {
    if (form.marca) {
      getModels();
    }
  }, [form?.marca]);

  useEffect(() => {
    if (form.modelo) {
      getYears();
    }
  }, [form?.modelo]);

  async function getBrands() {
    const brandsData = await getData("marcas");
    if (brandsData) {
      setBrands(brandsData);
    }
  }

  async function getModels() {
    const modelsData = await getData(`marcas/${form.marca}/modelos`);
    if (modelsData?.modelos) {
      setModels(modelsData?.modelos);
    }
  }

  async function getYears() {
    const yearsData = await getData(`marcas/${form.marca}/modelos/${form.modelo}/anos`)
    if (yearsData) {
      setYears(yearsData);
    }
  }

  async function getResult() {
    const resultData = await getData(
      `marcas/${form.marca}/modelos/${form.modelo}/anos/${form.ano}`
    );
    if (resultData) {
      setResult(resultData);
    }
  }

  return (
    <S.Form>
      {brands && (
        <SelectInput
          name="marca"
          label="Marca"
          options={brands}
        ></SelectInput>
      )}
      {models && (
        <SelectInput
          name="modelo"
          label="Modelo"
          options={models}
          disabled={models ? false : true}
        ></SelectInput>
      )}
      {years && form?.modelo && (
        <SelectInput
          name="ano"
          label="Ano"
          options={years}
        ></SelectInput>
      )}
      <Button
        size="large"
        sx={{ background: "#3f50b5" }}
        disabled={!form.marca || !form.modelo || !form.ano}
        variant="contained"
        onClick={getResult}
      >
        Consultar preço
      </Button>
    </S.Form>
  );
}
