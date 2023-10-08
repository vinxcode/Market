/* Necesitamos hacer un programa que pueda ser una lista de compras que cumpla con las siguiente funciones:
- Ser una lista de articulos para la compra semanal
    - Que se puedan agregar articulos
        - Cada articulo puede tener un estado que puede ser cualquiera de las opciones
            - EN LA LISTA
            - EN LA CASA
            - SE ACABO

        - Dependiendo del estado delo articulo se agrega a una de tres listas con los nombres de los estados
            - Lista EN LA LISTA, lista EN LA CASA, lista SE ACABO

    - La funcionalidad base es que 
        - Cuando el producto esta en PARACOMPRAR y se tacha pasa automaticamente a PARACASA
        - Cuando el producto esta en PARACASA y se tacha pasa aut. a ACABADOS
        - Cuando esta en ACABADOS y se tacha pasa aut. a PARACOMPRAR
*/

// -----------------------------------------------------------------------------




let paraComprar = []
let paraCasa = []
let acabados = []

paraComprar = [
    'CEBOLLA', 'PEPINO', 'TOMATE', 'AGUACATE', 
    'TORTILLAS DE ENCHILADA', 'LECHUGA', 'ALITAS',
    'PAPAS', 'QUESO'
]

console.log('Primera lista de compras \n ',paraComprar)

// -------------------------------------------------------------------------

const setParaCasa = (lista) => {
    paraComprar.forEach((element, indexParaCompra) =>{
        lista.forEach(elegido => {
            if(elegido === indexParaCompra){
                paraCasa = [...paraCasa, element]
                paraComprar.splice(indexParaCompra, 1)
            }
        })
    })
    console.log(paraComprar)
    return paraCasa
}

const setAcabados = (lista) => {
    paraCasa.forEach((element, indexParaCasa) =>{
        lista.forEach(elegido => {
            if(elegido === indexParaCasa){
                acabados = [...acabados, element]
                paraCasa.splice(indexParaCasa, 1)
            }
        })
    })
    return acabados
}

const setParaComprar = (lista) => {
    acabados.forEach((element, indexAcabados) =>{
        lista.forEach(elegido => {
            if(elegido === indexAcabados){
                paraComprar = [...paraComprar, element]
                acabados.splice(indexAcabados, 1)
            }
        })
    })
    return paraComprar
}
paraCasa = [...setParaCasa([0,1,2, 3, 4, 5, 6, 7, 8])]
// acabados = [...setAcabados([1,2, 4, 5])]
// paraComprar = [...setParaComprar([0,1, 3])]


console.log('COMPRADOS HECHOS: \n ',paraCasa)
console.log('PRODUCTOS TERMINADOS: \n ',acabados)
console.log('NUEVA LISTA DE COMPRAS \n ',paraComprar)
