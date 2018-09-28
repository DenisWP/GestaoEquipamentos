
namespace GestaoEquipamentos.Default {

    @Serenity.Decorators.registerClass()
    export class EmprestimoAcessorioDialog extends Serenity.EntityDialog<EmprestimoAcessorioRow, any> {
        protected getFormKey() { return EmprestimoAcessorioForm.formKey; }
        protected getIdProperty() { return EmprestimoAcessorioRow.idProperty; }
        protected getLocalTextPrefix() { return EmprestimoAcessorioRow.localTextPrefix; }
        protected getNameProperty() { return EmprestimoAcessorioRow.nameProperty; }
        protected getService() { return EmprestimoAcessorioService.baseUrl; }

        protected form = new EmprestimoAcessorioForm(this.idPrefix);

    }
}