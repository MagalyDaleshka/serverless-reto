# serverless-reto
Serverless reto with AWS lambdas


# Install and configure serverless framework
> npm i serverless -g

# Install and configure AWS client
https://docs.aws.amazon.com/es_es/cli/latest/userguide/installing.html
https://serverless.com/framework/docs/providers/aws/guide/credentials/

# CRUD of users 

## Install dependencies
>cd users && npm install

## Running on local
>npm i serverless-mysql
>serverless offline start

## Upload to AWS
> cd users && serverless deploy

## Test de API
You have examples of curl requests on "curls.sh". Must to change de SERVICE_URL with your service URL on AWS.

## Remove from AWS
> serverless remove