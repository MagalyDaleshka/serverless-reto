#!/usr/bin/env bash
#TODO asserts

SERVICE_URL=http://localhost:3000
#SERVICE_URL=https://XXXXXXXX.execute-api.eu-west-3.amazonaws.com/dev

echo "Get Users:"
curl -H "Content-Type: application/json" ${SERVICE_URL}/users
echo

echo "Create User:"
response=$(curl -H "Content-Type: application/json" -d '{"nombre":"Daleshka ","apellido":"Becerra", "email":"daleshbecerra.95@gmail.com", "contrasena":"123456"}' ${SERVICE_URL}/users)
echo

echo User response=$response
id=$(expr "$response" : '.*"id":"\([^"]*\)"')
echo user id=$id

echo "Get Users:"
echo ${SERVICE_URL}/users
curl -H "Content-Type: application/json" ${SERVICE_URL}/users
echo

echo "Get User:"
curl -H "Content-Type: application/json" ${SERVICE_URL}/users/${id}
echo

echo "Update User:"
curl -H "Content-Type: application/json" -X PUT -d '{"nombre":"Daleshka ","apellido":"Becerra Becerra", "email":"daleshbecerra.95@gmail.com"}' ${SERVICE_URL}/users/${id}
echo

echo "Get User:"
curl -H "Content-Type: application/json" ${SERVICE_URL}/users/${id}
echo

echo "Delete User:"
curl -H "Content-Type: application/json" -X PUT ${SERVICE_URL}/usersDelete/${id}
echo

echo "Get Users:"
curl -H "Content-Type: application/json" ${SERVICE_URL}/users
echo