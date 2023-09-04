using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Note.NoteRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Note.NoteRow;

namespace CloudGarage.Note
{
    public interface INoteSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class NoteSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, INoteSaveHandler
    {
        public NoteSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}