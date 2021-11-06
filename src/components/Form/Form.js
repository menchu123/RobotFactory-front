import { useEffect, useState } from "react";
import "./Form.css";

const Form = () => {
  const initialValues = {
    velocidad: "",
    resistencia: "",
    creación: "",
    nombre: "",
    imagen: "",
  };

  const [robotData, setRobotData] = useState(initialValues);
  const [isDisabled, setIsDisabled] = useState(true);

  const onChange = (event) => {
    setRobotData({ ...robotData, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    if (
      robotData.nombre !== "" &&
      robotData.imagen !== "" &&
      robotData.creación !== ""
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [robotData.creación, robotData.imagen, robotData.nombre]);

  const onSubmit = (event) => {
    event.preventDefault();
    const newRobot = {
      características: {
        velocidad: robotData.velocidad,
        resistencia: robotData.resistencia,
        creación: robotData.creación,
      },
      nombre: "María " + robotData.nombre,
      imagen: robotData.imagen,
    };

    console.log(
      "*In development* Submitting will create the following robot: " +
        JSON.stringify(newRobot)
    );

    setRobotData(initialValues);
  };

  return (
    <>
      <div className="form card text-white bg-dark col" onSubmit={onSubmit}>
        <div className="form__image card-img-top">
          <img
            className="form__image-file"
            src="https://cdn.vectorstock.com/i/1000x1000/00/03/robot-silhouette-vector-6180003.jpg"
            alt="anon-robot"
            height="190"
          />
        </div>
        <form className="form col my-4 px-2">
          <h5>Añade un robot</h5>
          <div className="row">
            <div className="input-group col-md-6">
              <label htmlFor="nombre"></label>
              <div className="input-group-prepend">
                <div className="input-group-text">María</div>
              </div>
              <input
                type="text"
                className="form-control"
                id="nombre"
                placeholder="Nombre"
                value={robotData.nombre}
                onChange={(event) => onChange(event)}
              />
            </div>
            <div className="form-group col">
              <label htmlFor="imagen"></label>
              <input
                type="text"
                className="form-control"
                id="imagen"
                placeholder="URL Imagen"
                value={robotData.imagen}
                onChange={(event) => onChange(event)}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col mt-2">
              <label htmlFor="velocidad">Velocidad</label>
              <select
                id="velocidad"
                className="form-control"
                value={robotData.velocidad}
                onChange={(event) => onChange(event)}
              >
                <option defaultValue>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </div>
            <div className="form-group col mt-2">
              <label htmlFor="resistencia">Resistencia</label>
              <select
                id="resistencia"
                className="form-control"
                value={robotData.resistencia}
                onChange={(event) => onChange(event)}
              >
                <option defaultValue>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="form-group col mt-2">
              <label htmlFor="creación">Año</label>
              <input
                type="number"
                className="form-control"
                id="creación"
                value={robotData.creación}
                onChange={(event) => onChange(event)}
              />
            </div>
          </div>
          <div className="form-group"></div>
          <button
            type="submit"
            className="btn btn-warning mt-3"
            disabled={isDisabled}
          >
            Añadir
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
