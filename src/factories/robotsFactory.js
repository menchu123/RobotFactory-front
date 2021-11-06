import { datatype, name } from "faker";
import { image } from "faker/locale/uk";
import { Factory } from "fishery";

const factory = Factory.define(({ sequence }) => ({
  características: {
    velocidad: datatype.number(10),
    resistencia: datatype.number(10),
    creación: datatype.number(10),
  },
  _id: sequence,
  nombre: name.firstName(),
  imagen: image.imageUrl(),
}));

export const getRandomRobot = () => factory.build();
export const getRandomRobots = (count = 3) => factory.buildList(count);
