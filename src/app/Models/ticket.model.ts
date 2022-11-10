

export class Ticket {
  public fullName: string;
  public companyName!: string;
  public phoneNumber: string;
  public email: string;
  public makeModel: string;
  public description: string;

  constructor(
    fullName: string,
    companyName: string,
    phoneNumber: string,
    email: string,
    makeModel: string,
    description: string
  ) {
    {
      this.fullName = fullName;
      this.companyName = companyName;
      this.phoneNumber = phoneNumber;
      this.email = email;
      this.makeModel = makeModel;
      this.description = description;
    }
  }
}
