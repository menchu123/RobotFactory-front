const Robot = () => {
  return (
    <li className="robot">
      <div className="robot__image">
        <img
          src="https://images.newscientist.com/wp-content/uploads/2021/04/21160754/21-april_pepper-the-robot.jpg"
          alt=""
          width="200"
          height="150"
        />
      </div>
      <div className="robot__info">
        <span className="robot__name">NOMBRE: ROGELIO</span>
        <div class="robot__data">
          <table>
            <thead>
              <tr>
                <th colspan="2">CARACTERÍSTICAS</th>
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
