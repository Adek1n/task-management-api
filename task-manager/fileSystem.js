import fs from "fs/promises";
export async function writeData(data){
    if((typeof data)!=Object)throw new Error("Data must be of type Object");
    await fs.writeFile("./tasks.txt",data,{
        encoding:"utf-8"
    });
}
export async function readData(){
    return JSON.parse();
}
export function verifyID(id){
    if(id<0)throw new Error("ID cannot be less than 0");

}