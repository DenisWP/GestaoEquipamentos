
namespace GestaoEquipamentos.Default {

    @Serenity.Decorators.registerClass()
    export class StatusHistoricoDialog extends Serenity.EntityDialog<StatusHistoricoRow, any> {
        protected getFormKey() { return StatusHistoricoForm.formKey; }
        protected getIdProperty() { return StatusHistoricoRow.idProperty; }
        protected getLocalTextPrefix() { return StatusHistoricoRow.localTextPrefix; }
        protected getNameProperty() { return StatusHistoricoRow.nameProperty; }
        protected getService() { return StatusHistoricoService.baseUrl; }

        protected form = new StatusHistoricoForm(this.idPrefix);

    }
}