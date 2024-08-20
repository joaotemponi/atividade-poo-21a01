export class Cacamba {
    private capacidade: number;
    private material: string;
    private tamanho: number;

    public constructor(_capacidade: number, _material: string, _tamanho: number) {
        this.capacidade = _capacidade;
        this.material = _material;
        this.tamanho = _tamanho;
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

    public getTamanho(): number {
        return this.tamanho
    }

    public setTamanho(_tamanho: number): void {
        this.tamanho = _tamanho;
    }

    //metodos

    public carregar(): void {
        console.log(`Carregada!!`);
    }

    public descarregar(): void {
        console.log(`Descarregada!!`);
    }
}