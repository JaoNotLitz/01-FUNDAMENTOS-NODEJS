
// /users/:id
export function buildRoadPath(path){
    const routeParametersRegex = /:([a-zA-Z]+)/g
    console.log(Array.from(path.matchAll(routeParametersRegex)));
    
}
