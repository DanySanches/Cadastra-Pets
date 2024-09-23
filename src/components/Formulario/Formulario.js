import './Formulario.css'
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

const Form = () => {
    function handleClickSubmit(){
        console.log('clicou no botão enviar')
    }
    return(
        <form className='form'>
             <FormInput inputName= 'Nome' id='nome' type='text' />
             <FormInput inputName= 'Email' id='email' type='email' /> 
              
            <Button text = 'Enviar' type="submit" onClick={handleClickSubmit}/>
         
        </form>
    )

}

export default Form;