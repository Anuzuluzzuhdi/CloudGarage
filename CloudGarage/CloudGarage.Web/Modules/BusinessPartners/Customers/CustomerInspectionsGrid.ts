/// <reference path="../../Inspections/Inspections/InspectionsGrid.ts" />

namespace CloudGarage.BusinessPartners {

    import fld = Inspections.InspectionsRow.Fields;

    @Serenity.Decorators.registerClass()
    export class CustomerInspectionsGrid extends Inspections.InspectionsGrid {
        protected getDialogType() { return CustomerInspectionsDialog; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns(): Slick.Column[] {
            return super.getColumns().filter(x => x.field !== fld.CustomerName);
        }

        protected initEntityDialog(itemType, dialog) {
            super.initEntityDialog(itemType, dialog);
            Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
        }

        protected addButtonClick() {
            this.editItem({ CustomerId: this.CustomerId });
        }

        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.CustomerId;
        }

        private _CustomerId: number;

        get CustomerId() {
            return this._CustomerId;
        }

        set CustomerId(value: number) {
            if (this._CustomerId !== value) {
                this._CustomerId = value;
                this.setEquality('CustomerId', value);
                this.refresh();
            }
        }
    }
}