export const comidaList:Hamburguesa[] = [
    {id: 1, ubicacionImagen: 'pizza.png', nombre: 'Pizza Muzzarella', ingredientes: 'Ingrediente 1, Ingrediente 2, Ingrediente 3', precio: 10234},
    {id: 2, ubicacionImagen: 'pizza.png', nombre: 'Pizza Napolitana', ingredientes: 'Ingrediente 1, Ingrediente 2, Ingrediente 3', precio: 1024},
    {id: 3, ubicacionImagen: 'pizza.png', nombre: 'Pizza Vegana', ingredientes: 'Ingrediente 1, Ingrediente 2, Ingrediente 3', precio: 10234},
    {id: 4, ubicacionImagen: 'pizza.png', nombre: 'Pizza Fugazeta', ingredientes: 'Ingrediente 1, Ingrediente 2, Ingrediente 3', precio: 10234},
    {id: 5, ubicacionImagen: 'pizza.png', nombre: 'Pizza Con anchoas', ingredientes: 'Ingrediente 1, Ingrediente 2, Ingrediente 3', precio: 1024}
]

export interface Hamburguesa {
    id: number | string,
    ubicacionImagen: string,
    nombre: string,
    ingredientes: string,
    precio: number
}