# responsive-compass-sprite
Some utils for responsive compass sprite.

## Introduction
As we all know, [Compass](http://compass-style.org) is a great css framework. It can help us to automaticly merge the pngs to a sprite.
However, when the css3 `background-size` is used in the css stylesheet, we need more to do to adjust the sprite with the html label.
`background-size` is to stretch the background image to fit the designated html label. When we merge to the sprite, we have to stretch the large sprite not the
original small png picture. So the `background-size` must be dynamicly calculated.

## Usage

* `cal_background_size`
  1. `$em`, the width of the desinated html label to contain the background image.
  2. `$map`, the reference to the merged sprites.
  3. `$name`, the name of the original png picture.

```scss
@import "compass/utilities/sprites";
// our scss utils
@import "utils";
$icons: sprite-map("path-to-your-images/*.png");

.test {
    $test-width: 10rem; // can be px, em or other unit
    @include cal_background_size($test-width, $icons, name-of-your-png-file);
}
```

*  `render_sprites_css`
  1. `$map`, the reference to the merged sprite.
  2. `$base-class`, the base class name.
  3. `$dimensions`, should we write the original width and height to the generated css styles. Default is `false`.
  4. `$prefix`, the prefix of the generated css class. Default is `icon`.
  5. `$offset-x`, the default offset-x of the background-position of the css class. Default is `0`.
  6. `$offset-y`, the default offset-y of the background-position of the css class. Default is `0`.
  7. `$use-percentage`, should the background-position displayed by percentage? Default is `true`.
  8. `$icon-repeat`, should we use the background-repeat: repeat?. Default is `no-repeat`.

```scss
@import "compass/utilities/sprites";
// our scss utils
@import "utils";
$icons: sprite-map("path-to-your-images/*.png");

@include render_sprites_css($icons, 'sprite');

```

