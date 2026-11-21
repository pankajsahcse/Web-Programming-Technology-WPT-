
import { useNavigate } from "react-router-dom";

function SubjectCard({ subject }) {

    const navigate = useNavigate();

    function handleClick() {
        navigate(`/test/${subject.name.toLowerCase()}`);
    }

    return (
        <div className="subject-card">

            <div
                className="subject-icon"
                style={{ backgroundColor: subject.color }}
            >
                {subject.icon}
            </div>

            <h2>{subject.name}</h2>

            <p>{subject.description}</p>

            <div className="card-footer">
                <span>{subject.questions} Questions</span>

                <button onClick={handleClick}>
                    Start Practice
                </button>
            </div>

        </div>
    );
}

export default SubjectCard;
