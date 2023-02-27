import "../css/bootstrap.css";
import "../css/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky bg-dark navbar-dark mt-0">
    <div className="container">
      <a className="navbar-brand" href="/test">
        <img src="/images/logo.png" alt="" width={70} height={70} />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/testnavbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon "></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/test">Ana Sayfa</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/test">Blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/test">İletişim</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)
}

