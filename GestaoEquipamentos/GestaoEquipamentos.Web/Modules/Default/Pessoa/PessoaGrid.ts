
namespace GestaoEquipamentos.Default {

    @Serenity.Decorators.registerClass()
    export class PessoaGrid extends Serenity.EntityGrid<PessoaRow, any> {
        protected getColumnsKey() { return 'Default.Pessoa'; }
        protected getDialogType() { return PessoaDialog; }
        protected getIdProperty() { return PessoaRow.idProperty; }
        protected getLocalTextPrefix() { return PessoaRow.localTextPrefix; }
        protected getService() { return PessoaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}