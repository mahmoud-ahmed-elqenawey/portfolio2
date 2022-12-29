import React from "react";
import SkillsImage from "../../assets/skills.png";
import "./Skills.scss";

const Skills = () => {
    return (
        <div className="skills mt-5">
            <h2>
                I'm currently looking to join a cross-functional team that
                values improving people's lives through accessible design
            </h2>
            <img src={SkillsImage} alt="SkillsImage" />
        </div>
    );
};

export default Skills;
