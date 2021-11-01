import React, { useState } from 'react';
import { Outputarea } from './OutputArea';
import { Radioarea } from './RadioArea';


export const Context = React.createContext()

export const InputArea = () => {
    const [valueFstInpt, setValueFstInpt] = useState('');
    const [valueScndInpt, setValueScndInpt] = useState('');
    const [radioCheckFirst, setRadioCheckFirst] = useState(false);
    const [radioCheckSecond, setRadioCheckSecond] = useState(false);

const radioFirst = {
    radioCheck:radioCheckFirst,
    setRadioCheck:setRadioCheckFirst
}

const radioSecond = {
    radioCheck:radioCheckSecond,
    setRadioCheck:setRadioCheckSecond
}

    let numbOfChildComp = 1;

    return (
       
        <div>
           <div className="wrapper">
                <Context.Provider value={radioFirst}>
                    <div >           
                        <input className="left" type="text" value={valueFstInpt}
                        onChange= {event=> {setValueFstInpt(event.target.value)}}/>
                        <Radioarea/>
                        <div className="wrapper-for-output">
                        <Outputarea value={valueFstInpt} numbOfChildComp={numbOfChildComp}/>
                        </div>
                    </div>
                </Context.Provider>
                <Context.Provider value={radioSecond}>
                    <div >           
                        <input className="right" type="text" value={valueScndInpt}
                        onChange= {event=> setValueScndInpt(event.target.value)}/>
                        <Radioarea/>  
                        <div className="wrapper-for-output-right">
                        <Outputarea value={valueScndInpt} numbOfChildComp={numbOfChildComp}/>
                        </div>
                    </div>  
                </Context.Provider>             
            </div>      
        </div>
        
    );
}

 
