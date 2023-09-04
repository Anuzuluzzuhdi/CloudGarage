using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<CloudGarage.Administration.LanguageRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CloudGarage.Administration.LanguageRow;


namespace CloudGarage.Administration
{
    public interface ILanguageSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }
    public class LanguageSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ILanguageSaveHandler
    {
        public LanguageSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}