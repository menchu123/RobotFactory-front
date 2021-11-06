import "./Robot.css";

const Robot = () => {
  return (
    <li className="col mt-3">
      <div className="robot card text-white bg-dark col">
        <div className="robot__image card-img-top">
          <img
            className="robot__image-file"
            src="https://www.electronicaembajadores.com/datos/fotos/articulos/grandes/kv/kv6a/kv6a018.jpg"
            alt=""
            height="200"
          />
        </div>
        <div className="robot__info card-body">
          <h5 className="robot__name card-title">ROGELIO</h5>
          <div class="robot__data">
            <table className="table text-white">
              <thead>
                <tr>
                  <th scope="col">CARACTERÍSTICAS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>VELOCIDAD</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>RESISTENCIA</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>AÑO DE CREACIÓN</td>
                  <td>2001</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="buttons mb-3 mx-3">
          <button className="btn btn-warning m-2">Edit</button>
          <button className="btn btn-danger m-2">Delete</button>
        </div>
      </div>
    </li>
  );
};

export default Robot;
