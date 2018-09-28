
namespace GestaoEquipamentos.Default {

    @Serenity.Decorators.registerClass()
    export class StatusHistoricoAnexoDialog extends Serenity.EntityDialog<StatusHistoricoAnexoRow, any> {
        protected getFormKey() { return StatusHistoricoAnexoForm.formKey; }
        protected getIdProperty() { return StatusHistoricoAnexoRow.idProperty; }
        protected getLocalTextPrefix() { return StatusHistoricoAnexoRow.localTextPrefix; }
        protected getNameProperty() { return StatusHistoricoAnexoRow.nameProperty; }
        protected getService() { return StatusHistoricoAnexoService.baseUrl; }

        protected form = new StatusHistoricoAnexoForm(this.idPrefix);

    }
}