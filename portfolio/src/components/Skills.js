// Create your Skills component here
import { FaJs, FaReact, FaHtml5, FaCss3, FaGithub, FaDocker } from "react-icons/fa";

const Skills = () =>{
    const skillsArr = [
        {
            "name":"JavaScript",
            "icon":FaJs
        },
        {
            "name":"HTML",
            "icon":FaHtml5
        },
        {
            "name":"CSS",
            "icon":FaCss3
        },
        {
            "name":"Git",
            "icon":FaGithub
        },
        {
            "name":"Reactjs",
            "icon":FaReact
        },
        {
            "name":"Docker",
            "icon":FaDocker
        }
    ];

    return(
        <div id="skills" className="skills">
            <h2 className="title">Skills</h2>
            <div className="skill-holder">
                {
                    skillsArr.map((skill, index) => {
                        const icon = skill.icon;
                        return(
                            <i key={index} className="skill-cards">
                                <icon className="skill-icon" />
                                <p className="skill">{skill.name}</p>
                            </i>
                        );
                    }) //semicolon?
                }
            </div>

        </div>
    );
}

export default Skills;