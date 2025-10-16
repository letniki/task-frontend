export interface ITypeParamRequest {
    name: string,
    code: string,
    description: string,
    parent: {id: number} | null
}
export interface IUpdateTypeParamRequest {
    name: string,
    code: string,
    description: string
}