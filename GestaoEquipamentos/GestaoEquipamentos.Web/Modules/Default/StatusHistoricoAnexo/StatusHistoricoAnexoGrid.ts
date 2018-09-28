
namespace GestaoEquipamentos.Default {

    @Serenity.Decorators.registerClass()
    export class StatusHistoricoAnexoGrid extends Serenity.EntityGrid<StatusHistoricoAnexoRow, any> {
        protected getColumnsKey() { return 'Default.StatusHistoricoAnexo'; }
        protected getDialogType() { return StatusHistoricoAnexoDialog; }
        protected getIdProperty() { return StatusHistoricoAnexoRow.idProperty; }
        protected getLocalTextPrefix() { return StatusHistoricoAnexoRow.localTextPrefix; }
        protected getService() { return StatusHistoricoAnexoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}