export class CalculateService {
  private _age: number = 0;
  private birthDay: string = "";

  constructor(){
    this._age = 0;
    this.birthDay = "";
  }

  set birthDate(bd: string) {
    this.birthDay = bd;
  }

  get age (): number {
    return this._age;
 }

  public calculateAge(){
    let year: number = Number(this.birthDay.substring(0, 4)) - 543;
    let month: number = Number(this.birthDay.slice(-4).substring(0, 2));
    let day: number = Number(this.birthDay.slice(-2));

    let today : Date = new Date();
    let age: number = today.getFullYear() - year;

    if(today.getMonth() < month || (today.getMonth() === month && today.getDate() < day)){
        age--;
    }

    this._age = age;
    return this;
  }
}
