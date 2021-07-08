import { MdAddCircle } from 'react-icons/md'
import PropTypes from 'prop-types'


const Dropdown = ({text}) => {
  return (    
      <div className="dropdown">
        <MdAddCircle className="dropdown-toggle fs-lg text-primary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" />
        
        <div className="dropdown-menu col-md-3 " aria-labelledby="dropdownMenuButton1">
          <p className="dropdown-item text-wrap"> {text}</p>
        </div>
      </div>    
  )
}
Dropdown.propTypes =  {
  title: PropTypes.string,
}
export default Dropdown
