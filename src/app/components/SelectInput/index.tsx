import {
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";

import { ISelectProps } from "../types";
import { UseGlobalContext } from "@/app/Context/store";

export default function SelectInput({
  name,
  options,
  label,
  disabled,
}: ISelectProps) {
  const { setForm } = UseGlobalContext();

  const handleChange = (event: SelectChangeEvent) => {
    if (event.target.name === "marca") {
      setForm({
        [event.target.name]: event.target.value,
      });
    } else {
      setForm((current) => ({
        ...current,
        [event.target.name]: event.target.value,
      }));
    }
  };
  
  return (
    <FormControl disabled={disabled} fullWidth>
      <InputLabel sx={{ background: "#FFF", padding: "0 10px" }} id={name}>
        {label}
      </InputLabel>
      <Select labelId={name} name={name} onChange={handleChange}>
        {options?.length > 0 &&
          options?.map((brand) => (
            <MenuItem key={brand.codigo} value={brand.codigo}>
              {brand.nome}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}
