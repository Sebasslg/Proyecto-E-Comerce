# 🛒 Tienda Cloud - Arquitectura de Microservicios

Este proyecto implementa una solución de comercio electrónico basada en una arquitectura de microservicios contenerizada. El sistema está diseñado para ser modular, escalable y resiliente, desplegado completamente en **Microsoft Azure**.

🔗 **URL del Proyecto (Demo en Vivo):** http://salgadotienda.eastus2.azurecontainer.io
*(Nota: El despliegue puede estar detenido temporalmente para ahorro de créditos Azure)*

## 🏗️ Arquitectura del Sistema

El sistema se compone de 5 contenedores orquestados que se comunican a través de una red interna tanto en local como en la nube:

1.  **Nginx (Reverse Proxy):** Puerta de enlace única. Recibe todo el tráfico HTTP en el puerto 80 y lo distribuye inteligentemente:
    * `/api/*` ➝ Redirigido al **Backend** (Cluster interno).
    * `/*` ➝ Redirigido al **Frontend** (Servidor Web).
2.  **Frontend:** Aplicación SPA (Single Page Application) construida con **React + Vite + TailwindCSS**.
3.  **Backend:** API RESTful construida con **Node.js y Express**. Maneja la lógica de negocio y conexión a datos.
4.  **Base de Datos:** **MySQL 8.0** con persistencia de datos garantizada mediante volúmenes (Azure Files en nube / Volumen local en desarrollo).
5.  **Sistema de Backup:** Contenedor "Sidecar" autónomo que ejecuta `mysqldump` automáticamente cada hora.

### 📊 Diagrama de Arquitectura

```mermaid
graph TD
    User((Usuario)) -->|HTTP :80| Nginx[Proxy Nginx]
    Nginx -->|/| Frontend[React App]
    Nginx -->|/api| Backend[Node.js API]
    Backend -->|TCP :3306| DB[(MySQL Database)]
    Backup[Backup Service] -->|Dump cada 1h| DB
    DB -.->|Persistencia| AzureFiles[Azure Storage Share]
    Backup -.->|SQL Files| AzureBackup[Azure Backup Share]


Descripción	Comando de Azure CLI

Login e Inicio	az login
Crear Resource Group	az group create --name miResourceGroup --location eastus2
Crear Storage Account	az storage account create --resource-group miResourceGroup --name salgadofiles --sku Standard_LRS --location eastus2
Obtener Clave de Storage (Para montaje de disco)	az storage account keys list --resource-group miResourceGroup --account-name salgadofiles --query "[0].value" --output tsv
Crear File Share (MySQL)	az storage share create --account-name salgadofiles --name mysqlshare
Crear File Share (Backup)	az storage share create --account-name salgadofiles --name backupshare



Descripción	Comando de Docker / Azure CLI
Login en Docker Hub	docker login
Build + Push de Backend	docker build -t sebasslg/backend:v1 ./backend
docker push sebasslg/backend:v1
Build + Push de Frontend	docker build -t sebasslg/frontend:v1 ./frontend
docker push sebasslg/frontend:v1
Build + Push de Nginx (Corregido)	docker build -t sebasslg/nginx:v1 ./nginx
docker push sebasslg/nginx:v1



Ver Estado de Contenedores	az container list --resource-group miResourceGroup --output table
Ver Logs del Backend	az container logs --resource-group miResourceGroup --name backend
Reiniciar un Contenedor	az container restart --resource-group miResourceGroup --name [contenedor]
URL Final del Proyecto	http://salgadotienda.eastus2.azurecontainer.io
Apagar Contenedores	for %i in (nginx backend frontend mysql backup) do az container stop --resource-group miResourceGroup --name %i