import React, {FC} from 'react';
import {ITypeParamResponse} from "../../interfaces/typeParam/ITypeParamResponse";
import TypeParamComponent from "../typeParam/TypeParamComponent";

interface IProps {
    typeParams: ITypeParamResponse[]
}
const TypeParamsComponent: FC<IProps> = ({typeParams}) => {
    console.log("typeParams =", typeParams);
    return (
        <div>
            {
                typeParams.map((typeParam) => (
                    <TypeParamComponent key={typeParam.id} typeParam={typeParam}/>
                ))
            }
        </div>
    );
};

export default TypeParamsComponent;