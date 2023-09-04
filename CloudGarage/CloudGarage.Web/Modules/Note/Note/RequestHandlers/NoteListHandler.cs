using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CloudGarage.Note.NoteRow>;
using MyRow = CloudGarage.Note.NoteRow;

namespace CloudGarage.Note
{
    public interface INoteListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class NoteListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, INoteListHandler
    {
        public NoteListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}