import Robot from "../Robot/Robot";

const RobotList = ({ robots }) => {
  return (
    <>
      <h2 className="text-center mt-4">Meet the Bots</h2>
      <ul className="list-unstyled row row-cols-md-4">
        {robots.map((robot, index) => (
          <li className="col mt-3" key={index}>
            <Robot robot={robot} key={robot.id} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default RobotList;
