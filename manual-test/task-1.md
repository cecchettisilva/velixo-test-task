# Task description

- Write test cases for an algorithm that "increments" a string. Use your preferred format for documenting test 
cases. It will be estimated though - should be easy to read, easy to maintain, and easy to understand.

*Algorithm description:*

- Valid input: strings of format A...A1...1, where 'A' can be any letter A-Z of the English alphabet, no matter 
lowercase or uppercase. At least one letter always exists, up to 4 such letters; '1' can be any digit from 0 to 9 
(at least one digit always exists, up to 4 such digits).
- For invalid inputs, an "Error" message is returned.
- The algorithm takes a string and increments its numeric postfix by 1, e.g. FX001 should become FX002, ZZ100 should become ZZ101. If the number overflows, the numeric postfix should reset back to all-zeros.

---

# Test Techniques 

The test cases were designed using **Boundary Value Analysis (BVA)** and **Equivalence Partitioning (EP)**.  
These techniques helped cover both edge cases (minimum and maximum values) and representative inputs,  
ensuring complete coverage of valid and invalid scenarios with no redundancy.

| Technique                | Description                                                                                         |
|--------------------------|-----------------------------------------------------------------------------------------------------|
| Boundary Value Analysis  | Applied to design test cases using the minimum (L and D = 1) and maximum (L and D = 4) input limits |
| Equivalence Partitioning | Applied to design test cases using representative classes of inputs: L1...L4 combined with D1...D4  |

---

# Conclusion

By applying **Boundary Value Analysis (BVA)** and **Equivalence Partitioning (EP)**, the designed test cases achieve full coverage of the algorithm’s input space,  including both valid and invalid scenarios, ensuring maximum defect detection.

---

# Base logic 

| Type        | Minimum | Maximum |
| ------------|---------|---------|
| Letters (L) | 1       | 4       |
| Digits (D)  | 1       | 4       |

---

# ✅ *Test cases - Valids*


***Test Case ID: TC001***\
*Title: Valid - Increment with L=1 and D=1 (starting from zero)* \
*Inputs: "A0"*\
*Expect output: "A1"*

*Steps:*

- GIVEN I provide the input string "A0" to the algorithm
- WHEN the algorithm processes the input
- THEN the algorithm should accept it as valid
- AND the output should be the incremented string "A1"

---

***Test Case ID: TC002***\
*Title: Valid - Increment with L=1 and D=1 (general increment)*\
*Inputs: "A1"*\
*Expect output: "A2"*

*Steps:*

- GIVEN I provide the input string "A1" to the algorithm
- WHEN the algorithm processes the input
- THEN the algorithm should accept it as valid
- AND the output should be the incremented string "A2"

---

***Test Case ID: TC003***\
*Title: Valid - Increment with L=2 and D=2 (mid value)*\
*Inputs: "AA11"*\
*Expect output: "AA12"*

*Steps:*

- GIVEN I provide the input string "AA11" to the algorithm
- WHEN the algorithm processes the input
- THEN the algorithm should accept it as valid
- AND the output should be the incremented string "AA12"

---

***Test Case ID: TC004***\
*Title: Valid - Increment with L=3 and D=3 (mid value)*\
*Inputs: "VLX111"*\
*Expect output: "VLX112"*

*Steps:*

- GIVEN I provide the input string "VLX111" to the algorithm
- WHEN the algorithm processes the input
- THEN the algorithm should accept it as valid
- AND the output should be the incremented string "VLX112"

---

***Test Case ID: TC005***\
*Title: Valid - Increment with L=4 and D=4 (mid value)*\
*Inputs: "ABCD1111"*\
*Expect output: "ABCD1112"*

*Steps:*

- GIVEN I provide the input string "ABCD1111" to the algorithm
- WHEN the algorithm processes the input
- THEN the algorithm should accept it as valid
- AND the output should be the incremented string "ABCD1112"

---

***Test Case ID: TC006***\
*Title: Valid - Increment with L=1 and D=4*\
*Inputs: "F1111"*\
*Expect output: "F1112"*

*Steps:*

- GIVEN I provide the input string "F1111" to the algorithm
- WHEN the algorithm processes the input
- THEN the algorithm should accept it as valid
- AND the output should be the incremented string "F1112"

---

***Test Case ID: TC007***\
*Title: Valid - Increment with L=4 and D=1*\
*Inputs: "AAAA1"*\
*Expect output: "AAAA2"*

*Steps:*

- GIVEN I provide the input string "AAAA1" to the algorithm
- WHEN the algorithm processes the input
- THEN the algorithm should accept it as valid
- AND the output should be the incremented string "AAAA2"

---

***Test Case ID: TC008***\
*Title: Valid - Increment with L=1 and D=1 overflows*\
*Inputs: "A9"*\
*Expect output: "A0"*

*Steps:*

- GIVEN I provide the input string "A9" to the algorithm
- WHEN the algorithm processes the input
- THEN the algorithm should accept it as valid
- AND the output should be the incremented string "A0"

---

***Test Case ID: TC009***\ 
*Title: Valid - Increment with L=2 and D=2 overflows*\
*Inputs: "AA99"*\
*Expect output: "AA00"*

*Steps:*

- GIVEN I provide the input string "AA99" to the algorithm
- WHEN the algorithm processes the input
- THEN the algorithm should accept it as valid
- AND the output should be the incremented string "AA00"

---

***Test Case ID: TC010***\ 
*Title: Valid - Increment with L=3 and D=3 (overflow case)*\
*Inputs: "VLX999"*\
*Expect output: "VLX000"*

*Steps:*

- GIVEN I provide the input string "VLX999" to the algorithm
- WHEN the algorithm processes the input
- THEN the algorithm should accept it as valid
- AND the output should be the incremented string "VLX000"

---

***Test Case ID: TC011***\
*Title: Valid - Increment with L=4 and D=4 overflows*\
*Inputs: "AAAA9999"*\
*Expect output: "AAAA0000"*

*Steps:*

- GIVEN I provide the input string "AAAA9999" to the algorithm
- WHEN the algorithm processes the input
- THEN the algorithm should accept it as valid
- AND the output should be the incremented string "AAAA0000"

---

***Test Case ID: TC012***\
*Title: Valid - Increment with L=2 and D=2 (finishing with zeros)*\
*Inputs: "AA00"*\
*Expect output: "AA01"*

*Steps:*

- GIVEN I provide the input string "AA00" to the algorithm
- WHEN the algorithm processes the input
- THEN the algorithm should accept it as valid
- AND the output should be the incremented string "AA01"

---

***Test Case ID: TC013***\
*Title: Valid - Increment with L=3 and D=3 (with zeros)*\
*Inputs: "AAA009"*\
*Expect output: "AAA010"*

*Steps:*

- GIVEN I provide the input string "AAA009" to the algorithm
- WHEN the algorithm processes the input
- THEN the algorithm should accept it as valid
- AND the output should be the incremented string "AAA010"

---

***Test Case ID: TC014***\
*Title: Valid - Increment with L=4 and D=4 (near overflow)*\
*Inputs: "AAAA9998"*\
*Expect output: "AAAA9999"*

*Steps:*

- GIVEN I provide the input string "AAAA9998" to the algorithm
- WHEN the algorithm processes the input
- THEN the algorithm should accept it as valid
- AND the output should be the incremented string "AAAA9999"

---

***Test Case ID: TC015***\
*Title: Valid - Increment with L=3 and D=3 (near overflow)*\
*Inputs: "AAA998"*\
*Expect output: "AAA999"*

*Steps:*

- GIVEN I provide the input string "AAA998" to the algorithm
- WHEN the algorithm processes the input
- THEN the algorithm should accept it as valid
- AND the output should be the incremented string "AAA999"

---

***Test Case ID: TC016***\
*Title: Valid - Increment with L=1 and D=2*\
*Inputs: "A09"*\
*Expect output: "A10"*

*Steps:*

- GIVEN I provide the input string "A09" to the algorithm
- WHEN the algorithm processes the input
- THEN the algorithm should accept it as valid
- AND the output should be the incremented string "A10"

---

***Test Case ID: TC017***\
*Title: Valid - Increment with L=2 and D=3*\
*Inputs: "AA099"*\
*Expect output: "AA100"*

*Steps:*

- GIVEN I provide the input string "AA099" to the algorithm
- WHEN the algorithm processes the input
- THEN the algorithm should accept it as valid
- AND the output should be the incremented string "AA100"

---

***Test Case ID: TC018***\
*Title: Valid - Increment with L=4 uppercase, lowercase and D=4*\
*Inputs: "AAaa0001"*\
*Expect output: "AAaa0002"*\

*Steps:*

- GIVEN I provide the input string "AAaa0001" to the algorithm
- WHEN the algorithm processes the input
- THEN the algorithm should accept it as valid
- AND the output should be the incremented string "AAaa0002"

------------------------------------------ 

------------------------------------------

# ❌ *Test cases - Invalids*

***Test Case ID: TC019***\
*Title: Invalid - Missing digits*\
*Inputs: "A"*\
*Expect output: Error*

*Steps:*

- GIVEN I provide the input string "A" to the algorithm
- WHEN the algorithm processes the input
- THEN the algorithm should reject it as invalid
- AND the output should be "Error"

---

***Test Case ID: TC020***\
*Title: Invalid - Missing letters*\
*Inputs: "1"*\
*Expect output: Error*

*Steps:*

- GIVEN I provide the input string "1" to the algorithm
- WHEN the algorithm processes the input
- THEN the algorithm should reject it as invalid
- AND the output should be "Error"

---

***Test Case ID: TC021**\
*Title: Invalid - Letters only*\
*Inputs: "AA"*\
*Expect output: Error*

*Steps:*

- GIVEN I provide the input string "AA" to the algorithm
- WHEN the algorithm processes the input
- THEN the algorithm should reject it as invalid
- AND the output should be "Error"

---

***Test Case ID: TC022***\
*Title: Invalid - Digits only*\
*Inputs: "11"*\
*Expect output: Error*\

*Steps:*

- GIVEN I provide the input string "11" to the algorithm
- WHEN the algorithm processes the input
- THEN the algorithm should reject it as invalid
- AND the output should be "Error"

---

***Test Case ID: TC023***\
*Title: Invalid - Space at beginning*\
*Inputs: " A1"*\
*Expect output: Error*

*Steps:*

- GIVEN I provide the input string " A1" to the algorithm
- WHEN the algorithm processes the input
- THEN the algorithm should reject it as invalid
- AND the output should be "Error"

---

***Test Case ID: TC024***\
*Title: Invalid – Space in middle*\
*Inputs: "A 1"*\
*Expect output: Error*

*Steps:*

- GIVEN I provide the input string "A 1" to the algorithm
- WHEN the algorithm processes the input
- THEN the algorithm should reject it as invalid
- AND the output should be "Error"

---

***Test Case ID: TC025***\
*Title: Invalid – Space at end*\
*Inputs: "A1 "*\
*Expect output: Error*

*Steps:*

- GIVEN I provide the input string "A1 " to the algorithm
- WHEN the algorithm processes the input
- THEN the algorithm should reject it as invalid
- AND the output should be "Error"

---

***Test Case ID: TC026***\
*Title: Invalid - No english alphabet letters*\
*Inputs: "Ç1"*\
*Expect output: Error*\

*Steps:*

- GIVEN I provide the input string "Ç1" to the algorithm
- WHEN the algorithm processes the input
- THEN the algorithm should reject it as invalid
- AND the output should be "Error"

---

***Test Case ID: TC027***\
*Title: Invalid – Digits before letters*\
*Inputs: "1A"*\
*Expect output: Error*

*Steps:*

- GIVEN I provide the input string "1A" to the algorithm
- WHEN the algorithm processes the input
- THEN the algorithm should reject it as invalid
- AND the output should be "Error"

---

***Test Case ID: TC028***\
*Title: Invalid – Letter inside digit block*\
*Inputs: "A1A1"*\
*Expect output: Error*

*Steps:*

- GIVEN I provide the input string "A1A1" to the algorithm
- WHEN the algorithm processes the input
- THEN the algorithm should reject it as invalid
- AND the output should be "Error"

---

***Test Case ID: TC029***\
*Title: Invalid – Digit inside letter prefix*\
*Inputs: "A1A"*\
*Expect output: Error*

*Steps:*

- GIVEN I provide the input string "A1A" to the algorithm
- WHEN the algorithm processes the input
- THEN the algorithm should reject it as invalid
- AND the output should be "Error"

---

***Test Case ID: TC030***\
*Title: Invalid – Symbol in input*\
*Inputs: "A!1"*\
*Expect output: Error*

*Steps:*

- GIVEN I provide the input string "A!1" to the algorithm
- WHEN the algorithm processes the input
- THEN the algorithm should reject it as invalid
- AND the output should be "Error"

---

***Test Case ID: TC031***\
*Title: Invalid – Underscore between blocks*\
*Inputs: "A_1"*\
*Expect output: Error*

*Steps:*

- GIVEN I provide the input string "A_1" to the algorithm
- WHEN the algorithm processes the input
- THEN the algorithm should reject it as invalid
- AND the output should be "Error"

---

***Test Case ID: TC032***\
*Title: Invalid - Hyphen between blocks*\
*Inputs: "A-1"*\
*Expect output: Error*

*Steps:*

- GIVEN I provide the input string "A-1" to the algorithm
- WHEN the algorithm processes the input
- THEN the algorithm should reject it as invalid
- AND the output should be "Error"

---

***Test Case ID: TC033***\
*Title: Invalid - Dot between blocks*\
*Inputs: "A.1"*\
*Expect output: Error*

*Steps:*

- GIVEN I provide the input string "A.1" to the algorithm
- WHEN the algorithm processes the input
- THEN the algorithm should reject it as invalid
- AND the output should be "Error"

---

***Test Case ID: TC034***\
*Title: Invalid – Empty string*\
*Inputs: ""*\
*Expect output: Error*

#### Steps:

- GIVEN I provide the input string "" to the algorithm
- WHEN the algorithm processes the input
- THEN the algorithm should reject it as invalid
- AND the output should be "Error"

---

***Test Case ID: TC035***\
*Title: Invalid – Too many letters at the maximum*\
*Inputs: "AAAAA0001"*\
*Expect output: Error*

*Steps:*

- GIVEN I provide the input string "AAAAA0001" to the algorithm
- WHEN the algorithm processes the input
- THEN the algorithm should reject it as invalid
- AND the output should be "Error"

---

***Test Case ID: TC036***\
*Title: Invalid – Too many digits at the maximum*\
*Inputs: "AAAA00001"*\
*Expect output: Error*

*Steps:*

- GIVEN I provide the input string "AAAA00001" to the algorithm
- WHEN the algorithm processes the input
- THEN the algorithm should reject it as invalid
- AND the output should be "Error"

---

***Test Case ID: TC037***\
*Title: Invalid – Letters inside digit block (mixed case)*\
*Inputs: "AAAAaaa1"*\
*Expect output: Error*

*Steps:*

- GIVEN I provide the input string "AAAAaaa1" to the algorithm
- WHEN the algorithm processes the input
- THEN the algorithm should reject it as invalid
- AND the output should be "Error"

---

***Test Case ID: TC038***\
*Title: Invalid – Tab between blocks*\
*Inputs: "A\t1"*\
*Expect output: Error*

*Steps:*

- GIVEN I input "A\t" to letter
- AND I input 1 to digit
- THEN the program don't accept as a valid input
- AND the output is "Error"

---

***Test Case ID: TC039***\
*Title: Invalid – Newline between blocks*\
*Inputs: "A\n1"*\
*Expect output: Error*

*Steps:*

- GIVEN I input "A\n1" to letter
- AND I input 1 to digit
- THEN the program don't accept as a valid input
- AND the output is "Error"