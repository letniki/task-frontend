import React, {useEffect, useState} from 'react';
import CreateTypeObjComponent from "../../components/create/CreateTypeObjComponent";
import {ITypeObjResponse} from "../../interfaces/typeObj/ITypeObjResponse";
import TypeObjectsComponent from "../../components/typeObjects/TypeObjectsComponent";
import {getAllTypeObjects} from "../../services/typeObjService";

const TypeObjPage = () => {
    const [typeObjects, setTypeObjects] = useState<ITypeObjResponse[]>([]);
    useEffect((): void => {
        getAllTypeObjects().then((resp: ITypeObjResponse[]) => {
            setTypeObjects(resp);
        })
    }, []);
    return (
        <div>
            <CreateTypeObjComponent/>
            <h2 className='text'>All Type Objects</h2>
            <TypeObjectsComponent typeObjects={typeObjects}/>
        </div>
    );
};

export default TypeObjPage;