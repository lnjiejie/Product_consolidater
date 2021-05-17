# product_consolidater

## 1.Introduction

This is a small app written in javascript with node.js and npm packages. This app is mainly for consolidating the the products catalog from Company A and Company B into one superset (merged catalog). [Open original task](https://github.com/tosumitagrawal/codingskills)

## 2. Repo folder structure

1. `input/` - All the csv files that contains information of products in both companies.
2. `output/' - Contains the output result (csv) after running the app.
3. `src/` - All the js written for running the app.
4. `src/services` - Code for reading product data from the csv files.
5. `src/utils` - Utils to use.

## 3. Development tools
1. Node.js@14.15.0 as the scripting language to run the program.
2. Jest as the testing library for unit testing.
3. Some npm packages used for developing which is stored in package.json

## 4. Environment set up and how to run
1. Need to install node js with version 14.15.0 or newer either from command line or [nodejs.org](https://nodejs.org/en/download/) website.
2. Run `npm install` in the root (after successfully installation, there should be node_modules folder created with installed npm packages).
3. Run `npm run start` to run the app. Successful run should promp output in the console and also generate a new `result.csv` in `output`.
4. Run `npm test` to see the unit testing result from Jest.


## 5. Business requirement
- Company A and B could have conflicting product codes (`SKUs`).
- Product codes might be same, but they are different products.
- Product codes are different, but they are same product.
- You should not be duplicating product records in merged catalog.
- Product on merged catalog must have information about the company it belongs to originally.


## 6. Assumptions
1. Products with different `SKU` but same `barcode` are considered as same products.
2. The data of the csv files has no defects (missing or invalid value).
3. The script is currently only written for merging one company to use, it doesn't support merging from multi companies yet.
4. Same products that both company have will be considered to be sourced from company A in the merged catalog.
5. As the target of the task is to get `SKU`, `Description` and `Source` as shown in the `result_output.csv`, other information (i.e. supplier) won't be added in the output of this app.
6. The output is sort in a alphabetical order for reading convenience. So the order of the items is different with the sample output.
7. Unit testing only cover all util functions and main functions in services. As other functions in services are mainly using file reader and file writer from npm packages.
