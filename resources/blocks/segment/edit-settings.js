
/**
 * WordPress dependencies
 */
const {	InspectorAdvancedControls, InspectorControls } = wp.blockEditor;
const {	ExternalLink, PanelBody, PanelRow, SelectControl, ToggleControl } = wp.components;
const { __ } = wp.i18n;

/**
 * Internal dependencies
 */

/**
 * Edit Settings function
 */
const EditSettings = ( { setAttributes, tagName } ) => (
	<InspectorControls>
		<PanelBody>
			<SelectControl
				label={ __( 'Tag name', 'wbl-blocks' ) }
				help={
					<>
						{ __( 'Choosing the right semantic tag improves SEO and Accessibilty.', 'wbl-blocks' ) }

						<ExternalLink href={ 'http://html5doctor.com/you-can-still-use-div/' }>
							{ __( 'Learn more about semantic HTML5', 'wbl-blocks' ) }
						</ExternalLink>
					</>
				}
				value={ tagName }
				onChange={ ( newValue ) => {
					setAttributes( { tagName: newValue } )
				} }
				options={ [
					{ label: 'div', 	value: 'div' },
					{ label: 'section', value: 'section' },
					{ label: 'aside', 	value: 'aside' },
					{ label: 'article', value: 'article' }
				] }
			/>
		</PanelBody>
	</InspectorControls>
);

export default EditSettings;

