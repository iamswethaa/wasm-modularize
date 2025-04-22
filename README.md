# Web Assembly Conversion Using Modularize

This project demonstrates how to compile a C function (subtraction) into WebAssembly using Emscripten's `MODULARIZE` method and invoke it from a Node.js script.

## Steps

1. **Clone the Repository**
   
     ```bash
     git clone https://github.com/iamswethaa/wasm-modularize.git

2. **Install Emscripten**
   
  - Clone the Emscripten SDK repository
    
     ```bash
     git clone https://github.com/emscripten-core/emsdk.git
     cd emsdk

  - Install and activate the latest version
    
    ```bash
    ./emsdk install latest
    ./emsdk activate latest

  - Set up the environment variables
    
    ```bash
    ./emsdk_env.sh
    
3. **Compile C to WebAssembly**
   
   ```bash
   cd ..
   emcc sub.c -s WASM=1 -s MODULARIZE=1 -s ENVIRONMENT=node -s EXPORTED_FUNCTIONS='["_sub"]' -s EXPORTED_RUNTIME_METHODS='["ccall"]' -o sub.js
   ``` 
          
   This command produce two files :
   - sub.js - which is your JavScript Glue Code
   - sub.wasm - which is your compiled WebAssembly module

5. **Run the Script**
   
   ```bash
   node main.js
