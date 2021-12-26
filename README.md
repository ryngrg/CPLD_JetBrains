# Compact Programming Language Detector - JetBrains
### *(All analysis is present in the jupyter notebook: Comparison_report.ipynb)*
## Comparison of two open source programming language detectors:
* Guesslang - https://github.com/yoeo/guesslang
* Polyglot - https://github.com/pranavbaburaj/polyglot
## Basis of comparison
* Accuracy - Tested on test set of 80 source files
* Execution Time - Averaged run-time for the test files
## Conclusion
* Guesslang is fast, however it gets confused between languages with similar syntax.
* Ployglot is slow, but is perfect if the file name extensions are known. It is useless if the files donot have apprppriate extensions.
### My suggested idea for solving this problem
* If file extension is available, use that to predict language by looking up a language file like polyglot.
* Otherwise, use the detector described as follows:
    * Learn feature set for languages through training set
    * Feature set should contain: 
        * Frequency of characters other than letters and digits (,.-_/#$% etc.)
        * List of commonly occuring keywords of the language
    * Compares test source code with feature library and returns the language which matches the most.
