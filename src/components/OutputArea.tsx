import { memo } from 'react';
import { Radioarea } from './RadioArea';

interface Props {
    value: string,
    numbOfChildComp: number
}

export const Outputarea = memo((props: Props) => {

    return (
        <div className="wrapper-for-radio">
            <div className="outputTitle">
            {props.value} 
            </div>
            <div className="wrapper-for-radio">
            <Radioarea/>
            </div>
            {(props.numbOfChildComp > 0) ? <Outputarea value={props.value}
             numbOfChildComp={props.numbOfChildComp-1}/> : ''}
        </div>
    );
})


