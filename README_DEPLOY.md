# Despliegue con Docker Compose

Este repositorio incluye archivos para ejecutar la aplicación completa (frontend + backend + MySQL + nginx + backup) con Docker Compose.

Requisitos:
- Docker y Docker Compose (v2) instalados en la máquina.

Pasos rápidos:

1. Copiar variables de entorno

   - Copie `.env.example` a `.env` y ajuste las credenciales de la base de datos.

2. Construir y levantar los servicios

   - Construir imágenes y levantar en background:
     `docker compose build ; docker compose up -d`

3. Verificar servicios

   - Frontend en `http://localhost` (puerto 80)
   - Backend en `http://localhost:4000` (solo accesible desde nginx/proxy en esta configuración)

4. Escalar backend

   - Para escalar el número de réplicas del servicio `backend`:
     `docker compose up --scale backend=3 -d`

5. Backups

   - Los dumps de la base de datos se guardan en el volumen `backupdata` (ruta interna `/backups`).

Notas operativas:
- Si cambia `MYSQL_DATABASE`, cree la base de datos antes de correr la aplicación, o ajuste las credenciales.
- Para entornos de producción considere usar secretos en lugar de un `.env` plano.
- Nginx sirve el `dist` construido por Vite y reenvía peticiones `/api/` al servicio `backend`.

Arquitectura (simplificada):

Frontend (nginx) <---> nginx (proxy) <---> Backend (Node/Express) <---> MySQL
                                                       ^
                                                       |
                                                      Backup container (mysqldump)
