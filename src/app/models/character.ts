export interface Character {
    code:            string;
    status:          string;
    copyright:       string;
    attributionText: string;
    attributionHTML: string;
    data:            Data;
    etag:            string;
}

export interface Data {
    offset:  string;
    limit:   string;
    total:   string;
    count:   string;
    results: Result[];
}

export interface Result {
    id:          string;
    name:        string;
    description: string;
    modified:    string;
    resourceURI: string;
    urls:        URL[];
    thumbnail:   Thumbnail;
    comics:      Comics;
    stories:     Stories;
    events:      Comics;
    series:      Comics;
}

export interface Comics {
    available:     string;
    returned:      string;
    collectionURI: string;
    items:         ComicsItem[];
}

export interface ComicsItem {
    resourceURI: string;
    name:        string;
}

export interface Stories {
    available:     string;
    returned:      string;
    collectionURI: string;
    items:         StoriesItem[];
}

export interface StoriesItem {
    resourceURI: string;
    name:        string;
    type:        string;
}

export interface Thumbnail {
    path:      string;
    extension: string;
}

export interface URL {
    type: string;
    url:  string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export module Convert {
    export function toCharacter(json: string): Character {
        return cast(JSON.parse(json), o("Character"));
    }

    export function characterToJson(value: Character): string {
        return JSON.stringify(value, null, 2);
    }
    
    function cast<T>(obj: any, typ: any): T {
        if (!isValid(typ, obj)) {
            throw `Invalid value`;
        }
        return obj;
    }

    function isValid(typ: any, val: any): boolean {
        if (typ === undefined) return true;
        if (typ === null) return val === null || val === undefined;
        return typ.isUnion  ? isValidUnion(typ.typs, val)
                : typ.isArray  ? isValidArray(typ.typ, val)
                : typ.isMap    ? isValidMap(typ.typ, val)
                : typ.isEnum   ? isValidEnum(typ.name, val)
                : typ.isObject ? isValidObject(typ.cls, val)
                :                isValidPrimitive(typ, val);
    }

    function isValidPrimitive(typ: string, val: any) {
        return typeof typ === typeof val;
    }

    function isValidUnion(typs: any[], val: any): boolean {
        // val must validate against one typ in typs
        return typs.find(typ => isValid(typ, val)) !== undefined;
    }

    function isValidEnum(enumName: string, val: any): boolean {
        const cases = typeMap[enumName];
        return cases.indexOf(val) !== -1;
    }

    function isValidArray(typ: any, val: any): boolean {
        // val must be an array with no invalid elements
        return Array.isArray(val) && val.every(element => {
            return isValid(typ, element);
        });
    }

    function isValidMap(typ: any, val: any): boolean {
        if (val === null || typeof val !== "object" || Array.isArray(val)) return false;
        // all values in the map must be typ
        return Object.keys(val).every(prop => {
            if (!Object.prototype.hasOwnProperty.call(val, prop)) return true;
            return isValid(typ, val[prop]);
        });
    }

    function isValidObject(className: string, val: any): boolean {
        if (val === null || typeof val !== "object" || Array.isArray(val)) return false;
        let typeRep = typeMap[className];
        return Object.keys(typeRep).every(prop => {
            if (!Object.prototype.hasOwnProperty.call(typeRep, prop)) return true;
            return isValid(typeRep[prop], val[prop]);
        });
    }

    function a(typ: any) {
        return { typ, isArray: true };
    }

    function e(name: string) {
        return { name, isEnum: true };
    }

    function u(...typs: any[]) {
        return { typs, isUnion: true };
    }

    function m(typ: any) {
        return { typ, isMap: true };
    }

    function o(className: string) {
        return { cls: className, isObject: true };
    }

    const typeMap: any = {
        "Character": {
            code: "",
            status: "",
            copyright: "",
            attributionText: "",
            attributionHTML: "",
            data: o("Data"),
            etag: "",
        },
        "Data": {
            offset: "",
            limit: "",
            total: "",
            count: "",
            results: a(o("Result")),
        },
        "Result": {
            id: "",
            name: "",
            description: "",
            modified: "",
            resourceURI: "",
            urls: a(o("URL")),
            thumbnail: o("Thumbnail"),
            comics: o("Comics"),
            stories: o("Stories"),
            events: o("Comics"),
            series: o("Comics"),
        },
        "Comics": {
            available: "",
            returned: "",
            collectionURI: "",
            items: a(o("ComicsItem")),
        },
        "ComicsItem": {
            resourceURI: "",
            name: "",
        },
        "Stories": {
            available: "",
            returned: "",
            collectionURI: "",
            items: a(o("StoriesItem")),
        },
        "StoriesItem": {
            resourceURI: "",
            name: "",
            type: "",
        },
        "Thumbnail": {
            path: "",
            extension: "",
        },
        "URL": {
            type: "",
            url: "",
        },
    };
}
