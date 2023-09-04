namespace CloudGarage.Quotations {

    @Serenity.Decorators.registerClass()
    export class JobItemsPickDialog extends Serenity.TemplatedDialog<ProductPickOptions> {

        private checkGrid: JobItemsCheckGrid;

        constructor(opt: ProductPickOptions) {
            super(opt);

            this.checkGrid = new JobItemsCheckGrid(this.byId("CheckGrid"), opt);
            this.dialogTitle = "Select Job Type";
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
                            Q.notifyWarning("Please select some Job Type!");
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

        public onSuccess: (selected: QuotationjobitemsRow[]) => boolean;
    }
}