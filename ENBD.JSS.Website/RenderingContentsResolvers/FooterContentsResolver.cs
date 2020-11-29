using ENBD.JSS.Website.Extensions;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Sitecore.Data;
using Sitecore.Data.Items;
using Sitecore.LayoutService.Configuration;
using Sitecore.Mvc.Presentation;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;

namespace ENBD.JSS.Website.RenderingContentsResolvers
{
    public class FooterContentsResolver : Sitecore.LayoutService.ItemRendering.ContentsResolvers.IRenderingContentsResolver
    {
        public bool IncludeServerUrlInMediaUrls { get; set; }
        public bool UseContextItem { get; set; }
        public string ItemSelectorQuery { get; set; }
        public NameValueCollection Parameters { get; set; }

        public object ResolveContents(Rendering rendering, IRenderingConfiguration renderingConfig)
        {
            //if you want to access the datasource item
            var datasource = !string.IsNullOrEmpty(rendering.DataSource)
                ? rendering.RenderingItem?.Database.GetItem(rendering.DataSource)
                : null;

            dynamic jsonObject = new JObject();
            jsonObject.Description = datasource.GetFieldValue("Description");
            jsonObject.Copyright = datasource.GetFieldValue("Copyright");
            jsonObject.LogoLink = datasource.GetLinkFieldValue("LogoLink");
            jsonObject.Logo = datasource.GetImageFieldURL("Logo");
            var socialLinks = new List<SocialLink>();
            var socialLinkFolder = datasource.GetChildren().Where(x => x.TemplateID == ID.Parse("{94FD0EF6-0BDC-49C3-9379-880899C5412E}")).FirstOrDefault();
            if (socialLinkFolder != null)
            {
                
                foreach (var item in socialLinkFolder.GetChildren().Where(x => x.TemplateID.ToString() == "{77529C37-A686-4E39-B64D-F5262BA37487}"))
                {
                    socialLinks.Add(new SocialLink()
                    {
                        Link = item.GetLinkFieldValue("Link"),
                        CSSClass = item.GetFieldValue("CSS Class")
                    });
                }
            }
            jsonObject.SocialLinks = JsonConvert.SerializeObject(socialLinks);
            return jsonObject;
        }
}

public class SocialLink
{
    public string Link { get; set; }
    public string CSSClass { get; set; }
}
}
