For each language in prayers-and-verses, create a new folder in prayers-and-verses named after the language code (en-us, pt-br, la-va, and es-mx).

Each folder should now contain:
<language_code>.md (the same as current, just move it in the folder of the same name)
A new file organizing each prayer, bible verse, and any other text into constants. This should contain ALL of the text for that language, such that we can build the webpage files with only these constants and no hardcoded text.

For each language (only implement english us for now), update the webpage files to use the constants instead of hardcoded text based on the selected language.

The goal of this update is to completely standardize the text used in the website, such that we can easily translate it to any language we want by adding a new .md, constants file, and language selector option.