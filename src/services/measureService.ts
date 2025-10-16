import axios, {AxiosResponse} from "axios";
import {BASE_URL} from "./consts";
import {IMeasureRequest} from "../interfaces/measure/IMeasureRequest";
import {IMeasureResponse} from "../interfaces/measure/IMesureResponse";

export const createMeasure = async (measureData: IMeasureRequest): Promise<IMeasureResponse> => {
    try {
        const parentId = measureData.parent?.id;

        const body = {
            name: measureData.name,
            shortName: measureData.shortName,
            code: measureData.code,
            description: measureData.description,
            parent: parentId ? { id: parentId } : null
        };
        const response: AxiosResponse<IMeasureResponse> = await axios.post(
            `${BASE_URL}/measures`,
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
export const getAllMeasures = async (): Promise<IMeasureResponse[]> => {
    try {
        const response: AxiosResponse<IMeasureResponse[]> = await axios.get(`${BASE_URL}/measures`,
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
export const deleteMeasure = async (id: number): Promise<void> => {
    try {
        await axios.delete(`${BASE_URL}/measures/${id}`,
            {headers: {
                    'Content-Type': 'application/json'
                }}
        );
    } catch (error) {
        console.error(error);
        throw error;
    }
};
export const updateMeasure = async (id:number, measureData: IMeasureRequest): Promise<IMeasureResponse> => {
    try {
        const parentId = measureData.parent?.id;

        const body = {
            name: measureData.name,
            shortName: measureData.shortName,
            code: measureData.code,
            description: measureData.description,
            parent: parentId ? { id: parentId } : null
        };
        const response: AxiosResponse<IMeasureResponse> = await axios.put(
            `${BASE_URL}/measures/${id}`,
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