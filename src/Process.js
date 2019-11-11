import React from 'react';
import './Process.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import DateFnsUtils from '@date-io/date-fns';
import logo from './imagen.jpg';
import diagrama from './diagrama.png';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
  } from '@material-ui/pickers'

class Process extends React.Component {
    constructor(){
        super()
        
        this.state={
            estado:'doctor',
            date:'11/11/2014',
            doctor:'Dotor Uribe'
        }

        this.hola = this.hola.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)
    }


    handleDateChange = date => {
        this.setState({date:date})
    };
  

    hola(){
        switch (this.state.estado) {
            case 'inicio':
                return(
                <div>
                <h2>Selecciona el medio por el cual se va a pedir:</h2>
                <Button variant="contained" onClick={()=>this.setState({estado:'internet'})} color="primary" >
                    Internet
                </Button>
                <Button variant="contained"onClick={()=>this.setState({estado:'persona'})}   color="primary" >
                    Personalmente
                </Button>
                <Button variant="contained" onClick={()=>this.setState({estado:'telefono'})}   color="primary" >
                    Telefono
                </Button>
                </div>)
            case 'telefono':
                return(
                    <div>
                        <h2>Llamar a la linea de la EPS</h2>
                        <Button variant="contained" onClick={()=>this.setState({estado:'cedula'})} color="primary" >
                            Siguiente
                        </Button>
                    </div>)
            case 'persona':
                return(
                    <div>
                        <h2>Acercarse a una sede de la EPS</h2>
                        <Button variant="contained" onClick={()=>this.setState({estado:'cedula'})} color="primary" >
                            Siguiente
                        </Button>
                    </div>)
            case 'internet':
            return(
                <div>
                    <h2> Se ingresa a pagina de la EPS.</h2>
                    <Button variant="contained" onClick={()=>this.setState({estado:'cedula'})} color="primary" >
                        Siguiente
                    </Button>
                </div>)
            case 'cedula':
                return(
                    <div>
                        <h2>Se suministrar el numero de cedula.</h2>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="component-outlined">
                            Cedula
                            </InputLabel>
                            <OutlinedInput
                            id="component-outlined"
                            />
                        </FormControl>
                        <Button variant="contained" onClick={()=>this.setState({estado:'registro'})} color="primary" >
                            Siguiente
                        </Button>
                    </div>)
            case 'registro':
                return(
                    <div>
                        <h2>Se verifica que este registrado en el sistema.</h2>
                        <Button variant="contained" onClick={()=>this.setState({estado:'fecha'})} color="primary" >
                            Si
                        </Button>
                        <Button variant="contained" onClick={()=>this.setState({estado:'fin'})} color="primary" >
                            No
                        </Button>
                    </div>)
            case 'fecha':
                return(
                    <div>
                        <h2>Se selecciona la fecha de la cita.</h2>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            value={this.state.date}
                            onChange={this.handleDateChange}
                            KeyboardButtonProps={{
                            'aria-label': 'change date',
                            }}
                            />
                        </MuiPickersUtilsProvider>
                        <Button variant="contained" onClick={()=>this.setState({estado:'doctor'})} color="primary" >
                            Siguiente
                        </Button>
                    </div>)
            case 'doctor':
                return(
                    <div>
                        <h2>Se selecciona el doctor para la cita.</h2>
                           <div id="dotor">
                            <TextField
                                    select
                                    variant="outlined"
                                    label="Lista de doctores"
                                    value={this.state.doctor}
                                    onChange={(x)=> this.setState({doctor:x.target.value})}
                                                                   
                                >
                                <MenuItem value='Dotor Uribe'>Dotor Uribe </MenuItem>
                                <MenuItem value='Dotor Varela'>Dotor Varela </MenuItem>
                                <MenuItem value='Dotor Duque'>Dotor Duque </MenuItem>
                                <MenuItem value='Dotor Petro'>Dotor Petro </MenuItem>
                            </TextField>
                            </div>
                        <Button variant="contained" onClick={()=>this.setState({estado:'confirmacion'})} color="primary" >
                            Siguiente
                        </Button>
                    </div>)
            case 'confirmacion':
                return(
                    <div>
                        <h2>Se envia correo de confirmacion con la informacion de la cita.</h2>
                        <Button variant="contained" onClick={()=>this.setState({estado:'cancelar'})} color="primary" >
                            Siguiente
                        </Button>
                    </div>)
            case 'cancelar':
                return(
                    <div>
                        <h2>Desea cancelar la cita?</h2>
                        <Button variant="contained" onClick={()=>this.setState({estado:'fin'})} color="primary" >
                            Si
                        </Button>
                        <Button variant="contained" onClick={()=>this.setState({estado:'dia'})} color="primary" >
                            No
                        </Button>
                    </div>)
            case 'dia':
                return(
                    <div>
                        <h2>Cuando llegue el dia de la cita presentarse en el centro medico.</h2>
                        <Button variant="contained" onClick={()=>this.setState({estado:'mostrar'})} color="primary" >
                            Siguiente
                        </Button>
                    </div>)
            case 'mostrar':
                return(
                    <div>
                        <h2>Mostrar cedula y recibir indicaciones del consultorio asignado.</h2>
                        <Button variant="contained" onClick={()=>this.setState({estado:'esperar'})} color="primary" >
                            Siguiente
                        </Button>
                    </div>)
             case 'esperar':
                return(
                    <div>
                        <h2>Esperar en la sala de espera hasta ser llamado.</h2>
                        <Button variant="contained" onClick={()=>this.setState({estado:'atencion'})} color="primary" >
                            Siguiente
                        </Button>
                    </div>)
            case 'atencion':
                return(
                    <div>
                        <h2>Se recibe la atencion por parte del medico y se recetan los medicamentos</h2>
                        <img src={logo} width="400" height="300" alt="Se receta acetaminofen"/>
                        <Button variant="contained" onClick={()=>this.setState({estado:'fin'})} color="primary" >
                            Siguiente
                        </Button>
                    </div>)
           case 'fin':
                return(
                    <div>
                        <h1>FIN</h1>
                        <img src={diagrama} width="800" height="500" alt="Se receta acetaminofen"/>
                        <Button variant="contained" onClick={()=>this.setState({estado:'inicio'})} color="primary" >
                            Iniciar proceso
                        </Button>
                    </div>)
            default:
                break;
            
            
        }
    }


    render(){

        return (
            <Card >
                <CardContent>
                <div id="title">
                    <h1>Solicitar cita en EPS</h1>
                </div>
                <hr></hr>
                {this.hola()}
                </CardContent>
            </Card>
            
        )
    }
}

export default Process