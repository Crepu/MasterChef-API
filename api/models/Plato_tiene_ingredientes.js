/**
 * Plato_tiene_ingredientes.js
 * Model created by Sails Mysql Autogen on Wed May 10 2017 06:09:27 GMT-0300 (CLST)
 * Gitgub Repo URL: https://github.com/cadrogui/sails-generator-automodel
 */

module.exports =
  {
    "identity": "Plato_tiene_ingredientes",
    "connection": "",
    "autoCreatedAt": false,
    "autoUpdatedAt": false,
    "attributes": {
        "id": {
            "type": "INTEGER",
            "primaryKey": "true",
            "autoIncrement": "true"
        },
        "Ingredientes": {
            "model": "Ingredientes",
            "columnName": "id_ingrediente"
        },
        "Plato": {
            "model": "Plato",
            "columnName": "id_plato"
        }
    }
}
