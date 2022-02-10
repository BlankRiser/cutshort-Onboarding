import { React } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Progress = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const completed =
    "w-8 h-8 bg-indigo-600 text-white rounded-full flex justify-center items-center cursor-pointer";

  const incomplete =
    "w-8 h-8 border-[1px] border-gray-500/25 text-gray-500 rounded-full flex justify-center items-center cursor-pointer";

  let colorFlag = 0;

  if (location.pathname === "/") {
    colorFlag = 1;
  } else if (location.pathname === "/second") {
    colorFlag = 2;
  } else if (location.pathname === "/third") {
    colorFlag = 3;
  } else if (location.pathname === "/fourth") {
    colorFlag = 4;
  }

  return (
    <ul className="p-2 flex flex-row gap-6 mb-16">
      <li
        className={colorFlag < 1 ? incomplete : completed}
        onClick={() => navigate("/")}
      >
        1
      </li>
      <li
        className={colorFlag < 2 ? incomplete : completed}
        onClick={() => navigate("/second")}
      >
        2
      </li>
      <li
        className={colorFlag < 3 ? incomplete : completed}
        onClick={() => navigate("/third")}
      >
        3
      </li>
      <li
        className={colorFlag < 4 ? incomplete : completed}
        onClick={() => navigate("/fourth")}
      >
        4
      </li>
    </ul>
  );
};

export default Progress;
