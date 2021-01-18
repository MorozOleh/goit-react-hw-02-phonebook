import PropTypes from 'prop-types';
import s from './Contact.module.css';

const Contact = ({name, number}) => {
  return (
    <>
      <p className={s.text}>{name}</p>
      <p className={s.text}>{number}</p>
    </>
  )
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number : PropTypes.string.isRequired,
}
 
export default Contact;
