# serverless-reto
Serverless reto con AWS lambdas y MySQL


# Instalación y configuración serverless framework
> npm i serverless -g

# Instalación y configuración AWS client
https://docs.aws.amazon.com/es_es/cli/latest/userguide/installing.html
https://serverless.com/framework/docs/providers/aws/guide/credentials/

# CRUD para users 

## Instalar dependencias dependencies
>cd users && npm install

>npm i serverless-mysql
>serverless offline start

##  AWS
> cd users && serverless deploy

## Prueba del API
En dicha carpeta adjunto ejemplos del API  "curls.sh".Debe cambiar el SERVICE_URL con el URL del servidor AWS.

## Para borrar de  AWS
> serverless remove