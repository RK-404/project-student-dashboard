function StudentDetail({ student, notes, handleAddNote }) {

  let goalPercentage = Math.floor(student.codewars.current.total / student.codewars.goal.total * 100);
  let cls = "green";
  if (goalPercentage >= 50 && goalPercentage < 100) {
    cls = "yellow"
  }
  else if (goalPercentage < 50) {
    cls = "red";
  }

  const getSign = isTrue => isTrue ? "✅" : "❌";

  let id = 100;

  return (
    <>
    <div className="student-detail">
      <div className="individual-detail codewars">
        <h4>Codewars</h4>
        <p><span>Current Total:</span> {student.codewars.current.total}</p>
        <p><span>Last Week:</span> {student.codewars.current.lastWeek}</p>
        <p><span>Goal:</span> {student.codewars.goal.total}</p>
        <p><span>Percent of Goal Achieved:</span> <strong className={cls}>{goalPercentage}%</strong></p>
      </div>
      <div className="individual-detail scores">
        <h4>Scores</h4>
        <p><span>Assignments:</span> {student.cohort.scores.assignments * 100}%</p>
        <p><span>Projects:</span> {student.cohort.scores.projects * 100}%</p>
        <p><span>Assessments:</span> {student.cohort.scores.assessments * 100}%</p>
      </div>
      <div className="individual-detail certifications">
        <h4>Certifications</h4>
        <p><span>Resume:</span> {getSign(student.certifications.resume)}</p>
        <p><span>LinedIn:</span> {getSign(student.certifications.linkedin)}</p>
        <p><span>Mock Interview:</span> {getSign(student.certifications.mockInterview)}</p>
        <p><span>Github:</span> {getSign(student.certifications.github)}</p>
      </div>
    </div>
    <div className="notes">
      <h4>1-on-1 Notes</h4>
      <form id="note-form" onSubmit={handleAddNote}>
        <div className="form-element commenter">
          <label>Commenter Name</label>
          <input type="text" id="commenter" required/>
        </div>
        <div className="form-element comment">
          <label>Comment</label>
          <input type="text" id="comment" required/>
        </div>
        <div className="form-element">
          <button>Add Note</button>
        </div>
      </form>
    </div>
    <ul>
      {notes.map(note => <li key={id++}>{note.commenter} says, "{note.comment}"</li>)}
    </ul>
    </>
  );
}

export default StudentDetail;
