import React, {FC} from 'react';
import {ILibParamResponse} from "../../interfaces/libParam/ILibParamResponse";
import LibParamComponent from "../libParam/LibParamComponent";
interface IProps {
    libParams: ILibParamResponse[]
}
const LibParamsComponent: FC<IProps> = ({libParams}) => {
    return (
        <div>
            {
                libParams.map((libParam) => (
                    <LibParamComponent key={libParam.id} libParam={libParam}/>
                    ))
            }
        </div>
    );
};

export default LibParamsComponent;