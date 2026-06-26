import { config, collection, singleton, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },

  ui: {
    brand: { name: 'Rashag Motos — Admin' },
  },

  collections: {
    motos: collection({
      label: 'Motos',
      slugField: 'nombre',
      path: 'src/content/motos/*',
      format: { frontmatter: 'yaml' },
      schema: {
        nombre: fields.slug({ name: { label: 'Nombre de la moto' } }),
        precio: fields.text({ label: 'Precio', description: 'Ej: S/ 6,100' }),
        cilindrada: fields.text({ label: 'Cilindrada', description: 'Ej: 250cc' }),
        uso: fields.select({
          label: 'Categoría',
          options: [
            { label: 'Scooters', value: 'Scooters' },
            { label: 'Urbanas', value: 'Urbanas' },
            { label: 'Deportivas', value: 'Deportivas' },
            { label: 'Todo Terreno', value: 'Todo Terreno' },
            { label: 'Touring', value: 'Touring' },
            { label: 'Cuatrimotos', value: 'Cuatrimotos' },
          ],
          defaultValue: 'Urbanas',
        }),
        foto: fields.image({
          label: 'Foto de la moto',
          directory: 'public/images/motos',
          publicPath: '/images/motos/',
          description: 'Imagen cuadrada 800x800px recomendada',
        }),
        mensaje_wa: fields.text({
          label: 'Mensaje WhatsApp',
          multiline: true,
          description: 'Mensaje que se envía al cliente por WhatsApp',
        }),
        orden: fields.number({ label: 'Orden de aparición', defaultValue: 10 }),
        activa: fields.checkbox({ label: 'Moto activa (visible en web)', defaultValue: true }),
      },
    }),

    galeria: collection({
      label: 'Galería',
      slugField: 'alt',
      path: 'src/content/galeria/*',
      format: { frontmatter: 'yaml' },
      schema: {
        alt: fields.slug({ name: { label: 'Descripción de la foto' } }),
        foto: fields.image({
          label: 'Foto',
          directory: 'public/images',
          publicPath: '/images/',
        }),
        orden: fields.number({ label: 'Orden', defaultValue: 10 }),
      },
    }),

    clientes: collection({
      label: 'Comunidad Rashag (Clientes)',
      slugField: 'modelo_moto',
      path: 'src/content/clientes/*',
      format: { frontmatter: 'yaml' },
      schema: {
        foto: fields.image({
          label: 'Foto del cliente',
          directory: 'public/images',
          publicPath: '/images/',
          description: 'Imagen cuadrada 1:1',
        }),
        modelo_moto: fields.slug({ name: { label: 'Modelo de moto' } }),
        ciudad: fields.text({ label: 'Ciudad', validation: { isRequired: false } }),
        orden: fields.number({ label: 'Orden', defaultValue: 10 }),
      },
    }),

    marcas: collection({
      label: 'Marcas',
      slugField: 'nombre',
      path: 'src/content/marcas/*',
      format: { frontmatter: 'yaml' },
      schema: {
        nombre: fields.slug({ name: { label: 'Nombre de la marca' } }),
        logo: fields.image({
          label: 'Logo',
          directory: 'public/images/marcas',
          publicPath: '/images/marcas/',
        }),
        orden: fields.number({ label: 'Orden', defaultValue: 10 }),
      },
    }),
  },

  singletons: {
    local: singleton({
      label: 'Información del local',
      path: 'src/content/local/index',
      format: { frontmatter: 'yaml' },
      schema: {
        direccion: fields.text({ label: 'Dirección' }),
        horario: fields.text({ label: 'Horario de atención' }),
        hero_imagen: fields.text({ label: 'Imagen hero (ruta)', description: 'Ej: /images/HERO.jpg' }),
        hero_linea_confianza: fields.text({ label: 'Línea de confianza hero' }),
        hero_cobertura: fields.text({ label: 'Cobertura hero' }),
        taller_foto: fields.text({ label: 'Foto taller (ruta)' }),
        servicios: fields.array(
          fields.text({ label: 'Servicio' }),
          { label: 'Lista de servicios', itemLabel: (props) => props.fields.value.value || 'Servicio' }
        ),
      },
    }),
  },
});
