migrate((db) => {
  const collection = new Collection({
    "id": "bt1igbq2uah6lf3",
    "created": "2023-05-10 01:22:09.247Z",
    "updated": "2023-05-10 01:22:09.247Z",
    "name": "whoops",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "1us9xpzz",
        "name": "content",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "bylykylm",
        "name": "author",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "c4cuopxq",
        "name": "timestamp",
        "type": "date",
        "required": true,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "iko4ypdn",
        "name": "attachment",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpeg",
            "image/png",
            "image/gif"
          ],
          "thumbs": []
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("bt1igbq2uah6lf3");

  return dao.deleteCollection(collection);
})
