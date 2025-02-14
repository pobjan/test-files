## Test Files Generator

// Headers (atx style)
# h1
## h2
### h3
#### h4
##### h5
###### h6

// Headers (setext style)
Header 1
========

Header 2
--------

// Blockquotes
> This is
> a blockquote
>
> > Nested
> > Blockquote

// Unordered List
* Item 1
* Item 2
    * item 3a
    * item 3b

- Item 1
- Item 2

- [ ] Checkbox off
- [x] Checkbox on

// Ordered List
1. Item 1
2. Item 2
    a. item 3a
    b. item 3b

// Links
[link](http://google.com)

// Emphasis
*italic*
_italic_

**bold**
__bold__

`inline code`
~~struck out~~

// Horizontal line
---

***

___

// Code
```javascript
console.log("This is a block code")
```

~~~css
.button { border: none; }
~~~

    4 space indent makes a code block

// Tables
| Left column | Center column | Right column |
|:------------|:-------------:|-------------:|
| Cell 1      |   Centered    |        $1600 |
| Cell 2      |    Cell 3     |          $12 |

Left column | Center column | Right column
:----------:|:-------------:|:-----------:
   Cell 1   |   Centered    |    $1600
   Cell 2   |    Cell 3     |     $12

// Images
![GitHub Logo](https://www.google.pl/logos/doodles/2025/valentines-day-2025-6753651837110609.5-l.webp)

![Alt Text](url)

[![GitHub Logo](https://www.google.pl/logos/doodles/2025/valentines-day-2025-6753651837110609.5-l.webp)](https://google.com/)

[![Alt Text](image_url)](link_url)

![alt text][logo]

[logo]: /images/logo.png "Logo Title"

// Backslash escapes
| Characters | Escape |     Description     |
| ---------- | ------ | ------------------- |
| \	       | \\     | backslash           |
| `          | \`     |	backtick            |
| *	       | \*     |	asterisk            |
| _          | \_     | underscore          |
| {}         | \{}    | curly braces        |
| []         | \[]    | square brackets     |
| ()         | \()    | parentheses         |
| #          | \#     | hash mark           |
| +          | \+     | plus sign           |
| -          | \-     | minus sign (hyphen) |
| .          | \.     | dot                 |
| !          | \!     | exclamation mark    |



