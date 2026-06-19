import React from "react";

const Skill = ({ skill }) => {
  return (
    <span className="text-caption font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-md border border-gray-200">
      {skill}
    </span>
  );
};

export default Skill;
