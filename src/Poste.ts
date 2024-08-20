export class Poste {
    private cor: string;
    private material: string;
    private altura: number;

    public constructor(_cor: string, _material: string, _altura: number) {
        this.cor = _cor;
        this.material = _material;
        this.altura = _altura;
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

    public getAltura(): number {
        return this.altura
    }

    public setAltura(_altura: number): void {
        this.altura = _altura;
    }

    //metodos

    public ligarLuz(): void {
        console.log(`Luz ligada!!`);
    }

    public desligarLuz(): void {
        console.log(`Luz Desligada!!`);
    }
}