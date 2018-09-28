
namespace GestaoEquipamentos.Default {

    @Serenity.Decorators.registerClass()
    export class EquipamentoDialog extends Serenity.EntityDialog<EquipamentoRow, any> {
        protected getFormKey() { return EquipamentoForm.formKey; }
        protected getIdProperty() { return EquipamentoRow.idProperty; }
        protected getLocalTextPrefix() { return EquipamentoRow.localTextPrefix; }
        protected getNameProperty() { return EquipamentoRow.nameProperty; }
        protected getService() { return EquipamentoService.baseUrl; }

        protected form = new EquipamentoForm(this.idPrefix);

    }
}