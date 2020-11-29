using Sitecore.Data.Items;
using Sitecore.Diagnostics;
using Sitecore.Globalization;
using Sitecore.Links;
using Sitecore.Resources.Media;
using Sitecore.SecurityModel;
using System;

namespace ENBD.JSS.Website
{
    public static class SitecoreUtil
    {
        public static string GetMediaUrlWithServer(MediaItem mediaItem, Item item = null)
        {
            item = item ?? Sitecore.Context.Item;
            var mediaOptions = new MediaUrlOptions { AbsolutePath = true };
            var mediaUrl = MediaManager.GetMediaUrl(mediaItem, mediaOptions);
            return mediaUrl;
        }
        public static string GetItemUrlWithServer(Item item)
        {
            var options = new UrlOptions { AlwaysIncludeServerUrl = true, LanguageEmbedding = LanguageEmbedding.Always, AddAspxExtension = false };
            var itemUrl = LinkManager.GetItemUrl(item, options);
            return itemUrl;
        }
        public static string GetItemUrl(Item item, string language)
        {
            using (new LanguageSwitcher(language))
            {
                var options = new UrlOptions { LanguageEmbedding = LanguageEmbedding.Always, AddAspxExtension = false };
                var itemUrl = LinkManager.GetItemUrl(item, options);
                return itemUrl;
            }
        }
        public static string GetItemUrl(Item item)
        {
            var options = new UrlOptions { LanguageEmbedding = LanguageEmbedding.Always, AddAspxExtension = false };
            var itemUrl = LinkManager.GetItemUrl(item, options);
            return itemUrl;
        }
        public static string GetItemUrl(Guid guid)
        {
            if (guid != Guid.Empty)
            {
                var item = Sitecore.Context.Database.GetItem(Sitecore.Data.ID.Parse(guid));
                var options = new UrlOptions { LanguageEmbedding = LanguageEmbedding.Always, AddAspxExtension = false };
                var itemUrl = LinkManager.GetItemUrl(item, options);
                return itemUrl;
            }
            return string.Empty;
        }
        public static Item GetItem(string itemId)
        {
            if (!string.IsNullOrEmpty(itemId))
            {
                return Sitecore.Context.Database.GetItem(Sitecore.Data.ID.Parse(itemId));
            }
            return null;
        }
        public static Item GetItem(Guid guid)
        {
            if (guid != Guid.Empty)
            {
                return Sitecore.Context.Database.GetItem(Sitecore.Data.ID.Parse(guid));
            }
            return null;
        }
        public static Item GetItemByPath(string path, string database = "")
        {
            if (string.IsNullOrEmpty(database))
            {
                return Sitecore.Context.Database.SelectSingleItem(path);
            }
            else
            {
                return Sitecore.Configuration.Factory.GetDatabase(database).SelectSingleItem(path);
            }
        }
    }
}