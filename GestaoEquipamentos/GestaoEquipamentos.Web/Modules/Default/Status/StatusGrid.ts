﻿
namespace GestaoEquipamentos.Default {

    @Serenity.Decorators.registerClass()
    export class StatusGrid extends Serenity.EntityGrid<StatusRow, any> {
        protected getColumnsKey() { return 'Default.Status'; }
        protected getDialogType() { return StatusDialog; }
        protected getIdProperty() { return StatusRow.idProperty; }
        protected getLocalTextPrefix() { return StatusRow.localTextPrefix; }
        protected getService() { return StatusService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}