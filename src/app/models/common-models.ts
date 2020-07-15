declare namespace Common {
   

    export interface ApiResponse<T={}> {
        statusCode: number;
        message?: string;
        data: T;
    }
 
    export interface List<T> {
        data:T[],
        total:number
    }
}