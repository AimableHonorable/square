import { HiOutlineShoppingCart } from 'react-icons/hi'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Square</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/">Business Types</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/">Why Square</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/">Resources</a>
              </li>
              
            </ul>
            <form className="d-flex">
              <li className="nav-item">
                <a className="nav-link text-dark " href="/">Sign in</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark " href="/">Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fs-5 pb-2" href="/"><HiOutlineShoppingCart/></a>
              </li>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
