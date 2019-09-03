# String Permutation Displacements

Functions for mesing around with string permutation displacements.

There was that clickbaity Facebook message that went around sometime ago.  It was a passage of text with some of the words with their characters slightly rearranged and you were a _genius_ if you could read it...obviously almost everyone could.  But at the same time I also saw a video of a man who could look at any English word and tell you another word that could be made with the same characters rearranged.  So on the one end of the spectrum you have 2 letter swops which is easy to detect and read and this guy on the other.  So I surmise that with practice one could, theoretically, move on that spectrum.  This idea is predicated on the fact that when one reads, you don't read individual charaters but rather the overall pattern of the word.

That's why I built this small bit of code.  I want to practice on passages of text with only certain length words displaced by set amounts and practice.  So we'll see if my conjecture is correct.  I'll update this readme with any results.

So the basic idea is to measure how similar one permutation of a word is to another.  This measure is called displacement (from the combinatorics field)

eg. 'acbd' has a displacement of 2 because 'c' and 'b' are both 1 position from their original position assuming 'abcd'

When I looked this up I got scared by the crazy math symbols but I found out that that the previous example ('acbd') has a displacemnt of 1 and displacement value go like 1,2,3 etc. whereas what I'm building, the displacement goes like 2,4,6 etc.. Since this module for me and it serves it's purpose, it can stay as it is :wink:

# Functions

## `permutations(string, n)`

accepts a string and n(optional) and returns an array of arrays of all permutations of the string or n number of permutations

**`permutations("ab")`**

**returns:** `[ [ 'a', 'b' ], [ 'b', 'a' ] ]`

**`permutations("abc",2)`**

**returns:** `[ [ 'a', 'b', 'c' ], [ 'a', 'c', 'b' ] ]`

## `random_permutation(string)`

accepts a string an returns a random permutation.  Uses the [Durstenfeld Shuffle](https://en.wikipedia.org/wiki/Fisher–Yates_shuffle#The_modern_algorithm)

**`random_permutation("abcdef")`**

**returns:** `[ 'f', 'b', 'c', 'd', 'a', 'e' ]`

## `absolute_displacement(string, gnirts)`
accepts 2 strings and returns the absolute displacement of the 2nd string with regards to the first.

**`absolute_displacement("abcdef","fbcdae")`**

**returns:** `10`

## `max_absolute_displacement(string)`

accepts a string and return the max displacement. ie The maximum a word can be mixed up.  Given by this formula:

`Math.floor(2 * (string.length/2)`<sup>2</sup>`)`

**`max_absolute_displacement("antidisestablishmentarianism")`**

**returns:** `392`

## `all_absolute_displacements(string, n)`

accepts a string and number(optional) and returns all permutations of that string with max displacement or n displacement.

**`all_absolute_displacements("abc", 4)`**

**returns:**

```
[
    [ 'b', 'c', 'a' ],
    [ 'c', 'a', 'b' ],
    [ 'c', 'b', 'a' ]
]
```

**`all_absolute_displacements("abcd")`**

**returns:**
```
[
  [ 'c', 'd', 'a', 'b' ],
  [ 'c', 'd', 'b', 'a' ],
  [ 'd', 'c', 'a', 'b' ],
  [ 'd', 'c', 'b', 'a' ]
]
```
## absolute_displacement_distribution(string)

returns an array of objects with key:value pairs.

**key:** is the absolute displacement

**value:** is the sum of permutations of that displacement 

(I'm sure there's a sexier, mathier way of doing this, but I'm just a hack :smile:)

**`absolute_displacement_distribution("abcdefg")`**

```{
  '0': 1,
  '2': 6,
  '4': 25,
  '6': 76,
  '8': 187,
  '10': 366,
  '12': 591,
  '14': 744,
  '16': 884,
  '18': 832,
  '20': 716,
  '22': 360,
  '24': 252
}
```

## displacement_code(string, gnirts)

returns an array of the relative individual displacments of characters...not sure how this is useful but hey!

