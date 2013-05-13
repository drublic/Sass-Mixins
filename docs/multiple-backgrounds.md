# An awesome Sass-mixin for multiple backgrounds

This mixin generates multiple backgrounds. Requires `@function prefixed-gradient`.

## The Mixin

	@mixin x-multiple-backgrounds ($backgrounds...) {
		$combined-background-webkit-old: ();
		$combined-background-webkit: ();
		$combined-background-moz: ();
		$combined-background-o: ();
		$combined-background: ();
		$end: '';

		// Iterate through all backgrounds passed
		@each $background in $backgrounds {

			// Prefix gradients
			@if (type-of($background) == list) {

				@if (nth($background, 1) == 'linear-gradient') {
					$combined-background-webkit-old: append($combined-background-webkit-old, prefixed-gradient('webkit-old', $background), comma);
					$combined-background-webkit: append($combined-background-webkit, prefixed-gradient('webkit', $background), comma);
					$combined-background-moz: append($combined-background-moz, prefixed-gradient('moz', $background), comma);
					$combined-background-o: append($combined-background-o, prefixed-gradient('o', $background), comma);
					$combined-background: append($combined-background, prefixed-gradient('', $background), comma);

				// Nothing to do for non-gradients
				} @else {
					$combined-background-webkit-old: append($combined-background-webkit-old, $background, comma);
					$combined-background-webkit: append($combined-background-webkit, $background, comma);
					$combined-background-moz: append($combined-background-moz, $background, comma);
					$combined-background-o: append($combined-background-o, $background, comma);
					$combined-background: append($combined-background, $background, comma);
				}

			// Put colors at end of combined background
			} @else if (type-of($background) == color) {
				$end: $background;
				$background: null;
			}
		}

		// Append color if there is one
		$combined-background-webkit-old: append($combined-background-webkit-old, $end, space);
		$combined-background-webkit: append($combined-background-webkit, $end, comma);
		$combined-background-moz: append($combined-background-moz, $end, comma);
		$combined-background-o: append($combined-background-o, $end, comma);
		$combined-background: append($combined-background, $end, comma);

		// Only print all prefixed versions if necessary
		@if ($combined-background != $combined-background-webkit) {
			background: unquote($combined-background-webkit-old);
			background: unquote($combined-background-webkit);
			background: unquote($combined-background-moz);
			background: unquote($combined-background-o);
			background: unquote($combined-background);
		} @else {
			background: unquote($combined-background);
		}

	}


## Usage

### Inclusion in SCSS

	@include x-multiple-backgrounds(
		[<color>],
		[<image>],
		[<image> <repeat>],
		[(linear-gradient, [<direction>], [<color>], [<color>])]
	);
	@include x-linear-gradient([<direction>], [<color fallback>], [<color start>], [<color end>]);

### Example

	.selector {
		@include x-multiple-backgrounds(
			rgba(0, 0, 0, 0.3),
			url('img/someImage-1.png'),
			url('../img/someImage-2.png') no-repeat,
			(linear-gradient, to bottom, #aaa, #ddd)
		);
	}
