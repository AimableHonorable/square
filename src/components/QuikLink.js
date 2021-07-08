import PropTypes from 'prop-types'


const QuikLink = ({text}) => {
  return (
    <div className="py-5 col-md-7 mx-auto border-bottom text-primary">
      <a href="/" className="text-decoration-none fs-big">
        {text}
      </a>
    </div>
  )
}

QuikLink.propTypes ={
  text: PropTypes.string
}

export default QuikLink
