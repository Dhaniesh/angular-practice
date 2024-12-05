import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private user_data: Array<object> = [{
        'name': 'temp'
    }];


    setData(data: any) {
        this.user_data.push(data)
    }
    getData() {
        console.log(this.user_data);
        return this.user_data
    }
}