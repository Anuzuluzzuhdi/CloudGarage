
namespace CloudGarage.Note {

    @Serenity.Decorators.registerClass()
    export class NoteDialog extends Serenity.TemplatedDialog<any> {
        //protected getFormKey() { return NoteForm.formKey; }
        //protected getIdProperty() { return NoteRow.idProperty; }
        //protected getLocalTextPrefix() { return NoteRow.localTextPrefix; }
        //protected getNameProperty() { return NoteRow.nameProperty; }
        //protected getService() { return NoteService.baseUrl; }
        //protected getDeletePermission() { return NoteRow.deletePermission; }
        //protected getInsertPermission() { return NoteRow.insertPermission; }
        //protected getUpdatePermission() { return NoteRow.updatePermission; }

/*        protected form = new NoteForm(this.idPrefix);*/
        private textEditor: Serenity.HtmlContentEditor;

        constructor() {
            super();

            this.textEditor = new Serenity.HtmlNoteContentEditor(this.byId('Text'));
        }
        protected getTemplate() {
            return (
                "<form id='~_Form' class='s-Form'>" +
                "<textarea id='~_Text' class='required'></textarea>" +
                "</form>");
        }

        protected getDialogButtons() {
            return [
                {
                    text: Q.text('Dialogs.OkButton'),
                    click: () => {
                        if (!this.validateForm()) {
                            return;
                        }

                        this.okClick && this.okClick();
                    }
                },
                {
                    text: Q.text('Dialogs.CancelButton'),
                    click: () => this.dialogClose()
                }
            ];
        }

        get text(): string {
            return this.textEditor.value;
        }

        set text(value: string) {
            this.textEditor.value = value;
        }

        public okClick: () => void;
    }
}