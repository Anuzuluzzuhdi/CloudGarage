
namespace CloudGarage.JobCards {
    import fld = JobcarddetailsRow.Fields;
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.registerEditor("JobCards.JobCardDetailsEditor")
    export class JobCardDetailsEditor extends Serenity.Extensions.GridEditorBase<JobCards.JobcarddetailsRow> {
        protected getColumnsKey() { return JobCards.JobcarddetailsColumns.columnsKey; }
        protected getDialogType() { return JobCardDetailsEditDialog; }
        protected getLocalTextPrefix() { return JobCards.JobcarddetailsRow.localTextPrefix; }

        private pendingChanges: Q.Dictionary<any> = {};

        constructor(container: JQuery) {
            super(container);
            this.disableAddButton();
          
        }
        protected getAddButtonCaption() {
            return "Job Card Details";
        }

        public disableAddButton() {
            this.toolbar.findButton('column-picker-button').hide();
        }
       
        protected onViewProcessData(response) {
            this.pendingChanges = {};
            return super.onViewProcessData(response);
        }

        private getEffectiveValue(item, field): any {
            var pending = this.pendingChanges[item.Id];
            if (pending && pending[field] !== undefined) {
                return pending[field];
            }

            return item[field];
        }

        protected getColumns() {
            var columns = super.getColumns();

            columns.unshift({
                field: 'Remove CheckList',
                name: '',
                format: ctx => '<a class="inline-action delete-row" title="delete">' +
                    '<i class="fa fa-times text-red"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });

            return columns;
        }

        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            super.onClick(e, row, cell);

            if (e.isDefaultPrevented())
                return;

            var item = this.itemAt(row);
            var target = $(e.target);
            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {
                e.preventDefault();

                if (target.hasClass('delete-row')) {
                    var items = this.getItems();
                    items.splice(row, 1);
                    this.setItems(items);
                }
            }
        }
    }
}