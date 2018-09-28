
namespace GestaoEquipamentos.Default {

    @Serenity.Decorators.registerClass()
    export class EmprestimoDialog extends Serenity.EntityDialog<EmprestimoRow, any> {
        protected getFormKey() { return EmprestimoForm.formKey; }
        protected getIdProperty() { return EmprestimoRow.idProperty; }
        protected getLocalTextPrefix() { return EmprestimoRow.localTextPrefix; }
        protected getNameProperty() { return EmprestimoRow.nameProperty; }
        protected getService() { return EmprestimoService.baseUrl; }

        protected form = new EmprestimoForm(this.idPrefix);

    }
}