import React,{useState,useEffect} from 'react';
import {Radio, RadioGroup, FormControlLabel, TextField, FormControl, InputLabel, OutlinedInput, Button} from '@material-ui/core'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import Select from '@material-ui/core/Select';
import api from '../../services/api';

import styles from './styles.module.scss';

export function MedicAgenda(){
  const [ selectMedicos,setSelectMedicos ] = useState([]);
  const [ c_medico,setC_Medico ] = useState();

  
  async function LoadSelectMedicos(){
    try{
      const response = await api.get(`/Medicos`,{
        params:{
          c_medico: Number,
          n_medico: String,
          inativo: Boolean,
          tip_cons: String,
          cod_cons: String,
          uf_cons: String,
          cpf: String, 
        }
      });
      setSelectMedicos(response.data)
    }catch(err){    
      console.log('Não foi possivel carregar a lista de médicos')
    }
  }

  function handleChangeMedico(e){
    e.preventDefault()
    setC_Medico(e.target.value);
  }
  useEffect(() => {
    LoadSelectMedicos()
  },[])

  return(
    <div className={styles.medicAgendaContainer}>
      <h1>Agenda Médica</h1>
      <form action='submit'className={styles.searchMedicForm}>
      <div className={styles.formControl}>
        <FormControl variant="outlined" className={styles.formControl}>
          <InputLabel 
            htmlFor="outlined-age-native-simple"
          >
            Local de Atendimento
          </InputLabel>
          <Select  
            displayEmpty={true} 
            onChange= {handleChangeMedico}
            inputProps={{ }}>
              {selectMedicos.map((medicos) => (
                <option value={medicos.c_medico}>{medicos.n_medico}</option>
              ))}
          </Select>
        </FormControl>
        
      </div>
      <footer className={styles.footer}>
        <Button variant="contained" color="primary">Buscar</Button>
      </footer>
      </form>
    </div>
  )
}