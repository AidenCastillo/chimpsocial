migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bt1igbq2uah6lf3")

  // remove
  collection.schema.removeField("bylykylm")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bt1igbq2uah6lf3")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
