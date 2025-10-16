import axios, {AxiosResponse} from "axios";
import {BASE_URL} from "./consts";
import {ILibParamRequest} from "../interfaces/libParam/ILibParamRequest";
import {ILibParamResponse} from "../interfaces/libParam/ILibParamResponse";

export const createLibParam = async (libParamData: ILibParamRequest): Promise<ILibParamResponse> => {
    try {
        const parentId = libParamData.typeParam?.id;

        const body = {
            name: libParamData.name,
            code: libParamData.code,
            description: libParamData.description,
            typeParam: parentId ? { id: parentId } : null
        };
        const response: AxiosResponse<ILibParamResponse> = await axios.post(
            `${BASE_URL}/lib-params`,
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

export const getAllLibParams = async (): Promise<ILibParamResponse[]> => {
    try {
        const response: AxiosResponse<ILibParamResponse[]> = await axios.get(`${BASE_URL}/lib-params`,
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
export const deleteLibParam = async (id: number): Promise<void> => {
    try {
        await axios.delete(`${BASE_URL}/lib-params/${id}`,
            {headers: {
                    'Content-Type': 'application/json'
                }}
        );
    } catch (error) {
        console.error(error);
        throw error;
    }
};
export const updateLibParam = async (id: number, libParamData: ILibParamRequest): Promise<ILibParamResponse> => {
    try {
        const parentId = libParamData.typeParam?.id;

        const body = {
            name: libParamData.name,
            code: libParamData.code,
            description: libParamData.description,
            typeParam: parentId ? { id: parentId } : null
        };
        const response: AxiosResponse<ILibParamResponse> = await axios.put(
            `${BASE_URL}/lib-params/${id}`,
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