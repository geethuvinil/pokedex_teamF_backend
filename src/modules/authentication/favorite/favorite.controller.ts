import { Body, Controller, Post } from '@nestjs/common';
import { FavoriteService } from '../services/favorite/favorite.service';

@Controller('favorite')
export class FavoriteController {
    constructor(private favoriteService : FavoriteService){}
    @Post('add')
    async favAdd(@Body() favDetails){
        console.log('fav controller hitted',favDetails)
    return this.favoriteService.addToFavorites(favDetails)
    }
    @Post('remove')
    async favRemove(@Body() favDetails){
        console.log('fav controller hitted',favDetails)
    return this.favoriteService.addToFavorites(favDetails)
    }
}
