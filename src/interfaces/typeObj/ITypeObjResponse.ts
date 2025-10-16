export interface ITypeObjResponse {
    id: number;
    parent: {
        id: number,
        name: string,
        shortName: string,
        code: string,
        description: string
    },
    name: string,
    shortName: string,
    code: string,
    description: string
}