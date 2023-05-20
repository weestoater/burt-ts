import React from "react";
import { NavLink } from "react-router-dom";

export function AgileNav() {
  return (
    <div className="subnav">
      <ul className="list-group">
        <li className="list-group-item">
          <NavLink to="/agile">Agile</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/mobrules">Mob Rules</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/lessonslearned">Lessons Learned</NavLink>
        </li>
      </ul>
    </div>
  );
}
