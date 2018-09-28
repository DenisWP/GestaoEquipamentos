
namespace GestaoEquipamentos.Default {

    @Serenity.Decorators.registerClass()
    export class TipoEmprestimoGrid extends Serenity.EntityGrid<TipoEmprestimoRow, any> {
        protected getColumnsKey() { return 'Default.TipoEmprestimo'; }
        protected getDialogType() { return TipoEmprestimoDialog; }
        protected getIdProperty() { return TipoEmprestimoRow.idProperty; }
        protected getLocalTextPrefix() { return TipoEmprestimoRow.localTextPrefix; }
        protected getService() { return TipoEmprestimoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}