import React, { useState } from 'react';

const Practical = ({appState}) => {
    const [ compName, setCompName ] = useState("");
    const [ position, setPosition ] = useState("");
    const [ mainTasks, setMainTasks ] = useState([]);
    const [ dateFrom, setDateFrom ] = useState("");
    const [ dateUntil, setDateUntil ] = useState("");

    const compNameHandler = (e) => {
        setCompName(e.target.value);
    }

    const positionHandler = (e) => {
        setPosition(e.target.value);
    }

    const mainTasksHandler = (e) => {
        setMainTasks(e.target.value);
    }
    
    const dateFromHandler = (e) => {
        setDateFrom(e.target.value);
    }

    const dateUntilHandler = (e) => {
        setDateUntil(e.target.value);
    }

    return(
        <div className="mt-2">
            <label className="font-weight-bold">Company Name:</label>
            {appState ? <label>{compName}</label>: <input className="form-control" type="text" value={compName} onChange={compNameHandler} />}
            {appState ? <br />: null}
            <label className="font-weight-bold">Position:</label>
            {appState ? <label>{position}</label>: <input className="form-control" type="text" value={position} onChange={positionHandler} />}
            {appState ? <br />: null}
            <label className="font-weight-bold">Main Tasks:</label>
            {appState ? <label>{mainTasks}</label>: <input className="form-control" type="text" value={mainTasks} onChange={mainTasksHandler} />}
            {appState ? <br />: null}
            <label className="font-weight-bold">Date From:</label>
            {appState ? <label>{dateFrom}</label>: <input className="form-control" type="text" value={dateFrom} onChange={dateFromHandler} />}
            {appState ? <br />: null}
            <label className="font-weight-bold">Date Until:</label>
            {appState ? <label>{dateUntil}</label>: <input className="form-control" type="text" value={dateUntil} onChange={dateUntilHandler} />}
            {appState ? <br />: null}
            {/* <button onClick={addField}>Add</button> */}
        </div>
    );
}

export default Practical;