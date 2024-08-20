export class ExtintorDeIncendio {
    private tipo: string;
    private capacidade: number;
    private pressão: number;

    public constructor(_tipo: string, _capacidade: number, _pressão: number) {
        this.tipo = _tipo;
        this.capacidade = _capacidade;
        this.pressão = _pressão;
    }

    public getTipo(): string {
        return this.tipo;
    }

    public setTipo(_tipo: string): void {
        this.tipo = _tipo;
    }

    public getCapacidade(): number {
        return this.capacidade;
    }

    public setCapacidade(_capacidade: number): void {
        this.capacidade = _capacidade;
    }

    public getpressão(): number {
        return this.pressão
    }

    public setpressão(_pressão: number): void {
        this.pressão = _pressão;
    }

    //metodos

    public acionar(): void {
        console.log(`Acionado!!`);
    }

    public verificarPressao(): void {
        console.log(`Verificado!!`);
    }
}