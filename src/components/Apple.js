import { useSelector } from "react-redux";
import apple from "../images/apple.svg";
const Apple = () => {
  //State comes from Redux Store
  const applesOnTheTree = useSelector(
    (state) => state.storeState.applesOnTheTree
  );
  //Create an empty array
  const applesWrapper = [];
  //Populate the array for creating elements(for mapping)
  function appleGenerator(num, arr) {
    for (let i = 0; i < num; i++) {
      const count = i;
      arr.push(count);
    }
  }
  appleGenerator(applesOnTheTree, applesWrapper);
  return (
    <>
      {applesWrapper &&
        applesWrapper.map((i) => (
          <img src={apple} alt="apple" key={i} className="apple" />
        ))}
    </>
  );
};

export default Apple;
