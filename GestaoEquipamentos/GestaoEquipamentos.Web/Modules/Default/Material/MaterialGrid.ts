﻿
namespace GestaoEquipamentos.Default {

    @Serenity.Decorators.registerClass()
    export class MaterialGrid extends Serenity.EntityGrid<MaterialRow, any> {
        protected getColumnsKey() { return 'Default.Material'; }
        protected getDialogType() { return MaterialDialog; }
        protected getIdProperty() { return MaterialRow.idProperty; }
        protected getLocalTextPrefix() { return MaterialRow.localTextPrefix; }
        protected getService() { return MaterialService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}