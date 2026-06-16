# Rick and Morty Explorer

Una aplicación web moderna para explorar el multiverso de Rick y Morty. Desarrollada con React, enfocada en la organización del código y una experiencia de usuario fluida.

## Tecnologías y Herramientas

- **Framework:** React
- **API:** [Rick and Morty API](https://rickandmortyapi.com/)
- **Gestión de peticiones:** Axios
- **Gestión de Estado:** Zustand
- **Persistencia:** LocalStorage (para guardar tus favoritos)
- **Enrutamiento:** React Router DOM
- **Estilos:** CSS Modules
- **Gestor de paquetes:** Yarn

## Características principales

- **Búsqueda y Filtros:** Busca personajes por nombre (con _debounce_ para optimizar llamadas a la API) y filtra por estado o género.
- **Gestión de Favoritos:** Guarda tus personajes favoritos para verlos después, con persistencia gracias a `localStorage`.
- **Detalle de Personajes:** Vista detallada con toda la información relevante de cada personaje.
- **Estructura Modular:** El proyecto está organizado por módulos para que sea fácil de mantener y escalar.

## Instalación y Uso

1.  **Clona el repositorio:**

Repositorio: [https://github.com/sacordovap/ricky-and-morty_react.git](https://github.com/sacordovap/ricky-and-morty_react.git)

```bash
  git clone https://github.com/sacordovap/ricky-and-morty_react.git
  cd ricky-and-morty_react
```

2.  **Instala las dependencias:**

```bash
    yarn install
```

3.  **Inicia el entorno de desarrollo:**

```bash
    yarn dev
```

## Estructura del Proyecto

El proyecto utiliza una **estructura modular**, separando el código por funcionalidades para mayor claridad:

```text
src/
├── assets/         # Recursos estáticos
├── common/         # Componentes y servicios compartidos
├── features/       # Lógica dividida por módulos (characters, favorites)
└── router/         # Configuración de rutas
```
