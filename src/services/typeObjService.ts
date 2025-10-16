import axios, {AxiosResponse} from "axios";
import {BASE_URL} from "./consts";
import {ITypeObjResponse} from "../interfaces/typeObj/ITypeObjResponse";
import {ITypeObjRequest} from "../interfaces/typeObj/ITypeObjRequest";

export const createTypeObj = async (typeObjData: ITypeObjRequest): Promise<ITypeObjResponse> => {
    try {
        const parentId = typeObjData.parent?.id;

        const body = {
            name: typeObjData.name,
            shortName: typeObjData.shortName,
            code: typeObjData.code,
            description: typeObjData.description,
            parent: parentId ? { id: parentId } : null
        };
        const response: AxiosResponse<ITypeObjResponse> = await axios.post(
            `${BASE_URL}/type-objects`,
            body,
            {headers: {
                    "Content-Type": "application/json"
                }}
        )
        return response.data;
    } catch (error){
        console.error(error);
        throw new Error("failed");
    }
}
export const getAllTypeObjects = async (): Promise<ITypeObjResponse[]> => {
    try {
        const response: AxiosResponse<ITypeObjResponse[]> = await axios.get(`${BASE_URL}/type-objects`,
            {headers: {
                    'Content-Type': 'application/json'
                }}
        );
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
export const deleteTypeObject = async (id: number): Promise<void> => {
    try {
        await axios.delete(`${BASE_URL}/type-objects/${id}`,
            {headers: {
                    'Content-Type': 'application/json'
                }}
        );
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const updateTypeObj = async (id: number,typeObjData: ITypeObjRequest): Promise<ITypeObjResponse> => {
    try {
        const parentId = typeObjData.parent?.id;

        const body = {
            name: typeObjData.name,
            shortName: typeObjData.shortName,
            code: typeObjData.code,
            description: typeObjData.description,
            parent: parentId ? { id: parentId } : null
        };
        const response: AxiosResponse<ITypeObjResponse> = await axios.put(
            `${BASE_URL}/type-objects/${id}`,
            body,
            {headers: {
                    "Content-Type": "application/json"
                }}
        )
        return response.data;
    } catch (error){
        console.error(error);
        throw new Error("failed");
    }
}