using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CloudGarage.Note.NoteRow>;
using MyRow = CloudGarage.Note.NoteRow;

namespace CloudGarage.Note
{
    public interface INoteRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class NoteRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, INoteRetrieveHandler
    {
        public NoteRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}