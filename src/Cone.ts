export class Cone {
    private altura: number;
    private material: string;
    private cor: string;

    public constructor(_altura: number, _material: string, _cor: string) {
        this.altura = _altura;
        this.material = _material;
        this.cor = _cor;
    }

    public getAltura(): number {
        return this.altura;
    }

    public setAltura(_altura: number): void {
        this.altura = _altura;
    }

    public getMaterial(): string {
        return this.material;
    }

    public setMaterial(_material: string): void {
        this.material = _material;
    }

    public getCor(): string {
        return this.cor
    }

    public setCor(_cor: string): void {
        this.cor = _cor;
    }

    //metodos

    public posicionar(): void {
        console.log(`Posicionado!!`);
    }

    public remover(): void {
        console.log(`Removido!!`);
    }
}