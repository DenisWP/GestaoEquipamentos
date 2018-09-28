
namespace GestaoEquipamentos.Default {

    @Serenity.Decorators.registerClass()
    export class MarcaDialog extends Serenity.EntityDialog<MarcaRow, any> {
        protected getFormKey() { return MarcaForm.formKey; }
        protected getIdProperty() { return MarcaRow.idProperty; }
        protected getLocalTextPrefix() { return MarcaRow.localTextPrefix; }
        protected getNameProperty() { return MarcaRow.nameProperty; }
        protected getService() { return MarcaService.baseUrl; }

        protected form = new MarcaForm(this.idPrefix);

    }
}