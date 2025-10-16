export interface IMeasureResponse {
    id: number,
    parent: {
        id: number,
        name: string,
        code: string,
        shortName: string,
        description: string
    },
    name: string,
    code: string,
    shortName: string,
    description: string

}