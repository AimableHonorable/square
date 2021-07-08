const Form = () => {
  return (
    <div className="py-5 border-bottom col-md-7 mx-auto">
      <div className="col-md-8">
        <h1>See why businesses of all sizes succeed with Square.</h1>
        <p className="fs-md">Learn how Square can help you take your business where you want it to go.</p>
        <form action="">
          <div className="form-inline d-flex">
            <input type="text" className="form-control me-2" placeholder="Enter your email address." />
            <input type="submit" className="btn btn-primary py-2 px-3" value="Get more info" />
          </div>
        </form>
      </div>
      
    </div>
  )
}

export default Form
