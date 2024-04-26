export class User {
  id: string;
  name: string;
  gender: 'M' | 'F';

  constructor(args: {
    id: string;
    name: string;
    gender: 'M' | 'F';
  }) {
    this.id = args.id;
    this.name = args.name;
    this.gender = args.gender;
  }

  get genderText(): string {
    return this.gender === 'M' ? '男' : '女';
  }
}