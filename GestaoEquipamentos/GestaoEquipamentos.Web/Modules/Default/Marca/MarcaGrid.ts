
namespace GestaoEquipamentos.Default {

    @Serenity.Decorators.registerClass()
    export class MarcaGrid extends Serenity.EntityGrid<MarcaRow, any> {
        protected getColumnsKey() { return 'Default.Marca'; }
        protected getDialogType() { return MarcaDialog; }
        protected getIdProperty() { return MarcaRow.idProperty; }
        protected getLocalTextPrefix() { return MarcaRow.localTextPrefix; }
        protected getService() { return MarcaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}