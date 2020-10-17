import React, { useState } from 'react';

const Educational = ({appState}) => {
    const [ schoolName, setSchoolName ] = useState("");
    const [ titleOfStudy, setTitleOfStudy ] = useState("");
    const [ dateOfStudy, setDateOfStudy ] = useState("");

    const schoolNameHandler = (e) => {
        setSchoolName(e.target.value);
    }

    const titleOfStudyHandler = (e) => {
        setTitleOfStudy(e.target.value);
    }

    const dateOfStudyHandler = (e) => {
        setDateOfStudy(e.target.value);
    }

    return(
        <div className="mt-2">
            <label className="font-weight-bold">School Name:</label>
            {appState ? <label>{schoolName}</label>: <input className="form-control" type="text" value={schoolName} onChange={schoolNameHandler} />}
            {appState ? <br />: null}
            <label className="font-weight-bold">Title Of Study:</label>
            {appState ? <label>{titleOfStudy}</label>: <input className="form-control" type="text" value={titleOfStudy} onChange={titleOfStudyHandler} />}
            {appState ? <br />: null}
            <label className="font-weight-bold">Date of Study:</label>
            {appState ? <label>{dateOfStudy}</label>: <input className="form-control" type="text" value={dateOfStudy} onChange={dateOfStudyHandler} />}
            {appState ? <br />: null}
        </div>
    );
}

export default Educational;