
namespace GestaoEquipamentos.Default {

    @Serenity.Decorators.registerClass()
    export class AcessorioGrid extends Serenity.EntityGrid<AcessorioRow, any> {
        protected getColumnsKey() { return 'Default.Acessorio'; }
        protected getDialogType() { return AcessorioDialog; }
        protected getIdProperty() { return AcessorioRow.idProperty; }
        protected getLocalTextPrefix() { return AcessorioRow.localTextPrefix; }
        protected getService() { return AcessorioService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}