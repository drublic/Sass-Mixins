# Awesome Sass-mixins for Media Queries

These mixins generate Media Queries.

Please use the CSS unit `em` for device-width in order to stay responsive.

## The Mixins

	@mixin x-at-least ($device-width) {
		@media screen and (min-width: $device-width) {
			@content;
		}
	}

	@mixin x-until ($device-width) {
		@media screen and (max-width: $device-width - 0.01) {
			@content;
		}
	}


## Usage

### Inclusion in SCSS

	@include x-at-least(40em) { width: 60%; }
	@include x-until(40em) { width: 100%; }

### Example

	.selector {
		@include x-until(40em) { width: 100%; }
	}

#### Expected CSS output

	@media screen and (max-width: 39.99em) {
		.selector {
			width: 100%;
		}
	}
