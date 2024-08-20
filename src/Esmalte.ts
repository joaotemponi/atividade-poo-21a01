export class Esmalte {
    private cor: string;
    private nome: string;
    private marca: string;

    public constructor(_cor: string, _nome: string, _marca: string) {
        this.cor = _cor;
        this.nome = _nome;
        this.marca = _marca;
    }

    public getCor(): string {
        return this.cor;
    }

    public setCor(_cor: string): void {
        this.cor = _cor;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(_nome: string): void {
        this.nome = _nome;
    }

    public getMarca(): string {
        return this.marca
    }

    public setMarca(_marca: string): void {
        this.marca = _marca;
    }

    //metodos

    public aplicar(unha: string): void {
        console.log(`Unha pintada`);
        
    }

    public secar(unha: string): void {
        console.log(`Esmalte secado`);
    }
}