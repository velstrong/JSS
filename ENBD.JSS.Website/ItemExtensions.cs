using Sitecore.Data.Items;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ENBD.JSS.Website.Extensions
{
    public static class ItemExtensions
    {
        public static string GetImageFieldURL(this Item source, string fieldName)
        {
            Sitecore.Data.Fields.ImageField imgField = (Sitecore.Data.Fields.ImageField)source.Fields[fieldName];
            if (imgField != null && imgField.MediaItem != null)
            {
                MediaItem image = new MediaItem(imgField.MediaItem);

                if (image != null)
                {
                    return SitecoreUtil.GetMediaUrlWithServer(image);
                }
            }
            return string.Empty;
        }
        public static string GetCustomAttributes(this Item source, string fieldName)
        {
            Sitecore.Data.Fields.LinkField linkField = (Sitecore.Data.Fields.LinkField)source.Fields[fieldName];
            if (linkField != null)
            {
                return linkField.GetAttribute("customattributes");
            }
            return string.Empty;
        }
        public static string GetFieldValue(this Item source, string fieldName)
        {
            if (source.Fields[fieldName] != null && !string.IsNullOrEmpty(source.Fields[fieldName].Value))
            {
                return source.Fields[fieldName].Value.Trim();
            }

            return string.Empty;
        }
        public static string GetLinkFieldValue(this Item source, string fieldName)
        {
            var options = new Sitecore.Links.UrlBuilders.ItemUrlBuilderOptions();
            //by ashish bansal for removing zh-cn
            if (Sitecore.Context.Language.Name != "zh-CN")
            {
                options.LanguageEmbedding = Sitecore.Links.LanguageEmbedding.Always;
            }
            //options.LanguageEmbedding = Sitecore.Links.LanguageEmbedding.Always;
            Sitecore.Data.Fields.LinkField linkField = (Sitecore.Data.Fields.LinkField)source.Fields[fieldName];

            string url = string.Empty;
            if (linkField != null)
            {
                switch (linkField.LinkType.ToLower())
                {
                    case "internal":
                        {
                            url = linkField.TargetItem != null ? Sitecore.Links.LinkManager.GetItemUrl(linkField.TargetItem, options).ToLower() : string.Empty;
                            break;
                        }
                    case "media":
                        {
                            url = linkField.TargetItem != null ? Sitecore.Resources.Media.MediaManager.GetMediaUrl(linkField.TargetItem) : string.Empty;
                            break;
                        }
                    case "external":
                        {
                            url = linkField.Url;
                            break;
                        }
                    case "anchor":
                        {
                            url = !string.IsNullOrEmpty(linkField.Anchor) ? "#" + linkField.Anchor : string.Empty;
                            break;
                        }
                    case "mailto":
                        {
                            url = linkField.Url;
                            break;
                        }
                    case "javascript":
                        {
                            url = linkField.Url;
                            break;
                        }
                    default:
                        {
                            url = linkField.Url;
                            break;
                        }
                }
                url = string.Format("{0}{1}", url, string.IsNullOrEmpty(linkField.QueryString) ? string.Empty : string.Format("?{0}", linkField.QueryString));
            }
            return url;
        }
        public static int GetNumericFieldValue(this Item source, string fieldName)
        {
            if (source.Fields[fieldName] != null && !string.IsNullOrEmpty(source.Fields[fieldName].Value))
            {
                string value = source.Fields[fieldName].Value;
                if(Int32.TryParse(value,out int result))
                {
                    return result;
                }
            }
            return 0;
        }

        public static bool HasContextLanguage(this Item item)
        {
            if (item == null || item.Versions == null || item.Versions.Count == 0)
                return false;
            var latestLanguageVersion = item.Versions.GetLatestVersion();
            return (latestLanguageVersion != null) && (latestLanguageVersion.Versions.Count > 0);
        }
    }
}