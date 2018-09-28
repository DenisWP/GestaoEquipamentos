
namespace GestaoEquipamentos.Default {

    @Serenity.Decorators.registerClass()
    export class PessoaDialog extends Serenity.EntityDialog<PessoaRow, any> {
        protected getFormKey() { return PessoaForm.formKey; }
        protected getIdProperty() { return PessoaRow.idProperty; }
        protected getLocalTextPrefix() { return PessoaRow.localTextPrefix; }
        protected getNameProperty() { return PessoaRow.nameProperty; }
        protected getService() { return PessoaService.baseUrl; }

        protected form = new PessoaForm(this.idPrefix);

    }
}