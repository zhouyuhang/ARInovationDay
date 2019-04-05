
<img src="https://magicleaphelio.com/images/Prismatic_Wordmark_RGB.svg" alt="drawing" width="150"/>

#Prismatic

Prismatic is a declarative JS library for creating 3D content for the Helio browser.
Using simple HTML tags with inline attributes and CSS styling, you can easily render 3D content that pops off of the page and you can grab and place into your environment.

## Installing

If you use npm, run `npm i @magicleap/prismatic`. Otherwise, you can [download](https://creator.magicleap.com/downloads/prismatic) the latest release from the creator portal.

To add the minified version:

```
<script src="https://unpkg.com/@magicleap/prismatic"></script>
```

More information and guides are available on Magic Leap's [Creator Portal](https://creator.magicleap.com/learn/guides/helio).

For live samples and code snippets, highlighting the Web Platform's core features, checkout the Developer Samples website [here](https://magicleaphelio.com/devsamples).


## What's New

* Upgrade HTML Custom Element API to `V1`.
* Add support for `glTF` animation.
* Rotation can now be specified in degrees, such as `45deg`.
* Extraction Size can now be specified in `mm` and `cm` units for more accuracy.
* Support CSS units `mm` and `cm` to set the size and position of Prisms.
* You can now specify a fallback `alt-image` attribute for your model for viewing on another browser or when a node fails to load.  
* You can now use the CSS to set the `visibility` for Prisms.

### Bug Fixes
* Removed unnecessary `unbounded` attribute from library.
* Remove unnecessary console logs.
