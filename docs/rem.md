# An awesome SASS-mixin for the CSS value `rem`

This mixin will enable using the CSS3 value `rem`, which lets you define
property-sizes based on the root-element's font-size.

## The Mixin

	@mixin x-rem($property, $value, $mainFontSize: 16px) {
		#{$property}: $value * $mainFontSize;
		#{$property}: #{$value}rem;
	}

## Usage

### Inclusion in SCSS

	@include x-rem(<property>, <value>, [<default-font-size>]);

### Example

	.selector {
		@include x-rem(font-size, 1.3);
	}

#### Expected CSS output

	.selector {
		font-size: 20.8px;
		font-size: 1.3rem;
	}

## Note

Depending on the font-size of the root-element `rem` calculates a property of a
current element. The fallback solution excepts a `default-font-size`- argument
which is 16px by default.
