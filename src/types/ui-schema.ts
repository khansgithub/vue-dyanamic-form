import type { ListFormat } from "typescript"

export type UISchema = {
    "order": UISchemaProperty,
    "products": UISchemaProdcut[]
}

export type UISchemaProdcut = {
    "product_name": string,
    "properties": UISchemaProperty
}

export type UISchemaProperty = {
    [key: string]: UISchemaProperty | string | boolean | number | any[] ;
}





// class Prodcut{
//     product_name: string = ""
//     properties: UISchemaProperty = {}
// }

// class UISchema{
//     order: Object = {}
//     products: Prodcut[] = []
// }