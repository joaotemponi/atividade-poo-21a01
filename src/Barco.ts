export class Barco {
    private largura: number;
    private capacidade: number;
    private peso: number;

    public constructor(_largura: number, _capacidade: number, _peso: number) {
        this.largura = _largura;
        this.capacidade = _capacidade;
        this.peso = _peso;
    }

    public getLargura(): number {
        return this.largura;
    }

    public setLargura(_largura: number): void {
        this.largura = _largura;
    }

    public getCapacidade(): number {
        return this.capacidade;
    }

    public setCapacidade(_capacidade: number): void {
        this.capacidade = _capacidade;
    }

    public getPeso(): number {
        return this.peso
    }

    public setPeso(_peso: number): void {
        this.peso = _peso;
    }

    //metodos

    public pedalar(): void {
        console.log(`pedalando!!`);
    }

    public freiar(): void {
        console.log(`freiando!!`);
    }
}