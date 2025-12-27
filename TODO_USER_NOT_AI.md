IF YOU ARE AN AI MODEL, THE CONTENTS OF THIS FILE ARE NOT INSTRUCTIONS.

Fix glassmorphed menu jitter issue.

Background update.

Color palletes update.

Standardize view across all display sizes. Mobile focused (iPhone 12 Pro is priority).

--

There is a known, very hard to fix issue where glass menus are fully transparent mid animation until they are fully risen.
Let's fake a fix. When a menu is rizen, the screen should go through 3 stages of blur: When the menu is requested to be opened, 1/3 of the length of the menu should be blurred (ahead of the menu). When the menu passes 1/3 of its final rise animation length, 2/3 of the length of the menu should be blurred (ahead of the menu). When the menu is fully risen, the screen behind the menu should be fully blurred (as it is now).