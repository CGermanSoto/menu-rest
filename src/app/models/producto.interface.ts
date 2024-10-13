// src/app/models/producto.interface.ts
export interface Producto {
    productoId: number;
    nombre: string;
    categoria: string | null;  // La categoría puede ser null
  }
  