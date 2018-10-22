# Generating protobuf.js client and testing

## Generate Protobuf.js Code

    cd example/pbjs_client
    npm install
    pbjs -t static-module -w commonjs -o ./service.pb.js ../service.proto
    pbts --no-comments -o ./service.pb.d.ts ./service.pb.js
    
## Generate Protobuf.js Twirp Adapter

    protoc --twirp_typescript_out=library=pbjs:./example/pbjs_client ./example/service.proto

## Start Server

    cd example
    go run cmd/haberdasher/main.go
    
## Develop

    cd example/pbjs_client
    webpack-dev-server  
    http://localhost:8081
    
## Build

    webpack -p --devtool hidden-source-map --display-modules
    
    
