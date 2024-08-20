export class Livro {
    private numeroPaginas: number;
    private titulo: string;
    private editora: string;

    public constructor(_numeroPaginas: number, _titulo: string, _editora: string) {
        this.numeroPaginas = _numeroPaginas;
        this.titulo = _titulo;
        this.editora = _editora;
    }

    public getNumeroPaginas(): number {
        return this.numeroPaginas;
    }

    public setNumeroPaginas(_numeroPaginas: number): void {
        this.numeroPaginas = _numeroPaginas;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public setTitulo(_titulo: string): void {
        this.titulo = _titulo;
    }

    public getEditora(): string {
        return this.editora
    }

    public setEditora(_editora: string): void {
        this.editora = _editora;
    }

    //metodos

    public abrir(pessoa: string): void {
        console.log(`Livro aberto`);
        
    }

    public fechar(pessoa: string): void {
        console.log(`livro fechado`);
    }
}