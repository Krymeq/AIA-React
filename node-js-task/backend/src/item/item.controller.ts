import { Controller, Get } from "@nestjs/common";
import { Item } from "./Item";
import { ItemService } from "./item.service";

@Controller("shop") 
export class ItemController
{
    constructor(private itemService: ItemService){}

    @Get("list")
    getEachItem(): Promise<Item[]>{
        return this.itemService.getAllItems();
    }

    @Get("confirm")
    getConfirmation(): Object{
        return {status: "Zamówienie pomyślne"};
    }
}