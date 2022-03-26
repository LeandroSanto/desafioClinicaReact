
import {Input, Radio, RadioGroup, FormControlLabel, TextField, FormControl, InputLabel, OutlinedInput,Select, Button, FormLabel} from '@material-ui/core'
import React, {useState,useEffect } from 'react';
import {TextMaskCustom} from '../../components/TextMaskCustom'
import api from '../../services/api'
import { ClientCard } from '../../components/ClientCard';

import styles from './styles.module.scss';

export interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

export function SearchPatient(props: TextMaskCustomProps){
  const [value, setValue] = useState("1");
  
  const [search,setSearch] = useState('');
  const [searchResult,setSearchResult] = useState([]);

  const [chooseInput, setChooseInput]= useState(true)
  const [showResults, setShowResults]= useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  
  useEffect( () => {
    if (value === "1"){
      setChooseInput(true)
    } else{
      setChooseInput(false)
    }
  },[value]);

  useEffect(() => {
    setShowResults(true)
  },[searchResult])

  async function HandleSearchPatient(e){
    e.preventDefault();
    var temp = search.replace(/([^\d])+/gim,'');

    if (value === "1") {
        try{
          const response = await api.get(`/Paciente/cpf/${temp}`,{
          params:{
            idPaciente: Number,
            nomePaciente: String,
            cpfPaciente: String,
            dataNascimento: String,
          }
        });
      setSearchResult(response.data);

      }catch(err){
        alert('Erro ao buscar paciente por cpf')
      }
    } else {
        try{
          const response = await api.get(`/Paciente/nome/${search}`,{
          params:{
            idPaciente: Number,
            nomePaciente: String,
            cpfPaciente: String,
            dataNascimento: String,
          }
        });
        setSearchResult(response.data)
        }catch(err){
          alert('Erro ao buscar paciente pelo nome')
        }
     }
  }


  return(
    <div className={styles.searchClientContainer}>
      <h1>Busca de Cliente</h1>
      <form action='submit'className={styles.searchClientForm}>
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
            <FormControlLabel value="2" control={<Radio />} label="Nome" />
          </RadioGroup>
        </FormControl>
      </div>

      <div className={styles.searchField}>
        {chooseInput ?        
        <FormControl className={styles.textField}>
            <InputLabel htmlFor="formatted-text-mask-input">CPF nr:</InputLabel>
            <Input
              name='search'
              className={styles.textField}
              onChange={ e => setSearch(e.target.value)}
              inputComponent={TextMaskCustom as any}
            />
          </FormControl> : 
          <TextField
            id="outlined-dense"
            label="Paciente"
            className={styles.textField}
            margin="dense"
            variant="outlined"
            name='search'
            onChange={ e => setSearch(e.target.value)}          
          />  }    
        <Button variant="contained" color="primary" onClick={HandleSearchPatient}>Buscar</Button>
      </div>
      </form>
        <div className={styles.searchResults}>

        { showResults ?        
            searchResult.map((data) => (
              <ClientCard pacient={data} /> 
            )): null 
          } 

        </div>
      </div>
 
  )
}