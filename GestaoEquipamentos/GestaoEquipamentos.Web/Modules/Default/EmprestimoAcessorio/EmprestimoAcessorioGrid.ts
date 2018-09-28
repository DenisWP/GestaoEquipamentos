
namespace GestaoEquipamentos.Default {

    @Serenity.Decorators.registerClass()
    export class EmprestimoAcessorioGrid extends Serenity.EntityGrid<EmprestimoAcessorioRow, any> {
        protected getColumnsKey() { return 'Default.EmprestimoAcessorio'; }
        protected getDialogType() { return EmprestimoAcessorioDialog; }
        protected getIdProperty() { return EmprestimoAcessorioRow.idProperty; }
        protected getLocalTextPrefix() { return EmprestimoAcessorioRow.localTextPrefix; }
        protected getService() { return EmprestimoAcessorioService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}