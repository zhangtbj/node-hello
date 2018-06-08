# riff Sample: Node Hello

A sample function that says hello

## Deployment

1. Setup a running riff install

   See riff's [Getting Started](https://github.com/projectriff/riff/blob/master/Getting-Started.adoc) guide. Skip if you already have riff running.

2. Clone this repo

   ```bash
   git clone https://github.com/projectriff-samples/node-hello.git
   cd node-hello
   ```

3. Initialize the function definition

    Since there are multiple files in the directory, we need to tell `riff` which file to use.

   ```bash
   riff create node -a package.json
   ```

4. Invoke the function

   ```bash
   riff publish -d riff -r
   ```

   Will result in:

   ```txt
   Posting to http://127.0.0.1:31768/requests/node-hello
   Hello riff from node-hello-7db49dd96f-5pm97
   ```
