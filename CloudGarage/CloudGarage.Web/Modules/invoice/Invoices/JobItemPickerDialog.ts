namespace CloudGarage.invoice {

    @Serenity.Decorators.registerClass()
    export class JobItemPickerDialog extends Serenity.TemplatedDialog<ProductPickerOptions> {

        private checkGrid: JobItemCheckGrid;

        constructor(opt: ProductPickerOptions) {
            super(opt);

            this.checkGrid = new JobItemCheckGrid(this.byId("CheckGrid"), opt);
            this.dialogTitle = "Select Jobtypes";
        }

        protected getTemplate() {
            return `<div id="~_CheckGrid"></div>`;
        }

        protected getDialogButtons() {
            return [
                {
                    text: Q.text("Dialogs.OkButton"),
                    click: () => {
                        var selected = this.checkGrid.selectedItems;
                        if (!selected.length) {
                            Q.notifyWarning("Please select some products!");
                            return;
                        }

                        if (!this.onSuccess || this.onSuccess(selected))
                            this.dialogClose();
                    }
                },
                {
                    text: Q.text("Dialogs.CancelButton"),
                    click: () => {
                        this.dialogClose();
                    }
                }
            ];
        }

        get selectedItems() {
            return this.checkGrid.selectedItems;
        }

        public onSuccess: (selected: invoice.InvoicejobitemsRow[]) => boolean;
    }
}