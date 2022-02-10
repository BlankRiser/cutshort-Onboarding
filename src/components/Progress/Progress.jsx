import { React } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Progress = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <ul className="p-2 flex flex-row gap-6 mb-16">
      <li
        className="w-8 h-8 bg-indigo-600 text-white rounded-full 
        flex justify-center items-center cursor-pointer"
        onClick={() => navigate("/")}
      >
        1
      </li>
      <li
        className="w-8 h-8 border-[1px] border-gray-500/25 text-gray-500 rounded-full 
        flex justify-center items-center cursor-pointer"
        onClick={() => navigate("/second")}
      >
        2
      </li>
      <li
        className="w-8 h-8 border-[1px] border-gray-500/25 text-gray-500 rounded-full 
        flex justify-center items-center cursor-pointer"
        onClick={() => navigate("/third")}
      >
        3
      </li>
      <li
        className="w-8 h-8 border-[1px] border-gray-500/25 text-gray-500 rounded-full 
        flex justify-center items-center cursor-pointer"
        onClick={() => navigate("/fourth")}
      >
        4
      </li>
      {location.pathname === "/second" && (
        <span className="text-indigo-500">✓</span>
      )}
    </ul>
  );
};

export default Progress;
