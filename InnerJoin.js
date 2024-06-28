const usersPublicInfo = [
    {
        id: 0,
        name: "Marco Antonio",
        email: "marco@hola.com"
    },
    {
        id: 1,
        name: "Mario Gomez",
        email: "mario@hola.com"
    },
    {
        id: 2,
        name: "Mariano",
        email: "mariano@hola.com"
    }
]
const usersPrivateInfo = [
    {
        id: 0,
        phone: "811412040",
        departmentId: 1
    },
    {
        id: 1,
        phone: "811412041",
        departmentId: 0
    },
    {
        id: 2,
        phone: "811412042",
        departmentId: 1
    }
]

function innerJoin({leftOne, rightOne, key}){
    const map = new Map()
    rightOne.forEach(item => map.set(item[key], item))
    let join = []
    leftOne.forEach(item => {
        const rightItem = map.get(item[key])
        if(rightItem === undefined) return
        join.push({...item, ...rightItem})
    })
    return join
}
console.log({innerInfo: innerJoin({leftOne: usersPublicInfo, rightOne: usersPrivateInfo, key: 'id'})})