import "./Robot.css";

const Robot = () => {
  return (
    <li className="robot card text-white bg-dark">
      <div className="robot__image card-img-top">
        <img
          className="robot__image-file"
          src="https://images.newscientist.com/wp-content/uploads/2021/04/21160754/21-april_pepper-the-robot.jpg"
          alt=""
          width="200"
          height="150"
        />
      </div>
      <div className="robot__info card-body">
        <h5 className="robot__name card-title">NOMBRE: ROGELIO</h5>
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
    </li>
  );
};

export default Robot;
