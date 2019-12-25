#   mofron-comp-text
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

 text component for mofron


# Install
```
npm install mofron   mofron-comp-text
```

# Sample
```html
<require>
    <tag module="mofron-comp-text">Text</tag>
</require>
<Text size="0.4rem" font="serif" space="0.1rem">text component</Text>
```
# Parameter

|Simple<br>Param | Parameter Name | Type | Description |
|:--------------:|:---------------|:-----|:------------|
| ◯  | text | string | text value |
| | size | string (size) | text size |
| | | key-value | style option |
| | height | string (size) | height (adjust the size according to the height) |
| | | key-value | style option |
| | mainColor | mixed (color) | string: color name, #hex |
| | | | array: [red, green, blue, (alpha)] |
| | | key-value | style option |
| | accentColor | mixed (color) | string: color name, #hex |
| | | | array: [red, green, blue, (alpha)] |
| | | | null: delete under line |
| | | key-value | style option |
| | font | mixed | string: font name |
| | | | array: [primary font, secondary font] |
| | space | string (size) | spacing size |
| | | key-value | style option |
| | weight | mixed | number: thickness value [100-900] |
| | | | null: delete thickness |
| | | key-value | style option |

