// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the FunFact component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addComponent({
    name: 'FunFact',
    icon: SitecoreIcon.DocumentTag,
    fields: [
        { name: 'Title', type: CommonFieldTypes.SingleLineText },
        { name: 'Description', type: CommonFieldTypes.RichText },
        { name: 'Facts', type: CommonFieldTypes.MultiList, source: './' },
        { name: 'BGImage', type: CommonFieldTypes.Image },
        { name: 'CTALink', type: CommonFieldTypes.GeneralLink },
        { name: 'CTATitle', type: CommonFieldTypes.SingleLineText },
        { name: 'CTADescription', type: CommonFieldTypes.RichText },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
