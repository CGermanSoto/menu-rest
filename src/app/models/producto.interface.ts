// src/app/models/producto.interface.ts
export interface Producto {
  productoId: number;
  nombre: string;
  categoria: string | null;
  precio: number;
  imagenBase64?: string;
  imagenUrl?: string;  // Agrega esta línea para que TypeScript reconozca esta propiedad
}
