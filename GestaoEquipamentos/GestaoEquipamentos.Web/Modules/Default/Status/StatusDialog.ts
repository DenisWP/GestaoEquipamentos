
namespace GestaoEquipamentos.Default {

    @Serenity.Decorators.registerClass()
    export class StatusDialog extends Serenity.EntityDialog<StatusRow, any> {
        protected getFormKey() { return StatusForm.formKey; }
        protected getIdProperty() { return StatusRow.idProperty; }
        protected getLocalTextPrefix() { return StatusRow.localTextPrefix; }
        protected getNameProperty() { return StatusRow.nameProperty; }
        protected getService() { return StatusService.baseUrl; }

        protected form = new StatusForm(this.idPrefix);

    }
}