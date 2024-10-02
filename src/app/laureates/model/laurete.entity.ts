export class Laureate {
  id: string;
  firstname: string;
  surname: string;
  born: string;
  gender: string;
  prizes: Prize[];

  constructor() {
    this.id = '';
    this.firstname = '';
    this.surname = '';
    this.born = '';
    this.gender = '';
    this.prizes = [];
  }
}

export class Prize {
  share: string;
  constructor() {

    this.share = '';
  }
}


