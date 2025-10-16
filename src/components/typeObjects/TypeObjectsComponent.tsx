import React, {FC} from 'react';
import {ITypeObjResponse} from "../../interfaces/typeObj/ITypeObjResponse";
import TypeObjectComponent from "../typeObject/TypeObjectComponent";

interface IProps {
    typeObjects: ITypeObjResponse[]
}
const TypeObjectsComponent: FC<IProps> = ({typeObjects}) => {
    return (
        <div>
            {
                typeObjects.map((typeObject) => (
                    <TypeObjectComponent key={typeObject.id} typeObject={typeObject}/>
                ))
            }
        </div>
    );
};

export default TypeObjectsComponent;