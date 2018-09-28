
namespace GestaoEquipamentos.Default {

    @Serenity.Decorators.registerClass()
    export class StatusHistoricoGrid extends Serenity.EntityGrid<StatusHistoricoRow, any> {
        protected getColumnsKey() { return 'Default.StatusHistorico'; }
        protected getDialogType() { return StatusHistoricoDialog; }
        protected getIdProperty() { return StatusHistoricoRow.idProperty; }
        protected getLocalTextPrefix() { return StatusHistoricoRow.localTextPrefix; }
        protected getService() { return StatusHistoricoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}