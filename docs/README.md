Please run 'npm i' if you are missing the node_modules folder.

I have had to amend the start command in the package json like so:
"start": "react-scripts --openssl-legacy-provider start"

I have removed the --openssl-legacy-provider for the convienience of those with earlier versions of node.js. If you are using the most up-to-date version of node json, please recreate the above amendment.

Thanks for taking a look at my work!