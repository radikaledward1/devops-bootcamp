#!/usr/bin/env bash

function api_call () {
    curl https://jsonplaceholder.typicode.com/users -s | jq | grep "username" | awk '{print $2}'
}

echo $(api_call)