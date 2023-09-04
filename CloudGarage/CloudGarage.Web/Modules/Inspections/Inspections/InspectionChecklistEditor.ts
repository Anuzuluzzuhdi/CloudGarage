
namespace CloudGarage.Inspections {
    import fld = InspectionchecklistRow.Fields;
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.registerEditor("Inspections.InspectionChecklistEditor")
    export class InspectionChecklistEditor extends Serenity.Extensions.GridEditorBase<Inspections.InspectionchecklistRow> {
        protected getColumnsKey() { return Inspections.InspectionchecklistColumns.columnsKey; }
        protected getDialogType() { return InspectionsDetailEditorDialog; }
        protected getLocalTextPrefix() { return Inspections.InspectionchecklistRow.localTextPrefix; }

        private pendingChanges: Q.Dictionary<any> = {};

        constructor(container: JQuery) {
            super(container);
            this.disableAddButton();
            this.slickContainer.on('change', '.edit:input', (e) => this.inputsChange(e));
        }
        protected getAddButtonCaption() {
            return "CheckList";
        }

        public disableAddButton() {
            this.toolbar.findButton('column-picker-button').hide();
        }

        protected onViewProcessData(response) {
            this.pendingChanges = {};
            this.setSaveButtonState();
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

        private inputsChange(e: JQueryEventObject) {
            var cell = this.slickGrid.getCellFromEvent(e);
            var item = this.itemAt(cell.row);
            var input = $(e.target);
            var field = input.data('field');
            var text = Q.coalesce(Q.trimToNull(input.val()), '0');
            var pending = this.pendingChanges[item.Id];

            var effective = this.getEffectiveValue(item, field);
            var oldText: string;
            if (input.hasClass("numeric"))
                oldText = Q.formatNumber(effective, '0.##');
            else
                oldText = effective as string;

            var value;
            if (input.hasClass("numeric")) {
                var i = Q.parseInteger(text);
                if (isNaN(i) || i > 32767 || i < 0) {
                    Q.notifyError(Q.text('Validation.Integer'), '', null);
                    input.val(oldText);
                    input.focus();
                    return;
                }
                value = i;
            }
            else
                value = text;

            if (!pending) {
                this.pendingChanges[item.Id] = pending = {};
            }

            pending[field] = value;
            item[field] = value;
            this.view.refresh();

            if (input.hasClass("numeric"))
                value = Q.formatNumber(value, '0.##');

            input.val(value).addClass('dirty');

            this.setSaveButtonState();
        }

        private setSaveButtonState() {
            this.toolbar.findButton('apply-changes-button').toggleClass('disabled',
                Object.keys(this.pendingChanges).length === 0);
        }
    }
}