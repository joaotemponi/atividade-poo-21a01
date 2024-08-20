export class Tambor {
    private cor: string;
    private material: string;
    private peso: number;

    public constructor(_cor: string, _material: string, _peso: number) {
        this.cor = _cor;
        this.material = _material;
        this.peso = _peso;
    }

    public getCor(): string {
        return this.cor;
    }

    public setCor(_cor: string): void {
        this.cor = _cor;
    }

    public getMaterial(): string {
        return this.material;
    }

    public setMaterial(_material: string): void {
        this.material = _material;
    }

    public getPeso(): number {
        return this.peso
    }

    public setPeso(_peso: number): void {
        this.peso = _peso;
    }

    //metodos

    public encher(): void {
        console.log(`Enchido`);
    }

    public esvaziar(): void {
        console.log(`Esvaziado!`);
    }
}