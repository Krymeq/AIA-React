import { Injectable } from "@nestjs/common";
import { Item } from "./Item";
import { getConnection } from "typeorm";

@Injectable()
export class ItemService {
    
    constructor(){}

        async getAllItems(): Promise<Item[]> {
        const res = await getConnection()
            .createQueryBuilder()
            .select("items")
            .from(Item, "items")
            .getMany();
        
        console.log(res);
        return res;
    }
}
