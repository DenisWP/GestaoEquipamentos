
namespace GestaoEquipamentos.Default {

    @Serenity.Decorators.registerClass()
    export class ModeloDialog extends Serenity.EntityDialog<ModeloRow, any> {
        protected getFormKey() { return ModeloForm.formKey; }
        protected getIdProperty() { return ModeloRow.idProperty; }
        protected getLocalTextPrefix() { return ModeloRow.localTextPrefix; }
        protected getNameProperty() { return ModeloRow.nameProperty; }
        protected getService() { return ModeloService.baseUrl; }

        protected form = new ModeloForm(this.idPrefix);

    }
}