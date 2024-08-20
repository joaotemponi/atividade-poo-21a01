export class Porta {
    private tipo: string;
    private material: string;
    private altura: number;

    public constructor(_tipo: string, _material: string, _altura: number) {
        this.tipo = _tipo;
        this.material = _material;
        this.altura = _altura;
    }

    public getTipo(): string {
        return this.tipo;
    }

    public setTipo(_tipo: string): void {
        this.tipo = _tipo;
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

    public posicionar(): void {
        console.log(`Posicionado!!`);
    }

    public remover(): void {
        console.log(`Removido!!`);
    }
}
