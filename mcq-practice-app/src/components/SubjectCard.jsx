
function SubjectCard({ subject, onSelect }) {
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

                <button onClick={() => onSelect(subject)}>
                    Start Practice
                </button>
            </div>

        </div>
    );
}

export default SubjectCard;
