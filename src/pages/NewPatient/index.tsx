import {useEffect, useState} from 'react';
import { Input } from "../../components/Input";

import {Radio, RadioGroup, FormControlLabel, TextField, FormControl, InputLabel, OutlinedInput,Select, Button} from '@material-ui/core'
import api from '../../services/api';

import styles from './styles.module.scss'
import { FaOptinMonster } from 'react-icons/fa';



export function NewPatient(){
  const [selecEmpresas, setSelecEmpresas] = useState([]);
  const [selecConvenios,setSelecConvenios] = useState([]);
  const [selecEspecialidade,setSelecEspecialidade] = useState([]);
  const [selecMedicos,setSelecMedicos] = useState();
  const [c_unidade,setC_unidade] = useState();
  const [n_unidade,setN_unidade] = useState();

  async function loadSelectEmpresa(){
    
    try{  
      const response = await api.get('Empresa',{
          params:{
            c_unidade,
            n_unidade,
          }
        });
        setSelecEmpresas(response.data)
    } catch(err){
      alert('Não foi possivel Carregar a Lista de Empresas')
    }
      
  }
  async function loadSelectConvenio(){
    
  }
  async function loadSelectEspecialidade(){
    
  }
  async function loadSelectMedicos(){
    
  }
  
  useEffect(() => {
    loadSelectEmpresa()
  }),[]


  return(
    <div className={styles.newPatientContainer}>
      <form>
      <div className={styles.field}>
        <TextField
          id="outlined-dense"
          label="Paciente"
          className={styles.textField}
          margin="dense"
          variant="outlined"
        />
      </div>

      <div className={styles.field}>
        <TextField
          id="outlined-dense"
          label="CPF"
          className={styles.textField}
          margin="dense"
          variant="outlined"
        />
      </div>

      <div className={styles.formControl}>
        <FormControl variant="outlined" className={styles.formControl}>
          <InputLabel 
            htmlFor="outlined-age-native-simple"
          >
            Local de Atendimento
          </InputLabel>
          <Select  
            defaultValue=""
            native
            name="empresa"
            inputProps={{
              id: 'age-native-required',
            }}>
              {selecEmpresas.map((empresas)=>(
                <option value={empresas.c_unidade}>{empresas.n_unidade}</option>
              ))}
          </Select>
        </FormControl>
      </div>
      
      <div className={styles.formControl}>
        <FormControl variant="outlined" className={styles.formControl}>
          <InputLabel
            ref={ref => {
            
            }}
            htmlFor="outlined-age-native-simple"
          >
            Convênio do Escolhido
          </InputLabel>
          <Select  
            native
            name="age"
            inputProps={{
              id: 'age-native-required',
            }}>
            <option value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </FormControl>
      </div>

      <div className={styles.radioGroup}>
      <InputLabel
      htmlFor="outlined-age-native-simple">
        Tipo de Atendimento
      </InputLabel>
      <RadioGroup
        aria-label="Tipo e Atendimento"
        name="atendimento"
        onChange={()=>{}}
      >
        <FormControlLabel value="1" control={<Radio />} label="Consulta" />
        <FormControlLabel value="2" control={<Radio />} label="Revisão" />
        <FormControlLabel value="3" control={<Radio />} label="Exame" />
        <FormControlLabel value="4" control={<Radio />} label="Procedimento" />
      </RadioGroup>
      </div>

      <div className={styles.formControl}>
        <FormControl variant="outlined" className={styles.formControl}>
          <InputLabel
            ref={ref => {
            
            }}
            htmlFor="outlined-age-native-simple"
          >
            Especialidade do Atendimento
          </InputLabel>
          <Select  
            native
            name="age"
            inputProps={{
              id: 'age-native-required',
            }}>
            <option value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </FormControl>
      </div>

      <div className={styles.formControl}>
        <FormControl variant="outlined" className={styles.formControl}>
          <InputLabel
            ref={ref => {
            
            }}
            htmlFor="outlined-age-native-simple"
          >
            Médico Escolhido
          </InputLabel>
          <Select  
            native
            name="age"
            inputProps={{
              id: 'age-native-required',
            }}>
            <option value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </FormControl>
      </div>

      <div className={styles.field}>
        <TextField
          id="outlined-dense"
          label="Dia da Consulta"
          className={styles.textField}
          margin="dense"
          variant="outlined"
        />
      </div>

      <div className={styles.field}>
        <TextField
          id="outlined-dense"
          label="Hora da Consulta"
          className={styles.textField}
          margin="dense"
          variant="outlined"
        />
      </div>
      <footer className={styles.footerPage}>
        <Button variant="contained" color="primary" >Agendar</Button>
      </footer>
      </form>
    </div>
  )
}