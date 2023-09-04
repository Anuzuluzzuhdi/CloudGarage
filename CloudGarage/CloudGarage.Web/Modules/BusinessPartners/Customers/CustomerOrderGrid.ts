/// <reference path="../../Bookings/Vehiclebookings/VehiclebookingsDialog.ts" />

namespace CloudGarage.BusinessPartners {

    import fld = Bookings.VehiclebookingsRow.Fields;

    @Serenity.Decorators.registerClass()
    export class CustomerOrdersGrid extends Bookings.VehiclebookingsGrid {
        protected getDialogType() { return CustomerOrderDialog; }

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
            this.editItem({ Customer: this.Customer });
        }

        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.Customer;
        }

        private _Customer: number;

        get Customer() {
            return this._Customer;
        }

        set CustomerId(value: number) {
            if (this._Customer !== value) {
                this._Customer = value;
                this.setEquality('Customer', value);
                this.refresh();
            }
        }
    }
}