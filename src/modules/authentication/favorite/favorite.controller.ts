import { Body, Controller, Post } from '@nestjs/common';
import { FavoriteService } from '../services/favorite/favorite.service';

@Controller('favorite')
export class FavoriteController {
    constructor(private favoriteService : FavoriteService){}
    @Post()
    async fav(@Body() favDetails){
        console.log('fav controller hitted',favDetails)
    return this.favoriteService.addToFavorites(favDetails)
    }
}
