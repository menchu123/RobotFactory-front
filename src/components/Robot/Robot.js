import "./Robot.css";
import PropTypes from "prop-types";

const Robot = ({ robot, onDeleteClick, onEditClick }) => {
  return (
    <div className="robot card text-white bg-dark col">
      <div className="robot__image card-img-top">
        <img
          className="robot__image-file"
          src={robot.imagen}
          alt=""
          height="250"
        />
      </div>
      <div className="robot__info card-body">
        <h5 className="robot__name card-title">{robot.nombre}</h5>
        <div className="robot__data">
          <table className="table text-white">
            <thead>
              <tr>
                <th scope="col">CARACTERÍSTICAS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>VELOCIDAD</td>
                <td>{robot.características.velocidad}</td>
              </tr>
              <tr>
                <td>RESISTENCIA</td>
                <td>{robot.características.resistencia}</td>
              </tr>
              <tr>
                <td>AÑO DE CREACIÓN</td>
                <td>{robot.características.creación}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="buttons mb-3 mx-3">
        <button
          className="btn btn-warning m-2"
          onClick={() => onEditClick(robot)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={() => onDeleteClick(robot._id)}
          aria-label="delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

Robot.propTypes = {
  robot: PropTypes.shape({
    nombre: PropTypes.string,
    imagen: PropTypes.string,
    características: PropTypes.shape({
      velocidad: PropTypes.number,
      resistencia: PropTypes.number,
      creación: PropTypes.string,
    }),
  }),
};

export default Robot;
