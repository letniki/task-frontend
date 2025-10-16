import React, {useEffect, useState} from 'react';
import CreateTypeParamComponent from "../../components/create/CreateTypeParamComponent";
import {ITypeParamResponse} from "../../interfaces/typeParam/ITypeParamResponse";
import TypeParamsComponent from "../../components/typeParams/TypeParamsComponent";
import {getAllTypeParams} from "../../services/typeParamService";

const TypeParamsPage = () => {
    const [typeParams, setTypeParams] = useState<ITypeParamResponse[]>([]);
    useEffect((): void => {
        getAllTypeParams().then((resp: ITypeParamResponse[]) => {
            setTypeParams(resp);
        })
    }, []);
    return (
        <div>
            <CreateTypeParamComponent/>
            <h2 className='text'>All Type Params</h2>
            <TypeParamsComponent typeParams={typeParams}/>
        </div>
    );
};

export default TypeParamsPage;