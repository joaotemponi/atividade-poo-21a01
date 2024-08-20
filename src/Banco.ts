export class Banco {
    private capacidade: number;
    private material: string;
    private cor: string;

    public constructor(_capacidade: number, _material: string, _cor: string) {
        this.capacidade = _capacidade;
        this.material = _material;
        this.cor = _cor;
    }

    public getCapacidade(): number {
        return this.capacidade;
    }

    public setCapacidade(_capacidade: number): void {
        this.capacidade = _capacidade;
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

    public sentar(pessoa: string): void {
        console.log(`${pessoa} está sentando no banco`);
        
    }

    public levantar(pessoa: string): void {
        console.log(`${pessoa} levantou do banco`);
    }
}