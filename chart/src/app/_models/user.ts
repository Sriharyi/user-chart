export class User {
}

export class UserRegistrationCount {
    public year: number;
    public month: number;
    public count: number;

    constructor(year: number, month: number, count: number) {
        this.year = year;
        this.month = month;
        this.count = count;
    }

    getYear() {
        return this.year;
    }


    // month is number 
    getMonth() {
        return this.month;
    }

    getCount() {
        return this.count;
    }
}

export class UserRegistrationCountByDay {
    public year: number;
    public month: number;
    public day: number;
    public count: number;

    constructor(year: number, month: number, day: number, count: number) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.count = count;
    }

    getYear() {
        return this.year;
    }

    getMonth() {
        return this.month;
    }

    getDay() {
        return this.day;
    }

    getCount() {
        return this.count;
    }
}


export class UserRegistrationCountByState {
    public state: string;
    public count: number;

    constructor(state: string, count: number) {
        this.state = state;
        this.count = count;
    }

    getState() {
        return this.state;
    }

    getCount() {
        return this.count;
    }
}


export class MyLocation {
    public latitude: number;
    public longitude: number;
    // public count: number;
    // public state: string;

    constructor(latitude: number, longitude: number) {
        this.latitude = latitude;
        this.longitude = longitude;
        // this.count = count;
        // this.state = state;
    }



}