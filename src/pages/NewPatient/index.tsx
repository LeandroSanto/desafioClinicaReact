import { Input } from "../../components/Input";

export function NewPatient(){
  return(
    <div className="newPatientContainer">
      <Input label="Paciente" name="patient" type='text'/>
      <Input label="CPF" name="patientcpf" type='text' />
    </div>
  )
}