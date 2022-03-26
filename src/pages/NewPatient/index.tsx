import {useEffect, useState} from 'react';
import {Radio, RadioGroup, FormControlLabel, TextField, FormControl, InputLabel, OutlinedInput, Button} from '@material-ui/core'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import Select from '@material-ui/core/Select';
import api from '../../services/api';

import styles from './styles.module.scss'

export function NewPatient(){
  const [ selectEmpresas, setSelectEmpresas ] = useState([]);
  const [ selectConvenios,setSelectConvenios ] = useState([]);
  const [ selectEspecialidades,setSelectEspecialidades ] = useState([]);
  const [ selectMedicos,setSelectMedicos ] = useState([]);

  const [ nomePaciente,setNomePaciente ] = useState('');
  const [ cpfPaciente,setCpfPaciente ] = useState('')
  const [ dataNascimento,setDataNascimento ]= useState('');
  const [ c_empresa,setC_Empresa ] = useState<Number>();
  const [ c_convenio,setC_Convenio ] = useState<Number>();
  const [ tipoAtendimento,setTipoAtendimento ] = useState<Number>();
  const [ c_espec,setC_Espec ] = useState<Number>();
  const [ c_medico, setC_Medico ] = useState<Number>();
  const [ dataConsulta,setDataConsulta ] = useState('');
  const [ horaConsulta,setHoraConsulta ] = useState('');
  
  const [open, setOpen] = useState(false);

  function loadClientDialog(){

  }
  function handleClickOpen() {
    setOpen(true);
  }
  
  function handleClose() {
    setOpen(false);
  }

  async function LoadSelectEmpresa(){
    try{  
      const response = await api.get('/Empresa',{
          params:{
            c_empresa: String,
            n_empresa: String,
            sigla_emp: String,
            ativa: Boolean,
            idwhatsapp: Number 
          }
        });
        setSelectEmpresas(response.data)
    } catch(err){
      alert('Não foi possivel carregar a lista de empresas')
    }    
  }
  
  async function LoadSelectEspecialidade(){
    try{
      const response = await api.get(`/CNvEspecialidade/convenio/1/1`,{
        params:{
          c_empresa: Number,
          c_convenio: Number,
          c_espec: Number,
          n_espec: String,
        }
      });
      setSelectEspecialidades(response.data)
    }catch(err){
      alert('Não foi possivel carregar a lista de especialidades')
    }
  }

  async function LoadSelectConvenio(c_empresa: number){
    try{
      const response = await api.get(`/Convenio/empresa/${c_empresa}`,{
        params:{
          idconvenio: Number,
          nomeconvenio: String,
        }
      });
      setSelectConvenios(response.data)
    }catch(err){    
      console.log('Não foi possivel carregar a lista de convênios')
    }
  }
  async function LoadSelectMedicos(c_espec: number){
    try{
      const response = await api.get(`/Medicos/especialidade/${c_espec}`,{
        params:{
          c_medico: Number,
          n_medico: String,
        }
      });
      setSelectMedicos(response.data)
    }catch(err){    
      console.log('Não foi possivel carregar a lista de médicos')
    }
  }
  
  function handleChangePaciente(e: any){
    e.preventDefault();
    setNomePaciente(e.target.value)
  };
  function handleChangeCpf(e: any){
    e.preventDefault();
    setCpfPaciente(e.target.value)
  };
  function handleChangeDataNascimento(e: any){
    e.preventDefault();
    setDataNascimento(e.target.value);
  };
  function handleChangeLocalAtendimento(e: any) {
    e.preventDefault();
    setC_Empresa(e.target.value);
  };
  function handleChangeConvenio(e: any) {
    e.preventDeafault();
    setC_Convenio(e.target.value)
  };
  function hanChangeTipoAtendimento(e: any){
    e.preventDefault();
    setTipoAtendimento(e.target.value)
  };
  function handleChangeEspecialidade(e: any){
    e.preventDefault();
    setC_Espec(e.target.value);
  };
  function handleChangeMedico(e: any){
    e.preventDefault();
    setC_Medico(e.target.value);
  };
  function handleChangeDiaConsulta(e: any){
    e.preventDefault();
    setDataConsulta(e.target.value)
  };
  function handleChangeHoraConsulta(e: any){
    e.preventDefault();
    setHoraConsulta(e.target.value)
  };


  useEffect(() => {
    LoadSelectEmpresa()
    LoadSelectEspecialidade()
  },[])

  useEffect(() => {
    LoadSelectConvenio(c_empresa);
  },[c_empresa]);

  useEffect(() => {
    LoadSelectMedicos(c_espec)
  },[c_espec])

  
  return(
    <div className={styles.newPatientContainer}>
      <h1>Novo Cliente</h1>
      <form action='submit'>
      <div className={styles.field}>
        <TextField
          id="outlined-dense"
          label="Paciente"
          name='nomePaciente'
          className={styles.textField}
          margin="dense"
          variant="outlined"
          onChange={handleChangePaciente}
          fullWidth
        />
      </div>

      <div className={styles.field}>
        <TextField
          id="outlined-dense"
          name='cpfPaciente'
          label="CPF"
          className={styles.textField}
          margin="dense"
          variant="outlined"
          onChange={handleChangeCpf}
        />
      </div>
      
      <div className={styles.field}>
        <TextField
          id="outlined-dense"
          name='dataNascimento'
          label="Data de Nascimento"
          defaultValue=''
          type='date'
          className={styles.textField}
          margin="dense"
          variant="outlined"
          onChange={handleChangeDataNascimento}
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
            displayEmpty={true} 
            onChange= {handleChangeLocalAtendimento}
            inputProps={{ }}>
              {selectEmpresas.map((empresas) => (
                <option value={empresas.c_empresa}>{empresas.n_empresa}</option>
              ))}
          </Select>
        </FormControl>
      </div>
      
      <div className={styles.formControl}>
        <FormControl variant="outlined" className={styles.formControl}>
          <InputLabel
            ref={ref => {}}
            htmlFor="outlined-age-native-simple"
          >
            Convênio do Escolhido
          </InputLabel>
          <Select  
            displayEmpty={true}
            name="c_convenio"
            onChange={handleChangeConvenio}
            inputProps={{}}>
            {selectConvenios.map((convenios)=>(
                <option value={convenios.idconvenio}>{convenios.nomeconvenio}</option>
              ))}
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
        name='tipoAtendimento'
        onChange={hanChangeTipoAtendimento}
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
            onChange={handleChangeEspecialidade}
            displayEmpty={true}
            name="c_espec"          
            inputProps={{}}>
            {selectEspecialidades.map((especialidades) => (
                <option value={especialidades.c_espec}>{especialidades.n_espec}</option>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className={styles.formControl}>
        <FormControl variant="outlined" className={styles.formControl}>
          <InputLabel
            ref={ref => {}}
            htmlFor="outlined-age-native-simple"
          >
            Médico Escolhido
          </InputLabel>
          <Select  
            onChange={handleChangeMedico}
            displayEmpty={true}
            name="c_medico"
            inputProps={{
              id: 'age-native-required',
            }}>
            {selectMedicos.map((medico) => (
                <option value={medico.c_medico}>{medico.n_medico}</option>
            ))}
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
          name='dataConsulta'
          type='date'
          onChange={handleChangeDiaConsulta}
        />
      </div>

      <div className={styles.field}>
        <TextField
          id="outlined-dense"
          label="Hora da Consulta"
          className={styles.textField}
          margin="dense"
          variant="outlined"
          name='horaConsulta'
          onChange={handleChangeHoraConsulta}
        />
      </div>
      <footer className={styles.footerPage}>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>Agendar</Button>
      </footer>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Agendar Um Atendimento</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="nomePaciente"
            label="Nome:"
            value={nomePaciente}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="cpfPaciente"
            label="CPF:"
            value={cpfPaciente}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="datanascimento"
            label="Data de nascimento"
            value={dataNascimento}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="c_empresa"
            label="c_empresa - Local de Atendimento"
            value={c_empresa}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="c_convenio"
            label="c_convenio - Convênio"
            value={c_convenio}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="tipoAtendimento"
            label="tipoAtendimento - Tipo do Atendimento"
            value={tipoAtendimento}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="c_espec"
            label="c_espec - Especialidade do Atendimento"
            value={c_espec}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="c_medico"
            label="c_medico - Medico Escolhido"
            value={c_medico}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="datanascimento"
            label="dataConsula - Data da Consulta"
            value={dataConsulta}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="datanascimento"
            label="horaConsulta - Hora da Consulta"
            value={horaConsulta}
            fullWidth
          />        

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button variant="contained" onClick={handleClose} color="primary">
            Agendar
          </Button>
        </DialogActions>
      </Dialog>
      </form>
    </div>
  )
}