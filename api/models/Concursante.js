/**
 * Concursante.js
 * Model created by Sails Mysql Autogen on Wed May 10 2017 06:09:27 GMT-0300 (CLST)
 * Gitgub Repo URL: https://github.com/cadrogui/sails-generator-automodel
 */

module.exports =
  {
    "identity": "Concursante",
    "autoCreatedAt": false,
    "autoUpdatedAt": false,
    "attributes": {
        "id": {
            "type": "INTEGER",
            "primaryKey": "true",
            "autoIncrement": "true"
        },
        "nombre": "STRING",
        "edad": "INTEGER",
        "comuna": "STRING",
        "profesioon": "STRING",
        "fecha_ingreso": "DATE",
        "fecha_eliminacion": "DATE"
    }
}