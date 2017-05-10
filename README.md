# MasterChef-API
<p align="center">
<a href="https://github.com/Crepu/MasterChef-API"><img src="https://img.shields.io/badge/license-GPL--3.0-green.svg" alt="License"></a>
<a href="https://github.com/login?return_to=%2FCrepu%2FMasterChef-API"><img src="https://img.shields.io/github/watchers/badges/shields.svg?style=social&label=Watch" alt="License"></a>
</p>

API Para el Caso de Uso de la ayudantía de Arquitectura de Sistemas.

Esta api cuenta con las siguientes rutas para acceder a los datos:



 * **GET** /concursantes: Lista de todos los concursantes.
 * **GET** /platos: Lista de todos los platos.
 * **GET** /ingredientes: Lista de todos los ingredientes.
 * **GET** /rondas: Lista de todas las rondas.
 * **GET** /concursante/:id: Información del concursante con un id específico.
 * **GET** /plato/:id: Información del plato con un id específico.
 * **GET** /ingrediente/:id: Información del ingrediente con un id específico.
 * **GET** /ronda/:id: Información de la ronda con un id específico.
 * **PUT** /eliminar/:id: 'Eliminar' al concursante (con un id específico) del concurso.