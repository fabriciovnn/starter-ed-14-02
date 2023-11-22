import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal as ModalMui,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { cadastrar } from "../../store/modules/carteira/carteira.slice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

interface ModalProps {
  open: boolean;
  handleClose: () => void;
}

function Modal(props: ModalProps) {
  const [selected, setSelected] = useState<"income" | "outcome">("income");
  const dispatch = useDispatch();

  function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    const novaTransacao = {
      id: new Date().getTime(),
      value: Number(ev.currentTarget["value-input"].value),
      type: selected,
      description: ev.currentTarget["description-input"].value,
      createdAt: new Date(),
    };

    dispatch(cadastrar(novaTransacao));
    props.handleClose();
  }

  return (
    <>
      <ModalMui
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" sx={style} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Adicionar Transação
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="value-input"
                label="Valor"
                variant="outlined"
                type="number"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="label-type">Tipo *</InputLabel>
                <Select
                  required
                  labelId="label-type"
                  id="type-input"
                  label="Tipo *"
                  value={selected}
                  onChange={(ev: any) => setSelected(ev.target.value)}
                >
                  <MenuItem value={"income"}>Entrada</MenuItem>
                  <MenuItem value={"outcome"}>Saída</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="description-input"
                label="Descrição"
                variant="outlined"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12} display={"flex"} justifyContent={"end"} gap={1}>
              <Button
                onClick={props.handleClose}
                variant="text"
                color="inherit"
              >
                Cancelar
              </Button>
              <Button type="submit" variant="contained">
                Cadastrar
              </Button>
            </Grid>
          </Grid>
        </Box>
      </ModalMui>
    </>
  );
}

export default Modal;
