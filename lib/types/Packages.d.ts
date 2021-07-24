import { Item } from './Item';
export declare enum PACKAGE_TYPE {
    RECOMMENDED = 1,
    GROWTH = 2,
    VALUE = 3,
    SPECIAL = 4
}
interface PackageTypeInfo {
    type: PACKAGE_TYPE;
    description: string;
    item: Item;
}
export interface Package {
    vipexp: number;
    name: string;
    biaohao: string;
    tips: string;
    bid: number;
    type: PACKAGE_TYPE;
    limit: number;
    discout: number;
    items: Item[];
    id: number;
    alreadybuy: number;
    need: number;
    diamond: number;
}
export interface PackageShop {
    list: Package[];
    listTwo: Package[];
    typeInfo: PackageTypeInfo[];
    typeInfoTwo: PackageTypeInfo[];
}
export {};
