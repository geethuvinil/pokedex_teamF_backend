import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { FavoriteService } from '../services/favorite/favorite.service';

@Controller('favorite')
export class FavoriteController {
    constructor(private favoriteService : FavoriteService){}
    @Post('add')
    async favAdd(@Body() favDetails){
        console.log('add fav controller hitted',favDetails)

    return this.favoriteService.addToFavorites(favDetails)
    }
    @Delete('remove')
    async favRemove(@Body() favDetails){
        console.log('remove fav controller hitted',favDetails)
    return this.favoriteService.removeFromFavorites(favDetails)
    }
    @Get('fetch')
    async fetchDetails(@Query() userData){
         console.log('fav controller hitted',userData)
        return this.favoriteService.fetchFavorites(userData.email)
    }
    @Post('isFavorite')
    async isFavorite(@Body() favDetails){
        console.log('add fav controller hitted',favDetails)

    return this.favoriteService.isFavoriteOrNot(favDetails)
    }
    // @Get('isFavorite')
    // async isFavorite(@Query() data){
    //      console.log('is fav controller hitted')
    // console.log('onimimjim',data);
    //     return this.favoriteService.isFavoriteOrNot(data)
    // }
}
