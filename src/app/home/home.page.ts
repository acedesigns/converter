/* =======================================================
 *
 * Created by anele on 2020/07/15.
 * @anele_ace
 *
 * =======================================================
 */

import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    public semSelected: any;
    private kilometers: number = 1.60934;
    private pound_con: number = 0.45359237;
    private ton_to_kg : number = 907.18474;

    distance: boolean = false;
    weight  : boolean = false;

    insert_miles : number;
    km_answer: number;

    insert_pound: number;
    insert_ton: number;
    kilo_answer: number;

    constructor() {}


    formatNumber(num) { return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'); }


    getConversion(event) {
        if ( event == 'distance') {
            this.weight = false;
            this.distance = true;
            this.convert(event);

        } else {
            this.distance = false;
            this.weight = true;
        }
        //this.convert();
    }



    onChangeMiles(value) {
        this.km_answer = this.formatNumber(value * this.kilometers);
    }

    onChangePound(value) {
        this.kilo_answer = this.formatNumber(value * this.pound_con);
    }


    onChangeTon(value) {
        this.kilo_answer = this.formatNumber(value * this.ton_to_kg);
    }

    convert(data) {
        //console.log(data);
        if ( data == 'distance') {

        }
        //let km = milesElement.value * 1.60934;
        //kilometersElement.innerHTML = km;
    }



}

