export interface IMeasureRequest {
    name: string,
    code: string,
    shortName: string,
    description: string,
    parent: {id: number} | null
}