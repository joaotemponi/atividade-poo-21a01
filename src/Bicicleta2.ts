export class Bicicleta {
    private velocidade: number;
    private cor: string;
    private aro: number;

    public constructor(_velocidade: number, _cor: string, _aro: number) {
        this.velocidade = _velocidade;
        this.cor = _cor;
        this.aro = _aro;
    }

    public getVelocidade(): number {
        return this.velocidade;
    }

    public setVelocidade(_velocidade: number): void {
        this.velocidade = _velocidade;
    }

    public getCor(): string {
        return this.cor;
    }

    public setCor(_cor: string): void {
        this.cor = _cor;
    }

    public getAro(): number {
        return this.aro
    }

    public setAro(_aro: number): void {
        this.aro = _aro;
    }

    //metodos

    public pedalar(): void {
        console.log(`pedalando!!`);
    }

    public freiar(): void {
        console.log(`freiando!!`);
    }
}