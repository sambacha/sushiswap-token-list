# 🍣 SushiSwap Token List Registry Schema


Schema for lists of tokens compatible with the SushiSwap Interface



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------- |
| Can be instantiated | Yes        | Unknown status | No           | Forbidden         | Forbidden             | none                | [tokenlist.schema.json](../tokenlist.schema.json 'open original schema') |

## SushiSwap Token List Type

`object` ([SushiSwap Token List](tokenlist.md))

# SushiSwap Token List Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                |
| :---------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------ |
| [name](#name)           | `string` | Required | cannot be null | [SushiSwap Token List](tokenlist-properties-name.md 'https://yopen.org/tokenlist.schema.json#/properties/name')           |
| [timestamp](#timestamp) | `string` | Required | cannot be null | [SushiSwap Token List](tokenlist-properties-timestamp.md 'https://yopen.org/tokenlist.schema.json#/properties/timestamp') |
| [version](#version)     | `object` | Required | cannot be null | [SushiSwap Token List](tokenlist-definitions-version.md 'https://yopen.org/tokenlist.schema.json#/properties/version')    |
| [tokens](#tokens)       | `array`  | Required | cannot be null | [SushiSwap Token List](tokenlist-properties-tokens.md 'https://yopen.org/tokenlist.schema.json#/properties/tokens')       |
| [keywords](#keywords)   | `array`  | Optional | cannot be null | [SushiSwap Token List](tokenlist-properties-keywords.md 'https://yopen.org/tokenlist.schema.json#/properties/keywords')   |
| [tags](#tags)           | `object` | Optional | cannot be null | [SushiSwap Token List](tokenlist-properties-tags.md 'https://yopen.org/tokenlist.schema.json#/properties/tags')           |
| [logoURI](#logouri)     | `string` | Optional | cannot be null | [SushiSwap Token List](tokenlist-properties-logouri.md 'https://yopen.org/tokenlist.schema.json#/properties/logoURI')     |




## Token List `Name`

The name of the token list

`name`

- is required

- Type: `string`

- cannot be null

- defined in:
  [SushiSwap Token List](tokenlist-properties-name.md 'https://yopen.org/tokenlist.schema.json#/properties/name')

### name Type

`string`

### name Constraints

**maximum length**: the maximum number of characters for this string is: `20`

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression:

```regexp
^[\w ]+$
```

[try pattern](https://regexr.com/?expression=%5E%5B%5Cw%20%5D%2B%24 'try regular expression with regexr.com')

### name Examples

```json
"My Token List"
```

## timestamp

The timestamp of this list version; i.e. when this immutable version of the list was created

`timestamp`

- is required

- Type: `string`

- cannot be null

- defined in:
  [SushiSwap Token List](tokenlist-properties-timestamp.md 'https://yopen.org/tokenlist.schema.json#/properties/timestamp')

### timestamp Type

`string`

### timestamp Constraints

**date time**: the string must be a date time string, according to
[RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 'check the specification')

## version

The version of the list, used in change detection

`version`

- is required

- Type: `object` ([Details](tokenlist-definitions-version.md))

- cannot be null

- defined in:
  [SushiSwap Token List](tokenlist-definitions-version.md 'https://yopen.org/tokenlist.schema.json#/properties/version')

### version Type

`object` ([Details](tokenlist-definitions-version.md))

### version Examples

```json
{
  "major": 1,
  "minor": 0,
  "patch": 0
}
```

## tokens

The list of tokens included in the list

`tokens`

- is required

- Type: `object[]` ([Details](tokenlist-definitions-tokeninfo.md))

- cannot be null

- defined in:
  [SushiSwap Token List](tokenlist-properties-tokens.md 'https://yopen.org/tokenlist.schema.json#/properties/tokens')

### tokens Type

`object[]` ([Details](tokenlist-definitions-tokeninfo.md))

### tokens Constraints

**maximum number of items**: the maximum number of items for this array is: `10000`

**minimum number of items**: the minimum number of items for this array is: `1`

## keywords

Keywords associated with the contents of the list; may be used in list discoverability

`keywords`

- is optional

- Type: `string[]`

- cannot be null

- defined in:
  [SushiSwap Token List](tokenlist-properties-keywords.md 'https://yopen.org/tokenlist.schema.json#/properties/keywords')

### keywords Type

`string[]`

### keywords Constraints

**maximum number of items**: the maximum number of items for this array is: `20`

**unique items**: all items in this array must be unique. Duplicates are not allowed.

## tags

A mapping of tag identifiers to their name and description

`tags`

- is optional

- Type: `object` ([Details](tokenlist-properties-tags.md))

- cannot be null

- defined in:
  [SushiSwap Token List](tokenlist-properties-tags.md 'https://yopen.org/tokenlist.schema.json#/properties/tags')

### tags Type

`object` ([Details](tokenlist-properties-tags.md))

### tags Constraints

**maximum number of properties**: the maximum number of properties for this object is: `20`

### tags Examples

```json
{
  "stablecoin": {
    "name": "Stablecoin",
    "description": "A token with value pegged to another asset"
  }
}
```

## logoURI

A URI for the logo of the token list; prefer SVG or PNG of size 256x256

`logoURI`

- is optional

- Type: `string`

- cannot be null

- defined in:
  [SushiSwap Token List](tokenlist-properties-logouri.md 'https://yopen.org/tokenlist.schema.json#/properties/logoURI')

### logoURI Type

`string`

### logoURI Constraints

**URI**: the string must be a URI, according to
[RFC 3986](https://tools.ietf.org/html/rfc3986 'check the specification')

### logoURI Examples

```json
"ipfs://QmXfzKRvjZz3u5JRgC4v5mGVbm9ahrUiB4DgzHBsnWbTMM"
```

# SushiSwap Token List Definitions

## Definitions group Version

Reference this group by using

```json
{ "$ref": "https://yopen.org/tokenlist.schema.json#/definitions/Version" }
```

| Property        | Type      | Required | Nullable       | Defined by                                                                                                                                                |
| :-------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [major](#major) | `integer` | Required | cannot be null | [SushiSwap Token List](tokenlist-definitions-version-properties-major.md 'https://yopen.org/tokenlist.schema.json#/definitions/Version/properties/major') |
| [minor](#minor) | `integer` | Required | cannot be null | [SushiSwap Token List](tokenlist-definitions-version-properties-minor.md 'https://yopen.org/tokenlist.schema.json#/definitions/Version/properties/minor') |
| [patch](#patch) | `integer` | Required | cannot be null | [SushiSwap Token List](tokenlist-definitions-version-properties-patch.md 'https://yopen.org/tokenlist.schema.json#/definitions/Version/properties/patch') |

### major

The major version of the list. Must be incremented when tokens are removed from the list or token
addresses are changed.

`major`

- is required

- Type: `integer`

- cannot be null

- defined in:
  [SushiSwap Token List](tokenlist-definitions-version-properties-major.md 'https://yopen.org/tokenlist.schema.json#/definitions/Version/properties/major')

#### major Type

`integer`

#### major Constraints

**minimum**: the value of this number must greater than or equal to: `0`

#### major Examples

```json
1
```

```json
2
```

### minor

The minor version of the list. Must be incremented when tokens are added to the list.

`minor`

- is required

- Type: `integer`

- cannot be null

- defined in:
  [SushiSwap Token List](tokenlist-definitions-version-properties-minor.md 'https://yopen.org/tokenlist.schema.json#/definitions/Version/properties/minor')

#### minor Type

`integer`

#### minor Constraints

**minimum**: the value of this number must greater than or equal to: `0`

#### minor Examples

```json
0
```

```json
1
```

### patch

The patch version of the list. Must be incremented for any changes to the list.

`patch`

- is required

- Type: `integer`

- cannot be null

- defined in:
  [SushiSwap Token List](tokenlist-definitions-version-properties-patch.md 'https://yopen.org/tokenlist.schema.json#/definitions/Version/properties/patch')

#### patch Type

`integer`

#### patch Constraints

**minimum**: the value of this number must greater than or equal to: `0`

#### patch Examples

```json
0
```

```json
1
```

## Definitions group TagIdentifier

Reference this group by using

```json
{ "$ref": "https://yopen.org/tokenlist.schema.json#/definitions/TagIdentifier" }
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |


## Definitions group ExtensionIdentifier

Reference this group by using

```json
{ "$ref": "https://yopen.org/tokenlist.schema.json#/definitions/ExtensionIdentifier" }
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |


## Definitions group ExtensionValue

Reference this group by using

```json
{ "$ref": "https://yopen.org/tokenlist.schema.json#/definitions/ExtensionValue" }
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |


## Definitions group TagDefinition

Reference this group by using

```json
{ "$ref": "https://yopen.org/tokenlist.schema.json#/definitions/TagDefinition" }
```

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                        |
| :-------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name-1)             | `string` | Required | cannot be null | [SushiSwap Token List](tokenlist-definitions-tagdefinition-properties-name.md 'https://yopen.org/tokenlist.schema.json#/definitions/TagDefinition/properties/name')               |
| [description](#description) | `string` | Required | cannot be null | [SushiSwap Token List](tokenlist-definitions-tagdefinition-properties-description.md 'https://yopen.org/tokenlist.schema.json#/definitions/TagDefinition/properties/description') |

### name

The name of the tag

`name`

- is required

- Type: `string`

- cannot be null

- defined in:
  [SushiSwap Token List](tokenlist-definitions-tagdefinition-properties-name.md 'https://yopen.org/tokenlist.schema.json#/definitions/TagDefinition/properties/name')

#### name Type

`string`

#### name Constraints

**maximum length**: the maximum number of characters for this string is: `20`

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression:

```regexp
^[ \w]+$
```

[try pattern](https://regexr.com/?expression=%5E%5B%20%5Cw%5D%2B%24 'try regular expression with regexr.com')

### description

A user-friendly description of the tag

`description`

- is required

- Type: `string`

- cannot be null

- defined in:
  [SushiSwap Token List](tokenlist-definitions-tagdefinition-properties-description.md 'https://yopen.org/tokenlist.schema.json#/definitions/TagDefinition/properties/description')

#### description Type

`string`

#### description Constraints

**maximum length**: the maximum number of characters for this string is: `200`

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression:

```regexp
^[ \w\.,]+$
```

[try pattern](https://regexr.com/?expression=%5E%5B%20%5Cw%5C.%2C%5D%2B%24 'try regular expression with regexr.com')

## Definitions group TokenInfo

Reference this group by using

```json
{ "$ref": "https://yopen.org/tokenlist.schema.json#/definitions/TokenInfo" }
```

| Property                  | Type      | Required | Nullable       | Defined by                                                                                                                                                              |
| :------------------------ | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [chainId](#chainid)       | `integer` | Required | cannot be null | [SushiSwap Token List](tokenlist-definitions-tokeninfo-properties-chainid.md 'https://yopen.org/tokenlist.schema.json#/definitions/TokenInfo/properties/chainId')       |
| [address](#address)       | `string`  | Required | cannot be null | [SushiSwap Token List](tokenlist-definitions-tokeninfo-properties-address.md 'https://yopen.org/tokenlist.schema.json#/definitions/TokenInfo/properties/address')       |
| [decimals](#decimals)     | `integer` | Required | cannot be null | [SushiSwap Token List](tokenlist-definitions-tokeninfo-properties-decimals.md 'https://yopen.org/tokenlist.schema.json#/definitions/TokenInfo/properties/decimals')     |
| [name](#name-2)           | `string`  | Required | cannot be null | [SushiSwap Token List](tokenlist-definitions-tokeninfo-properties-name.md 'https://yopen.org/tokenlist.schema.json#/definitions/TokenInfo/properties/name')             |
| [symbol](#symbol)         | `string`  | Required | cannot be null | [SushiSwap Token List](tokenlist-definitions-tokeninfo-properties-symbol.md 'https://yopen.org/tokenlist.schema.json#/definitions/TokenInfo/properties/symbol')         |
| [logoURI](#logouri-1)     | `string`  | Optional | cannot be null | [SushiSwap Token List](tokenlist-definitions-tokeninfo-properties-logouri.md 'https://yopen.org/tokenlist.schema.json#/definitions/TokenInfo/properties/logoURI')       |
| [tags](#tags-1)           | `array`   | Optional | cannot be null | [SushiSwap Token List](tokenlist-definitions-tokeninfo-properties-tags.md 'https://yopen.org/tokenlist.schema.json#/definitions/TokenInfo/properties/tags')             |
| [extensions](#extensions) | `object`  | Optional | cannot be null | [SushiSwap Token List](tokenlist-definitions-tokeninfo-properties-extensions.md 'https://yopen.org/tokenlist.schema.json#/definitions/TokenInfo/properties/extensions') |

### chainId

The chain ID of the Ethereum network where this token is deployed

`chainId`

- is required

- Type: `integer`

- cannot be null

- defined in:
  [SushiSwap Token List](tokenlist-definitions-tokeninfo-properties-chainid.md 'https://yopen.org/tokenlist.schema.json#/definitions/TokenInfo/properties/chainId')

#### chainId Type

`integer`

#### chainId Constraints

**minimum**: the value of this number must greater than or equal to: `1`

#### chainId Examples

```json
1
```

```json
42
```

### address

The checksummed address of the token on the specified chain ID

`address`

- is required

- Type: `string`

- cannot be null

- defined in:
  [SushiSwap Token List](tokenlist-definitions-tokeninfo-properties-address.md 'https://yopen.org/tokenlist.schema.json#/definitions/TokenInfo/properties/address')

#### address Type

`string`

#### address Constraints

**pattern**: the string must match the following regular expression:

```regexp
^0x[a-fA-F0-9]{40}$
```

[try pattern](https://regexr.com/?expression=%5E0x%5Ba-fA-F0-9%5D%7B40%7D%24 'try regular expression with regexr.com')

#### address Examples

```json
"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
```

### decimals

The number of decimals for the token balance

`decimals`

- is required

- Type: `integer`

- cannot be null

- defined in:
  [SushiSwap Token List](tokenlist-definitions-tokeninfo-properties-decimals.md 'https://yopen.org/tokenlist.schema.json#/definitions/TokenInfo/properties/decimals')

#### decimals Type

`integer`

#### decimals Constraints

**maximum**: the value of this number must smaller than or equal to: `255`

**minimum**: the value of this number must greater than or equal to: `0`

#### decimals Examples

```json
18
```

### name

The name of the token

`name`

- is required

- Type: `string`

- cannot be null

- defined in:
  [SushiSwap Token List](tokenlist-definitions-tokeninfo-properties-name.md 'https://yopen.org/tokenlist.schema.json#/definitions/TokenInfo/properties/name')

#### name Type

`string`

#### name Constraints

**maximum length**: the maximum number of characters for this string is: `40`

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression:

```regexp
^[ \w.'+\-%/À-ÖØ-öø-ÿ\:]+$
```

[try pattern](https://regexr.com/?expression=%5E%5B%20%5Cw.'%2B%5C-%25%2F%C3%80-%C3%96%C3%98-%C3%B6%C3%B8-%C3%BF%5C%3A%5D%2B%24 'try regular expression with regexr.com')

#### name Examples

```json
"USD Coin"
```

### symbol

The symbol for the token; must be alphanumeric

`symbol`

- is required

- Type: `string`

- cannot be null

- defined in:
  [SushiSwap Token List](tokenlist-definitions-tokeninfo-properties-symbol.md 'https://yopen.org/tokenlist.schema.json#/definitions/TokenInfo/properties/symbol')

#### symbol Type

`string`

#### symbol Constraints

**maximum length**: the maximum number of characters for this string is: `20`

**minimum length**: the minimum number of characters for this string is: `1`

**pattern**: the string must match the following regular expression:

```regexp
^[a-zA-Z0-9+\-%/\$]+$
```

[try pattern](https://regexr.com/?expression=%5E%5Ba-zA-Z0-9%2B%5C-%25%2F%5C%24%5D%2B%24 'try regular expression with regexr.com')

#### symbol Examples

```json
"USDC"
```

### logoURI

A URI to the token logo asset; if not set, interface will attempt to find a logo based on the token
address; suggest SVG or PNG of size 64x64

`logoURI`

- is optional

- Type: `string`

- cannot be null

- defined in:
  [SushiSwap Token List](tokenlist-definitions-tokeninfo-properties-logouri.md 'https://yopen.org/tokenlist.schema.json#/definitions/TokenInfo/properties/logoURI')

#### logoURI Type

`string`

#### logoURI Constraints

**URI**: the string must be a URI, according to
[RFC 3986](https://tools.ietf.org/html/rfc3986 'check the specification')

#### logoURI Examples

```json
"ipfs://QmXfzKRvjZz3u5JRgC4v5mGVbm9ahrUiB4DgzHBsnWbTMM"
```

### tags

An array of tag identifiers associated with the token; tags are defined at the list level

`tags`

- is optional

- Type: `string[]`

- cannot be null

- defined in:
  [SushiSwap Token List](tokenlist-definitions-tokeninfo-properties-tags.md 'https://yopen.org/tokenlist.schema.json#/definitions/TokenInfo/properties/tags')

#### tags Type

`string[]`

#### tags Constraints

**maximum length**: the maximum number of characters for this string is: `10`

#### tags Examples

```json
"stablecoin"
```

```json
"compound"
```

### extensions

An object containing any arbitrary or vendor-specific token metadata

`extensions`

- is optional

- Type: `object` ([Details](tokenlist-definitions-tokeninfo-properties-extensions.md))

- cannot be null

- defined in:
  [SushiSwap Token List](tokenlist-definitions-tokeninfo-properties-extensions.md 'https://yopen.org/tokenlist.schema.json#/definitions/TokenInfo/properties/extensions')

#### extensions Type

`object` ([Details](tokenlist-definitions-tokeninfo-properties-extensions.md))

#### extensions Constraints

**maximum number of properties**: the maximum number of properties for this object is: `10`

#### extensions Examples

```json
{
  "color": "#000000",
  "is_verified_by_me": true
}
```


## License

Registry and Tokenlist Data is under Copyright 2021 The SushiSwap Contributors

Nodejs Components under Apache-2.0

```txt
https://yopen.org/tokenlist.schema.json
```
