# 🎵 Tuneatch API

Tuneatch es una API RESTful construida con Express.js que gestiona una plataforma musical con usuarios, roles, artistas, álbumes, géneros, canciones y playlists.

## 🗃️ Estructura de Base de Datos

- **user** (`id`, `username`, `password`, `profile_picture`)
- **rol** (`id`, `name`)
- **user_role** (`user_id`, `rol_id`)
- **artist** (`id`, `name`, `image_path`)
- **album** (`id`, `title`, `artist_id`, `image_path`)
- **genre** (`id`, `name`)
- **song** (`id`, `title`, `artist_id`, `album_id`, `genre_id`, `file_path`, `image_path`)
- **playlist** (`id`, `name`, `user_id`, `image_path`)
- **playlist_song** (`playlist_id`, `song_id`)
- **favorite_playlist** (`user_id`, `playlist_id`)
- **favorite_album** (`user_id`, `album_id`)

## 🔐 Autenticación

- `POST /api/auth/register` - Registrar un nuevo usuario
- `POST /api/auth/login` - Iniciar sesión
- `POST /api/auth/me` - Obtener información del usuario autenticado

## 👤 Usuarios

- `GET /api/users` - Obtener todos los usuarios
- `GET /api/users/{id}` - Obtener un usuario por ID
- `PUT /api/users` - Actualizar usuario
- `DELETE /api/users/{id}` - Eliminar usuario por ID

## 🔒 Roles

- `GET /api/rols` - Obtener todos los roles
- `GET /api/rols/{id}` - Obtener rol por ID
- `POST /api/rols` - Crear un nuevo rol
- `PUT /api/rols` - Actualizar rol
- `DELETE /api/rols/{id}` - Eliminar rol

## 🎤 Artistas

- `GET /api/artists` - Obtener todos los artistas
- `GET /api/artists/{id}` - Obtener artista por ID
- `POST /api/artists` - Crear nuevo artista
- `PUT /api/artists` - Actualizar artista
- `DELETE /api/artists/{id}` - Eliminar artista

## 💿 Álbumes

- `GET /api/albums` - Obtener todos los álbumes
- `GET /api/albums/{id}` - Obtener álbum por ID
- `POST /api/albums` - Crear nuevo álbum
- `PUT /api/albums` - Actualizar álbum
- `DELETE /api/albums/{id}` - Eliminar álbum

## 🎧 Géneros

- `GET /api/genres` - Obtener todos los géneros
- `GET /api/genres/{id}` - Obtener género por ID
- `POST /api/genres` - Crear nuevo género
- `PUT /api/genres` - Actualizar género
- `DELETE /api/genres/{id}` - Eliminar género

## 🎵 Canciones

- `GET http://localhost:3000/api/songs` - Obtener todas las canciones
- `GET  /api/songs/{id}` - Obtener canción por ID
- `POST  /api/songs` - Crear nueva canción
- `PUT  /api/songs` - Actualizar canción
- `DELETE /api/songs/{id}` - Eliminar canción

## 📂 Playlists

- `GET /api/playlists` - Obtener todas las playlists
- `GET /api/playlists/{id}` - Obtener playlist por ID
- `POST /api/playlists` - Crear nueva playlist
- `PUT /api/playlists` - Actualizar playlist
- `DELETE /api/playlists/{id}` - Eliminar playlist


## 🚀 Instalación y ejecución

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tuusuario/tunatch-api.git
   cd tunatch-api
