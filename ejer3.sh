#!/usr/bin/env bash

read -p "Introdusca el nombre del directorio: " directorio


if [ -d $directorio ] 
then
    
    num_ficheros=$(ls -l $directorio | wc -l)
    echo "El directorio $directorio tiene " $num_ficheros " ficheros"
else
    echo "El directorio $directorio no es un directorio o no existe"
fi