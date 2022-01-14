# Alpine.js Intersect-Class Plugin

An Alpine.js plugin to easily set CSS classes to an element when it enters the viewport.

## Installation
You can use this plugin by either including it from a `<script>` tag or installing it via NPM:

### Via CDN
You can include the CDN build of this plugin as a `<script>` tag, just make sure to include it BEFORE Alpine's core JS file.

```html
<!-- This Plugin -->
<script defer src="https://unpkg.com/alpinejs-intersect-class@1.x.x/dist/cdn.min.js"></script>

<!-- Alpine Core -->
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### Via NPM
You can install Intersect from NPM for use inside your bundle like so:

```sh
npm install alpinejs-intersect-class
```

Then initialize it from your bundle:

```js
import Alpine from 'alpinejs'
import intersectClass from 'alpinejs-intersect-class'

Alpine.plugin(intersectClass)
```

## Usage
Use the `x-intersect-class` Attribute to set the CSS class that should be added to the element once it comes to the browsers viewport.

```html
<div x-data x-intersect-class="fade-in"></div>
```
Make shure that you have defined that class in your CSS files, like `fade-in` in this example.
