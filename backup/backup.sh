#!/bin/bash
set -e

# Backup loop: run once per hour and store SQL dumps in mounted volume
while true; do
  TIMESTAMP=$(date +"%Y%m%dT%H%M%S")
  FILENAME="backup-${TIMESTAMP}.sql.gz"
  echo "[backup] Starting backup to /backups/${FILENAME}"
  mysqldump -h "$MYSQL_HOST" -u "$MYSQL_USER" -p"$MYSQL_PASSWORD" "$MYSQL_DATABASE" | gzip > "/backups/${FILENAME}"
  echo "[backup] Finished: /backups/${FILENAME}"
  sleep 3600
done
