import "./Form.css";

const Form = () => {
  return (
    <>
      <div className="form card text-white bg-dark col">
        <div className="form__image card-img-top">
          <img
            className="form__image-file"
            src="https://cdn.vectorstock.com/i/1000x1000/00/03/robot-silhouette-vector-6180003.jpg"
            alt="anon-robot"
            height="185"
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
              />
            </div>
            <div className="form-group col">
              <label htmlFor="imagen"></label>
              <input
                type="text"
                className="form-control"
                id="imagen"
                placeholder="URL Imagen"
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col mt-2">
              <label htmlFor="velocidad">Velocidad</label>
              <select id="velocidad" className="form-control">
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
              <select id="resistencia" className="form-control">
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
              <input type="number" className="form-control" id="creación" />
            </div>
          </div>
          <div className="form-group"></div>
          <button type="submit" className="btn btn-warning mt-3">
            Añadir
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
