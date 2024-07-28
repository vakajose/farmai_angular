export interface Punto {
    latitude: number;
    longitude: number;
  }
  
  export interface ParcelaCreate {
    nombre: string;
    ubicacion: Punto[];
    tipo_monitoreo?: string[] | null;
    proximo_monitoreo?: string | null;
    usuario_id: string;
  }
  
  export interface ParcelaResponse {
    nombre: string;
    ubicacion: Punto[];
    tipo_monitoreo?: string[] | null;
    proximo_monitoreo?: string | null;
    id?: string | null;
    usuario_id: string;
  }
  
  export function isClosedPolygon(polygon: Punto[]): boolean {
    return polygon.length > 2 && polygon[0].latitude === polygon[polygon.length - 1].latitude && polygon[0].longitude === polygon[polygon.length - 1].longitude;
  }