const roleBasedAccessMap={
    "inventory": {
        "GET" : "view_product",
        "POST": "create_product",
        "PUT": "update_product",
        "DELETE": "delete_product",
    },
    "admin": {
        "GET" : "view_permission",
        "POST": "alter_permission",
    },
    "permission": {
        "POST": "alter_permission",
    }
}

module.exports = roleBasedAccessMap