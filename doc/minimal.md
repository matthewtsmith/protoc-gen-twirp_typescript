# Twirp Minimal JSON Client

## Usage

    go get -u go.larrymyers.com/protoc-gen-twirp_typescript
    protoc --twirp_typescript_out=./example/ts_client ./example/service.proto

## Dependencies

Both a Promise and fetch implementation must be provided.  

Promise should be a polyfill, while the fetch implementation is directly provided to services as a constructor
argument. 

Providing the fetch function directly to the service is intentional, since it allows for custom fetch
implementations that will automatically handle concerns such as authentication and logging.

*IMPORTANT*: For browser environments use the following pattern to prevent an 
error like `Failed to execute 'fetch' on 'Window': Illegal invocation`.

```
const haberdasher = new Haberdasher('http://localhost:8080', window.fetch.bind(window));

```

Suggested polyfills for cross browser and node.js support:

* [es6-promise](https://github.com/stefanpenner/es6-promise)
* [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch)

## Parameters

The plugin parameters should be added in the same manner as other protoc plugins. 
Key/value pairs separated by a single equal sign, and multiple parameters comma separated.

#### package_name

If you'd like to publish the generated code as an npm package then use this parameter to set the
name in the package.json file.  An index module will be created that will expose all exported interfaces 
and classes.

    protoc --twirp_typescript_out=package_name=haberdasher:./example/ts_client ./example/service.proto

## Using the Example

Run the server:

    make run
    go run cmd/haberdasher/main.go
     
In a new terminal run the client:
 
    cd example/ts_client
    npm install && npm run prepare
    node main.js
