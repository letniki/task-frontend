import React, {FC} from 'react';
import {IMeasureResponse} from "../../interfaces/measure/IMesureResponse";
import MeasureComponent from "../measure/MeasureComponent";

interface IProps {
    measures: IMeasureResponse[]
}
const MeasuresComponent: FC<IProps> = ({measures}) => {
    return (
        <div>
            {
                measures.map((measure) => (
                    <MeasureComponent key={measure.id} measure={measure}/>
                ))
            }
        </div>
    );
};

export default MeasuresComponent;