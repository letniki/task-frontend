import React, {useEffect, useState} from 'react';
import CreateMeasureComponent from "../../components/create/CreateMeasureComponent";
import {IMeasureResponse} from "../../interfaces/measure/IMesureResponse";
import MeasuresComponent from "../../components/measures/MeasuresComponent";
import {getAllMeasures} from "../../services/measureService";

const MeasurePage = () => {
    const [measures, setMeasures] = useState<IMeasureResponse[]>([]);
    useEffect((): void => {
        getAllMeasures().then((resp: IMeasureResponse[]) => {
            setMeasures(resp);
        })
    }, []);
    return (
        <div>
            <CreateMeasureComponent/>
            <h2 className='text'>All Measures</h2>
            <MeasuresComponent measures={measures}/>
        </div>
    );
};

export default MeasurePage;