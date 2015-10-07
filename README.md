# Koluhms v1.0.1
An automated column [kol-uh m] solution with support for height balancing, responsive styles and more. Configurable right in your HTML and CSS.

Requires
--------------

jQuery.

Support
--------------

Most things? It appears to work in IE9.

Usage
--------------

Basic example using lists with sub lists:
```html
<ul data-columns="3" data-selector="li" data-identifier="column" data-column-element="ul">
    <li>Test #1</li>
    <li>Test #2</li>
    <li>Test #3</li>
    <li>Test #4
        <ul>
            <li>Sub Test #1</li>
            <li>Sub Test #2</li>
            <li>Sub Test #3</li>
            <li>Sub Test #4</li>
        </ul>
    </li>
    <li>Test #5</li>
    <li>Test #6</li>
    <li>Test #7
        <ul>
            <li>Sub Test #5</li>
            <li>Sub Test #6</li>
            <li>Sub Test #7</li>
            <li>Sub Test #8</li>
            <li>Sub Test #9</li>
            <li>Sub Test #10</li>
            <li>Sub Test #11</li>
            <li>Sub Test #12</li>
            <li>Sub Test #13</li>
        </ul>
    </li>
    <li>Test #8
        <ul>
            <li>Sub Test #14</li>
            <li>Sub Test #15</li>
        </ul>
    </li>
</ul>
```

```css
.column {
    float: left;
    width: 33%;
}
```

Same example using balance property:
```html
<ul data-columns="3" data-selector="li" data-identifier="column-balance" data-column-element="ul" data-balance="true">
    <li>Test #1</li>
    <li>Test #2</li>
    <li>Test #3</li>
    <li>Test #4
        <ul>
            <li>Sub Test #1</li>
            <li>Sub Test #2</li>
            <li>Sub Test #3</li>
            <li>Sub Test #4</li>
        </ul>
    </li>
    <li>Test #5</li>
    <li>Test #6</li>
    <li>Test #7
        <ul>
            <li>Sub Test #5</li>
            <li>Sub Test #6</li>
            <li>Sub Test #7</li>
            <li>Sub Test #8</li>
            <li>Sub Test #9</li>
            <li>Sub Test #10</li>
            <li>Sub Test #11</li>
            <li>Sub Test #12</li>
            <li>Sub Test #13</li>
        </ul>
    </li>
    <li>Test #8
        <ul>
            <li>Sub Test #14</li>
            <li>Sub Test #15</li>
        </ul>
    </li>
</ul>
```

```css
.column-balance {
    float: left;
    width: 33%;
}
```

Example using responsive media queries for alternate column counts:
```html
<div data-columns="2,3,4" data-breaks="480,768,1140" data-selector="p" data-identifier="column-responsive" data-column-element="div" data-balance="true">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper libero a orci accumsan egestas.</p>
    <p>Integer sit amet odio quis neque viverra ultricies quis vitae diam.</p>
    <p>Nam quis ex ac nulla convallis fringilla. Phasellus eleifend ac leo id mattis.</p>
    <p>Integer tincidunt magna eget cursus sodales. Aliquam vel massa velit.</p>
</div>
```

```css
@media only screen and (min-width: 480px) {
    .column-responsive {
        float: left;
        width: 50%;
    }
}

@media only screen and (min-width: 768px) {
    .column-responsive {
        width: 33%;
    }
}

@media only screen and (min-width: 1140px) {
    .column-responsive {
        width: 25%;
    }
}
```

Notes
--------------

The new columns that are created will be appended to the parent element of the element you attach data-columns to. There is very little error checking on set parameters currently. The only optional data parameters are data-balance and data-breaks. data-columns and data-breaks are expected to be numbers, or a list of numbers, using a "," to separate. Make sure they have the same amount of numbers in them. Make sure they appear in an order smallest to largest.

Demo
--------------

[Demo Link](http://htmlpreview.github.io/?https://github.com/vaughnroyko/Koluhms/blob/master/demo.html)

Changelog
--------------

**v1.0.1**

- Removed a rogue ``</ul>`` - now uses the proper column-element data.

License
--------------

Koluhms is licensed under the [MIT License](https://github.com/vaughnroyko/Koluhms/blob/master/LICENSE).
