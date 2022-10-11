export class Personne {
    lastname!: string;
    firstname!: string;
    birthdate!: Date;
    children?: Personne[];
}