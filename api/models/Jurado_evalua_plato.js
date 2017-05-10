/**
 * Jurado_evalua_plato.js
 * Model created by Sails Mysql Autogen on Wed May 10 2017 06:09:27 GMT-0300 (CLST)
 * Gitgub Repo URL: https://github.com/cadrogui/sails-generator-automodel
 */

module.exports =
  {
    "identity": "Jurado_evalua_plato",
    "autoCreatedAt": false,
    "autoUpdatedAt": false,
    "attributes": {
        "id": {
            "type": "INTEGER",
            "primaryKey": "true",
            "autoIncrement": "true"
        },
        "fecha": "DATE",
        "nota_creatividad": "float",
        "nota_sabor": "float",
        "nota_presentacion": "float",
        "Jurado": {
            "model": "Jurado",
            "columnName": "id_jurado"
        },
        "Plato": {
            "model": "Plato",
            "columnName": "id_plato"
        }
    }
}
