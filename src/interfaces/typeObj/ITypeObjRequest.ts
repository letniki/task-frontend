export interface ITypeObjRequest {
    name: string,
    shortName: string,
    code: string,
    description: string,
    parent: {id: number} | null
}