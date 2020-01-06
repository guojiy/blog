import ApiService from '../service/ApiService'

export default class ApiController {
    getWeather() {
        return new ApiService().getInfo("https://movie.douban.com/j/new_search_subjects?sort=U&range=0,10&tags=&start=0")
    }
}