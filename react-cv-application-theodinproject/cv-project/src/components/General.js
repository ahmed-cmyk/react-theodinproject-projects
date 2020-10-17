import React, { useState } from 'react';

const General = ({appState}) => {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phone, setPhone ] = useState("");

    const nameHandler = (e) => {
        setName(e.target.value);
    }

    const emailHandler = (e) => {
        setEmail(e.target.value);
    }

    const phoneHandler = (e) => {
        setPhone(e.target.value);
    }

    return(
        <div className="mt-2">
            <label className="font-weight-bold">Name: </label>
            {appState ? <label>{name}</label>: <input className="form-control" type="text" value={name} onChange={nameHandler} />}
            {appState ? <br />: null}
            <label className="font-weight-bold">Email:</label>
            {appState ? <label>{email}</label>: <input className="form-control" type="text" value={email} onChange={emailHandler} />}
            {appState ? <br />: null}
            <label className="font-weight-bold">Phone Number:</label>
            {appState ? <label>{phone}</label>: <input className="form-control" type="text" value={phone} onChange={phoneHandler} />}
            {appState ? <br />: null}
        </div>
    );
}

export default General;