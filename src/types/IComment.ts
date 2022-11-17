export default interface IComment{
    id: number;
    time: number,
    by: string,
    text: string,
    kids: number[]
}