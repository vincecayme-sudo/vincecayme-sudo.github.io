/*
This section is to help me learn React fundamentals. But firstly, what is React?
React.js is strictly a 'front-end JavaScript library'. Library in this context refers to a collection of 
pre-written code. Frameworks such as Next.js are built upon React.js libraries.

React works by creating a virtual DOM in memory, of which the DOM (Document Object Model) is a tree like
structure that the browser builds in memory (of HTML content). The DOM can be manipulated by programming
languages (i.e JavaScript) to read, modify, or delete the document's content, structure, and style.

Each HTML tag (e.g <h1>) becomes a node within the tree and thus the React becomes the necessary bridge
HTML content and dynamic webpage behaviour from JavaScript functions.

My implementation of React is a component-based skills section with two states: selectedSkill and selectedCategory
which is then managed by useState hooks. 
Currently the UI consists of three components:
1. SkillsSection - the parent holding state and data
2. SkillButton - a controlled child that receives props and fires a callback
3. SkillDetails - display component


*/


//This function provides the structure for the skills section
//Header - Category - SkillButton - Description
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

            <p><strong>Category:</strong> {skill.category.join(" / ")}</p>
            <p><strong>Experience:</strong> {skill.experience}</p>
            <p><strong>Used for:</strong> {skill.usedFor}</p>
            <p>{skill.description}</p>
        </div>
    );
}

//This function displays each skill as a button in a row with their respective icon found in the assets folder
//The button also holds their state of being selected/visible either via the user or category
//If button is not selected, then they will be dimmed 
//Note that dimming is only for visual effect and does not effect the button functionality

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

//The following section is used to display web page content, in particular for the 'Skills' section
//Alter when skills have been sufficiently improved and/or learnt
//Follow correct JSON formatting to add a new skill***

function SkillsSection() {
    const skills = [
        {
            name: "JavaScript",
            category: ["Frontend"],
            experience: "Learning-Intermediate",
            usedFor: "Project slider, scroll progress bar, page loader, ASCII background",
            description: "I use JavaScript to add interaction and browser behavior to static pages.",
            icon: "assets/js.png"
        },
        {
            name: "HTML",
            category: ["Frontend"],
            experience: "Intermediate",
            usedFor: "Portfolio structure and semantic page sections",
            description: "Throughout my study I have realised that HTML is the fundamental backbone of all web pages, and therefore proper structure is of utmost importance.",
            icon: "assets/html.png"
        },
        {
            name: "CSS",
            category: ["Frontend"],
            experience: "Intermediate",
            usedFor: "Portfolio layout, styling, responsive design, and visual identity",
            description: "I utilise CSS to style my website in a futuristic, cyberpunk, terminal aesthetic with considerations to responsive design. Without CSS, the page has no soul and is solely responsible for dictating the user's experience. An example is the website I built for a local client where emphasis was placed on health and wellness.",
            icon: "assets/css.png"
        },
        {
            name: "C++",
            category: ["Programming"],
            experience: "Intermediate",
            usedFor: "Computer science fundamentals and embedded systems practice",
            description: "I use C++ to understand lower-level programming concepts and performance.",
            icon: "assets/cpp.png"
        },
        {
            name: "MySQL",
            category: ["Backend"],
            experience: "Learning / Practical",
            usedFor: "Database queries and structured data handling",
            description: "I use SQL to work with relational data and retrieve meaningful information.",
            icon: "assets/sql.png"
        },
        {
            name: "PHP",
            category: ["Backend"],
            experience: "Learning / Practical",
            usedFor: "Server-side web development",
            description: "I use PHP to understand backend logic and dynamic web pages.",
            icon: "assets/php.png"
        },
        {
            name: "React",
            category: ["Frontend"],
            experience: "Currently learning",
            usedFor: "Interactive technical skills section",
            description: "I am learning React by converting part of my portfolio into a component-based interactive interface.",
            icon: "assets/react.png"
        },
        {
            name: "Java",
            category: ["Backend","Programming"],
            experience: "Currently learning",
            usedFor: "TBD",
            description: "I am learning Java during my diploma.",
            icon: "assets/java.png"
        }
    ];

    //React Hooks

    const [selectedSkill, setSelectedSkill] = React.useState(skills[0]);

    const [selectedCategory, setSelectedCategory] = React.useState("All");

    const categories = ["All", "Frontend", "Backend", "Programming"];


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
                    isDimmed={selectedCategory !== "All" && !skill.category.includes(selectedCategory)}
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