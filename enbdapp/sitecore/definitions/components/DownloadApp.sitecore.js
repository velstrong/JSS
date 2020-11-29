// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the DownloadApp component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addComponent({
    name: 'DownloadApp',
    icon: SitecoreIcon.DocumentTag,
    fields: [
        { name: 'Title', type: CommonFieldTypes.SingleLineText },
        { name: 'Description', type: CommonFieldTypes.RichText },
        { name: 'AndroidImage', type: CommonFieldTypes.Image },
        { name: 'IOSImage', type: CommonFieldTypes.Image },
        { name: 'AndroidCTALink', type: CommonFieldTypes.GeneralLink },
        { name: 'IOSCTALink', type: CommonFieldTypes.GeneralLink },
        { name: 'IOSCTAText', type: CommonFieldTypes.RichText },
        { name: 'AndroidCTAText', type: CommonFieldTypes.RichText },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
