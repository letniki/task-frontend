import axios, {AxiosResponse} from "axios";
import {ITypeParamRequest} from "../interfaces/typeParam/ITypeParamRequest";
import {ITypeParamResponse} from "../interfaces/typeParam/ITypeParamResponse";
import {BASE_URL} from "./consts";

export const createTypeParam = async (typeParamData: ITypeParamRequest): Promise<ITypeParamResponse> => {
    try {
        const parentId = typeParamData.parent?.id;

        const body = {
            name: typeParamData.name,
            code: typeParamData.code,
            description: typeParamData.description,
            parent: parentId ? { id: parentId } : null
        };
        const response: AxiosResponse<ITypeParamResponse> = await axios.post(
            `${BASE_URL}/type-params`,
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
export const getAllTypeParams = async (): Promise<ITypeParamResponse[]> => {
    try {
        const response: AxiosResponse<ITypeParamResponse[]> = await axios.get(`${BASE_URL}/type-params`,
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
export const deleteTypeParam = async (id: number): Promise<void> => {
    try {
        await axios.delete(`${BASE_URL}/type-params/${id}`,
            {headers: {
                    'Content-Type': 'application/json'
                }}
        );
    } catch (error) {
        console.error(error);
        throw error;
    }
};
export const updateTypeParam = async (id: number,typeParamData: ITypeParamRequest): Promise<ITypeParamResponse> => {
    try {
        const parentId = typeParamData.parent?.id;

        const body = {
            name: typeParamData.name,
            code: typeParamData.code,
            description: typeParamData.description,
            parent: parentId ? { id: parentId } : null
        };
        const response: AxiosResponse<ITypeParamResponse> = await axios.put(
            `${BASE_URL}/type-params/${id}`,
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