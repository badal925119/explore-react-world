
import './coutrey.css'
const Countrey = ({countrey}) => {
    const {name,flags}=countrey
  
    return (
        <div className='country'>
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Countrey;