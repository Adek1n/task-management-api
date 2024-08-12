export function getAll(req,res){
    res.end("hello")
}
export function getID(req,res){
    res.json(req.params)
}