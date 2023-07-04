// Este archivo, al ser de tipo '.d.ts' es SOLO de definiciones.

// Esta es mi interfaz de logica de negocios principal.
export interface Sub {
  nick: string;
  subMonths: number;
  avatar: string;
  description?: string;
}

export type SubsResponse = Array<{
  nick: string;
  months: number;
  profileUrl: string;
  description?: string;
}>;
