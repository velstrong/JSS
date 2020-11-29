// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the ServicesCard component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addComponent({
    name: 'ServicesCard',
    icon: SitecoreIcon.DocumentTag,
    fields: [
        { name: 'Heading', type: CommonFieldTypes.SingleLineText },
        { name: 'Description', type: CommonFieldTypes.RichText },
        { name: 'HighLightList', type: CommonFieldTypes.MultiList },
        { name: 'CardImage', type: CommonFieldTypes.Image },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
