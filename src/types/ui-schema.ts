export type UI_schema_property = {
    [key: string]: UI_schema_property;
}

class Prodcut{
    product_name: string = ""
    properties: UI_schema_property = {}
}

class UI_schema{
    order: Object = {}
    products: Prodcut[] = []
}