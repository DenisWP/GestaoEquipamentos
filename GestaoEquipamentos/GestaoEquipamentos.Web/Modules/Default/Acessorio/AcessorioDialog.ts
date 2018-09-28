
namespace GestaoEquipamentos.Default {

    @Serenity.Decorators.registerClass()
    export class AcessorioDialog extends Serenity.EntityDialog<AcessorioRow, any> {
        protected getFormKey() { return AcessorioForm.formKey; }
        protected getIdProperty() { return AcessorioRow.idProperty; }
        protected getLocalTextPrefix() { return AcessorioRow.localTextPrefix; }
        protected getNameProperty() { return AcessorioRow.nameProperty; }
        protected getService() { return AcessorioService.baseUrl; }

        protected form = new AcessorioForm(this.idPrefix);

    }
}