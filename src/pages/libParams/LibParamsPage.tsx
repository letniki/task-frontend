import React, {useEffect, useState} from 'react';
import CreateLibParamComponent from "../../components/create/CreateLibParamComponent";
import { ILibParamResponse } from '../../interfaces/libParam/ILibParamResponse';
import LibParamsComponent from "../../components/libParams/LibParamsComponent";
import {getAllLibParams} from "../../services/libParamService";

const LibParamsPage = () => {
    const [libParams, setLibParams] = useState<ILibParamResponse[]>([]);
    useEffect((): void => {
        getAllLibParams().then((resp: ILibParamResponse[]) => {
            setLibParams(resp);
        })
    }, []);
    return (
        <div>
            <CreateLibParamComponent/>
            <h2 className='text'>All LibParams</h2>
            <LibParamsComponent libParams={libParams}/>
        </div>
    );
};

export default LibParamsPage;