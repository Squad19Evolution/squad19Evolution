

function Rodape() {

    return (


        <footer className=" bg-dark row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
            <div className="col mb-3">
                <a href="/" className=" ms-3d-flex align-items-center mb-3 link-dark text-decoration-none">
                    <img
                        src="img/logo_juice.png"
                        width="55"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </a>
                <p className="text-muted">© 2022</p>
            </div>

            <div className="col mb-3">

            </div>

            <div className="col mb-3">
                <h5>Section</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Sobre a Orange</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Programação</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Trilhas</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Parcerias</a></li>
                </ul>
            </div>

            <div className="col mb-3">
                <h5>Section</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Onde Estamos</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">São Paulo

                        MATRIZ</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Rua Bela Cintra, 986 - 2º andar Consolação, São Paulo - SP</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Santos

                        FILIAL</a></li>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Praça dos Expedicionários, 19 Sala 22 Gonzaga, Santos - SP</a></li>
                </ul>
            </div>


        </footer>





    );


}

export default Rodape