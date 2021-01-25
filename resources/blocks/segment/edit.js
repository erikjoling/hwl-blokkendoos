/**
 * WordPress dependencies
 */
const {	InnerBlocks, RichText, useBlockProps } = wp.blockEditor;
const { __ } = wp.i18n;
// const { withSelect } = wp.data;

/**
 * Internal dependencies
 */
// import { name } from './';
import EditSettings from './edit-settings';


/**
 * Edit function
 */
function edit( { attributes, setAttributes, isSelected } ) {

	// Get and setup attributes
	const tagName        = attributes.tagName;
	const variation      = attributes.variation;
	const allowedBlocks  = attributes.allowedBlocks;
	const orientation    = attributes.orientation;
	const templateLock   = attributes.templateLock ? 'insert' : false;

	// Setup new variables
	const baseClassName      = "wbl-segment";
	const variationClassName = (variation) ? baseClassName + '--' + variation : '';
	const blockClassName     = (variationClassName) ? baseClassName + ' ' + variationClassName : baseClassName;
	const TagName            = tagName;

	// Innerblocks
	// const renderAppender = InnerBlocks.ButtonBlockAppender;
	const renderAppender = (isSelected) ? InnerBlocks.ButtonBlockAppender : false;

	// Setup blockProps
	const blockProps = useBlockProps( {
		className: blockClassName
	} );

	const blocksTemplate = [
		[
			'core/heading',
			{ level: 2, content: __( 'Segment Title', 'wbl' ) },
		],
		[
			'wbl/segment-content',
			{},
			[
				[
					'core/paragraph',
					{ content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.' }
				]
			]
		],
		[
			'core/paragraph',
			{ content: '<i>Segment Footer</i>' }
		]
	];

	return (
		<>
			<TagName {...blockProps }>
	        	<div className={ `${baseClassName}__inner` }>
					<InnerBlocks
						template={ blocksTemplate }
						allowedBlocks={ allowedBlocks }
						templateLock={ templateLock }
						orientation={ orientation }
						renderAppender={ renderAppender }
					/>
				</div>
			</TagName>
			<EditSettings
				setAttributes={ setAttributes }
				tagName={ TagName }
			/>
		</>
	);
}

export default edit;
