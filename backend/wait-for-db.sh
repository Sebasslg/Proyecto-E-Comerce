#!/bin/sh
# wait-for-db.sh

# El host es la IP o FQDN del contenedor MySQL
HOST=$DB_HOST
PORT=3306

echo "Esperando que la base de datos esté lista..."

# Intenta conectarse al puerto 3306 durante un máximo de 60 segundos
for i in $(seq 1 30); do
  # El comando 'nc -z' intenta conectarse sin enviar datos
  nc -z "$HOST" "$PORT" && break
  echo "MySQL no está listo aún. Reintentando en 2 segundos..."
  sleep 2
done

if [ $i -eq 30 ]; then
  echo "❌ Error: La base de datos no respondió después de 60 segundos."
  exit 1
fi

echo "✅ MySQL está listo. Iniciando el servidor Node.js..."
# Ejecuta el comando original de tu aplicación:
exec node src/index.js