import { Button } from '@material-ui/core'
import styles from './styles.module.scss';

interface ClientCardProps{
  pacient:{
      idPaciente: Number,
      nomePaciente: String,
      cpfPaciente: String,
      dataNascimento: String
  }
}

export function ClientCard(props: ClientCardProps){
  return(
  <div className={styles.clientCardContainer}>
    <>
      <div className={styles.field}>
        <p>{props.pacient.idPaciente}</p>
      </div>
      <div className={styles.fieldData}>
        <p>{props.pacient.nomePaciente}</p>
        <p>{props.pacient.cpfPaciente}</p>
        <span>{props.pacient.dataNascimento}</span>
      </div>
    </>
    <footer>
      <Button variant="contained" color="primary" >Agendar</Button>
    </footer>
  </div>
  )
}