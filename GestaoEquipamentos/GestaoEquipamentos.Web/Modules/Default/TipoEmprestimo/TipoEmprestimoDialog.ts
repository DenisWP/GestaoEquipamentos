
namespace GestaoEquipamentos.Default {

    @Serenity.Decorators.registerClass()
    export class TipoEmprestimoDialog extends Serenity.EntityDialog<TipoEmprestimoRow, any> {
        protected getFormKey() { return TipoEmprestimoForm.formKey; }
        protected getIdProperty() { return TipoEmprestimoRow.idProperty; }
        protected getLocalTextPrefix() { return TipoEmprestimoRow.localTextPrefix; }
        protected getNameProperty() { return TipoEmprestimoRow.nameProperty; }
        protected getService() { return TipoEmprestimoService.baseUrl; }

        protected form = new TipoEmprestimoForm(this.idPrefix);

    }
}