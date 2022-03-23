import * as React from 'react';
import {Radio, RadioGroup, FormControlLabel, TextField, FormControl, InputLabel, OutlinedInput,Select, Button, FormLabel} from '@material-ui/core'
import { useState } from 'react';
import styles from './styles.module.scss';

export function SearchPatient(){
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return(
    <div className={styles.searchClientContainer}>
      <div className={styles.radioGroup}>
        <FormControl>
          <FormLabel id={styles.radioGroup}>Buscar por:</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel value="1" control={<Radio />} label="CPF" />
            <FormControlLabel value="2" control={<Radio />} label="Name" />
          </RadioGroup>
        </FormControl>
      </div>
      
      <div className={styles.searchField}>
        <TextField
          id="outlined-dense"
          label="Paciente"
          className={styles.textField}
          margin="dense"
          variant="outlined"
        />
        <Button variant="contained" color="primary" >Buscar</Button>
      </div>
    </div>
  )
}