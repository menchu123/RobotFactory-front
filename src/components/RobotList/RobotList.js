import Robot from "../Robot/Robot";

const RobotList = ({ robots }) => {
  return (
    <ul className="list-unstyled row row-cols-md-3">
      {robots.map((robot) => (
        <Robot robot={robot} key={robot.id} />
      ))}
    </ul>
  );
};

export default RobotList;
