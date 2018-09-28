
namespace GestaoEquipamentos.Default {

    @Serenity.Decorators.registerClass()
    export class EmprestimoGrid extends Serenity.EntityGrid<EmprestimoRow, any> {
        protected getColumnsKey() { return 'Default.Emprestimo'; }
        protected getDialogType() { return EmprestimoDialog; }
        protected getIdProperty() { return EmprestimoRow.idProperty; }
        protected getLocalTextPrefix() { return EmprestimoRow.localTextPrefix; }
        protected getService() { return EmprestimoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}