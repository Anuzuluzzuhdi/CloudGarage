
namespace CloudGarage.Meeting {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class MeetingagendaDialog extends Serenity.EntityDialog<MeetingagendaRow, any> {
        protected getFormKey() { return MeetingagendaForm.formKey; }
        protected getIdProperty() { return MeetingagendaRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingagendaRow.localTextPrefix; }
        protected getNameProperty() { return MeetingagendaRow.nameProperty; }
        protected getService() { return MeetingagendaService.baseUrl; }
        protected getDeletePermission() { return MeetingagendaRow.deletePermission; }
        protected getInsertPermission() { return MeetingagendaRow.insertPermission; }
        protected getUpdatePermission() { return MeetingagendaRow.updatePermission; }

        protected form = new MeetingagendaForm(this.idPrefix);

        protected getSaveEntity() {
            var se = super.getSaveEntity();
            se.MeetingId = Q.coalesce(se.MeetingId, this.entity.MeetingId);
            return se;
        }

    }
}