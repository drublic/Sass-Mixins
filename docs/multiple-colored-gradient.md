# An awesome Sass-mixin for multiple color stop gradients

This mixin creates (endless) multiple color stops in gradients just with one
call for the mixin.

## Usage

### Inclusion in SCSS

	@include x-multiple-colored-gradient((
	  <direction>,
	  <stop-1>,
	  [<stop-2>, [<stop-3>, … [stop-n]]]
	));

### Example

	.selector {
		@include x-multiple-colored-gradient(( "top", #aaa 0%, #bbb 50%, #ccc 100% ));
	}

#### Expected CSS

	.selector {
		background-image: -webkit-linear-gradient(top, #aaa 0%, #bbb 50%, #ccc 100%);
		background-image:    -moz-linear-gradient(top, #aaa 0%, #bbb 50%, #ccc 100%);
		background-image:     -ms-linear-gradient(top, #aaa 0%, #bbb 50%, #ccc 100%);
		background-image:      -o-linear-gradient(top, #aaa 0%, #bbb 50%, #ccc 100%);
		background-image:         linear-gradient(to bottom, #aaa 0%, #bbb 50%, #ccc 100%);
	}

### Notes

This mixis does not define a fallback-color for your background as it is likely
you want to add an image or something. Please specify one by yourself.
