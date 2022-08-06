export const randomGenerator={
    getSingle(min:number,max:number){
        return (Math.random())*(max-min)-min
    },
    getArray(min:number,max:number,length:number){
        let array =[]
        for(let i =1;i<=length;i++){
            array.push(Math.random())
        }
        return array
    }
}