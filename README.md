# Style Guide

Now that a majority have checked in, let's work on keeping file names consistent. The MASTER branch to this repository shows three versions of README.md:

	readme.md
	README.MD
	README.md

Since we want new users to notice the `README` file, using uppercase is a nice convention because it sets up a distinct typographic hierarchy. We also adopt this for other `INSTALL`, `AUTHORS`, `COPYING`, `TODO`, `NEWS`, and `CHANGELOG`, as detailed on StackExchange[1].

If you look at the last commit, you'll see that the references to the files and the `README` file were nicely formatted in monospace and placed in a greyed-out box indicating a metareference to a file. This is easy enough to do in markdown, just place the `esc` character `\`` before and after the code or syntax you want to highlight. We do this for all mentions of code and syntax in the reference, as can be seen by comparing the changes to the last paragraph to its previous version in the last commit.

References

[1] User 5gon12eder, "Readme.txt vs. README.txt", [https://softwareengineering.stackexchange.com/questions/301691/readme-txt-vs-readme-txt.]
 


