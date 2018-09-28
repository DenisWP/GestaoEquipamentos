
namespace GestaoEquipamentos.Default {

    @Serenity.Decorators.registerClass()
    export class EmpresaGrid extends Serenity.EntityGrid<EmpresaRow, any> {
        protected getColumnsKey() { return 'Default.Empresa'; }
        protected getDialogType() { return EmpresaDialog; }
        protected getIdProperty() { return EmpresaRow.idProperty; }
        protected getLocalTextPrefix() { return EmpresaRow.localTextPrefix; }
        protected getService() { return EmpresaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}