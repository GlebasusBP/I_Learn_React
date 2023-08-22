import img from './error.gif';
import './errorMessage.sass';

const ErrorMessage = () => {
  return (
    <img className="error-message" src={img} alt='error-message'/>
  )
}

export default ErrorMessage;