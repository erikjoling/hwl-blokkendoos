/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */
const { RichText, InnerBlocks, useBlockProps } = wp.blockEditor;

/**
 * Save function
 */
function save( { attributes } ) {

	// Get and setup attributes
	const TagName        = attributes.tagName;
	const variation      = attributes.variation;
	const allowedBlocks  = attributes.allowedBlocks;
	const orientation    = attributes.orientation;
	const templateLock   = attributes.templateLock;

	// Setup new variables
	const baseClassName      = "wbl-segment";
	const variationClassName = variation ? baseClassName + '--' + variation : '';
	const blockClassName     = variationClassName ? baseClassName + ' ' + variationClassName : baseClassName;

	// Setup blockProps
	const blockProps = useBlockProps.save( {
        className: blockClassName
    } );

	return (
		<TagName {...blockProps }>
			<div className={ `${baseClassName}__inner` }>
				<InnerBlocks.Content />
			</div>
		</TagName>
	);
}

export default save;
