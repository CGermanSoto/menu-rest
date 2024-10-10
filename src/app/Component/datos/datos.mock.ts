
export const datosList:Datos[] = [
    {id:2, imagen:'ubicacion.png', tipo: 'Ubicación: ', descripcion: 'Av. Independencia 3270, CABA-Buenos Aires.'},
    {id:1, imagen:'whatsapp.png', tipo: 'Whatsapp: ', descripcion: '+54 011 73631331'}
]

export interface Datos {
    id: number,
    imagen: string,
    tipo: string,
    descripcion: string
}