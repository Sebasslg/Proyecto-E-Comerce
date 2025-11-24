FROM alpine:3.18
RUN apk add --no-cache mysql-client bash
WORKDIR /backup
COPY backup.sh /backup/backup.sh
RUN chmod +x /backup/backup.sh
CMD ["/backup/backup.sh"]
