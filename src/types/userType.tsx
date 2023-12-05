export type UserType = {
  id?: string;
  nombre?: string;
  apellido?: string;
  email?: string;
  password?: string;
  gender?: string;
  phone?: string;
  address?: string;
  productos?: [Producto];
};

export type Token = string | null;

export type Producto = {
  id?: string;
  nombre?: string;
  descripcion?: string;
  precio?: number;
  precioStop?: number;
  url?: string;
  images: [string];
}