
function SkillDetails({ skill }) {
    return (
        <div className="skill-details">
            <div className="skill-details-heading">
                <img
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    className="skill-detail-icon"
                />
                <h3>{skill.name}</h3>
            </div>

            <p><strong>Category:</strong> {skill.category}</p>
            <p><strong>Experience:</strong> {skill.experience}</p>
            <p><strong>Used for:</strong> {skill.usedFor}</p>
            <p>{skill.description}</p>
        </div>
    );
}

function SkillButton({ skill, isActive, isDimmed, onSelect }) {
    return (
        <button
            className={`${isActive ? "active" : ""} ${isDimmed ? "dimmed" : ""}`}
            onClick={() => onSelect(skill)}
        >
            <img 
                src={skill.icon}
                alt={`${skill.name} icon`}
                className="skill-icon"
            />
            <span>{skill.name}</span>
        </button>
    );
}

function SkillsSection() {
    const skills = [
        {
            name: "JavaScript",
            category: "Web",
            experience: "Intermediate",
            usedFor: "Project slider, scroll progress bar, page loader, ASCII background",
            description: "I use JavaScript to add interaction and browser behavior to static pages.",
            icon: "assets/js.png"
        },
        {
            name: "HTML",
            category: "Web",
            experience: "Intermediate",
            usedFor: "Portfolio structure and semantic page sections",
            description: "I use HTML to structure readable and accessible web pages.",
            icon: "assets/html.png"
        },
        {
            name: "CSS",
            category: "Web",
            experience: "Intermediate",
            usedFor: "Portfolio layout, styling, responsive design, and visual identity",
            description: "I use CSS to shape the layout, mood, and presentation of my websites.",
            icon: "assets/css.png"
        },
        {
            name: "C++",
            category: "Programming",
            experience: "Learning / Practical",
            usedFor: "Computer science fundamentals and embedded systems practice",
            description: "I use C++ to understand lower-level programming concepts and performance.",
            icon: "assets/cpp.png"
        },
        {
            name: "SQL",
            category: "Database",
            experience: "Learning / Practical",
            usedFor: "Database queries and structured data handling",
            description: "I use SQL to work with relational data and retrieve meaningful information.",
            icon: "assets/sql.png"
        },
        {
            name: "PHP",
            category: "Backend",
            experience: "Learning / Practical",
            usedFor: "Server-side web development",
            description: "I use PHP to understand backend logic and dynamic web pages.",
            icon: "assets/php.png"
        },
        {
            name: "React",
            category: "Frontend",
            experience: "Currently learning",
            usedFor: "Interactive technical skills section",
            description: "I am learning React by converting part of my portfolio into a component-based interactive interface.",
            icon: "assets/react.png"
        }
    ];

    const [selectedSkill, setSelectedSkill] = React.useState(skills[0]);

    const [selectedCategory, setSelectedCategory] = React.useState("All");

    const categories = ["All", "Web", "Frontend", "Backend", "Database", "Programming"];


    return (
        <div className="skills-react">
            <h2>Technical Skills:</h2>

            <div className="skill-categories">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={selectedCategory === category ? "active" : ""}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="skill-buttons">
                {skills.map((skill) => (
                    <SkillButton
                    key={skill.name}
                    skill={skill}
                    isActive={selectedSkill.name === skill.name}
                    isDimmed={selectedCategory !== "All" && skill.category !== selectedCategory}
                    onSelect={setSelectedSkill}
                />
                ))}
            </div>

            <SkillDetails skill={selectedSkill} />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("skills-root"));
root.render(<SkillsSection />);