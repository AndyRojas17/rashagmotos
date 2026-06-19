import { defineCollection, z } from 'astro:content';

const motos = defineCollection({
  type: 'content',
  schema: z.object({
    nombre: z.string(),
    precio: z.string(),
    cilindrada: z.string(),
    uso: z.enum(['Scooters', 'Urbanas', 'Deportivas', 'Todo Terreno', 'Touring', 'Cuatrimotos']),
    foto: z.string(),
    mensaje_wa: z.string(),
    orden: z.number().min(1).max(6),
    activa: z.boolean().default(true),
  }),
});

const marcas = defineCollection({
  type: 'content',
  schema: z.object({
    nombre: z.string(),
    logo: z.string(),
    orden: z.number(),
  }),
});

const galeria = defineCollection({
  type: 'content',
  schema: z.object({
    foto: z.string(),
    alt: z.string().optional(),
    orden: z.number(),
  }),
});

// Singleton: src/content/local/index.md
const local = defineCollection({
  type: 'content',
  schema: z.object({
    direccion: z.string(),
    horario: z.string(),
    taller_foto: z.string(),
    servicios: z.array(z.string()),
    hero_imagen: z.string(),
    hero_linea_confianza: z.string(),
    hero_cobertura: z.string(),
  }),
});

// Singleton: src/content/financiamiento/index.md
const financiamiento = defineCollection({
  type: 'content',
  schema: z.object({
    desde: z.string(),
    notas: z.array(z.string()),
  }),
});

const clientes = defineCollection({
  type: 'content',
  schema: z.object({
    foto: z.string(),
    modelo_moto: z.string().optional(),
    ciudad: z.string().optional(),
    orden: z.number(),
  }),
});

export const collections = { motos, marcas, galeria, local, financiamiento, clientes };
