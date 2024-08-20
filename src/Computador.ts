export class Computador {
    private memoria: number;
    private processador: string;
    private preco: number;

    public constructor(_memoria: number, _processador: string, _preco: number) {
        this.memoria = _memoria;
        this.processador = _processador;
        this.preco = _preco;
    }

    public getMemoria(): number {
        return this.memoria;
    }

    public setMemoria(_memoria: number): void {
        this.memoria = _memoria;
    }

    public getProcessador(): string {
        return this.processador;
    }

    public setProcessador(_processador: string): void {
        this.processador = _processador;
    }

    public getPreco(): number {
        return this.preco
    }

    public setPreco(_preco: number): void {
        this.preco = _preco;
    }

    //metodos

    public jogar(jogo: string): void {
        console.log(`jogando!`);
    }

    public pesquisar(): void {
        console.log(`freiando!!`);
    }
}