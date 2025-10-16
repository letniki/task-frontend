export interface ITypeParamResponse {
    id: number;
    parent: {
        id: number,
        name: string,
        code: string,
        description: string
    },
    name: string,
    code: string,
    description: string
}