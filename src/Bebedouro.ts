export class Bebedouro {
    private capacidade: number;
    private material: string;
    private temperaturaAgua: number;

    public constructor(_capacidade: number, _material: string, _temperaturaAgua: number) {
        this.capacidade = _capacidade;
        this.material = _material;
        this.temperaturaAgua = _temperaturaAgua;
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

    public getTemperaturaAgua(): number {
        return this.temperaturaAgua
    }

    public setTemperaturaAgua(_temperaturaAgua: number): void {
        this.temperaturaAgua = _temperaturaAgua;
    }

    //metodos

    public fornecerAgua(): void {
        console.log(`Toma agua!!`);
    }

    public realizarManutencao(): void {
        console.log(`Manutenção realizadar!!`);
    }
}