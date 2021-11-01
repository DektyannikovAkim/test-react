import React from 'react';
import { Context } from './InputArea';
import { useContext } from 'react';

export const Radioarea = () => {

    const {radioCheck, setRadioCheck} = useContext(Context);

    return (
        <div className="wrapper-for-radio">
            <input type="radio" checked={radioCheck} onChange={() => setRadioCheck(!radioCheck)}/>
            <input type="radio"checked={!radioCheck}  onChange={() => setRadioCheck(!radioCheck)}/>
        </div>
    );
}

