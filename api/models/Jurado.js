/**
 * Jurado.js
 * Model created by Sails Mysql Autogen on Wed May 10 2017 06:09:27 GMT-0300 (CLST)
 * Gitgub Repo URL: https://github.com/cadrogui/sails-generator-automodel
 */

module.exports =
  {
    "identity": "Jurado",
    "autoCreatedAt": false,
    "autoUpdatedAt": false,
    "attributes": {
        "id": {
            "type": "INTEGER",
            "primaryKey": "true",
            "autoIncrement": "true"
        },
        "nombre": "STRING",
        "nacionalidad": "STRING",
        "especialidad": "STRING"
    }
}
